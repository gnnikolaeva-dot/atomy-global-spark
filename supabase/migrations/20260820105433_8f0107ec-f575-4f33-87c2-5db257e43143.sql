-- 1. Create Roles Enum
create type public.app_role as enum ('admin', 'partner');

-- 2. Create Profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  first_name text,
  last_name text,
  phone text,
  city text,
  country text,
  avatar_url text,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Create User Roles table
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);

-- 4. Create Content (Articles/Training) table
create table public.content (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  body text,
  video_url text,
  category text not null, -- 'Business', 'Product', 'Announcements'
  is_published boolean default false,
  author_id uuid references auth.users(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Grants
grant select on public.profiles to authenticated;
grant update on public.profiles to authenticated;
grant all on public.profiles to service_role;

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;

grant select on public.content to authenticated;
grant all on public.content to service_role;

-- 6. Enable RLS
alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.content enable row level security;

-- 7. Security Definer Function for Roles
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

-- 8. Policies for Profiles
create policy "Users can view all profiles"
  on public.profiles for select
  to authenticated
  using (true);

create policy "Users can update own profile"
  on public.profiles for update
  to authenticated
  using (auth.uid() = id);

-- 9. Policies for User Roles
create policy "Users can view their own roles"
  on public.user_roles for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Admins can view all roles"
  on public.user_roles for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- 10. Policies for Content
create policy "Partners can view published content"
  on public.content for select
  to authenticated
  using (is_published = true);

create policy "Admins can manage all content"
  on public.content for all
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- 11. Trigger for new user profile
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, first_name, last_name)
  values (new.id, new.raw_user_meta_data->>'first_name', new.raw_user_meta_data->>'last_name');
  
  -- Default role is partner
  insert into public.user_roles (user_id, role)
  values (new.id, 'partner');
  
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
