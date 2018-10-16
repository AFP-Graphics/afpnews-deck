import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Deck from '@/views/Deck'

Vue.use(VueRouter)

let shouldLoadPreferences = true

const routes = [
  {
    name: 'deck',
    path: '/',
    component: Deck,
    beforeEnter: async (to, from, next) => {
      if (shouldLoadPreferences) {
        shouldLoadPreferences = false
        await store.dispatch('initCredentials')
        await store.dispatch('initToken')
        await store.dispatch('resurrectDocuments')
        await store.dispatch('resurrectColumns')
        await store.dispatch('initPreferences')
      }
      next()
    },
    children: [
      {
        path: 'doc',
        redirect: '/'
      },
      {
        name: 'document',
        path: 'doc/:docId',
        component: () => import(/* webpackChunkName: "viewer" */ /* webpackPrefetch: true */ '@/views/Viewer'),
        props: true,
        meta: {
          analytics: {
            pageviewTemplate (route) {
              const doc = store.getters.getDocumentById(route.params.docId)
              if (doc) {
                return {
                  title: doc.headline,
                  page: route.path,
                  location: window.location.href,
                  dimension1: doc.product
                }
              }
              return {
                title: document.title,
                page: route.path,
                location: window.location.href
              }
            }
          }
        }
      },
      {
        name: 'login',
        path: 'login',
        component: () => import(/* webpackChunkName: "login" */ /* webpackPrefetch: true */ '@/views/Login.vue')
      },
      {
        name: 'browser-warning',
        path: 'browser-warning',
        component: () => import(/* webpackChunkName: "browser-warning" */ '@/views/BrowserWarning.vue')
      },
      {
        name: 'about',
        path: 'about',
        component: () => import(/* webpackChunkName: "about" */ /* webpackPrefetch: true */ '@/views/About.vue')
      },
      {
        name: 'tour',
        path: 'tour',
        component: () => import(/* webpackChunkName: "tour" */ '@/views/Tour.vue')
      }
    ]
  }
]

export default new VueRouter({
  routes
})