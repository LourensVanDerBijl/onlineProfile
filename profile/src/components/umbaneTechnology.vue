<template>
    <div class="UmbaneTech">
      <table class="CrossVueTable">
            <tr class="CrossVueRow">
                <td class="CrossVueTD"><img class="empLogo" src="../assets/Umbane2-removebg-preview.png"></td>
                <td class="Title">Umbane Technology</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Work Title:</td>
                <td class="CrossVueTD">Network Operations Support Team Leader</td>
                <td class="space"></td>
                <td class="Title">Date Range:</td>
                <td class="CrossVueTD">2012 to 2021</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Position Type:</td>
                <td class="CrossVueTD">On-Site (Full-Time)</td>
                <td class="space"></td>
                <td class="Title">Locations:</td>
                <td class="CrossVueTD">South Africa</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Reference:</td>
                <td class="CrossVueTD">Mark Smith (Managing Director) <a href="mailto:mark@umbanetechnology.co.za ">mark@umbanetechnology.co.za </a></td>
                <td class="space"></td>
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
                <td class="CrossVueTD">Employed as a Team leader for the implementation team. Umbane Technology is an implemntation telecommunications contractor, that provides its services to all the major ISP in South Africa. Umbane Technology conducts Site Surveys and Microwave Installations, upgrades, and recoveries</td>
                <td></td>
                <td class="botumCrossVueTD">
                    <ul>
                        <li>MTN-Project</li>
                        <li>Vodacom-Project</li>
                        <li>Telkom-Project</li>
                        <li>Rain-Project</li>
                        <li>Bitfest-Project</li>
                        <li>While working closely with network administrators and server engineers to deliver quality services, I also diagnose and resolve complex integrated customer issues for implementation, add-on, maintenance, and support of voice, data, VoIP, and CTI applications. I perform network operations, installations, and configurations for multiple telecommunication companies. I respond to service requests during and after business hours while maintaining an excellent attendance record. I manage quality assurance programs, including on-site evaluations, internal audits, and customer surveys</li>
                    </ul>
                </td>
            </tr>
        </table><br><br><br><br>
    </div>
</template>

<script>
export default {
  name: 'umbaneTechnology',
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
