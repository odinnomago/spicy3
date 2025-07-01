-- Remove policies in reverse order of creation or by specific name

DROP POLICY IF EXISTS "Allow users to update their own profile" ON profiles;
DROP POLICY IF EXISTS "Allow users to insert their own profile" ON profiles;
DROP POLICY IF EXISTS "Allow authenticated users to read model profiles" ON profiles;
DROP POLICY IF EXISTS "Allow authenticated users to read their own profile" ON profiles;

-- Disable Row Level Security for the profiles table
-- WARNING: This will make all data in the table accessible according to standard GRANTs,
-- bypassing any row-level checks if RLS is the primary security mechanism.
-- Only do this if you are sure or are replacing RLS with other security measures.
-- For a 'down' migration, this is typical to revert the state.
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;

-- If you created helper functions like get_my_profile_type(), drop them here:
-- DROP FUNCTION IF EXISTS get_my_profile_type();
