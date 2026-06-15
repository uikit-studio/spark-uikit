/** Join class names (web variant has no tailwind-merge dep; keep it tiny). */
export function cn(...inputs: (string | false | null | undefined)[]): string {
  return inputs.filter(Boolean).join(" ");
}
