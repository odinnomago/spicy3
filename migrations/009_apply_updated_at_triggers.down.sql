-- Drop trigger for users table
DROP TRIGGER IF EXISTS trigger_users_updated_at ON users;

-- Drop trigger for profiles table
DROP TRIGGER IF EXISTS trigger_profiles_updated_at ON profiles;

-- Drop trigger for plans table
DROP TRIGGER IF EXISTS trigger_plans_updated_at ON plans;

-- Drop trigger for user_plans table
DROP TRIGGER IF EXISTS trigger_user_plans_updated_at ON user_plans;

-- Drop trigger for bookings table
DROP TRIGGER IF EXISTS trigger_bookings_updated_at ON bookings;

-- Drop trigger for payments table
DROP TRIGGER IF EXISTS trigger_payments_updated_at ON payments;

-- Drop trigger for reviews table
DROP TRIGGER IF EXISTS trigger_reviews_updated_at ON reviews;
