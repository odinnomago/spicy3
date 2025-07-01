ALTER TABLE profiles
ADD COLUMN profile_type TEXT,
ADD COLUMN services_offered TEXT[],
ADD COLUMN price_range VARCHAR(50);

-- Add a check constraint to ensure profile_type is one of the allowed values
ALTER TABLE profiles
ADD CONSTRAINT chk_profile_type CHECK (profile_type IN ('cliente', 'modelo'));

-- Add comments for clarity on new columns, especially for model-specific fields
COMMENT ON COLUMN profiles.profile_type IS 'Type of profile: cliente or modelo';
COMMENT ON COLUMN profiles.services_offered IS 'Array of services offered by a model';
COMMENT ON COLUMN profiles.price_range IS 'Price range for a model, e.g., R$ 100-200';

-- Existing columns like full_name will store client's full name or model's artistic name.
-- bio and avatar_url are already present and can be used by both, but primarily by models.

-- Note: The 'profiles' table 'id' is the primary key and should match 'auth.users.id'.
-- The 'user_id' column in 'profiles' is a foreign key to 'auth.users.id'.
-- In the signup logic, we ensured that profiles.id = auth.users.id and profiles.user_id = auth.users.id.
-- This design makes sense if 'profiles.id' is indeed the same as 'auth.users.id'.
-- If 'profiles.id' was meant to be an independent UUID, then 'user_id' would be the sole FK.
-- Given the current setup (profiles.id = user.id), this is fine.

-- Update existing profiles that might have been created before this migration
-- For example, if any user was created via Supabase Studio directly or old code.
-- This is optional and depends on the current state of the DB.
-- For now, we assume new signups will populate this.
-- Example: UPDATE profiles SET profile_type = 'cliente' WHERE profile_type IS NULL;
-- This should be done carefully based on actual data.

-- The 'full_name' in profiles is used for 'artisticName' for models and 'name' for clients in the forms.
-- This is consistent with the implemented signup logic.
-- 'bio' and 'avatar_url' are already in the profiles table from migration 002.
-- 'phone', 'city', 'age' are also already present.
