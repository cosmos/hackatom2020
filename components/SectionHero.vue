<template>
  <kinesis-container class="section-hero">
    <div class="section-hero__inner">
      <kinesis-element
        :strength="10"
        class="section-hero__bg"
      ></kinesis-element>
      <kinesis-element :strength="20" class="letter">
        <img src="/V.svg" alt="V letter" />
      </kinesis-element>
      <div class="tm-section-container section-container">
        <div class="container">
          <nav class="nav-primary">
            <div class="nav-box">
              <div>
                <logo-wordmark class="logo" /><span class="sr-only"
                  >Cosmos</span
                >
              </div>
              <div>
                <span class="tm-rf0 tm-lh-solid tm-medium"
                  ><nuxt-link to="/resources">Resources</nuxt-link></span
                >
              </div>
            </div>
            <div class="headings">
              <kinesis-element :strength="35">
                <wordmark-hackatom class="wordmark" />
              </kinesis-element>
              <span class="sr-only">HackAtom V</span>
              <kinesis-element :strength="50" class="brandmark">
                <logo-hackatom-brandmark-color />
              </kinesis-element>
            </div>
          </nav>
          <div v-for="i in sortedAgenda" :key="i.id" class="hero-bottom">
            <div
              class="hero-bottom__title tm-rf0 tm-medium tm-lh-title tm-overline"
            >
              {{ i.title }}
            </div>
            <!-- <div
              v-if="i.subtitle"
              class="hero-bottom__subtitle tm-rf1 tm-lh-copy"
            >
              {{ i.subtitle }}
            </div> -->
            <!-- <div class="hero-bottom__countdown tm-rf2 tm-lh-copy">
              <tm-countdown
                :now="countdown.now"
                :end="countdownTimer(i.date, i.time)"
              />
            </div> -->
            <div class="hero-bottom__date tm-rf0 tm-lh-copy tm-code">
              <!-- {{ toTimezone(i.date, i.time).format('HH:mm UTC · MMM D, YYYY') }} -->
              {{ i.time }} UTC · {{ moment(i.date).format('MMM D, YYYY') }}
            </div>
            <tm-button
              v-scroll-to="i.url"
              size="l"
              color="var(--near-black)"
              background-color="linear-gradient(89.4deg, #E96C58 0%, #B7DBF9 98.96%)"
              glow
              class="hero-btn"
              >{{ i.btn_text }}</tm-button
            >
          </div>
        </div>
      </div>
    </div>
  </kinesis-container>
</template>

<script>
import moment from 'moment-timezone'
import { orderBy } from 'lodash'

