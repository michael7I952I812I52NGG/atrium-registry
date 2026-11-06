-- Должность сотрудника отдела. Одна учётная запись — одна роль.

create table if not exists staff (
  user_id text primary key,
  email   text not null unique,
  name    text not null,
  role    text not null,
  constraint staff_role_chk check (
    role in ('admin', 'lead', 'lawyer', 'clerk', 'assistant', 'archivist', 'courier')
  )
);
