<template>
    <navBar/>
    <router-view/>
    <br><br>

  <div class="content">
    <!--PC-->
    <div v-show="!mobile" class="notMobile">
      <div class="Column1">
        <table class="PP">
          <tr>
            <td class="col1"><img class="profilePic" src="../assets/100010001-removebg-preview.png"></td>
            <td class="intro"><u>Lourens Van Der Bijl</u><br>Workday Integrations Specialist<br>Workday Reporting Specialist<br>Software Developer<br>Front-End Developer</td>
          </tr>
        </table>
        <div class="motivation">
          <br>
          With a goal-driven and strive-for-success attitude. I bring my authentic self to the workforce, to assist companies to achieve their financial and targeted goals. I specialize in implementing, updating, up-keeping,
          and new development of modern or legacy software. I take as much pride in my appearance as I do in my work, and can
          take responsibility and accountability for my actions. As my past learning adventures can contest I am a fast learner
          and a high achiever. I demonstrate excellent verbal and written communication skills and can formally and professionally
          work with company clients and stakeholders. I consider myself a good leader, that can perform
          extremely well in a team and independently. I easily adapt to challenging situations or scenarios and dedicate
          myself to resolving  conflict and operational blockers.
        </div>
      </div>
      <div class="Column2">
        <table class="PPInfo">
          <tr class="two2">
            <td class="one">FIRST NAME:</td>
            <td class="one">Louis Lourens</td>
          </tr>
          <tr class="two">
            <td class="one">LAST NAME:</td>
            <td class="one">Van Der Bijl</td>
          </tr>
          <tr class="two2">
            <td class="one">Mobile Number</td>
            <td class="one">+27 60 526 1031</td>
          </tr>
          <tr class="two2">
            <td class="one">Email Address</td>
            <td class="one">lourensvdbijl@gmail.com</td>
          </tr>
          <tr class="two">
            <td class="one">Title</td>
            <td class="one">MR</td>
          </tr>
          <tr class="two2">
            <td class="one">PROFESSIONAL TITLE</td>
            <td class="one">Software Developer</td>
          </tr>
          <tr class="two">
            <td class="one">HIGHEST EDUCATION</td>
            <td class="one">Bachelor's Degree</td>
          </tr>
          <tr class="two2">
            <td class="one">Employment Level</td>
            <td class="one">Senior</td>
          </tr>
          <tr class="two">
            <td class="one">DATE OF BIRTH</td>
            <td class="one">1994-09-02</td>
          </tr>
          <tr class="two2">
            <td class="one">NATIONALITY</td>
            <td class="one">South African</td>
          </tr>
          <tr class="two">
            <td class="one">GENDER</td>
            <td class="one">Male</td>
          </tr>
          <tr class="two2">
            <td class="one">MARITAL Status</td>
            <td class="one">Married</td>
          </tr>
          <tr class="two">
            <td class="one">Health status</td>
            <td class="one">excellent</td>
          </tr>
          <tr class="two2">
            <td class="one">Driver's Licence</td>
            <td class="one">Yes</td>
          </tr>
          <tr class="two">
            <td class="one">Current location</td>
            <td class="one">Cape Town, South Africa</td>
          </tr>
          <tr class="two2">
            <td class="one">Willing to Relocate</td>
            <td class="one">Yes</td>
          </tr>
        </table>
      </div>
      <div class="functionButtons">
        <router-link :to="{name: 'Experience'}"><button class="next">Next</button></router-link>
    </div>
 </div>
    <!--Mobile-->
    <div v-show="mobile" class="mobile">
      <br>
      <div class="IntoPicMobile">
        <img class="ImgMobile" src="../assets/100010001-removebg-preview.png">
      </div>
      <div class="IntoIntroMobile">
        <b>Lourens Van Der Bijl</b><br>Workday Integrations Specialist<br><b>Workday Reporting Specialist</b><br>Software Developer<br><b>Front-End Developer</b><br><br>
      </div>
      <div class="introParaMobile">
        With a goal-driven and strive-for-success attitude. I bring my authentic self to the workforce, with the aim
          to assist companies to achieve their financial and targeted goals. I specialize in implementing, updating, up-keeping,
          and new development of modern or legacy software. I take as much pride in my appearance as I do in my work, and can
          take responsibility and accountability for my actions. As my past learning adventures can contest I am a fast learner
          and a high achiever. I demonstrate excellent verbal and written communication skills and can formally and professionally
          work with company clients and stakeholders. I definitely consider myself good leadership material, that can perform
          extremely well in a team and in independent work. I easily adapt to challenging situations or scenarios and dedicate
          myself to resolving conflict and operational blockers.
      </div>
      <div class="introtableDivMobile">
        <table class="IntoTableMobile">
          <tr class="IntroTableRowMobile">
            <td class="IntroTableTDMobile">
              Louis Lourens
            </td>
          </tr>
          <tr class="IntroTableRowMobile">
            <td class="IntroTableTDMobile">
              Van Der Bijl
            </td>
          </tr>
          <tr class="IntroTableRowMobile">
            <td class="IntroTableTDMobile">
              1994-09-02
            </td>
          </tr>
          <tr class="IntroTableRowMobile">
            <td class="IntroTableTDMobile">
              Software Developer
            </td>
          </tr>
          <tr class="IntroTableRowMobile">
            <td class="IntroTableTDMobile">
              +27 60 526 1031
            </td>
          </tr>
          <tr class="IntroTableRowMobile">
            <td class="IntroTableTDMobile">
              lourensvdbijl@gmail.com
            </td>
          </tr>
          <tr class="IntroTableRowMobile">
            <td class="IntroTableTDMobile">
              CAPE TOWN, SOUTH AFRICA
            </td>
          </tr>
          <tr class="IntroTableRowMobile">
            <td class="IntroTableTDMobile">
              MALE
            </td>
          </tr>
          <tr class="IntroTableRowMobile">
            <td class="IntroTableTDMobile">
              Married
            </td>
          </tr>
          <tr class="IntroTableRowMobile">
            <td class="IntroTableTDMobile">
              Excellent Health
            </td>
          </tr>
          <tr class="IntroTableRowMobile">
            <td class="IntroTableTDMobile">
              Code A and B Drivers license
            </td>
          </tr>
        </table>
        <br><br>
        <div class="functionButtons">
          <router-link :to="{name: 'Experience'}"><button class="next">Next</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import navBar from '@/components/navBar.vue'

