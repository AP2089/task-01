<template>
  <template
    v-for="option in options"
    :key="option.clear"
  >
    <div
      class="alert"
      v-if="option.message"
    >
      {{option.message}}

      <button
        type="button"
        class="alert__close"
        @click="option.clear('')"
      >x</button>
    </div>
  </template>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    options: Array
  }
}
</script>

<style lang="scss" scoped>
.alert {
  margin-bottom: 15px;
  border: 1px solid #842029;
  background-color: #f8d7da;
  padding: 15px 45px 15px 15px;
  color: #842029;
  border-radius: 5px;
  font-size: 12px;
  position: relative;

  &__close {
    width: 40px;
    height: 100%;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
    color: #842029;
    background-color: transparent;
    border: none;
    opacity: 1;
    transition: opacity 0.5s ease;

    &:hover {
      opacity: .7;
    }
  }
}
</style>