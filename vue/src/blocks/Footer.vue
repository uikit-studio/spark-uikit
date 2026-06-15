<script setup lang="ts">
import { useI18n } from "../i18n";
import Container from "../components/Container.vue";
const { t } = useI18n();
</script>

<template>
  <footer class="border-t border-border bg-background py-12">
    <Container class="flex flex-col items-center justify-between gap-6 sm:flex-row">
      <div class="flex items-center gap-2">
        <span class="grid h-7 w-7 place-items-center rounded-lg bg-primary text-primary-foreground">⚡</span>
        <span class="font-display text-lg font-bold">Spark</span>
      </div>
      <p class="text-sm text-muted-foreground">{{ t.footer.tagline }}</p>
      <nav class="flex gap-5 text-sm text-muted-foreground">
        <a v-for="l in t.footer.links" :key="l" href="#" class="hover:text-foreground">{{ l }}</a>
      </nav>
    </Container>
    <Container class="mt-8 text-center font-mono text-xs text-muted-foreground">
      {{ t.footer.rights }}
    </Container>
  </footer>
</template>
