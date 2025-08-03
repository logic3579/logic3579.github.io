import DefaultTheme from 'vitepress/theme'
import NavSite from '../components/NavSite.vue'
import './custom.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // 注册全局组件
        app.component('NavSite', NavSite)
    }
}
