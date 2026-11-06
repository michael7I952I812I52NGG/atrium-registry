import { createFileRoute, Link } from "@tanstack/react-router";
import { ClientForm } from "@/components/lex/forms";
import { SectionLabel } from "@/components/lex/ui";
import { clientSearch } from "@/lib/lex/search";

export const Route = createFileRoute("/clients/new")({
  component: NewClientPage,
});

function NewClientPage() {
  return (
    <div className="grid max-w-3xl gap-6">
      <header className="grid gap-2">
        <Link to="/clients" search={clientSearch()} className="text-sm text-brass">
          К каталогу
        </Link>
        <SectionLabel>Новая карточка</SectionLabel>
        <h1 className="font-serif text-4xl">Клиент</h1>
        <p className="text-sm text-mute">
          Только организация: наименование и учебные реквизиты. Паспорта, телефоны и почта людей не
          хранятся.
        </p>
      </header>
      <ClientForm
        submitLabel="Сохранить клиента"
        initial={{
          short_name: "",
          full_name: "",
          inn: "",
          kpp: "",
          ogrn: "",
          legal_address: "",
          industry: "",
          status: "prospect",
          since_date: "2026-11-06",
          matter: "",
        }}
      />
    </div>
  );
}
