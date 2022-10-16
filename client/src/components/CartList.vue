<template>
  <div class="cart-list">
    <div
      class="cart-list__row"
      v-if="items.length > 0"
    >
      <div
        class="cart-list__col"
        v-for="item in items"
        :key="item.id"
      >
        <div
          class="cart-list__btn"
          :class="{disabled: item.selected}"
          @click="addItem(item)"
        >
          <div class="cart-list__title">{{item.name}}</div>
          <div class="cart-list__id">id: {{item.id}}</div>
          <div class="cart-list__case">
            <div class="cart-list__tooltip">
              {{item.selected ? $t('added') : $t('add')}}
            </div>
            <Image
              :srcAny="item.img.any"
              :srcWebp="item.img.webp"
              :alt="item.name"
              class="cart-list__picture"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="message"
      v-else
    >{{$t('message.no.items')}}</div>
  </div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    items: {
      type: Array,
      required: true,
      default: []
    },
    addItem: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-list {
  $rs: &;
  border: 1px solid #dfdfdf;
  padding: 15px 15px 15px 15px;
  border-radius: 5px;

  &__row {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-left: -15px;
  }

  &__col {
    padding-left: 15px;
    margin-bottom: 15px;

    @media (min-width: 576px) {
      width: 25%;
    }

    @media (max-width: 575px) {
      width: 50%;
    }
  }

  &__btn {
    max-width: 124px;
    cursor: pointer;

    &:hover {
      #{$rs}__picture {
        opacity: .7;
      }

      #{$rs}__tooltip {
        opacity: 1;
      }
    }

    &.disabled {
      cursor: default;
      opacity: .7 !important;

      #{$rs}__tooltip {
        opacity: 1;
      }

      #{$rs}__picture {
        opacity: .7 !important;
      }
    }
  }

  &__title {
    margin-bottom: 5px;
  }

  &__id {
    margin-bottom: 5px;
  }

  &__case {
    position: relative;
  }

  &__tooltip {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: bold;
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
}
</style>