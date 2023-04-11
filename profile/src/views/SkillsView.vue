<template>
  <div class="topNav">
    <navBar/>
    <router-view/>
  </div>
  <br><br>
  <div class="content">
    <div v-show="!mobile" class="notMobile">
      <div class="workday">
        <table class="skillTable">
          <tr class="skillTableRow">
            <th colspan="2"><img class="CertImg2" src="../assets/workday-removebg-preview.png"></th>
          </tr>
          <tr class="skillTableRow">
            <td>Customer Queries</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:80%">80%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Workday: HCM</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:75%">75%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Workday: Benefits</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:77%">77%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Workday: Fins</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:80%">80%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Workday: Reporting</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:81%">81%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Workday: Calculated Fields</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:90%">90%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Workday: Migrations</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:92%">92%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Workday: Integrations Core Connectors</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:90%">90%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Workday: Integrations Enterprise Interface Builders (EIB's)</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:92%">92%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Workday: Integrations Custom Integrations</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:95%">95%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Workday: Integrations WebHooks</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:72%">72%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Workday: Business Intelligence and Reporting Tools (BIRT's)</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:59%">59%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Workday: Functional Setup</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:59%">59%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Workday: Post-Production support</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:75%">75%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Workday: Implementation</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:83%">83%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Workday: Workday Community</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:88%">88%</div>
              </div>
            </td>
          </tr>
        </table><br><br><br><br>

      </div>
      <div class="workday">
        <table class="skillTable">
          <tr class="skillTableRow">
            <th colspan="2"><img class="CertImg3" src="../assets/ProgramLanguages-removebg-preview.png"></th>
          </tr>
          <tr class="skillTableRow">
            <td>HTML/CSS</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:90%">90%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>HTML5/CSS3</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:85%">85%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>JavaScript</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:85%">85%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>PHP</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:75%">75%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>C#</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:80%">80%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>JAVA</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:75%">75%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>C++</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:65%">65%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>VB.net</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:85%">85%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>WordPress</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:57%">57%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Mobile App Development -Android Studio (Java)</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:80%">80%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>XSLT</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:85%">85%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>XML</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:85%">85%</div>
              </div>
            </td>
          </tr>
        </table><br><br><br><br>
      </div>
      <div class="workday">
        <table class="skillTable">
          <tr class="skillTableRow">
            <th colspan="2"><img class="CertImg3" src="../assets/JsFramework-removebg-preview.png"></th>
          </tr>
          <tr class="skillTableRow">
            <td>VUE.js</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:90%">90%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Bootstrap</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:90%">90%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>jQUERY</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:85%">85%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Ajax</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:75%">75%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>Json</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:80%">80%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>AmChart.js</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:90%">90%</div>
              </div>
            </td>
          </tr>
          <tr class="skillTableRow">
            <td>W3.js</td>
            <td class="PBarTD">
              <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge" style="width:75%">75%</div>
              </div>
            </td>
          </tr>
        </table><br><br><br><br>
      </div>
      <div class="workday1">
        <table class="skillTable">
          <tr class="skillTableRow">
            <th colspan="2"><img class="CertImg3" src="../assets/Relevent-removebg-preview.png"></th>
          </tr>
          <tr class="skillTableRow">
            <td>Fluent in English and Afrikaans</td>
          </tr>
          <tr class="skillTableRow">
            <td>Source control/version control (GitHub, GIT, etc.)</td>
          </tr>
          <tr class="skillTableRow">
            <td>Databases</td>
          </tr>
          <tr class="skillTableRow">
            <td>Information Systems</td>
          </tr>
          <tr class="skillTableRow">
            <td>IT project management</td>
          </tr>
          <tr class="skillTableRow">
            <td>Cloud Computing</td>
          </tr>
          <tr class="skillTableRow">
            <td>Cyber security</td>
          </tr>
          <tr class="skillTableRow">
            <td>Networking</td>
          </tr>
          <tr class="skillTableRow">
            <td>Experienced in Object-Oriented Programming (OOP)</td>
          </tr>
          <tr class="skillTableRow">
            <td>Experienced in Object-Oriented Design (OOD)</td>
          </tr>
          <tr class="skillTableRow">
            <td>Experienced in Software testing and debugging</td>
          </tr>
          <tr class="skillTableRow">
            <td>Knowledge of operating systems</td>
          </tr>
          <tr class="skillTableRow">
            <td>Experienced with software applications such as Microsoft Office etc.</td>
          </tr>
          <tr class="skillTableRow">
            <td>Knowledge of the SDLC</td>
          </tr>
          <tr class="skillTableRow">
            <td>Cross-Platform software design</td>
          </tr>
        </table><br><br><br><br>
      </div>
      <div class="workday1">
        <table class="skillTable">
          <tr class="skillTableRow">
            <th colspan="2"><img class="CertImg3" src="../assets/Personal_Skills-removebg-preview.png"></th>
          </tr>
          <tr class="skillTableRow">
            <td>Critical and logical mindset with a problem-solving attitude.</td>
          </tr>
          <tr class="skillTableRow">
            <td>Great time management skills.</td>
          </tr>
          <tr class="skillTableRow">
            <td>I am self-motivated.</td>
          </tr>
          <tr class="skillTableRow">
            <td>I have excellent verbal and written communication skills.</td>
          </tr>
          <tr class="skillTableRow">
            <td>I am a high achiever and a fast learner.</td>
          </tr>
          <tr class="skillTableRow">
            <td>Ability to multitask.</td>
          </tr>
          <tr class="skillTableRow">
            <td>Team player but also a successful individual employee.</td>
          </tr>
          <tr class="skillTableRow">
            <td>Great team-leading abilities.</td>
          </tr>
          <tr class="skillTableRow">
            <td>I am creative.</td>
          </tr>
          <tr class="skillTableRow">
            <td>I can take accountability for my actions.</td>
          </tr>
          <tr class="skillTableRow">
            <td>I am approachable and helpful.</td>
          </tr>
          <tr class="skillTableRow">
            <td>I value growth, I put achievements above effort.</td>
          </tr>
        </table><br><br><br><br>
      </div>
      <div class="functionButtons">
        <router-link :to="{name: 'Certifications'}"><button class="next">Previous</button></router-link>
    </div>
    </div>
    <div v-show="mobile" class="mobile">
      <br>
      <table class="CertificationTableMob">
        <tr>
          <img class="CertIMGMob1" src="../assets/workday-removebg-preview.png">
        </tr>
        <tr>
          <td>Customer Queries</td>
        </tr>
        <tr>
          <td>Workday: HCM</td>
        </tr>
        <tr>
          <td>Workday: Benefits</td>
        </tr>
        <tr>
          <td>Workday: Fins</td>
        </tr>
        <tr>
          <td>Workday: Reporting</td>
        </tr>
        <tr>
          <td>Workday: Calculated Fields</td>
        </tr>
        <tr>
          <td>Workday: Migrations</td>
        </tr>
        <tr>
          <td>Workday: Integrations Core Connectors</td>
        </tr>
        <tr>
          <td>Workday: Integrations Enterprise Interface Builders (EIB's)</td>
        </tr>
        <tr>
          <td>Workday: Integrations Custom Integrations</td>
        </tr>
        <tr>
          <td>Workday: Integrations WebHooks</td>
        </tr>
        <tr>
          <td>Workday: Business Intelligence and Reporting Tools (BIRT's)</td>
        </tr>
        <tr>
          <td>Workday: Functional Setup</td>
        </tr>
        <tr>
          <td>Workday: Post-Production support</td>
        </tr>
        <tr>
          <td>Workday: Implementation</td>
        </tr>
        <tr>
          <td>Workday: Workday Community</td>
        </tr>
      </table><br><br>
      <table class="CertificationTableMob">
        <tr>
          <img class="CertIMGMob1" src="../assets/ProgramLanguages-removebg-preview.png">
        </tr>
        <tr>
          <td>HTML/CSS</td>
        </tr>
        <tr>
          <td>HTML5/CSS3</td>
        </tr>
        <tr>
          <td>JavaScript</td>
        </tr>
        <tr>
          <td>PHP</td>
        </tr>
        <tr>
          <td>C#</td>
        </tr>
        <tr>
          <td>JAVA</td>
        </tr>
        <tr>
          <td>C++</td>
        </tr>
        <tr>
          <td>VB.net</td>
        </tr>
        <tr>
          <td>WordPress</td>
        </tr>
        <tr>
          <td>Mobile App Development -Android Studio (Java)</td>
        </tr>
        <tr>
          <td>XML</td>
        </tr>
        <tr>
          <td>XSLT</td>
        </tr>
      </table><br><br>
      <table class="CertificationTableMob">
        <tr>
          <img class="CertIMGMob1" src="../assets/JsFramework-removebg-preview.png">
        </tr>
        <tr>
          <td>VUE.js</td>
        </tr>
        <tr>
          <td>Bootstrap</td>
        </tr>
        <tr>
          <td>jQUERY</td>
        </tr>
        <tr>
          <td>Ajax</td>
        </tr>
        <tr>
          <td>Json</td>
        </tr>
        <tr>
          <td>AmChart.js</td>
        </tr>
        <tr>
          <td>W3.js</td>
        </tr>
      </table><br><br>
      <table class="CertificationTableMob">
        <tr>
          <img class="CertIMGMob1" src="../assets/Relevent-removebg-preview.png">
        </tr>
        <tr>
          <td>Fluent in English and Afrikaans</td>
        </tr>
        <tr>
          <td>Source control/version control (GitHub, GIT, etc.)</td>
        </tr>
        <tr>
          <td>Databases</td>
        </tr>
        <tr>
          <td>Information Systems</td>
        </tr>
        <tr>
          <td>IT project management</td>
        </tr>
        <tr>
          <td>Cloud Computing</td>
        </tr>
        <tr>
          <td>Cyber security</td>
        </tr>
        <tr>
          <td>Networking</td>
        </tr>
        <tr>
          <td>Experienced in Object-Oriented Programming (OOP)</td>
        </tr>
        <tr>
          <td>Experienced in Object-Oriented Design (OOD)</td>
        </tr>
        <tr>
          <td>Experienced in Software testing and debugging</td>
        </tr>
        <tr>
          <td>Knowledge of operating systems</td>
        </tr>
        <tr>
          <td>Experienced with software applications such as Microsoft Office etc.</td>
        </tr>
        <tr>
          <td>Knowledge of the SDLC</td>
        </tr>
        <tr>
          <td>Cross-Platform software design</td>
        </tr>
      </table><br><br>
      <table class="CertificationTableMob">
        <tr>
          <img class="CertIMGMob1" src="../assets/Personal_Skills-removebg-preview.png">
        </tr>
        <tr>
          <td>Critical and logical mindset with a problem-solving attitude.</td>
        </tr>
        <tr>
          <td>Great time management skills.</td>
        </tr>
        <tr>
          <td>I am self-motivated</td>
        </tr>
        <tr>
          <td>I have excellent verbal and written communication skills.</td>
        </tr>
        <tr>
          <td>I am a high achiever and a fast learner.</td>
        </tr>
        <tr>
          <td>Ability to multitask.</td>
        </tr>
        <tr>
          <td>Team player but also a successful individual employee.</td>
        </tr>
        <tr>
          <td>Great team-leading abilities.</td>
        </tr>
        <tr>
          <td>I am creative.</td>
        </tr>
        <tr>
          <td>I can take accountability for my actions.</td>
        </tr>
        <tr>
          <td>I am approachable and helpful.</td>
        </tr>
        <tr>
          <td>I value growth, I put achievements above effort.</td>
        </tr>
      </table><br><br>
    </div>
  </div>
</template>

<script>

import navBar from '@/components/navBar.vue'

export default {
  name: 'SkillsView',
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
  margin-top: 5px;
}
.workday{
  width: 100%;
  padding: 2%;
}
.workday1{
  width: 45%;
  padding: 2%;
  text-align: center;
  float: left;
}
.skillTable {
  background-color: rgb(128, 128, 128);
}
.skillTableRow {
  background-color: rgba(224, 222, 222, 0.985);
}
.CertImg2 {
  width: 10%;
}
.CertImg3 {
  width: 20%;
}
.PBarTD {
  width: 50%;
  text-align: center;
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
.mobile{
  width: 100%;
}
.CertificationTableMob{
  width: 100%;
  font-size: 8px;
}
.CertIMGMob1{
  width: 100%;
}
</style>
