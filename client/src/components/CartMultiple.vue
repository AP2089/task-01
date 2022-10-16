<template>
  <div class="cart-multiple">
    <div
      class="cart-multiple__wrap"
      v-if="items.length > 0"
    >
      <div class="cart-multiple__row">
        <div
          class="cart-multiple__col"
          v-for="item in items"
          :key="item.id"
        >
          <div
            class="cart-multiple__btn"
            @click="removeItem(item)"
          >
            <div class="cart-multiple__title">{{item.name}}</div>
            <div class="cart-multiple__id">id: {{item.id}}</div>
            <div class="cart-multiple__case">
              <div class="cart-multiple__tooltip">
                {{$t('remove')}}
              </div>
              <Image
                :srcAny="item.img.any"
                :srcWebp="item.img.webp"
                class="cart-multiple__picture"
                :alt="item.name"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="cart-multiple__info">
        {{$t('selected')}}: {{items.length}} / {{maxSize}}
      </div>
    </div>
    <div 
      class="cart-multiple__message"
      v-else
    >{{$t('message.no.items')}}</div>
  </div>
</template>

<script>
export default {
  name: 'CartMultiple',
  props: {
    items: {
      type: Array,
      required: true,
      default: []
    },
    maxSize: {
      type: Number,
      validator: (val) => val > 0
    },
    removeItem: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-multiple {
  $rs: &;
  max-width: 300px;
  border: 1px solid #dfdfdf;
  padding: 15px 15px 15px 15px;
  border-radius: 5px;

  &__row {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-left: -5px;
    margin-bottom: 5px;
  }

  &__col {
    width: 25%;
    padding-left: 5px;
    margin-bottom: 5px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__btn {
    max-width: 124px;
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
}
</style>