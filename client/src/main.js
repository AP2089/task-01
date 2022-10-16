import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import Loader from '@/components/ui/Loader';
import Image from '@/components/ui/Image';

const app = createApp(App);

app.use(i18n);
app.use(store);
app.use(router);

app.component('Loader', Loader);
app.component('Image', Image);

app.mount('#app');