<script setup lang="ts">
import Card from "../components/Card.vue";
import CardContent from "../components/CardContent.vue";

defineProps<{ stats: { label: string; value: string; delta?: string }[] }>();
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <Card v-for="s in stats" :key="s.label">
      <CardContent class="p-6">
        <p class="font-mono text-xs uppercase tracking-wide text-muted-foreground">{{ s.label }}</p>
        <p class="mt-2 font-display text-3xl font-bold tracking-tight">{{ s.value }}</p>
        <p
          v-if="s.delta"
          class="mt-1 text-xs font-bold"
          :class="s.delta.startsWith('-') ? 'text-rose-500' : 'text-success'"
        >
          {{ s.delta }}
        </p>
      </CardContent>
    </Card>
  </div>
</template>
