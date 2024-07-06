<template>
  <div
    v-if="content"
    class="w-full bg-base-200 p-4 rounded-xl"
    v-html="content"
  />
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
  content: {
    type: String,
    required: true
  }
});

const { content } = toRefs(props);
</script>