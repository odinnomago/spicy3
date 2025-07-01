import { User as SupabaseUser, Session as SupabaseSession } from '@supabase/supabase-js';

// Re-export Supabase types if needed directly, or use them to build your own
export type User = SupabaseUser;
export type Session = SupabaseSession;

// Define our Profile type based on the 'profiles' table columns
export interface Profile {
  id: string; // Corresponds to auth.users.id
  user_id: string; // Foreign key to auth.users.id
  updated_at?: string; // Supabase adds this automatically
  created_at?: string; // Supabase adds this automatically
  full_name?: string | null;
  avatar_url?: string | null;
  bio?: string | null;
  phone?: string | null;
  city?: string | null;
  age?: number | null;
  profile_type?: 'cliente' | 'modelo' | null; // From our migration
  services_offered?: string[] | null; // For models
  price_range?: string | null; // For models
  // Add any other fields from your profiles table
}

// Context state
export interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
}
