import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'; // Import all components
import * as directives from 'vuetify/directives'; // Import all directives
import 'vuetify/styles';

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(vuetify);
app.mount('#app');