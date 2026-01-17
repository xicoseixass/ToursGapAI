-- Run this SQL in Supabase SQL Editor
-- Go to: https://supabase.com/dashboard/project/ejevefkqumrjtgefkvww/sql/new

CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  profile TEXT NOT NULL,
  city TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  motivation TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone
CREATE POLICY "Allow public inserts" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow reads for authenticated users only
CREATE POLICY "Allow authenticated reads" ON leads
  FOR SELECT
  TO authenticated
  USING (true);
