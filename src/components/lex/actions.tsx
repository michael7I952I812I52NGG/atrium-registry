import { Link } from "@tanstack/react-router";

export function printPage() {
  window.print();
}

const brass =
  "inline-flex min-h-11 items-center justify-center border border-brass bg-brass px-4 text-sm font-medium text-ink";
const ghost =
  "inline-flex min-h-11 items-center justify-center border border-line bg-transparent px-4 text-sm font-medium text-paper hover:border-brass";

export function CreateContractButton({
  className = "",
  client = "",
}: {
  className?: string;
  client?: string;
}) {
  return (
    <Link to="/contracts/new" search={{ client }} className={`${brass} ${className}`}>
      Создать договор
    </Link>
  );
}

export function PrintButton({
  label = "Печать",
  className = "",
  contractId,
}: {
  label?: string;
  className?: string;
  contractId?: number;
}) {
  if (contractId) {
    return (
      <Link
        to="/contracts/$id/print"
        params={{ id: String(contractId) }}
        className={`${ghost} ${className}`}
      >
        {label}
      </Link>
    );
  }
  return (
    <button type="button" onClick={printPage} className={`${ghost} ${className}`}>
      {label}
    </button>
  );
}

export function DeskButton({ className = "", active = false }: { className?: string; active?: boolean }) {
  return (
    <Link
      to="/desk"
      className={`${active ? brass : ghost} ${className}`}
      aria-current={active ? "page" : undefined}
    >
      Чат отдела
    </Link>
  );
}
