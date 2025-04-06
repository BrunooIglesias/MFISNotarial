import { createApp, h } from 'vue';
import App from './App.vue';
import { provideApollo } from './boot/apollo.ts';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import 'quasar/src/css/index.sass'
import './assets/tailwind.css'
import router from './router/index.ts'
import './styles/global.scss';
import '@mdi/font/css/materialdesignicons.min.css'

const app = createApp({
    setup() {
        provideApollo();
    },
    render: () => h(App),
});

app.use(Quasar, quasarUserOptions)
app.use(router)
app.mount('#app');
