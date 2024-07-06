<template>
  <div class="flex flex-1 overflow-auto">
    <div class="flex flex-1 flex-col gap-3 p-3">
      <div class="flex flex-1 flex-col gap-3 overflow-auto">
        <div class="flex">
          <Response :content="messageContent" />
        </div>
      </div>

      <InputChat
        v-model="chatText"
        class="mt-auto"
        @enter="submit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputChat from '@/components/InputChat.vue';
import Response from '@/components/Response.vue';
import { ref } from 'vue';
import { useOllama } from '@/composables/ollama';

const { chat, messageContent } = useOllama();

const chatText = ref<string>('');

const submit = async() => {
  await chat([{ role: 'user', content: chatText.value }]);
};
</script>