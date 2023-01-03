import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt' // 하위 컴포넌트에서 상위 컴포넌트로 데이터를 보낼때 쓰이는 라이브러리  
import  store from './store'
import './registerServiceWorker'
let emitter = mitt();
let app = createApp(App)

app.config.globalProperties.emitter = emitter;

app.use(store).mount('#app')
