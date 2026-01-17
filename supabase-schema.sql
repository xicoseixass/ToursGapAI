-- Create leads table for TourGapAI
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  profile VARCHAR(50) NOT NULL, -- 'Operador Turístico' or 'Empreendedor'
  city VARCHAR(255) NOT NULL,
  challenges TEXT[] NOT NULL, -- Array of challenges (Preços baixos, Falta de ideias, Reviews negativas)
  monthly_bookings VARCHAR(20) NOT NULL, -- '0', '1-50', '50+'
  whatsapp VARCHAR(50) NOT NULL,
  pitch TEXT NOT NULL, -- Why should we choose your business
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Create an index on city for filtering by location
CREATE INDEX IF NOT EXISTS idx_leads_city ON leads(city);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for the lead form)
CREATE POLICY "Allow anonymous lead submissions" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated reads (for admin dashboard later)
CREATE POLICY "Allow authenticated reads" ON leads
  FOR SELECT
  TO authenticated
  USING (true);
