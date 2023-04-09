<template>
  <div class="topNav">
    <navBar/>
    <router-view/>
  </div>
  <br><br>
  <div class="content">
<!--PC View-->
    <div v-show="!mobile" class="notMobile">
      <div class="timeline">
        <div class="timeline__header">
          <div class="timeline__live">
            <div class="timeline__marker timeline__marker--live"></div>
            <span>Work Exsperience <br><a class="sub-text">Borwse exsperience by clicking on below links</a></span>

          </div>
        </div>
        <ol class="timeline__list">
          <li v-on:click="component = 'CrossVue'">
            <div class="timeline__marker"></div>
            <div class="timeline__timestamp">CrossVue</div>
            <div class="timeline__body">2022 to 2023</div>
          </li>
          <li v-on:click="component = 'VirtualResource'">
            <div class="timeline__marker"></div>
            <div class="timeline__timestamp">Virtual Resource</div>
            <div class="timeline__body">2021 to 2022</div>
          </li>
          <li v-on:click="component = 'MySHEQ'">
            <div class="timeline__marker"></div>
            <div class="timeline__timestamp">MySHEQ</div>
            <div class="timeline__body">2020 to 2021</div>
          </li>
          <li v-on:click="component = 'umbaneTechnology'">
            <div class="timeline__marker"></div>
            <div class="timeline__timestamp">Umbane Technology</div>
            <div class="timeline__body">2012 to 2021</div>
          </li>
          <li v-on:click="component = 'bootCamp'">
            <div class="timeline__marker"></div>
            <div class="timeline__timestamp">Bootcamp Dev courses</div>
            <div class="timeline__body">2019 to 2021</div>
          </li>
        </ol>
      </div>
      <div class="WorkComponent">
      <component v-bind:is="component"></component>
    </div>
    <br><br><br>
        <div class="functionButtons">
          <router-link class="link" :to="{name: 'Intro'}"><button class="previous">Previous</button></router-link>
          <router-link class="link" :to="{name: 'Qualifications'}"><button class="next">Next</button></router-link>
        </div>
    </div>

<!--Mobile View-->
    <div v-show="mobile" class="mobile">
      Mobile
    </div>
  </div>
</template>

<script>

import navBar from '@/components/navBar.vue'
import CrossVue from '@/components/CrossVue.vue'
import VirtualResource from '@/components/VirtualResource.vue'
import umbaneTechnology from '@/components/umbaneTechnology.vue'
import MySHEQ from '@/components/MySHEQ.vue'
import bootCamp from '@/components/bootCamp.vue'

export default {
  name: 'ExperienceView',
  data () {
    return {
      scrollNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      component: CrossVue
    }
  },
  created () {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  methods: {
    toggleMobile () {
      this.mobileNav = !this.mobileNav
    },
    checkScreen () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 988) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
    }
  },
  components: {
    navBar,
    CrossVue,
    VirtualResource,
    umbaneTechnology,
    MySHEQ,
    bootCamp
  }
}
</script>
<style lang="scss">
.notMobile {
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
  text-align: left;
}
body {
  background: RGB(241, 244, 246)
}
.content{
  margin-top: 50px;
}
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

:root {
  --timeline-colour: rgb(3, 198, 216);
}

.timeline {
  margin: 1rem;
  padding: 1rem;
  background-color: #020202;
  width: 20%;
  color: #ffffff;
  float: left;
  position: fixed;

  &__header {
    position: relative;
    padding-bottom: 0.5rem;

    &:before {
      content: "";
      width: 0.125rem;
      height: 100%;
      position: absolute;
      top: .25rem;
      left: calc(0.375rem - 1px);
      background-color: var(--timeline-colour);
    }
  }

  &__live {
    display: flex;
    margin-bottom: 0.25rem;

    > span {
      display: block;
      margin-left: 0.25rem;
      font-size: 1.125rem;
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  &__title {
    margin-left: 1rem;
  }

  &__list {
    > li {
      display: flex;
      gap: .5rem;
      position: relative;
      padding: 0.625rem 0;
      font-size: 0.75rem;

      &:hover {
        color: rgb(3, 198, 216);
        cursor: pointer;
      }

      &:before {
        content: "";
        width: 0.125rem;
        height: 100%;
        position: absolute;
        top: 0;
        left: calc(0.375rem - 1px);
        background-color: var(--timeline-colour);
      }

      &:last-child:before {
        height: .875rem;
      }
    }
  }

  &__marker {
    width: .5rem;
    min-width: .5rem;
    height: .5rem;
    margin-top: .0625rem;
    margin-left: .125rem;
    background-color: var(--timeline-colour);
    border-radius: 50%;

    &--live {
      width: 0.75rem;
      height: 0.75rem;
      margin-left: 0;
      animation-name: pulse;
      animation-timing-function: ease-in-out;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
    }
  }

  &__timestamp {
    font-weight: 200;
  }

  &--alt {
    --timeline-colour: #2866f6;
  }
}
.timeline__body {
  font-size: 9px;
  font-style: italic;
}
.WorkComponent {
  float: right;
  width: 75%;
  margin-top: 30px;
}
.functionButtons{
    position: fixed;
    width: 100%;
    text-align: right;
    margin-bottom: 10px;
}
.next{
    background-color: pink;
    width: 130px;
    height: 40px;
    margin: 10px;
    border-radius: 40px;
    border: 2px solid #ffffff;
    color: #ffffff;
    background-color: black;

    &:hover {
        color: #00afea;
        border: 2px solid #00afea;
        text-decoration: underline;
        transition: 10 ease all;
        width: 140px;
        height: 50px;
    }
}
.previous{
    background-color: pink;
    width: 130px;
    height: 40px;
    margin: 10px;
    border-radius: 40px;
    border: 2px solid #ffffff;
    color: #ffffff;
    background-color: black;

    &:hover {
        color: #00afea;
        border: 2px solid #00afea;
        text-decoration: underline;
        transition: 3 ease all;
        width: 140px;
        height: 50px;
    }
}
.sub-text {
  font-size: 7px;
  color:#00afea;
}
</style>
