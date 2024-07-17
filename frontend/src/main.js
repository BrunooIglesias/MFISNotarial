import { createApp, h } from 'vue';
import App from './App.vue';
import { provideApollo } from './boot/apollo';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import 'quasar/src/css/index.sass'
import './assets/tailwind.css'
import router from './router'

const app = createApp({
    setup() {
        provideApollo();
    },
    render: () => h(App),
});

app.use(Quasar, quasarUserOptions)
app.use(router)
app.mount('#app');
