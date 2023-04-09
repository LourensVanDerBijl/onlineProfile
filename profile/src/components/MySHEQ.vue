<template>
    <div class="MySHEQ">
      <table class="CrossVueTable">
            <tr class="CrossVueRow">
                <td class="CrossVueTD"><img class="empLogo" src="../assets/mySHEQ-removebg-preview.png"></td>
                <td class="Title">MySHEQ</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Work Title:</td>
                <td class="CrossVueTD">Front-End Developer</td>
                <td class="space"></td>
                <td class="Title">Date Range:</td>
                <td class="CrossVueTD">2020 to 2021</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Position Type:</td>
                <td class="CrossVueTD">Remote (Part-Time)</td>
                <td class="space"></td>
                <td class="Title">Locations:</td>
                <td class="CrossVueTD">South Africa</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Reference:</td>
                <td class="CrossVueTD">Neil Van Der Bijl (Managing Director) <a href="mailto:neil@mysheq.com">neil@mysheq.com</a></td>
                <td class="space"></td>
                <td class="Title">Website:</td>
                <td class="CrossVueTD"><a href="https://www.mysheq.com">https://www.mysheq.com</a></td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title"><br><br></td>
                <td class="CrossVueTD"></td>
            </tr>
        </table>
        <hr><br>
        <table>
            <tr class="CrossVueRow">
                <td class="btotmTitle">Description</td>
                <td></td>
                <td class="btotmTitle">Project and responsibilities</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="CrossVueTD">Employed as a Part-time Frond-End developer. MySHEQ is an online Health And Safety Managing system. The system enchances its clients to easily and accurately manage all safety-related tasks on a global scale</td>
                <td></td>
                <td class="botumCrossVueTD">
                    <ul>
                        <li>Coding integrations - Working with the team I was tasked with integrating all legacy coding languages (knockout.js, React.js, etc.) to the new Vue.js (javaScript Libary)</li>
                        <li>Anti-cheat system - Working in a team - I assisted in creating the code for the anti-cheat system. Using Vue.js the anti-cheat system will capture random images and audio recordings of people taking health and safety online exams. The anti-cheat system will also prevent users from opening additional internet tabs or other applications.</li>
                        <li>Implementing Grapths - independently I was tasked with implementing amp-chart3, a JavaScript library for responsive graphs using data on the system</li>
                    </ul>
                </td>
            </tr>
        </table><br><br><br><br>
    </div>
</template>
<script>
export default {
  name: 'MySHEQ',
  data () {
    return {
      mobile: null,
      mobileFoot: null,
      windowWidth: null
    }
  },
  created () {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  methods: {
    toggleMobileNav () {
      this.mobileFoot = !this.mobileFoot
    },
    checkScreen () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 988) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileFoot = false
    }
  }
}
</script>

<style lang="scss" scoped>
.empLogo{
    width: 60px;
    height: 60px;
}
.CrossVueTable{
    text-transform: none;
}
.Title{
    font-weight: bolder;
    padding-right: 5px;
}
.space {
    width: 50px;
}
.btotmTitle {
    width: 45%;
    font-weight: bolder;
    text-transform: uppercase;
}
.CrossVueTD{
    vertical-align: top;
}
.botumCrossVueTD {
  padding-right: 20px;
}
</style>
