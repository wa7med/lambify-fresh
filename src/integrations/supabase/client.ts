// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://svpriemoflxgygppsemt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2cHJpZW1vZmx4Z3lncHBzZW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NjE1MDUsImV4cCI6MjA1MTEzNzUwNX0.izya2qw2TvyCfxcAwnX6OH6CbqUX9MKnILdErmoGYaA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);