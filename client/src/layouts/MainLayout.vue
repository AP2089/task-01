<template>
  <div class="wrap">
    <div class="middle">
      <slot></slot>
    </div>
    <Loader
      :isLoading="isLoading"
    />
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  props: {
    isLoading: [Boolean, Array]
  }
}
</script>