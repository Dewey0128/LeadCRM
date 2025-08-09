// 从 Vue 框架导入 createApp 函数
import { createApp } from 'vue'

// 导入 CSS 样式 不需要 from 子句
import './style.css'

// 从 ./App.vue 页面导入App组件
import App from './App.vue'

// 利用上面所导入的 createApp() 函数， 创建一个 Vue 应用， 然后挂载到 index.html 的 app div中
createApp(App).mount('#app')
