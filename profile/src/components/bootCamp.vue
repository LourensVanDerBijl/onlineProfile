<template>
    <div class="Bootcamp">
      <table class="CrossVueTable">
            <tr class="CrossVueRow">
                <td class="CrossVueTD"><img class="empLogo" src="../assets/Voluntary3-removebg-preview.png"></td>
                <td class="Title">BootCamp Dev Courses</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Work Title:</td>
                <td class="CrossVueTD">Front-End Assistance</td>
                <td class="space"></td>
                <td class="Title">Date Range:</td>
                <td class="CrossVueTD">2019 to 2021</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Position Type:</td>
                <td class="CrossVueTD">Voluntary</td>
                <td class="space"></td>
                <td class="Title">Locations:</td>
                <td class="CrossVueTD">South Africa</td>
            </tr>
            <tr class="CrossVueRow">
                <td class="Title">Reference:</td>
                <td class="CrossVueTD">Ronica Singh <a href="mailto:ronica.singh80@gmail.com">ronica.singh80@gmail.com</a></td>
                <td class="space"></td>
                <td class="CrossVueTD"></td>
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
                <td class="CrossVueTD">Together with a team from various sectors of information technology, we created a platform where South African developers can join. The aim of this platform is to share ideas and provide assistance to new and old developers. The network started off as a Facebook group and escalated to a Facebook page and a Whatsapp group. To enhance the learning capabilities of new developers they created an online Holiday boot camp for developers that wish to learn coding languages that were not necessarily covered in their degrees.</td>
                <td></td>
                <td class="botumCrossVueTD">
                    <ul>
                        <li>Social Media Platform - I provide my assistance with helping to solve code-related questions on social media platforms. I also help manage these platforms by insuring that group members follow the rules to maintain authentication of the platform's values</li>
                        <li>BootCamp - I assisted in some of the developments for the online profile of the Bootcamp attendees.<br><br></li>
                        <li>The BootCamp learning would have been a non-profitable program with the idea of advancing the South African Coding community. Unfortunately, due to employment circumstances, I had to leave the project before its completion.</li>
                    </ul>
                </td>
            </tr>
        </table><br><br><br><br>
    </div>
</template>

<script>
export default {
  name: 'bootCamp',
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
