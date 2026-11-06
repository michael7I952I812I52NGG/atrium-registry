import type { ClientQuery, ContractQuery } from "@/lib/lex/server";

function text(value: unknown): string {
  return typeof value === "string" ? value.slice(0, 160) : "";
}

export function readClientSearch(search: Record<string, unknown>): ClientQuery {
  return {
    q: text(search.q),
    status: text(search.status),
    industry: text(search.industry),
  };
}

export function readContractSearch(search: Record<string, unknown>): ContractQuery {
  const sort = text(search.sort);
  return {
    q: text(search.q),
    type: text(search.type),
    status: text(search.status),
    custody: text(search.custody),
    client: text(search.client),
    min: text(search.min),
    max: text(search.max),
    sort: sort === "amount" || sort === "name" || sort === "end" ? sort : "",
  };
}

export function clientSearch(patch: Partial<ClientQuery> = {}): ClientQuery {
  return { q: "", status: "", industry: "", ...patch };
}

export function contractSearch(patch: Partial<ContractQuery> = {}): ContractQuery {
  return {
    q: "",
    type: "",
    status: "",
    custody: "",
    client: "",
    min: "",
    max: "",
    sort: "",
    ...patch,
  };
}
