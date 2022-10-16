<template>
  <div class="cart-single">
    <div
      class="cart-single__wrap"
      v-if="Object.keys(item).length > 0"
    >
      <div
        class="cart-single__btn"
        @click="removeItem(item)"
      >
        <div class="cart-single__title">{{item.name}}</div>
        <div class="cart-single__id">id: {{item.id}}</div>
        <div class="cart-single__case">
          <div class="cart-single__tooltip">{{$t('remove')}}</div>
          <Image
            :srcAny="item.img.any"
            :srcWebp="item.img.webp"
            :alt="item.name"
            class="cart-single__picture"
          />
        </div>
      </div>
    </div>
    <div 
      class="cart-single__message"
      v-else
    >{{$t('message.no.item')}}</div>
  </div>
</template>

<script>
export default {
  name: 'CartSingle',
  props: {
    item: {
      type: Object,
      required: true,
      default: {}
    },
    removeItem: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-single {
  $rs: &;
  max-width: 122px;
  border: 1px solid #dfdfdf;
  padding: 15px 15px 15px 15px;
  border-radius: 5px;

  &__btn {
    max-width: 90px;
    cursor: pointer;

    &:hover {
      #{$rs}__tooltip {
        opacity: 1;
      }

      #{$rs}__picture {
        opacity: .7;
      }
    }
  }

  &__title {
    font-size: 10px;
    margin-bottom: 2px;
  }

  &__id {
    font-size: 10px;
    margin-bottom: 2px;
  }

  &__case {
    position: relative;
  }

  &__tooltip {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: bold;
    color: red;
    text-shadow: 1px 1px 2px #ffffff;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    transition: opacity .5s ease 0s;
  }

  &__picture {
    display: block;
    opacity: 1;
    transition: opacity .5s ease 0s;
  }

  &__message {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 118px;
  }

  .cart-layout__col:nth-child(2) & {
    @media (min-width: 992px) {
      margin-left: auto;
    }
  }
}
</style>