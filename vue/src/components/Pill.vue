<script setup lang="ts">
import { cva } from "class-variance-authority";
import { computed } from "vue";
import { cn } from "../lib/cn";

const pill = cva(
  "inline-flex items-center gap-1.5 rounded-full font-mono text-xs font-medium uppercase tracking-wide",
  {
    variants: {
      variant: {
        solid: "bg-foreground text-background px-3 py-1",
        soft: "bg-muted text-muted-foreground px-3 py-1",
        brand: "bg-brand-100 text-brand-700 px-3 py-1",
        outline: "border border-border text-muted-foreground px-3 py-1",
      },
    },
    defaultVariants: { variant: "soft" },
  },
);

const props = defineProps<{ variant?: "solid" | "soft" | "brand" | "outline" }>();
const classes = computed(() => cn(pill({ variant: props.variant })));
</script>

<template>
  <span :class="classes"><slot /></span>
</template>
