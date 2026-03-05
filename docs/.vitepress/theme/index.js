import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import NavSite from '../components/NavSite.vue'
import './custom.css'

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('NavSite', NavSite)
    }
}
