<script setup lang="ts">
import { cva } from "class-variance-authority";
import { computed } from "vue";
import { cn } from "../lib/cn";

const badge = cva("inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold", {
  variants: {
    variant: {
      neutral: "bg-muted text-muted-foreground",
      brand: "bg-brand-100 text-brand-700",
      success: "bg-success/15 text-success",
      outline: "border-2 border-border text-foreground",
    },
  },
  defaultVariants: { variant: "neutral" },
});

const props = defineProps<{ variant?: "neutral" | "brand" | "success" | "outline" }>();
const classes = computed(() => cn(badge({ variant: props.variant })));
</script>

<template>
  <span :class="classes"><slot /></span>
</template>
