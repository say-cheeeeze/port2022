import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(brands)

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas)
library.add(faUserSecret)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Modify nuxt.config.js adding to the `css` and `plugins` sections.

