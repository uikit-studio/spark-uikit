<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import Button from "../components/Button.vue";
import Card from "../components/Card.vue";
import CardContent from "../components/CardContent.vue";
import CardHeader from "../components/CardHeader.vue";
import CardTitle from "../components/CardTitle.vue";
import Container from "../components/Container.vue";
import Mark from "../components/Mark.vue";
import Marquee from "../components/Marquee.vue";
import Pill from "../components/Pill.vue";
import Footer from "../blocks/Footer.vue";
import { useI18n } from "../i18n";

const { t } = useI18n();
const pad = (i: number) => String(i + 1).padStart(2, "0");
</script>

<template>
  <div>
    <section class="dotted relative overflow-hidden">
      <Container class="py-24 text-center sm:py-32">
        <Pill variant="brand" class="mb-6">✦ {{ t.hero.eyebrow }}</Pill>
        <h1 class="mx-auto max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          {{ t.hero.titleA }} <Mark>{{ t.hero.titleMark }}</Mark> {{ t.hero.titleB }}
        </h1>
        <p class="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">{{ t.hero.body }}</p>
        <div class="mt-9 flex flex-wrap justify-center gap-3">
          <Button size="lg">{{ t.hero.primary }} <ArrowRight class="h-5 w-5 rtl:rotate-180" /></Button>
          <Button size="lg" variant="outline">{{ t.hero.secondary }}</Button>
        </div>
        <p class="mt-6 font-mono text-xs uppercase tracking-wide text-muted-foreground">{{ t.hero.stat }}</p>

        <div class="mx-auto mt-16 max-w-3xl overflow-hidden rounded-[--radius-lg] border border-border bg-card text-start shadow-[var(--shadow-card)]">
          <div class="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span class="h-3 w-3 rounded-full bg-brand-400" />
            <span class="h-3 w-3 rounded-full bg-brand-200" />
            <span class="h-3 w-3 rounded-full bg-muted" />
          </div>
          <div class="bg-gradient-to-br from-brand-100 to-card p-10">
            <div class="h-3 w-28 rounded-full bg-foreground/80" />
            <div class="mt-4 h-8 w-2/3 rounded-lg bg-foreground/90" />
            <div class="mt-2 h-8 w-1/2 rounded-lg bg-primary" />
            <div class="mt-6 flex gap-2">
              <div class="h-9 w-28 rounded-full bg-primary" />
              <div class="h-9 w-28 rounded-full border-2 border-foreground" />
            </div>
          </div>
        </div>
      </Container>
    </section>

    <Marquee :items="t.marquee" />

    <section>
      <Container class="py-20">
        <div class="mb-12 max-w-2xl">
          <h2 class="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {{ t.features.heading }} <Mark>{{ t.features.headingMark }}</Mark>
          </h2>
          <p class="mt-3 text-muted-foreground">{{ t.features.sub }}</p>
        </div>
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Card v-for="(f, i) in t.features.items" :key="f.title" class="transition-transform hover:-translate-y-1">
            <CardHeader>
              <Pill variant="soft" class="mb-3 w-fit">{{ pad(i) }}</Pill>
              <CardTitle>{{ f.title }}</CardTitle>
            </CardHeader>
            <CardContent><p class="text-sm text-muted-foreground">{{ f.body }}</p></CardContent>
          </Card>
        </div>
      </Container>
    </section>

    <section class="py-20">
      <Container>
        <div class="rounded-[--radius-lg] bg-ink p-10 text-ink-foreground sm:p-16">
          <h2 class="max-w-xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {{ t.bento.heading }} <Mark>{{ t.bento.headingMark }}</Mark>
          </h2>
          <p class="mt-3 max-w-md text-ink-foreground/70">{{ t.bento.sub }}</p>
          <div class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div
              v-for="item in t.bento.items"
              :key="item"
              class="rounded-[--radius] border border-white/10 bg-white/5 p-5 font-display font-semibold"
            >
              <span class="text-primary">✦</span>
              <p class="mt-3 text-sm">{{ item }}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <section class="pb-24">
      <Container>
        <div class="dotted rounded-[--radius-lg] border border-border bg-card p-12 text-center sm:p-20">
          <h2 class="mx-auto max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
            {{ t.cta.heading }} <Mark>{{ t.cta.headingMark }}</Mark>
          </h2>
          <p class="mx-auto mt-4 max-w-md text-muted-foreground">{{ t.cta.body }}</p>
          <Button size="lg" class="mt-8">{{ t.cta.button }} <ArrowRight class="h-5 w-5 rtl:rotate-180" /></Button>
          <p class="mt-4 font-mono text-xs text-muted-foreground">{{ t.cta.note }}</p>
        </div>
      </Container>
    </section>

    <Footer />
  </div>
</template>
