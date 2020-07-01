<template lang="pug">
  div
    .wrapper
      .h3 Agenda
        .h3__subtitle November 1-3, 2019
      .container
        .menu
          a.menu__item(v-for='day in dayList' :class="{'menu__item__selected': day.date === daySelected}" @focus="daySelect(day)" @click="daySelect(day)" tabindex="0")
            .menu__item__title {{day.dayOfWeek}}
            .menu__item__subtitle
              .menu__item__subtitle__title {{day.month.slice(0,3)}}
              .menu__item__subtitle__subtitle {{day.day}}
        .agenda
          .agenda__item(v-for='event in eventListGrouped' :class="event.period")
            .agenda__item__icon
              .agenda__item__icon__wrapper
                img(:src="`/period-${event.period}.svg`" alt="Time of day").agenda__item__icon__image
                .agenda__item__icon__title {{event.period}}
            .agenda__item__time {{event.time}}
            .agenda__item__body
              .agenda__item__body__item(v-for="item in event.items" :class="`stage__${item.stage}`")
                .agenda__item__body__item.stage__title(:class="`stage__${item.stage}`" v-if="item.stage") {{item.stage}} stage
                .agenda__item__body__item__title {{item.name}}
                .agenda__item__body__item__desc
                  div(v-if="item.desc") {{item.desc}}
                  router-link(:to="url(item) || '#_'" :class="{'agenda__item__link': url(item)}") {{item.speaker}}
                  router-link(:to="urlCompany(item) || '#_'" :class="{'agenda__item__link': urlCompany(item)}").agenda__item__company {{item.company && ` | ${item.company}`}}
          .note #[strong Note:] Agenda subject to change. Check this space again or #[a(:href="value.slack.url" target="_blank" ref="noreferrer noopener") join the Slack workspace] for agenda updates.
</template>

<style lang="stylus" scoped>
.wrapper
  margin-top 8rem

.morning ~ .morning .agenda__item__icon,
.afternoon ~ .afternoon .agenda__item__icon,
.evening ~ .evening .agenda__item__icon,
.night ~ .night .agenda__item__icon
  visibility hidden

.morning ~ .morning .stage__title,
.afternoon ~ .afternoon .stage__title,
.evening ~ .evening .stage__title,
.night ~ .night .stage__title
  display none

.h3
  font-size 3rem
  font-weight 700
  color #161931
  letter-spacing -0.02em
  padding-left 3rem
  padding-right 3rem
  position relative
  display flex
  justify-content space-between
  align-items baseline

  &__subtitle
    font-size 1.25rem
    color rgba(22, 25, 49, 0.65);
    font-weight 400

.container
  margin-left 3rem
  margin-right 3rem
  margin-top 4rem

.menu
  display grid
  grid-auto-flow column

  &__item
    background #f8f9fc
    padding 1rem 1.5rem
    cursor pointer
    outline none
    display flex
    flex-direction column
    transition background-color .25s

    &__title
      font-size 1.5rem
      font-weight 600

    &__subtitle
      display flex
      color rgba(22, 25, 49, 0.65)

      &__title
        margin-right .25rem

    &__selected
      background white
      box-shadow inset 0 4px 0 #DBA0FF

.agenda
  margin-top 5rem

  &__item
    display grid
    grid-template-columns 100px 100px 1fr
    gap 1.5rem

    &__company
      color rgba(22, 25, 49, 0.65)

    &__link
      cursor pointer
      color #1A71FF

    &__icon
      position relative

      &__wrapper
        width 100%
        position absolute
        top -.75rem
        text-align center

      &__title
        font-size .8125rem
        line-height 1rem
        color rgba(22, 25, 49, 0.65)
        text-transform capitalize

    &__time
      font-size 1.25rem
      line-height 1.4
      color rgba(22, 25, 49, 0.65)
      text-align right
      font-feature-settings 'tnum' on, 'lnum' on

    &__body
      display grid
      grid-template-columns 1fr 1fr
      gap 1rem
      margin-bottom 1.5rem

      &__item

        &__desc
          color rgba(22, 25, 49, 0.65)

        &__title
          font-size 1.25rem
          line-height 1.4
          font-weight 500
          color #1D213E
          margin-bottom .125rem

.stage__mer
  grid-column-start 1

.stage__mer.stage__title
  color #882CC0

.stage__terra
  grid-column-start 2

.stage__terra.stage__title
  color #0D7443

