import type { ZodTypeAny, ZodError } from "zod";

export function assertParse<T>(schema: ZodTypeAny, value: unknown, label: string): T {
  const res = schema.safeParse(value);
  if (res.success) return res.data as T;
  const err = res.error as ZodError;
  const issues = err.issues
    .map((i) => {
      const path = (i.path || []).join(".") || "<root>";
      return `${path}: ${i.message}`;
    })
    .join("; ");
  const e = new Error(`${label} validation failed: ${issues}`);
  (e as any).issues = err.issues;
  throw e;
}


