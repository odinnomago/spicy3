-- Enable Row Level Security for the profiles table
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- POLICY: Allow authenticated users to read their own profile
CREATE POLICY "Allow authenticated users to read their own profile"
ON profiles
FOR SELECT
USING (auth.uid() = user_id);

-- POLICY: Allow any authenticated user to read profiles of type 'modelo'
-- This allows clients and other models to see model profiles.
CREATE POLICY "Allow authenticated users to read model profiles"
ON profiles
FOR SELECT
USING (profile_type = 'modelo');

-- POLICY: Allow users to insert their own profile
-- This assumes that during signup, the user_id being inserted matches the authenticated user's ID.
CREATE POLICY "Allow users to insert their own profile"
ON profiles
FOR INSERT
WITH CHECK (auth.uid() = user_id AND
            profile_type IN ('cliente', 'modelo')); -- Ensure profile_type is valid during insert

-- POLICY: Allow users to update their own profile
-- Users can only update rows where their auth.uid() matches the user_id.
-- The WITH CHECK clause prevents them from changing the user_id to someone else's.
CREATE POLICY "Allow users to update their own profile"
ON profiles
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id AND
            (profile_type = (SELECT p.profile_type FROM profiles p WHERE p.id = auth.uid())) -- Prevent changing profile_type after creation
           );


-- Note on DELETION:
-- By default, if RLS is enabled and no DELETE policy exists, no one can delete.
-- Deletion of a user from `auth.users` will cascade and delete their profile due to the
-- FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE constraint on the `profiles` table.
-- This is generally the desired behavior for user deletion.
-- If direct profile deletion by users is needed, a specific policy would be required:
-- CREATE POLICY "Allow users to delete their own profile"
-- ON profiles
-- FOR DELETE
-- USING (auth.uid() = user_id);

-- Grant USAGE on the schema and SELECT on tables to anon and authenticated roles if not already done.
-- Supabase does this by default for new projects, but good to be aware.
-- These grants are usually managed by Supabase itself.
-- Example (usually not needed to be set manually unless defaults were changed):
-- GRANT USAGE ON SCHEMA public TO anon, authenticated;
-- GRANT SELECT ON TABLE profiles TO anon, authenticated; -- anon might be too permissive for select here, depends on public visibility.
-- GRANT INSERT, UPDATE, DELETE ON TABLE profiles TO authenticated; -- RLS will further restrict this.

-- The specific policy for INSERT now also includes a CHECK for profile_type.
-- The specific policy for UPDATE now also includes a CHECK to prevent changing profile_type.
-- This makes the RLS a bit more robust.
-- For the UPDATE policy, ensuring `profile_type` cannot be changed after creation is a common requirement.
-- If `profile_type` *should* be changeable (e.g., by an admin), a separate, more permissive policy for admins would be needed,
-- or this check could be removed if users are allowed to change their own profile type (less common).
-- I've added a sub-select to ensure profile_type cannot be changed by the user once set.

-- It's important that the `profiles.user_id` column is correctly populated and trustworthy.
-- The insert policy `WITH CHECK (auth.uid() = user_id)` is key here.
-- The `profiles.id` is also `auth.uid()` in our current setup.

-- To make the "Allow authenticated users to read model profiles" more restrictive
-- (e.g. only users with profile_type = 'cliente' can read 'modelo' profiles),
-- we would need a helper function to get the current user's profile_type, e.g.:
-- CREATE OR REPLACE FUNCTION get_my_profile_type()
-- RETURNS TEXT AS $$
-- DECLARE
--   my_type TEXT;
-- BEGIN
--   SELECT profile_type INTO my_type FROM profiles WHERE user_id = auth.uid();
--   RETURN my_type;
-- END;
-- $$ LANGUAGE plpgsql SECURITY DEFINER;
--
-- Then the policy could be:
-- CREATE POLICY "Allow clients to read model profiles"
-- ON profiles
-- FOR SELECT
-- USING (profile_type = 'modelo' AND get_my_profile_type() = 'cliente');
-- For now, keeping it simpler: any authenticated user can see model profiles.```sql
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read their own profile"
ON profiles
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Allow authenticated users to read model profiles"
ON profiles
FOR SELECT
USING (profile_type = 'modelo');

CREATE POLICY "Allow users to insert their own profile"
ON profiles
FOR INSERT
WITH CHECK (
    auth.uid() = user_id AND
    profile_type IN ('cliente', 'modelo')
    -- Potentially add checks for required fields based on profile_type if not handled by application logic/DB constraints
);

CREATE POLICY "Allow users to update their own profile"
ON profiles
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (
    auth.uid() = user_id AND
    -- Prevent changing critical fields like user_id (already covered by USING)
    -- Prevent changing profile_type after initial creation by the user themselves
    profile_type = (SELECT p.profile_type FROM profiles p WHERE p.user_id = auth.uid())
);

-- Deletion is handled by ON DELETE CASCADE from auth.users table.
-- No explicit DELETE policy for users on 'profiles' table means users cannot delete their profiles directly,
-- which is fine as account deletion should go through auth.users.
```
