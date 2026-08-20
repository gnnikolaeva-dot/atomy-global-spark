-- Fix Function Search Path for handle_new_user
alter function public.handle_new_user() set search_path = public;

-- Revoke execute from public/authenticated for security definer functions
revoke execute on function public.has_role(_user_id uuid, _role app_role) from public, authenticated;
revoke execute on function public.handle_new_user() from public, authenticated;

-- Ensure service_role and the owner still have access (owner usually has it by default)
grant execute on function public.has_role(_user_id uuid, _role app_role) to service_role;
grant execute on function public.handle_new_user() to service_role;