export default {
  data() {
    return {
      moment,
      countdown: {
        now: Math.trunc(new Date(new Date().toUTCString()).getTime() / 1000),
        // end date: 2020-10-16
        // end time: 19:00
        // usage: moment.tz("2020-10-16 19:00", "UTC").format()
        // end: '2020-10-16T19:00:00Z',
      },
      agendas: [
        // {
        //   id: 101,
        //   date: '2020-10-30',
        //   time: '19:00',
        //   title: 'Project submission deadline',
        //   subtitle: '',
        //   btn_text: 'Submit your project',
        //   url:
        //     'http://devpost.com/submit-to/10447-cosmos-hackatom-v/start/submissions/new',
        // },
        // {
        //   id: 102,
        //   date: '2020-11-02',
        //   time: '20:00',
        //   title: 'Community Choice Award',
        //   subtitle: 'Voting begins',
        //   btn_text: 'View projects',
        //   url: 'https://hackatomv.devpost.com/project-gallery',
        // },
        // {
        //   id: 104,
        //   date: '2020-11-06',
        //   time: '20:00',
        //   title: 'Community Choice Award',
        //   subtitle: 'Voting ends',
        //   btn_text: 'Cast your vote',
        //   url: 'https://hackatomv.devpost.com/project-gallery',
        // },
        // {
        //   id: 105,
        //   date: '2020-11-09',
        //   time: '20:00',
        //   title: 'Judging in progress',
        //   subtitle: 'Winners announced',
        //   btn_text: 'View projects',
        //   url: 'https://hackatomv.devpost.com/project-gallery',
        // },
        {
          id: 106,
          date: '2020-10-30',
          time: '20:00',
          title: 'Mission complete',
          subtitle: '',
          btn_text: 'View winners',
          url: '#winners',
        },
      ],
    }
  },
  computed: {
    sortedAgenda() {
      return orderBy(
        [...this.agendas],
        [(i) => new Date(`${i.date} ${i.time}`)],
        ['asc']
      )
    },
    // nextAgenda() {
    //   const workshop = this.sortedAgenda
    //     .filter((e) => moment.tz(`${e.date} ${e.time}`, 'UTC') >= moment())
    //     .slice(0, 1)
    //   return workshop
    // },
  },
  mounted() {
    window.setInterval(() => {
      this.countdown.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
  methods: {
    countdownTimer(date, time) {
      return moment.tz(`${date} ${time}`, 'UTC').format()
    },
    toTimezone(date, time) {
      return (
        moment
          // set base time with UTC
          // get timezone with i18n API - Intl.DateTimeFormat().resolvedOptions().timeZone
          // usage: 2020-08-04 08:00
          .tz(`${date} ${time}`, 'UTC')
          // use client's locale time zone
          .tz(moment.tz.guess())
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
// Accessible/SEO friendly CSS hiding
.sr-only
  clip()

.nav-btn
  margin-left var(--spacing-7)

.section-container
  position relative
  .container
    display grid
    grid-template-columns repeat(12, 1fr)
    gap 0 var(--spacing-7)
    max-width var(--container-mw)
    center()

.section-hero
  height 100vh
  overflow hidden
  min-height 50rem
  max-height 54rem
  margin-bottom var(--spacing-10)
  display flex
  justify-content stretch
  align-items stretch

  &__inner
    position relative
    width 100%
    max-width $max-width-11
    center()
    display flex
    justify-content stretch
    align-items stretch
    text-align center

  &__bg
    position absolute
    trbl -1rem -1rem 1rem
    background-image url('/hero-bg.jpg')
    background-position top center
    background-repeat no-repeat
    background-size cover

  .letter
    position absolute
    top 48%
    width 100%
    svg
      height auto
      max-height 26rem
      width 100%

  .section-container
    display flex
    align-items stretch
    width 100%
    padding-top var(--spacing-8)
    padding-bottom var(--spacing-8)

  .container
    position relative
    display flex
    width 100%
    flex-direction column
    align-items normal
    justify-content space-between
    .nav-primary
      margin-bottom 5%
    .headings
      position relative
      max-width 54rem
      margin calc(1.5rem + 4vh) auto 0
      .brandmark
        $w = (200 / (54 * 16)) * 100% // intrinsic / (max-width * 1rem) * 100%
        position absolute
        top -68%
        width $w
        left ((100% - $w)/2)
        svg
          height auto
          width 100%
      .wordmark
        position relative
        width 100%
        height auto
        max-height 7.1875rem

.nav-primary
  .nav-box
    display flex
    justify-content space-between
    align-items center
    padding 0
  .logo
    display block
    center()

.hero-bottom
  max-width $max-width-7
  center()
  &__title
    color var(--white)
    text-shadow $text-shadow
    margin-top var(--spacing-4)
  &__subtitle
    color var(--white)
    margin-top var(--spacing-4)
  &__countdown
    color var(--white)
    margin-top var(--spacing-4)
  &__date
    color var(--white-700)
    margin-top var(--spacing-4)
    margin-bottom var(--spacing-8)

@media $breakpoint-xsmall-only
  .nav-btn
    display none

  .section-hero
    min-height 32rem
    max-height 38rem
    .section-container
      background-image linear-gradient(to bottom, rgba(28, 7, 1, 0.90) 0%, rgba(80, 25, 13, 0) 30%)
      padding-top var(--spacing-4)
      padding-bottom var(--spacing-9)
    .container
      .nav-primary
        margin-bottom 3rem
      .headings
        margin-top calc(3rem + 4vh)
        .title
          padding-left 1rem
          padding-right 1rem
</style>
