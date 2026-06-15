import { ar } from "./i18n/ar";
import { en, type Dict } from "./i18n/en";

export type Lang = "en" | "ar";
const dicts: Record<Lang, Dict> = { en, ar };
const bus = new EventTarget();

let lang: Lang = (typeof localStorage !== "undefined" && (localStorage.getItem("spark-lang") as Lang)) || "en";
let dark = typeof localStorage !== "undefined" && localStorage.getItem("spark-theme") === "dark";
let route = typeof location !== "undefined" ? location.pathname : "/";

function apply() {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.classList.toggle("dark", dark);
}
apply();

export const store = {
  get lang() {
    return lang;
  },
  get dark() {
    return dark;
  },
  get route() {
    return route;
  },
  t(): Dict {
    return dicts[lang];
  },
  setLang(l: Lang) {
    lang = l;
    localStorage.setItem("spark-lang", l);
    apply();
    bus.dispatchEvent(new Event("change"));
  },
  toggleTheme() {
    dark = !dark;
    localStorage.setItem("spark-theme", dark ? "dark" : "light");
    apply();
    bus.dispatchEvent(new Event("change"));
  },
  navigate(path: string) {
    route = path;
    history.pushState(null, "", path);
    bus.dispatchEvent(new Event("change"));
  },
  subscribe(fn: () => void) {
    bus.addEventListener("change", fn);
    return () => bus.removeEventListener("change", fn);
  },
};

if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => {
    route = location.pathname;
    bus.dispatchEvent(new Event("change"));
  });
}
