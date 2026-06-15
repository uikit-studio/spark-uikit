<script setup lang="ts">
import Badge from "../components/Badge.vue";
import Button from "../components/Button.vue";
import Card from "../components/Card.vue";
import CardContent from "../components/CardContent.vue";
import CardHeader from "../components/CardHeader.vue";
import CardTitle from "../components/CardTitle.vue";
import Container from "../components/Container.vue";
import StatCards from "../blocks/StatCards.vue";
import { useI18n } from "../i18n";

const { t } = useI18n();
</script>

<template>
  <Container class="py-8">
    <div class="flex gap-6">
      <aside class="hidden w-48 shrink-0 lg:block">
        <nav class="space-y-1 text-sm font-medium">
          <a
            v-for="(item, i) in t.dashboard.nav"
            :key="item"
            href="#"
            class="block rounded-full px-4 py-2"
            :class="i === 0 ? 'bg-foreground text-background' : 'text-muted-foreground hover:bg-muted'"
          >
            {{ item }}
          </a>
        </nav>
      </aside>

      <main class="min-w-0 flex-1 space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="font-display text-3xl font-bold tracking-tight">{{ t.dashboard.title }}</h1>
            <p class="text-sm text-muted-foreground">{{ t.dashboard.subtitle }}</p>
          </div>
          <Button size="sm">{{ t.dashboard.action }}</Button>
        </div>

        <StatCards :stats="t.dashboard.stats" />

        <Card>
          <CardHeader class="flex-row items-center justify-between">
            <CardTitle>{{ t.dashboard.tableTitle }}</CardTitle>
            <Badge variant="brand">live</Badge>
          </CardHeader>
          <CardContent>
            <table class="w-full text-start text-sm">
              <thead class="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th v-for="c in t.dashboard.cols" :key="c" class="pb-3 text-start font-medium">{{ c }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="r in t.dashboard.rows" :key="r.name" class="border-t border-border">
                  <td class="py-3 font-medium">{{ r.name }}</td>
                  <td class="py-3">{{ r.reach }}</td>
                  <td class="py-3">
                    <Badge :variant="r.status === t.dashboard.active ? 'brand' : 'outline'">{{ r.status }}</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </main>
    </div>
  </Container>
</template>