.stage__title
  font-size .75rem
  letter-spacing 0.2em
  margin-bottom .5rem
  margin-top .5rem
  text-transform uppercase

.note
  text-align center
  margin-top 3rem
  color rgba(22, 25, 49, 0.65);
  font-size .875rem
  max-width 46rem
  margin-left auto
  margin-right auto

  a
    color #1A71FF

@media screen and (max-width: 1024px)

  .stage__title
    margin-bottom .25rem

  .menu
    &__item
      &__title
        font-size 1.25rem
      &__subtitle
        font-size .875rem
        margin-top .25rem

  .agenda
    &__item
      grid-template-columns 3rem 64px 1fr
      gap 1rem

      &__time
        font-size .875rem
        line-height 1.5rem

      &__icon
        &__image
          height 3rem

        &__title
          display none

      &__body
        &__item
          &__title
            font-size 1rem
            line-height 1.5
          &__desc
            font-size .8125rem

  .stage__title
    margin-top .25rem

@media screen and (max-width: 600px)
  .wrapper
    margin-top 3rem

  .morning ~ .morning .stage__title,
  .afternoon ~ .afternoon .stage__title,
  .evening ~ .evening .stage__title,
  .night ~ .night  .stage__title
    display block

  .h3
    padding-left 1rem
    padding-right 1rem
    font-size 2rem
    display block

    &__subtitle
      font-size 1rem
      margin-top .5rem

  .container
    margin-left 0
    margin-right 0
    margin-top 2rem

  .menu

    &__item
      text-align center

      &__title
        order 2
        font-size .875rem

      &__subtitle
        order 1
        flex-direction column
        margin-top 0

        &__title
          font-size .75rem
          text-transform uppercase
          letter-spacing: 0.2em
          margin-right 0
          color rgba(22, 25, 49, 0.65)

        &__subtitle
          font-size 2rem
          font-weight 600
          margin-bottom .75rem
          color rgba(51, 54, 74, 0.4)

      &__selected
        .menu__item__subtitle
          &__title,
          &__subtitle
            color #1D213E

  .agenda
    margin-left 1rem
    margin-right 1rem
    margin-top 2rem

    &__item
      grid-template-columns 50px 1fr
      gap .75rem

      &__time
        font-size .75rem
        line-height 1.25rem

      &__body
        display block
        margin-bottom 0

        &__item
          margin-bottom 1rem

          &__title
            font-size .875rem
            line-height 1.25rem

      &__icon
        display none

    .stage__title
      margin-top .125rem
      margin-bottom .25rem

    .note
      margin-top 2rem

</style>

<script>
import { uniq, orderBy, find, groupBy, map, chain, value } from "lodash";
import * as moment from "moment";

export default {
  props: ["value"],
  data: function() {
    return {
      daySelected: null
    };
  },
  created() {
    this.daySelected = this.dayList[0].date;
  },
  computed: {
    events() {
      return this.value.events;
    },
    eventListGrouped() {
      return chain(
        this.events.filter(e => {
          return e.date.slice(0, 10) == this.daySelected;
        })
      )
        .groupBy("date")
        .map((items, date) => {
          const time = date.match(/..:../)[0];
          const hour = +time.split(":")[0];
          let period =
            (hour <= 12 && "morning") ||
            (hour > 12 && hour <= 16.5 && "afternoon") ||
            (hour > 16.5 && hour <= 21 && "evening") ||
            "night";
          return {
            date,
            time,
            hour,
            period,
            items
          };
        })
        .orderBy(e => e.time, "asc")
        .value();
    },
    dayList() {
      let list = uniq(this.events.map(d => d.date.slice(0, 10))).map(date => {
        return {
          date,
          month: moment(date).format("MMMM"),
          day: +date.split("-")[2],
          dayOfWeek: moment(date).format("dddd")
        };
      });
      return orderBy(list, e => e.date, "asc");
    }
  },
  methods: {
    daySelect(day) {
      this.daySelected = day.date;
    },
    getPage(path) {
      return find(this.$site.pages, ["relativePath", path]) || {};
    },
    url(item) {
      const person = find(this.value.judges, ["name", item.speaker]);
      return person ? `/person/?name=${person.name}#_` : false;
    },
    urlCompany(item) {
      const company = find(this.value.sponsors, ["name", item.company]);
      return company ? `/sponsor/?company=${company.name}#_` : false;
    }
  }
};
</script>
