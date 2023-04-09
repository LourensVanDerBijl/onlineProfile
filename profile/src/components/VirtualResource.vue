<template>
    <div class="VirtualResource">
      <table class="CrossVueTable">
            <tr class="CrossVueRow">
                <td class="CrossVueTD"><img class="empLogo" src="../assets/VrImg-removebg-preview.png"></td>
                <td class="Title">VirtualResources</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Work Title:</td>
                <td class="CrossVueTD">Workday Reporting Specialist</td>
                <td class="space"></td>
                <td class="Title">Date Range:</td>
                <td class="CrossVueTD">2021 to 2022</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Position Type:</td>
                <td class="CrossVueTD">Remote (Contractor)</td>
                <td class="space"></td>
                <td class="Title">Locations:</td>
                <td class="CrossVueTD">South Africa</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Reference:</td>
                <td class="CrossVueTD">Cristene Kruiter (Managing Director) <a href="mailto:cristene.kruiter@virtualresource.org">cristene.kruiter@virtualresource.org</a></td>
                <td class="space"></td>
                <td class="Title">Website:</td>
                <td class="CrossVueTD"><a href="https://www.virtualresource.org/">https://www.virtualresource.org</a></td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Reference:</td>
                <td class="CrossVueTD">Leanne Knorr (HR) <a href="mailto:leanne.knorr@virtualresource.org ">leanne.knorr@virtualresource.org </a></td>
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
                <td class="CrossVueTD">Employed as a Reporting specialist while training Workday Integrations. VirtualResource is a company that optimizes Workday for its clients and provides post-production support <br><a href="https://www.workday.com">https://www.workday.com</a></td>
                <td></td>
                <td class="botumCrossVueTD">
                    <ul>
                        <li>GSK Project - Working under the supervision of Vicky Micheal(a Reporting specialist), I was tasked with data correction and report reviews. I also build advanced reports with the use of calculated fields.</li>
                        <li>Unilever Project - Working with Teade Beltran I was tasked to independently assist clients globally with reporting queries and built requests. I created custom reports with custom notifications and fault finding on custom and matrix reports. I also created advanced calculations with the use of calculated fields, along with language translation notifications. I completed many tenant-to-tenant migrations and implemented Workday security</li>
                    </ul>
                </td>
            </tr>
        </table><br><br><br><br>
    </div>
</template>

<script>
export default {
  name: 'VirtualResource',
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
