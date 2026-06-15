import { Button } from "../components/button";
import { Container } from "../components/container";

export interface NavItem {
  label: string;
  href: string;
}

/** Reusable marketing navbar (design-system block). The app shell in
 *  routes/layout.tsx provides the live header; this is for `uikit add`. */
export function Navbar({ brand = "Spark", items = [], cta = "Get started" }: { brand?: string; items?: NavItem[]; cta?: string }) {
  return (
    <header className="border-b border-border">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-primary-foreground">⚡</span>
          {brand}
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground sm:flex">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="hover:text-foreground">
              {i.label}
            </a>
          ))}
        </nav>
        <Button size="sm">{cta}</Button>
      </Container>
    </header>
  );
}
