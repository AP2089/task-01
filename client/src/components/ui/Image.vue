<template>
  <picture>
    <source
      type="image/webp"
      :srcset="setUrl(srcWebp)"
      v-if="srcWebp"
    />

    <img
      :src="setUrl(srcAny)"
      :alt="alt"
      loading="lazy"
    />
  </picture>
</template>

<script>
import {serverUrl} from '@/config';

export default {
  name: 'Image',
  props: {
    srcAny: {
      type: String,
      required: true
    },
    srcWebp: {
      type: String
    },
    alt: {
      type: String
    }
  },
  methods: {
    setUrl: (src) => `${serverUrl}/${src}`
  }
}
</script>

<style lang="scss" scoped>
img {
  display: block;
  max-width: 100%;
}
</style>