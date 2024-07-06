<template>
  <div class="relative z-10 bg-base-100">
    <div class="max-w-5xl mx-auto flex flex-col items-center justify-center gap-16 lg:gap-20 px-8 py-12 lg:py-20">
      <div class="relative flex flex-col gap-10 lg:gap-12 items-center justify-center text-center">
        <h1 class="text-primary font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
          Transform Doomscrolling 
          <br>
          into Uplifting Learning
        </h1>
        <p class="text-lg text-base-content-secondary leading-relaxed max-w-md mx-auto">
          Replace mindless scrolling with meaningful exploration through our app. Dive into a vast library of knowledge on 
          subjects ranging from mathematics and biodiversity to history, and turn your digital habits into a powerful tool 
          for positive learning.
        </p>
      </div>
      <div class="max-w-4xl mx-auto">
        <div class="flex gap-2 p-4">
          <div
            v-for="choice in choices"
            :key="choice.name"
            :class="'flex p-5 rounded-xl cursor-pointer bg-base-200 hover:bg-base-300'"
            @click="router.push(choice.to)"
          >
            <div class="flex">
              <div class="flex flex-col">
                <span class="text-base-content-secondary">
                  {{ choice.name }}
                </span>
                <p class="text-sm leading-relaxed text-base-content-secondary">
                  {{ choice.description }}
                </p>
              </div>
              <component
                :is="choice.icon"
                class="text-base-content-secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Rocket } from 'lucide-vue-next';
import { Bug } from 'lucide-vue-next';
import { Sigma } from 'lucide-vue-next';
import { Orbit } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();

const choices = [
  {
    name: 'Spaces',
    icon: Rocket,
    description: 'Learn more about spaces',
    to: { name : 'Spaces' }
  },
  {
    name: 'Biodiversity',
    icon: Bug,
    description: 'Biodiversity and life in the universe',
    to: { name : 'Biodiversity' }
  },
  {
    name: 'Numbers',
    icon: Sigma,
    description: 'Learn more about numbers',
    to: { name : 'Number' }
  },
  {
    name: 'Planets',
    icon: Orbit,
    description: 'Learn more about planets',
    to: { name : 'Planet' }
  }
];
</script>