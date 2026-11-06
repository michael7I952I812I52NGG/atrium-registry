-- Внутренний чат отдела документооборота. Роли, не фамилии.

create table if not exists desk_messages (
  id          serial primary key,
  role        text not null,
  body        text not null,
  created_at  timestamptz not null default now(),
  constraint desk_role_chk check (role in ('clerk', 'lawyer', 'lead'))
);

create index if not exists desk_messages_created_idx on desk_messages (created_at);

insert into desk_messages (role, body, created_at) values
(
  'lead',
  'В работу на сегодня: КП-2026/011 «Карельский Лён» истекает 20 ноября. Подготовить два экземпляра на печать и сверить опись с карточкой.',
  now() - interval '3 hours'
),
(
  'clerk',
  'ЮУ-2024/014 «Северная Верфь» сверен с реестром: номер, срок и сумма сходятся. Жду команду печатать.',
  now() - interval '2 hours'
),
(
  'lawyer',
  'ЗМ-2025/006 в статусе «расторгнут». В комплект действующих договоров не ставить и на печать не отдавать.',
  now() - interval '90 minutes'
),
(
  'clerk',
  'Черновик ЮУ-2026/033 клиники лежит в проектах. Клиент ещё потенциальный, печать не запускала.',
  now() - interval '40 minutes'
),
(
  'lead',
  'До конца дня закройте список «Истекают» и отметьте в чате, какой номер ушёл на печать.',
  now() - interval '15 minutes'
);
