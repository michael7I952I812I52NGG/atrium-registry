-- Ещё три сотрудника отдела документооборота. Имена вымышленные.

alter table desk_messages drop constraint if exists desk_role_chk;
alter table desk_messages add constraint desk_role_chk
  check (role in ('clerk', 'lawyer', 'lead', 'assistant', 'archivist', 'courier'));

insert into desk_messages (role, body, created_at) values
(
  'assistant',
  'Анна Соколова, помощник юриста. Сверила карточку ЮУ-2024/014: предмет, цена и срок на листе совпадают. Предпросмотр можно открывать.',
  now() - interval '50 minutes'
),
(
  'archivist',
  'Илья Белов, архивариус. ЗМ-2025/006 убрал в опись расторгнутых. В комплект на печать этот номер не кладу.',
  now() - interval '32 minutes'
),
(
  'courier',
  'Мария Морозова, экспедитор. Заберу два экземпляра только после кнопки «Печатать» в предпросмотре. Бланк без номера из карточки не повезу.',
  now() - interval '8 minutes'
);
