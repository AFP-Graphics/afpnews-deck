import Vue from 'vue'
import 'intersection-observer'
import '@/plugins/meta'
import '@/plugins/toasted'
import router from '@/router'
import store, { initStore } from '@/store'
import i18n from '@/plugins/i18n'
import '@/plugins/touchGestures'
import '@/plugins/dayjs'
import '@/plugins/hotjar'
import wait from '@/plugins/wait'
import App from '@/views/index.vue'

Vue.config.productionTip = false

Vue.config.errorHandler = (err: Error) => {
  Vue.toasted.global.error(err)
}

Vue.config.warnHandler = (message: string) => {
  Vue.toasted.global.warn(message)
}

router.beforeEach(async (to, _, next) => {
  if (to.name === 'document') {
    if (!store.getters.getDocumentById(to.params.docId)) {
      try {
        await store.dispatch('getDocument', to.params.docId)
      } catch (error) {
        if (store.state.authType !== 'credentials') {
          return next({ name: 'login', query: { redirect: `doc/${to.params.docId}` } })
        }
        return next({ name: 'deck' })
      }
    }
  }
  next()
})

store.dispatch('changeLocale', i18n.locale)

function init () {
  new Vue({
    router,
    store,
    i18n,
    wait,
    render: h => h(App)
  }).$mount('#app')

  if (router.currentRoute.name === 'deck' && !store.getters.isAuthenticated) {
    router.replace({
      name: 'login'
    })
  }
}

initStore().then(init)
