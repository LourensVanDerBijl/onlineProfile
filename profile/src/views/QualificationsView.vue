<template>
  <div class="topNav">
    <navBar/>
    <router-view/>
  </div>
  <br><br>
  <div class="content">
    <div v-show="!mobile" class="notMobile">
      <table class="Qualifications-table">
        <tr class="Qualifications-tableRow">
          <th class="Qualifications-tableTitle">Qualification</th>
          <th class="Qualifications-tableTitle">Institution</th>
          <th class="Qualifications-tableTitle">Completion Date</th>
          <th class="Qualifications-tableTitle"></th>
        </tr>
        <tr class="Qualifications-tableRow">
          <td class="Qualifications-tableColumn">Bachelor of Science in Information Technology</td>
          <td class="Qualifications-tableColumn">Richfield Graduate Institute of Technology (Pty) Ltd</td>
          <td class="Qualifications-tableColumn">2021-11</td>
          <td class="Qualifications-tableColumn">Click to view</td>
        </tr>
        <tr class="Qualifications-tableRow">
          <td class="Qualifications-tableColumn">Workday: HCM Essential Concepts Consulting Core</td>
          <td class="Qualifications-tableColumn">Workday</td>
          <td class="Qualifications-tableColumn">2022-07</td>
          <td class="Qualifications-tableColumn">Click to view</td>
        </tr>
        <tr class="Qualifications-tableRow">
          <td class="Qualifications-tableColumn">Workday: End-to-End Connectors</td>
          <td class="Qualifications-tableColumn">Workday</td>
          <td class="Qualifications-tableColumn">2023-02</td>
          <td class="Qualifications-tableColumn">Click to view</td>
        </tr>
        <tr class="Qualifications-tableRow">
          <td class="Qualifications-tableColumn">Workday: Custom Integrations</td>
          <td class="Qualifications-tableColumn">Workday</td>
          <td class="Qualifications-tableColumn">2022-06</td>
          <td class="Qualifications-tableColumn">Click to view</td>
        </tr>
        <tr class="Qualifications-tableRow">
          <td class="Qualifications-tableColumn">National Senior Certificate</td>
          <td class="Qualifications-tableColumn">Technology High School of Middleburg</td>
          <td class="Qualifications-tableColumn">2012-11</td>
          <td class="Qualifications-tableColumn1">Click to view</td>
        </tr>
      </table><br><br><br>
      <div class="functionButtons">
          <router-link class="link" :to="{name: 'Experience'}"><button class="previous">Previous</button></router-link>
          <router-link class="link" :to="{name: 'Certifications'}"><button class="next">Next</button></router-link>
        </div>
    </div>
    <div v-show="mobile" class="mobile">
      Mobile
    </div>
  </div>
</template>

<script>

import navBar from '@/components/navBar.vue'
import PopUpDegree from '@/components/PopUpDegree.vue'

export default {
  name: 'QualificationsView',
  data () {
    return {
      scrollNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null
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
    PopUpDegree
  }
}
</script>
<style lang="scss">
body {
  background: RGB(241, 244, 246)
}
.content{
  margin-top: 50px;
}
.notMobile{
  padding: 25px;
}
.Qualifications-table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  font-size: 14px;
}
.Qualifications-tableColumn, .Qualifications-tableTitle {
  width: 25%;
}
.Qualifications-tableTitle{
  text-transform: uppercase;
  font-weight: 700;
}

.Qualifications-tableRow, .Qualifications-tableColumn {
  text-align: left;
  padding: 16px;
}
.Qualifications-tableColumn1{
  text-align: left;
  padding: 16px;
}
.Qualifications-tableRow:hover {
  color:rgb(3, 198, 216) ;
  background-color: rgb(0, 0, 0);
}

.Qualifications-tableRow:nth-child(even) {
  background-color: #cbcaca90;

  &:hover {
    color:rgb(3, 198, 216) ;
  background-color: rgb(0, 0, 0);
  }
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
</style>
