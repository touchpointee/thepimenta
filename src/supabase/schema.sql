-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Sites Table (Optional, for listing sites)
create table if not exists sites (
  site_id text primary key default 'default',
  name text,
  created_at timestamp with time zone default now()
);

-- Site Settings (Global config like logo, colors, contact info)
create table if not exists site_settings (
  id uuid primary key default uuid_generate_v4(),
  site_id text not null default 'default',
  key text not null, -- e.g., 'site_title', 'contact_email', 'primary_color'
  value text,
  created_at timestamp with time zone default now(),
  unique(site_id, key)
);

-- Sections (Container for each section on the page)
create table if not exists sections (
  id uuid primary key default uuid_generate_v4(),
  site_id text not null default 'default',
  section_key text not null, -- e.g., 'hero', 'why_us', 'tours', 'packages'
  title text,
  subtitle text,
  order_index integer default 0,
  is_visible boolean default true,
  content jsonb, -- Flexible content for simple sections
  created_at timestamp with time zone default now()
);

-- Items (For lists like Tours, Packages, Features)
create table if not exists section_items (
  id uuid primary key default uuid_generate_v4(),
  section_id uuid references sections(id) not null,
  title text,
  description text,
  image_url text,
  metadata jsonb, -- Extra fields like price, duration, icon
  order_index integer default 0,
  is_visible boolean default true,
  created_at timestamp with time zone default now()
);

-- RLS Policies
alter table sites enable row level security;
alter table site_settings enable row level security;
alter table sections enable row level security;
alter table section_items enable row level security;

-- Allow public read access
create policy "Public sites are viewable by everyone" on sites for select using (true);
create policy "Public settings are viewable by everyone" on site_settings for select using (true);
create policy "Public sections are viewable by everyone" on sections for select using (true);
create policy "Public items are viewable by everyone" on section_items for select using (true);

-- TODO: Add Admin write policies
