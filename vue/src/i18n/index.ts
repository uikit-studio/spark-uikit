import { computed, ref, watchEffect } from "vue";
import { ar } from "./ar";
import { en, type Dict } from "./en";

export type Lang = "en" | "ar";

const dicts: Record<Lang, Dict> = { en, ar };
const stored = typeof localStorage !== "undefined" ? (localStorage.getItem("spark-lang") as Lang | null) : null;
const lang = ref<Lang>(stored ?? "en");

watchEffect(() => {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lang.value;
  document.documentElement.dir = lang.value === "ar" ? "rtl" : "ltr";
  localStorage.setItem("spark-lang", lang.value);
});

export function useI18n() {
  return {
    lang,
    t: computed(() => dicts[lang.value]),
    dir: computed<"ltr" | "rtl">(() => (lang.value === "ar" ? "rtl" : "ltr")),
    setLang: (l: Lang) => {
      lang.value = l;
    },
  };
}
