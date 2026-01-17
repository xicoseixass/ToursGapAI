-- Enable RLS on leads table (if not already enabled)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Allow anonymous inserts to leads" ON leads;

-- Create policy to allow anonymous users to insert leads
CREATE POLICY "Allow anonymous inserts to leads"
ON leads
FOR INSERT
TO anon
WITH CHECK (true);

-- Optional: Create policy to allow reading own leads (if needed later)
-- DROP POLICY IF EXISTS "Allow users to read their own leads" ON leads;
-- CREATE POLICY "Allow users to read their own leads"
-- ON leads
-- FOR SELECT
-- TO anon
-- USING (true);
