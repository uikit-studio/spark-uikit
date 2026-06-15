import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { useI18n } from "../i18n";
import { cn } from "../lib/cn";

export function Layout() {
  const { t, lang, setLang } = useI18n();
  const [dark, setDark] = useState(() =>
    typeof localStorage !== "undefined" ? localStorage.getItem("spark-theme") === "dark" : false,
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("spark-theme", dark ? "dark" : "light");
  }, [dark]);

  const navItem = (to: string, label: string) => (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        cn(
          "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
          isActive ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
        )
      }
    >
      {label}
    </NavLink>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <Container className="flex h-16 items-center justify-between gap-3">
          <NavLink to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary text-primary-foreground">⚡</span>
            Spark
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex">
            {navItem("/", t.nav.landing)}
            {navItem("/pricing", t.nav.pricing)}
            {navItem("/dashboard", t.nav.dashboard)}
            {navItem("/components", t.nav.components)}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full border border-border p-0.5 font-mono text-xs">
              <button
                onClick={() => setLang("en")}
                className={cn("rounded-full px-2 py-1", lang === "en" ? "bg-foreground text-background" : "text-muted-foreground")}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ar")}
                className={cn("rounded-full px-2 py-1", lang === "ar" ? "bg-foreground text-background" : "text-muted-foreground")}
              >
                ع
              </button>
            </div>
            <button
              onClick={() => setDark((d) => !d)}
              className="rounded-full border border-border p-2 text-foreground hover:bg-muted"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Button size="sm" className="hidden sm:inline-flex">
              {t.nav.cta}
            </Button>
          </div>
        </Container>
      </header>
      <Outlet />
    </div>
  );
}
