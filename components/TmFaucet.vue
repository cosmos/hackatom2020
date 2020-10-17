<template lang="pug">
  div
    transition(name="fade" mode="out-in")
      div(v-if="state === 'success'" key="success").success-container
        icon-success
        .success__title.tm-rf1.tm-bold.tm-lh-copy Tokens sent
        .success__subtitle.tm-code.tm-bold.tm-lh-copy {{ this.address }}
        .success__reset.tm-rf0.tm-lh-title(@click="reset") Send to another address
      div(v-else-if="state === 'error'" key="error")
        .success__title.tm-rf1.tm-bold.tm-lh-copy 
        .success__subtitle.tm-code.tm-bold.tm-lh-copy Failed to send tokens
        .success__reset.tm-rf0.tm-lh-title(@click="reset") Send to another address
      div(v-else key="default")
        .cards__item
          .cards__item__title.tm-rf0.tm-medium.tm-lh-title.tm-overline {{ itemTitle }} faucet
          .cards__item__subtitle.tm-rf-1.tm-lh-title Address <code>({{ itemDenom }})</code>
          form(:action="requestURL" method="POST" target="_blank" rel="noreferrer noopener" @submit.prevent="submit")
            .form
              .form__input
                input(name="YOUR_ADDRESS" v-model="address" class="form__input__input" placeholder="Your address")
                .form__button__content
                  tm-button(size="m" color="var(--near-black)" background-color="linear-gradient(89.4deg, #E96C58 0%, #B7DBF9 98.96%)" :disabled="inputInvalid || requestInFlight" v-if="!requestInFlight").btn Send tokens
                  .form__button__spinner(v-if="requestInFlight")
                    icon-spinner
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
    requestURL: {
      type: String,
      default: 'https://faucet.cosmwasm.hub.hackatom.dev',
    },
    itemTitle: {
      type: String,
      default: 'CosmWasm',
    },
    itemDenom: {
      type: String,
      default: 'ucosm',
    },
  },
  data() {
    return {
      address: null,
      state: 'default',
      requestInFlight: null,
    }
  },
  computed: {
    inputInvalid() {
      const re = /^(cosmos|eth)/
      return !re.test(String(this.address))
    },
  },
  methods: {
    reset() {
      this.state = 'default'
      this.address = ''
    },
    async submit() {
      this.requestInFlight = true
      const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: this.address,
        }),
      }
      await fetch(this.requestURL, options)
        .then((response) => {
          this.state = 'success'
          this.requestInFlight = false
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.error('Failed to send tokens', error))
    },
  },
}
</script>

<style lang="stylus" scoped>
.cards
  &__item

    &__title
      color var(--white-700)

    &__subtitle
      margin-top var(--spacing-6)
      color var(--white-700)

.fade-enter-active
  transition all .4s ease-out

.fade-leave-active
  transition all .2s ease-out

.fade-enter
  opacity 0
  transform scale(1.5)

.fade-enter-to
  opacity 1
  transform scale(1)

.fade-leave
  opacity 1
  transform scale(1)

.fade-leave-to
  opacity 0
  transform scale(.85)

.success-container
  display flex
  justify-content center
  align-items center
  flex-direction column
  text-align center
  overflow-wrap break-word
  word-wrap break-word
  word-break break-all

.success
  &__title
    margin-top var(--spacing-7)
  &__subtitle
    margin-top var(--spacing-3)
    color var(--white-700)
  &__reset
    margin-top var(--spacing-7)
    color var(--primary-600)
    cursor pointer

.form
  margin-top var(--spacing-3)
  display grid
  gap 1rem
  grid-auto-flow column
  max-width 30rem
  center()

.form__input__input
  background none
  border 2px solid rgba(255, 255, 255, 0.2)
  padding .75rem 1rem
  border-radius .25rem
  width 100%
  box-sizing border-box
  color var(--white)

  &:hover
    background-color rgba(255,255,255,0.13)

  &:focus
    outline none
    border 2px solid var(--primary-600)

.btn
  width 100%

.form__button__content
  margin-top var(--spacing-5)

.form__button__spinner
  width 1.5rem
  height 1.5rem
  animation spin 1s infinite linear
  margin 0 auto

@keyframes spin
  from
    transform rotate(0deg)
  to
    transform rotate(360deg)
</style>
