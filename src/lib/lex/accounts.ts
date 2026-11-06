import type { StaffRole } from "@/lib/lex/access";

/** Учебные входы отдела. Пароли только для курсового проекта. */
export const DEPARTMENT_ACCOUNTS: readonly {
  email: string;
  password: string;
  name: string;
  role: StaffRole;
}[] = [
  {
    email: "admin@atrium.test",
    password: "Atrium-Admin-2026",
    name: "Кира Лебедева",
    role: "admin",
  },
  {
    email: "lead@atrium.test",
    password: "Atrium-Lead-2026",
    name: "Сергей Волков",
    role: "lead",
  },
  {
    email: "lawyer@atrium.test",
    password: "Atrium-Lawyer-2026",
    name: "Павел Орлов",
    role: "lawyer",
  },
  {
    email: "clerk@atrium.test",
    password: "Atrium-Clerk-2026",
    name: "Елена Крылова",
    role: "clerk",
  },
  {
    email: "assistant@atrium.test",
    password: "Atrium-Assist-2026",
    name: "Анна Соколова",
    role: "assistant",
  },
  {
    email: "archivist@atrium.test",
    password: "Atrium-Archive-2026",
    name: "Илья Белов",
    role: "archivist",
  },
  {
    email: "courier@atrium.test",
    password: "Atrium-Courier-2026",
    name: "Мария Морозова",
    role: "courier",
  },
];
