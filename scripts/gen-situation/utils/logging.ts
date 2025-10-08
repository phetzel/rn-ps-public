import util from "util";

export function logDeep(label: string, value: unknown): void {
  const globalFlag = (globalThis as { __LLM_GEN_DEBUG__?: boolean }).__LLM_GEN_DEBUG__;
  const envEnabled = process.env.LLM_DEBUG_MODE === "true";
  if (!globalFlag && !envEnabled) {
    return;
  }

  // Pretty-print deeply to avoid [Object]/[Array] collapsing
  const rendered = util.inspect(value, {
    colors: false,
    depth: null,
    maxArrayLength: null,
    maxStringLength: null,
    breakLength: Infinity,
    compact: false,
  });
  // Use console.log to keep existing output ordering
  // eslint-disable-next-line no-console
  console.log(`${label}:\n${rendered}`);
}
