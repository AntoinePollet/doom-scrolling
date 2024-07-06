<template>
  <div class="w-full relative">
    <div class="bg-gray-100 p-2 px-3 rounded-xl flex flex-1 justify-between gap-2">
      <input
        ref="input"
        v-model="model"
        placeholder="Message"
        class="bg-gray-100 text-slate-900 focus:none outline-none w-full"
        @keyup.enter="emit('enter')"
      >
      <div
        class="cursor-pointer hover:bg-gray-200 rounded-full p-2"
        @click="record()"
      >
        <Mic
          v-if="!isRecording"
          class="text-primary"
        />
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        ><path d="M320-320h320v-320H320v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mic } from 'lucide-vue-next';
import { ref } from 'vue';

const emit = defineEmits(['enter']);
const isRecording = ref<boolean>(false);
const input = ref<HTMLInputElement | null>(null);
const model = defineModel();
const record = () => {
  isRecording.value = !isRecording.value;
  if (isRecording.value) {
    //TODO: Authorize voice recognition on browser
    console.log('Start recording');
  } else {
    //TODO: Send the recorded text speech to translation API and send the question to GPT
    console.log('Stopped recording');
  }
};
</script>