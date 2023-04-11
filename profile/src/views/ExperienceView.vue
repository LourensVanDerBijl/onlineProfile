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
            <span>Work experience <br><a class="sub-text">Browse experience by clicking on below links</a></span>

          </div>
        </div>
        <ol class="timeline__list">
          <li v-on:click="component = 'CrossVue', scrolltop() ">
            <div class="timeline__marker"></div>
            <div class="timeline__timestamp">CrossVue</div>
            <div class="timeline__body">2022 to 2023</div>
          </li>
          <li v-on:click="component = 'VirtualResource', scrolltop()">
            <div class="timeline__marker"></div>
            <div class="timeline__timestamp">Virtual Resource</div>
            <div class="timeline__body">2021 to 2022</div>
          </li>
          <li v-on:click="component = 'MySHEQ', scrolltop()">
            <div class="timeline__marker"></div>
            <div class="timeline__timestamp">MySHEQ</div>
            <div class="timeline__body">2020 to 2021</div>
          </li>
          <li v-on:click="component = 'umbaneTechnology', scrolltop()">
            <div class="timeline__marker"></div>
            <div class="timeline__timestamp">Umbane Technology</div>
            <div class="timeline__body">2012 to 2021</div>
          </li>
          <li v-on:click="component = 'bootCamp', scrolltop()">
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
      <br>
      <table class="CrossVueWorkTableMob">
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1"><img class="imgCVExsprienceMob" src="../assets/crossvue.png"></td>
          <td class="CrossVueColMob">CrossVue<br>Workday Integration Specialist <br>2022 to current<br>Remote (Full-Time)<br> </td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">Website:</td>
          <td class="CrossVueColMob"><a href="https://www.crossvue.com/">https://www.crossvue.com/</a></td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">Reference:</td>
          <td class="CrossVueColMob">Henry Snyman (Director) +27 84 758 1258</td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">Reference:</td>
          <td class="CrossVueColMob">Heather Roney (Director) hroney@crossvue.com</td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">DESCRIPTION:</td>
          <td class="CrossVueColMob">Delivering of quality Workday integrations for Post-Production and implementations to Workday clients in the United States. Workday is a global HCM system, and my role at CrossVue was to import data from legacy systems into Workday by using Integrations. I also built integrations from Workday to other systems (Vendor/Client systems)
            https://www.workday.com</td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">RESPONSIBILITIES:</td>
          <td class="CrossVueColMob">Grosvenor Capital Management Holdings LLP (USA) - Creation of CCB E2E connectors for benefit vendor. Also Creation of custom integration. Completed project from start to end with a successful go-live in productions
            SitusAMC Holdings Corporation (USA) - Creation of Financial E2E connectors with the use of ISO20022 and custom integrations. Also the creation of BIRT (Business Intelligence Reporting Tool) for Check prints. Configure the BIA2 and MTN950 inbound integrations and ACH outbound integrations. Also creation of custom CIC integrations for HCM. With the use of custom integrations and reporting I also created the Positive Pay outbound integrations
            Foreside Finacial Group, LLC (USA) - Successful implementations of ISO20022 ACH, Wires, and international wires.
            Among all the integration responsibilities, I was also responsible for liaising and advising clients to execute leading business practices. My role also included virtually communicating with vendors, clients, and fellow employees.</td>
        </tr>
      </table><br><br>
      <table class="CrossVueWorkTableMob">
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1"><img class="imgCVExsprienceMob" src="../assets/VrImg-removebg-preview.png"></td>
          <td class="CrossVueColMob">VirtualResource<br>Workday Reporting Specialist<br>2021 to 2022<br>Remote (Contractor)<br> </td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">Website:</td>
          <td class="CrossVueColMob"><a href="https://www.virtualresource.org">https://www.virtualresource.org</a></td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">Reference:</td>
          <td class="CrossVueColMob">Cristene Kruiter (Managing Director) cristene.kruiter@virtualresource.org</td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">Reference:</td>
          <td class="CrossVueColMob">Leanne Knorr (HR) leanne.knorr@virtualresource.org</td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">DESCRIPTION:</td>
          <td class="CrossVueColMob">Employed as a Reporting specialist while training Workday Integrations. VirtualResource is a company that optimizes Workday for its clients and provides post-production support
          https://www.workday.com</td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">RESPONSIBILITIES:</td>
          <td class="CrossVueColMob">GSK Project - Working under the supervision of Vicky Micheal(a Reporting specialist), I was tasked with data correction and report reviews. I also build advanced reports with the use of calculated fields.
          Unilever Project - Working with Teade Beltran I was tasked to independently assist clients globally with reporting queries and built requests. I created custom reports with custom notifications and fault finding on custom and matrix reports. I also created advanced calculations with the use of calculated fields, along with language translation notifications. I completed many tenant-to-tenant migrations and implemented Workday security</td>
        </tr>
      </table><br><br>
      <table class="CrossVueWorkTableMob">
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1"><img class="imgCVExsprienceMob" src="../assets/mySHEQ-removebg-preview.png"></td>
          <td class="CrossVueColMob">MySHEQ<br>Front-End Developer<br>2020 to 2021<br>Remote (Part-Time)<br> </td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">Website:</td>
          <td class="CrossVueColMob"><a href="https://www.mysheq.com">https://www.mysheq.com</a></td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">Reference:</td>
          <td class="CrossVueColMob">Neil Van Der Bijl (Managing Director) neil@mysheq.com</td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">DESCRIPTION:</td>
          <td class="CrossVueColMob">Employed as a Part-time Frond-End developer. MySHEQ is an online Health And Safety Managing system. The system enhances its clients to easily and accurately manage all safety-related tasks on a global scale</td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">RESPONSIBILITIES:</td>
          <td class="CrossVueColMob">Coding integrations - Working with the team I was tasked with integrating all legacy coding languages (knockout.js, React.js, etc.) to the new Vue.js (javaScript Libary)
          Anti-cheat system - Working in a team - I assisted in creating the code for the anti-cheat system. Using Vue.js the anti-cheat system will capture random images and audio recordings of people taking health and safety online exams. The anti-cheat system will also prevent users from opening additional internet tabs or other applications.
          Implementing Grapths - independently I was tasked with implementing amp-chart3, a JavaScript library for responsive graphs using data on the system</td>
        </tr>
      </table><br><br>
      <table class="CrossVueWorkTableMob">
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1"><img class="imgCVExsprienceMob" src="../assets/Umbane2-removebg-preview.png"></td>
          <td class="CrossVueColMob">Umbane Technology<br>Network Operations Support Team Leader<br>2012 to 2021<br>On-Site (Full-Time)<br> </td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">Reference:</td>
          <td class="CrossVueColMob">Mark Smith (Managing Director) mark@umbanetechnology.co.za</td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">DESCRIPTION:</td>
          <td class="CrossVueColMob">Employed as a Team leader for the implementation team. Umbane Technology is an implemntation telecommunications contractor, that provides its services to all the major ISP in South Africa. Umbane Technology conducts Site Surveys and Microwave Installations, upgrades, and recoveries</td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">RESPONSIBILITIES:</td>
          <td class="CrossVueColMob">While working closely with network administrators and server engineers to deliver quality services, I also diagnose and resolve complex integrated customer issues for implementation, add-on, maintenance, and support of voice, data, VoIP, and CTI applications. I perform network operations, installations, and configurations for multiple telecommunication companies. I respond to service requests during and after business hours while maintaining an excellent attendance record. I manage quality assurance programs, including on-site evaluations, internal audits, and customer surveys</td>
        </tr>
      </table><br><br>
      <table class="CrossVueWorkTableMob">
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1"><img class="imgCVExsprienceMob" src="../assets/Voluntary3-removebg-preview.png"></td>
          <td class="CrossVueColMob">BootCamp Dev Courses<br>Front-End Assistance<br>2019 to 2021<br>Voluntary<br> </td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">Reference:</td>
          <td class="CrossVueColMob">Ronica Singh ronica.singh80@gmail.com</td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">DESCRIPTION:</td>
          <td class="CrossVueColMob">Together with a team of sectors of information technology, we created a platform where South African developers can join. The aim of this platform is to share ideas and provide assistance to new and old developers. The network started off as a Facebook group and escalated to a Facebook page and a Whatsapp group. To enhance the learning capabilities of new developers they created an online Holiday boot camp for developers that wish to learn coding languages that were not necessarily covered in their degrees.</td>
        </tr>
        <tr class="CrossVueRowMob">
          <td class="CrossVueColMob1">RESPONSIBILITIES:</td>
          <td class="CrossVueColMob">Social Media Platform - I provide my assistance with helping to solve code-related questions on the social media platforms. I also help manage these platforms by insuring that group members follow the rules to maintain authentication of the platform's values
BootCamp - I assisted in some of the developments for the online profile of the Bootcamp attendees.
The BootCamp learning would have been a non-profitable program with the idea of advancing the South African Coding community. Unfortunately, due to employment circumstances, I had to leave the project before its completion.</td>
        </tr>
      </table><br><br>
      <div class="functionButtons">
          <router-link :to="{name: 'Qualifications'}"><button class="next">Next</button></router-link>
        </div>
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
      component: CrossVue,
      top: 0
    }
  },
  created () {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  methods: {
    scrolltop () {
      window.scrollTo(0, this.top)
    },
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
.CrossVueWorkTableMob{
  width: 100%;
}
.CrossVueColMob{
  width: 70%;
  font-size: 12px;
}
.CrossVueColMob1{
  width: 30%;
}
.imgCVExsprienceMob{
  width: 90%;
}
</style>
