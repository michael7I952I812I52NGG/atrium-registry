import { clientStatusLabel, contractStatusLabel } from "@/lib/lex/labels";

export function isOn(value: unknown): boolean {
  return value === true || value === 1 || value === "t" || value === "true";
}

export function contractTone(
  status: string,
  expiring: unknown,
): "brass" | "mute" | "rust" | "paper" {
  if (isOn(expiring)) return "rust";
  if (status === "active") return "brass";
  if (status === "terminated") return "rust";
  if (status === "completed") return "paper";
  return "mute";
}

export function statusText(status: string, expiring: unknown): string {
  if (isOn(expiring) && status === "active") return "Истекает";
  return contractStatusLabel(status);
}

export function clientTone(status: string): "brass" | "mute" | "paper" {
  if (status === "active") return "brass";
  if (status === "prospect") return "paper";
  return "mute";
}

export function clientText(status: string): string {
  return clientStatusLabel(status);
}
