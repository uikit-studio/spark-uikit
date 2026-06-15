<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{ items: string[] }>();
const row = computed(() => [...props.items, ...props.items]);
</script>

<template>
  <div class="overflow-hidden border-y-2 border-foreground bg-foreground py-3 text-background">
    <div class="spark-marquee-track flex w-max items-center gap-8 whitespace-nowrap">
      <span
        v-for="(item, i) in row"
        :key="i"
        class="flex items-center gap-8 font-mono text-sm font-medium uppercase tracking-widest"
      >
        {{ item }}
        <span class="text-primary">✦</span>
      </span>
    </div>
  </div>
</template>
