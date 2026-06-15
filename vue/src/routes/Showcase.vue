<script setup lang="ts">
import Badge from "../components/Badge.vue";
import Button from "../components/Button.vue";
import Card from "../components/Card.vue";
import CardContent from "../components/CardContent.vue";
import CardDescription from "../components/CardDescription.vue";
import CardHeader from "../components/CardHeader.vue";
import CardTitle from "../components/CardTitle.vue";
import Container from "../components/Container.vue";
import Input from "../components/Input.vue";
import Mark from "../components/Mark.vue";
import Marquee from "../components/Marquee.vue";
import Pill from "../components/Pill.vue";
import { useI18n } from "../i18n";

const { t } = useI18n();
const swatches = [
  ["background", "bg-background"],
  ["card", "bg-card"],
  ["muted", "bg-muted"],
  ["primary", "bg-primary"],
  ["ink", "bg-ink"],
  ["brand-300", "bg-brand-300"],
  ["brand-600", "bg-brand-600"],
];
</script>

<template>
  <div>
    <Container class="space-y-14 py-14">
      <header>
        <h1 class="font-display text-4xl font-bold tracking-tight">
          {{ t.showcase.title.split(" ")[0] }}
          <Mark>{{ t.showcase.title.split(" ").slice(1).join(" ") }}</Mark>
        </h1>
        <p class="mt-2 max-w-xl text-muted-foreground">{{ t.showcase.sub }}</p>
      </header>

      <section>
        <h2 class="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">{{ t.showcase.sections.colors }}</h2>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          <div v-for="[name, cls] in swatches" :key="name">
            <div class="h-16 rounded-[--radius] border border-border" :class="cls" />
            <p class="mt-1.5 font-mono text-xs text-muted-foreground">{{ name }}</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">{{ t.showcase.sections.type }}</h2>
        <div class="space-y-3">
          <p class="font-display text-5xl font-bold tracking-tight">{{ t.showcase.display }}</p>
          <p class="font-display text-2xl font-bold">{{ t.showcase.heading }}</p>
          <p class="text-base">{{ t.showcase.body }}</p>
          <p class="font-mono text-sm text-muted-foreground">{{ t.showcase.mono }}</p>
        </div>
      </section>

      <section>
        <h2 class="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">{{ t.showcase.sections.buttons }}</h2>
        <div class="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="ink">Ink</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section>
        <h2 class="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">{{ t.showcase.sections.pills }}</h2>
        <div class="flex flex-wrap items-center gap-3">
          <Pill variant="solid">Solid</Pill>
          <Pill variant="soft">Soft</Pill>
          <Pill variant="brand">Brand</Pill>
          <Pill variant="outline">Outline</Pill>
          <Badge>Neutral</Badge>
          <Badge variant="brand">Brand</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      <section>
        <h2 class="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">{{ t.showcase.sections.inputs }}</h2>
        <div class="max-w-sm space-y-3">
          <Input placeholder="you@example.com" />
        </div>
      </section>

      <section>
        <h2 class="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">{{ t.showcase.sections.cards }}</h2>
        <div class="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Card title</CardTitle>
              <CardDescription>A short description.</CardDescription>
            </CardHeader>
            <CardContent><p class="text-sm text-muted-foreground">Body content goes here.</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>With an action</CardTitle></CardHeader>
            <CardContent><Button size="sm">Do it</Button></CardContent>
          </Card>
        </div>
      </section>
    </Container>

    <Marquee :items="t.marquee" />
  </div>
</template>
