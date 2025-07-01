ALTER TABLE profiles
DROP CONSTRAINT IF EXISTS chk_profile_type;

ALTER TABLE profiles
DROP COLUMN IF EXISTS profile_type,
DROP COLUMN IF EXISTS services_offered,
DROP COLUMN IF EXISTS price_range;
