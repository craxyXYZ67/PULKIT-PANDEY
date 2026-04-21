create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  auth_id uuid unique,
  username text not null,
  role text not null check (role in ('student','tutor')),
  created_at timestamptz default now()
);

create table if not exists tutors (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  expertise text,
  rating numeric default 0
);

create table if not exists courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subject text,
  level text,
  price numeric,
  tutor_id uuid references tutors(id)
);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  course_id uuid,
  rating int,
  comment text,
  satisfaction int,
  ease_of_work int,
  created_at timestamptz default now()
);

create table if not exists earnings (
  id uuid primary key default gen_random_uuid(),
  tutor_id uuid,
  month text,
  amount numeric default 0,
  sessions int default 0
);

create table if not exists contact_forms (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);

alter table users enable row level security;
alter table tutors enable row level security;
alter table courses enable row level security;
alter table reviews enable row level security;
alter table earnings enable row level security;
alter table contact_forms enable row level security;

create policy "Users can read own profile" on users for select using (auth.uid() = auth_id);
create policy "Authenticated can insert contact forms" on contact_forms for insert with check (auth.role() = 'authenticated');