export default {
  name: 'HomeView',
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
.notMobile {
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
  text-align: center;
}
* {
  box-sizing: border-box;
}

/* Create two equal columns that floats next to each other */
.Column1 {
  float: left;
  width: 38%;
  margin: 15px;
  padding-top: 20px;
  background-color: RGB(241, 244, 246);
  align-items: center;
}
.Column2 {
  float: left;
  width: 55%;
  margin: 15px;
  padding-top: 16px;
  background-color: RGB(241, 244, 246);
  align-items: center;
}
.PPInfo {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  height: 100%;
}
.intro{
  padding-left: 15px;
  font-size: 17px;
  background-color: rgb(6, 5, 5);
  color: rgb(255, 255, 255);
}

.two {
  text-align: left;
  text-transform: uppercase;
  font-size: 12px;
  border-bottom: 1px dotted black;
}

tr:nth-child(even) {
  background-color: RGB(241, 244, 246);
}
.profilePic {
  width: 160px;
  height: 160px;
  border-radius: 40px;
}
.PP {
  width: 100%;
  left: 50%;
  border: 1px solid black;
}
.col1 {
  width: 30%;
  background-color: black;
}
.one {
  text-transform: uppercase;
}
.functionButtons{
    bottom: 0;
    width: 100%;
    height: 40PX;
    text-align: right;
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
.nextLink {
  border:none;
  color: whitesmoke;
}
.mobile{
  width:100%;
}
.IntoPicMobile{
  width: 50%;
  float: left;
  position: relative;
}
.IntoIntroMobile{
  width: 50%;
  float: left;
  position: relative;
}
.ImgMobile{
  width: 70%;
}
.introParaMobile{
  padding: 5%;
  width: 100%;
  text-align: center;
}

</style>
