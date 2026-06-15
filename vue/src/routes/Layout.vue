<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";
import { ref, watchEffect } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import Button from "../components/Button.vue";
import Container from "../components/Container.vue";
import { useI18n } from "../i18n";
import { cn } from "../lib/cn";

const { t, lang, setLang } = useI18n();
const route = useRoute();

const dark = ref(typeof localStorage !== "undefined" && localStorage.getItem("spark-theme") === "dark");
watchEffect(() => {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", dark.value);
  localStorage.setItem("spark-theme", dark.value ? "dark" : "light");
});

const nav = [
  { to: "/", key: "landing" as const },
  { to: "/pricing", key: "pricing" as const },
  { to: "/dashboard", key: "dashboard" as const },
  { to: "/components", key: "components" as const },
];
const linkClass = (to: string) =>
  cn(
    "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
    route.path === to ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
  );
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <Container class="flex h-16 items-center justify-between gap-3">
        <RouterLink to="/" class="flex items-center gap-2 font-display text-lg font-bold">
          <span class="grid h-8 w-8 place-items-center rounded-xl bg-primary text-primary-foreground">⚡</span>
          Spark
        </RouterLink>

        <nav class="hidden items-center gap-1 md:flex">
          <RouterLink v-for="n in nav" :key="n.to" :to="n.to" :class="linkClass(n.to)">
            {{ t.nav[n.key] }}
          </RouterLink>
        </nav>

        <div class="flex items-center gap-2">
          <div class="flex items-center rounded-full border border-border p-0.5 font-mono text-xs">
            <button
              @click="setLang('en')"
              :class="cn('rounded-full px-2 py-1', lang === 'en' ? 'bg-foreground text-background' : 'text-muted-foreground')"
            >
              EN
            </button>
            <button
              @click="setLang('ar')"
              :class="cn('rounded-full px-2 py-1', lang === 'ar' ? 'bg-foreground text-background' : 'text-muted-foreground')"
            >
              ع
            </button>
          </div>
          <button
            @click="dark = !dark"
            class="rounded-full border border-border p-2 text-foreground hover:bg-muted"
            aria-label="Toggle dark mode"
          >
            <Sun v-if="dark" class="h-4 w-4" />
            <Moon v-else class="h-4 w-4" />
          </button>
          <Button size="sm" class="hidden sm:inline-flex">{{ t.nav.cta }}</Button>
        </div>
      </Container>
    </header>
    <RouterView />
  </div>
</template>
