import Home from '@views/Home.vue';
import Planet from '@/views/Planet.vue';
import Number from '@/views/Number.vue';
import GBIF from '@/views/GBIF.vue';
import Ollama from '@/views/Ollama.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'ollama',
    component: Ollama
  },
  {
    path: '/planet',
    name: 'planet',
    component: Planet
  },
  {
    path: '/number',
    name: 'number',
    component: Number
  },
  {
    path: '/biodiversity',
    name: 'biodiversity',
    component: GBIF
  }
];