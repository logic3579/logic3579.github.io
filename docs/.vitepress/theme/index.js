import DefaultTheme from 'vitepress/theme'
import NavSite from '../components/NavSite.vue'
import './custom.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // Register global components
        app.component('NavSite', NavSite)
    }
}
