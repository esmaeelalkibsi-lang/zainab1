/*
# Create leads table for contact form submissions

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `name` (text, not null) — the visitor's full name
  - `email` (text, not null) — the visitor's email address
  - `phone` (text, nullable) — optional phone number
  - `message` (text, not null) — the project inquiry message
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `leads`.
- This is a single-tenant public marketing site with no sign-in screen.
  The contact form is submitted anonymously by visitors, so INSERT is
  allowed for `anon, authenticated`. SELECT/UPDATE/DELETE are intentionally
  restricted to `authenticated` only (site owner via dashboard) so that
  anonymous visitors cannot read or modify other people's submissions.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_lead" ON leads;
CREATE POLICY "anon_insert_lead"
ON leads FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_leads" ON leads;
CREATE POLICY "auth_select_leads"
ON leads FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "auth_update_leads" ON leads;
CREATE POLICY "auth_update_leads"
ON leads FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_leads" ON leads;
CREATE POLICY "auth_delete_leads"
ON leads FOR DELETE
TO authenticated
USING (true);
