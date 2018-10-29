<template>
  <article class="document">
    <h3>{{ doc.headline }}</h3>
    <p
      :key="`date-${locale}`"
      class="date">
      {{ $d(new Date(doc.published), 'long') }}
    </p>
    <media-gallery
      v-if="doc.medias.length > 0"
      :key="doc.uno"
      :medias="doc.medias" />
    <p
      v-linkified
      v-for="(p, i) in doc.news"
      :key="i"
      v-html="p" />
    <slot name="actions" />
  </article>
</template>

<script>
import MediaGallery from '@/components/MediaGallery'
import VueLinkify from 'vue-linkify'
import { mapState } from 'vuex'

export default {
  name: 'Document',
  components: { MediaGallery },
  directives: {
    linkified: VueLinkify
  },
  props: {
    doc: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState([
      'locale'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
article.document {
  left: $sidebar-size;
  @include breakpoint(mobile) {
    left: 0px;
    height: calc(100% - #{$sidebar-size});
  }
  z-index: 4;
  background-color: white;
  max-width: $max-document-width;
  overflow-y: scroll;
  overscroll-behavior-y: contain;
  -webkit-overflow-scrolling: touch;
  padding: 0 30px;

  h3 {
    font-size: 33px;
    line-height: 35px;
    @include breakpoint(mobile) {
      font-size: 26px;
      line-height: 28px;
    }
  }

  .media-gallery {
    margin-left: -30px;
    margin-right: -30px;
  }

  p {
    font-size: 18px;
    line-height: 28.44px;
  }

  @include breakpoint(mobile) {
    .actions {
      position: fixed;
    }
  }
}
</style>