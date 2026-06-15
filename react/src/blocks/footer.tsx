import { Container } from "../components/container";
import { useI18n } from "../i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-background py-12">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-primary-foreground">⚡</span>
          <span className="font-display text-lg font-bold">Spark</span>
        </div>
        <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
        <nav className="flex gap-5 text-sm text-muted-foreground">
          {t.footer.links.map((l) => (
            <a key={l} href="#" className="hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="mt-8 text-center font-mono text-xs text-muted-foreground">
        {t.footer.rights}
      </Container>
    </footer>
  );
}
