<template>
    <div class="Crossvue">
        <table class="CrossVueTable">
            <tr class="CrossVueRow">
                <td class="CrossVueTD"><img class="empLogo" src="../assets/crossvue.png"></td>
                <td class="Title">CrossVue</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Work Title:</td>
                <td class="CrossVueTD">Workday Integration Specialist</td>
                <td class="space"></td>
                <td class="Title">Date Range:</td>
                <td class="CrossVueTD">2022 to current</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Position Type:</td>
                <td class="CrossVueTD">Remote (Full-Time)</td>
                <td class="space"></td>
                <td class="Title">Locations:</td>
                <td class="CrossVueTD">USA</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Reference:</td>
                <td class="CrossVueTD">Henry Snyman (Director) +27 84 758 1258</td>
                <td class="space"></td>
                <td class="Title">Website:</td>
                <td class="CrossVueTD"><a href="https://www.crossvue.com/">https://www.crossvue.com/</a></td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Reference:</td>
                <td class="CrossVueTD">Heather Roney (USA Integrations Director) <a href="mailto:hroney@crossvue.com">hroney@crossvue.com</a></td>
                <td class="space"></td>
                <td class="CrossVueTD"></td>
            </tr>
        </table>
        <hr><br>
        <table>
            <tr class="CrossVueRow">
                <td class="btotmTitle">Description</td>
                <td></td>
                <td class="btotmTitle">Projects and responsibilities</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="CrossVueTD">Delivering of quality Workday integrations for Post-Production and implementations to Workday clients in the United States. Workday is a global HCM system, and my role at CrossVue was to import data from legacy systems into Workday by using Integrations.
                    I also built integrations from Workday to other systems (Vendor/Client systems) <br><a href="https://www.workday.com">https://www.workday.com</a></td>
                <td></td>
                <td class="botumCrossVueTD">
                    <ul>
                        <li>Grosvenor Capital Management Holdings LLP (USA) - Creation of CCB E2E connectors for benefit vendor. Also Creation of custom integration.
                            Completed project from start to end with a successful go-live in productions</li>
                        <li>SitusAMC Holdings Corporation (USA) - Creation of Financial E2E connectors with the use of ISO20022 and custom integrations. Also the creation of BIRT (Business Intelligence Reporting Tool) for Check prints. Configure the BIA2 and MTN950 inbound integrations
                            and ACH outbound integrations. Also creation of custom CIC integrations for HCM. With the use of custom integrations and reporting I also created the Positive Pay outbound integrations</li>
                        <li>Foreside Finacial Group, LLC (USA) - Successful implementations of ISO20022 ACH, Wires, and international wires<br><br><br></li>
                        <li>Among all the integration responsibilities, I was also responsible for liaising and advising clients to execute leading business practices. My role also included virtually communicating with vendors, clients, and fellow employees.
                        </li>
                    </ul>
                </td>
            </tr>
        </table><br><br><br><br>
            <div class="functionButtons">
        <router-link class="link" :to="{name: 'Intro'}"><button class="previous">Previous</button></router-link>
        <router-link class="link" :to="{name: 'Qualifications'}"><button class="next">Next</button></router-link>
    </div>

    </div>
</template>

<script>
export default {
  name: 'CrossVue',
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
