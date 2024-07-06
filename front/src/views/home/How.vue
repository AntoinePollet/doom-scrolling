<template>
  <div class="bg-base-200 relative z-10">
    <div class="max-w-5xl mx-auto flex flex-col items-center justify-center gap-8 lg:gap-10 p-8 lg:py-20">
      <h3 class="text-accent font-extrabold text-2xl lg:text-4xl tracking-tight md:-mb-4 flex flex-col pb-8 items-center lg:items-start">
        Highlight the important concepts
      </h3>
      <InputSearch @input-text="typeText(textToType, 0)"/>
      <div v-if="questionResult" v-html="questionResult" class="bg-base-300 text-base-content rounded-xl p-5 m-5 w-full">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputSearch from '@/components/InputSearch.vue';
import { ref } from 'vue';

const textToType = 'A typical fly has <span class="text-accent">five</span> eyes. It has two large compound eyes and three small simple eyes, known as ocelli, located on the top of its head. The compound eyes are responsible for most of the fly\'s vision, providing a wide field of view and the ability to detect movement. The ocelli help the fly with orientation and maintaining stability during flight.'
const questionResult = ref<string>('');
const typeText = (text: string, index: number) => {
  if (index < text.length) {
    questionResult.value += textToType.charAt(index);
    setTimeout(() => {
      typeText(textToType, index + 1);
    }, 25);
  }
};
</script>