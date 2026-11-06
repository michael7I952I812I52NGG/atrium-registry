import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import type { Permission } from "@/lib/lex/access";
import { getMyAccess } from "@/lib/lex/server";
import type { StaffAccess } from "@/lib/lex/staff";

export function useDepartment() {
  const { user, isPending } = useCurrentUserState();
  const loadAccess = useServerFn(getMyAccess);
  const [access, setAccess] = useState<StaffAccess | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    loadAccess()
      .then((row) => {
        if (!cancelled) setAccess(row);
      })
      .finally(() => {
        if (!cancelled) setReady(true);
      });
    return () => {
      cancelled = true;
    };
  }, [user?.id]);

  function allows(permission: Permission): boolean {
    return Boolean(access?.permissions.includes(permission));
  }

  return { user, isPending, access, ready, allows };
}
