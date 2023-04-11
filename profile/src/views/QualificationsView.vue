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
            <router-link :to="{name: 'SideDegree'}"><td class="Qualifications-CtableColumn">Click to view</td></router-link>

          </tr>

        <tr class="Qualifications-tableRow">
          <td class="Qualifications-tableColumn">Workday: HCM Essential Concepts Consulting Core</td>
          <td class="Qualifications-tableColumn">Workday</td>
          <td class="Qualifications-tableColumn">2022-07</td>
          <router-link :to="{name: 'SideWorkday'}"><td class="Qualifications-CtableColumn">Click to view</td></router-link>
        </tr>
        <tr class="Qualifications-tableRow">
          <td class="Qualifications-tableColumn">Workday: End-to-End Connectors</td>
          <td class="Qualifications-tableColumn">Workday</td>
          <td class="Qualifications-tableColumn">2023-02</td>
          <router-link :to="{name: 'SideWorkday'}"><td class="Qualifications-CtableColumn">Click to view</td></router-link>
        </tr>
        <tr class="Qualifications-tableRow">
          <td class="Qualifications-tableColumn">Workday: Custom Integrations</td>
          <td class="Qualifications-tableColumn">Workday</td>
          <td class="Qualifications-tableColumn">2022-06</td>
          <router-link :to="{name: 'SideWorkday'}"><td class="Qualifications-CtableColumn">Click to view</td></router-link>
        </tr>
        <tr class="Qualifications-tableRow">
          <td class="Qualifications-tableColumn">National Senior Certificate</td>
          <td class="Qualifications-tableColumn">Technology High School of Middleburg</td>
          <td class="Qualifications-tableColumn">2012-11</td>
          <td class="Qualifications-tableColumn"></td>
        </tr>
      </table><br><br><br>
      <div class="functionButtons">
          <router-link class="link" :to="{name: 'Experience'}"><button class="previous">Previous</button></router-link>
          <router-link class="link" :to="{name: 'Certifications'}"><button class="next">Next</button></router-link>
        </div>
    </div>
    <div v-show="mobile" class="mobile">
      <br>
      <table class="QualificationsMob">
        <tr>
          <td>Bachelor of Science in Information Technology</td>
        </tr>
        <tr>
          <td>Workday: HCM Essential Concepts Consulting Core</td>
        </tr>
        <tr>
          <td>Workday: End-to-End Connectors</td>
        </tr>
        <tr>
          <td>Workday: Custom Integrations</td>
        </tr>
        <tr>
          <td>National Senior Certificate</td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td><a href="../assets/Combine_Results.pdf" download>
            <button class="next">Download</button>
          </a></td>
        </tr>
      </table>
      <div class="functionButtons">
          <router-link :to="{name: 'Certifications'}"><button class="next">Next</button></router-link>
        </div>
    </div>
  </div>
</template>

<script>

import navBar from '@/components/navBar.vue'

export default {
  name: 'QualificationsView',
  data () {
    return {
      scrollNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      component: null
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
    navBar
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
  margin-top: 30px;
}
.Qualifications-table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  font-size: 12px;
}
.Qualifications-tableColumn, .Qualifications-tableTitle, .Qualifications-CtableColumn {
  width: 25%;
}
.Qualifications-tableTitle{
  text-transform: uppercase;
  font-weight: 700;
}

.Qualifications-tableRow, .Qualifications-tableColumn, .Qualifications-CtableColumn {
  text-align: left;
  padding: 16px;
}
.Qualifications-tableColumn1{
  text-align: left;
  padding: 16px;
}

.Qualifications-tableRow:nth-child(even) {
  background-color: #cbcaca90;
}
.Qualifications-CtableColumn {
  font-size: 10px;
  &:hover {
    background-color: black;
    color: #00afea;
    font-size: 18px;
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
