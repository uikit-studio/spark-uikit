<script setup lang="ts">
import { Check } from "lucide-vue-next";
import Button from "../components/Button.vue";
import Card from "../components/Card.vue";
import CardContent from "../components/CardContent.vue";
import CardHeader from "../components/CardHeader.vue";
import CardTitle from "../components/CardTitle.vue";
import Container from "../components/Container.vue";
import Mark from "../components/Mark.vue";
import Pill from "../components/Pill.vue";
import Footer from "../blocks/Footer.vue";
import { useI18n } from "../i18n";
import { cn } from "../lib/cn";

const { t } = useI18n();
</script>

<template>
  <div>
    <section class="dotted">
      <Container class="py-20 text-center">
        <h1 class="font-display text-5xl font-bold tracking-tight sm:text-6xl">
          {{ t.pricing.heading }} <Mark>{{ t.pricing.headingMark }}</Mark>
        </h1>
        <p class="mx-auto mt-4 max-w-md text-muted-foreground">{{ t.pricing.sub }}</p>
      </Container>
    </section>

    <section class="pb-20">
      <Container>
        <div class="grid items-start gap-6 lg:grid-cols-3">
          <Card
            v-for="(tier, i) in t.pricing.tiers"
            :key="tier.name"
            :class="cn(i === 1 && 'ring-2 ring-primary lg:-translate-y-3')"
          >
            <CardHeader>
              <div class="flex items-center justify-between">
                <CardTitle class="text-2xl">{{ tier.name }}</CardTitle>
                <Pill v-if="i === 1" variant="brand">{{ t.pricing.popular }}</Pill>
              </div>
              <p class="text-sm text-muted-foreground">{{ tier.blurb }}</p>
              <p class="mt-4 font-display text-5xl font-bold tracking-tight">
                {{ tier.price }}<span class="font-sans text-base font-normal text-muted-foreground">{{ t.pricing.period }}</span>
              </p>
            </CardHeader>
            <CardContent class="space-y-3">
              <Button :variant="i === 1 ? 'primary' : 'outline'" class="w-full">{{ t.pricing.cta }}</Button>
              <ul class="space-y-2 pt-2">
                <li v-for="f in tier.features" :key="f" class="flex items-center gap-2 text-sm">
                  <Check class="h-4 w-4 shrink-0 text-primary" />
                  {{ f }}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>

    <Footer />
  </div>
</template>
