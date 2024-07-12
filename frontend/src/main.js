import { createApp, h } from 'vue';
import App from './App.vue';
import { provideApollo } from './boot/apollo';

const app = createApp({
    setup() {
        provideApollo();
    },
    render: () => h(App),
});

app.mount('#app');
