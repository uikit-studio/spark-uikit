<script setup lang="ts">
import { cva } from "class-variance-authority";
import { computed } from "vue";
import { cn } from "../lib/cn";

const button = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-95 disabled:opacity-50 whitespace-nowrap cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:brightness-105",
        ink: "bg-ink text-ink-foreground hover:brightness-125",
        outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background",
        ghost: "text-foreground hover:bg-muted",
      },
      size: { sm: "h-9 px-4 text-sm", md: "h-11 px-6", lg: "h-14 px-8 text-lg" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

const props = defineProps<{
  variant?: "primary" | "ink" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}>();

const classes = computed(() => cn(button({ variant: props.variant, size: props.size })));
</script>

<template>
  <button :class="classes"><slot /></button>
</template>
