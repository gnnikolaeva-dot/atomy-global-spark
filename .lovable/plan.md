# Platform and Authentication Implementation Plan

Create a secure, member-only platform for Atomy Global Engine partners with training, articles, and partner management.

## User Review Required

> [!IMPORTANT]
> - Should registration be open to everyone, or do you want to manually approve new partners before they see the training?
> - For "tracking partners", what specific metrics are most important for you to see in your admin dashboard?

## Technical Details

### 1. Backend & Database (Lovable Cloud)
- Enable Lovable Cloud for authentication and data storage.
- Create `profiles` table to store partner details (name, phone, role).
- Create `content` table (articles, training videos/modules) with categories: "Business", "Product", "Announcements".
- Create `user_roles` to manage 'admin' (Galina) and 'partner' access.

### 2. Authentication
- Create a dedicated login/registration page (`/auth`).
- Implement protected route logic using TanStack Router pathless layout `_authenticated`.
- Add a "Partner Login" (Вход для партнеров) button to the main site navigation.

### 3. Platform Interface (SaaS)
- **Dashboard (`/platform`)**: Personalized welcome, recent announcements, quick links to training.
- **Training Center (`/platform/training`)**: Organized modules for business growth.
- **Knowledge Base (`/platform/articles`)**: Searchable articles about Atomy products and business strategies.
- **Partner Admin (`/platform/admin`)**: Exclusive view for Galina to see the list of registered partners and their activity.

### 4. Navigation & Layout
- A new sidebar-based layout for the platform to distinguish it from the public landing page.
- Smooth transition from landing page to platform area.

## Implementation Steps

1. **Database Schema**: Initialize Supabase tables and RLS policies.
2. **Auth Pages**: Build Login/Register forms with Russian validation messages.
3. **Platform Layout**: Create the sidebar and header for the partner area.
4. **Content Management**: Set up the basic structure for training modules and articles.
5. **Admin Dashboard**: Build the partner tracking view for the admin role.
6. **Integration**: Link the landing page "Call to Action" or Footer to the new platform login.
