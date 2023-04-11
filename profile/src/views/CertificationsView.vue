<template>
  <div class="topNav">
    <navBar/>
    <router-view/>
  </div>
  <br><br>
  <div class="content">
    <div v-show="!mobile" class="notMobile">
      <div class="linkedIn">
        <table>
          <tr>
            <th><img class="CertImg" src="../assets/linkedin-removebg-preview.png"></th>
          </tr>
          <tr>
            <td><a class="CertLink" href="https://www.linkedin.com/learning/certificates/eeaf71f9cca645d534093bc2debb85600a4b6f1c276d8776037bc43a3af04f69?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">Executive Presence on Video Conference Calls</a>
            </td>
          </tr>
          <tr>
            <td><a class="CertLink" href="https://www.linkedin.com/learning/certificates/a3499d0d1022b620543919a2a22c514db24bb58ea4ef9013ae78380a7ce48e05?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">Getting Started with Microsoft OneNote</a>
            </td>
          </tr>
          <tr>
            <td><a class="CertLink" href="https://www.linkedin.com/learning/certificates/8a32b3ab62317f8b40c56e907c748074629415addfd5e767a55ddef732d9fb62?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">HTML Essential Training</a>
            </td>
          </tr>
          <tr>
            <td> <a class="CertLink" href="https://www.linkedin.com/learning/certificates/d65e2c7234d5361b1b7a0cd0c3cd6272fc4f54a251ff73ed04a498d5443fc770?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">Learning OneNote Online (Microsoft 365)</a>
            </td>
          </tr>
          <tr>
            <td><a class="CertLink" href="https://www.linkedin.com/learning/certificates/b7758f3102bb3dcf870b1d1ed26a7ad48ed82385e5331ce5125f33d5d8e29d5f?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">OneNote 2016 Essential Training</a>
            </td>
          </tr>
          <tr>
            <td><a class="CertLink" href="https://www.linkedin.com/learning/certificates/a01f7366717ad154586091cccce10ec1d3d751f453e543279843481c1e88e75b?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">OneNote Tips and Tricks</a>
            </td>
          </tr>
          <tr>
            <td><a class="CertLink" href="https://www.linkedin.com/learning/certificates/80aae26490f3628c15f69fd96e1eac88288eed7adba2b2b16f8c940246b7ad53?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">Smartsheet Essential Training (2021)</a>
            </td>
          </tr>
          <tr>
            <td><a class="CertLink" href="https://www.linkedin.com/learning/certificates/368d93a5f6456af49f2a494e26fc531ed8df7ae65fc232fbc5681b4eedffd213?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">The Six Morning Habits of High Performers</a>
            </td>
          </tr>
          <tr>
            <td><a class="CertLink" href="https://www.linkedin.com/learning/certificates/62714787e4d487a5205ca6a89c5cd31f033276306d4866e40400dc521973f4d4?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">Time Management Tips: Communication</a>
            </td>
          </tr>
          <tr>
            <td><a class="CertLink" href="https://www.linkedin.com/learning/certificates/0573da01565809510d27402c515a94c9fb0393fcc1e14d6d9ab66ce4a2a2e219?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">XML Essential Training</a>
            </td>
          </tr>
          <tr>
            <td><a class="CertLink" href="https://www.linkedin.com/learning/certificates/771c9dd0432177f67b8b032a5c7ba980aff819291a646f309d5323a90722a7e9?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">Being an Effective Team Member</a>
            </td>
          </tr>
          <tr>
            <td><a class="CertLink" href="https://www.linkedin.com/learning/certificates/b82e3c9e7b6c5fdda53629c247c5aa419ee4fcc19247d19f7ae587aa9e4604ab?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">Developing Executive Presence</a>
            </td>
          </tr>
          <tr>
            <td><a class="CertLink" href="https://www.linkedin.com/learning/certificates/eeeba19ce7f69cf74cdd92947bcc5b0b84d2646474aa5cde72aac52c0cd272a2?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">Managing Projects with Microsoft Teams</a></td>
          </tr>
          <tr>
            <td><a class="CertLink" href="https://www.linkedin.com/learning/certificates/4560852d4278a1315f0d9e1a97a5bf8b268921ec0c6fadf94ff6686703a9b600?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">Microsoft Teams Essential Training (2019)</a></td>
          </tr>
          <tr>
            <td><a class="CertLink" href="https://www.linkedin.com/learning/certificates/cfd25442cd808ab53b91d73c3790a7aa71ae0268dab8a551887bc4e101f2f609?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">Proven Tips for Managing Your Time</a>
            </td>
          </tr>
          <tr>
            <td><a class="CertLink" href="https://www.linkedin.com/learning/certificates/9034ecc31b06287ad1fdecb8565006b8a4f55fc1f50e8ec517bad32434052cb1?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">The Secrets to Success at Work</a>
            </td>
          </tr>
          <tr>
            <td> <a class="CertLink" href="https://www.linkedin.com/learning/certificates/63270f6b8af6271a1e6af54b6a3abccf3d5f55f4980fafd8ddd423b84ba1a943?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">Tips for Working Remotely</a>
            </td>
          </tr>
          <tr>
            <td><a class="CertLink" href="https://www.linkedin.com/learning/certificates/f235b54715242f2829c4fd28411555747de9d6385abf76c284494b355e787080?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">Unconscious Bias</a>
            </td>
          </tr>
          <tr>
            <td>
              <a class="CertLink" href="https://www.linkedin.com/learning/certificates/9348a39612d7920e5aaeb8b4e0148dd04a2f7345706bc20cdbc7e9218853bc83?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D" target="_blank" rel="noopener noreferrer">Unconscious Bias (2017)</a>
            </td>
          </tr>
        </table>
      </div>

      <div class="SoloLearn">
        <table>
          <tr>
            <th><img class="CertImg11" src="../assets/sololearn-removebg-preview.png"></th>
          </tr>
          <tr>
            <td>
              <a class="CertLink" href="https://www.sololearn.com/certificates/CT-8PL4J8OO" target="_blank" rel="noopener noreferrer">
              CSS
              </a>
            </td>
          </tr>
          <tr>
              <td>
                <a class="CertLink" href="https://www.sololearn.com/certificates/CT-2U1HST9Y" target="_blank" rel="noopener noreferrer">
                HTML</a>
            </td>
          </tr>
          <tr>
            <td>
              <a class="CertLink" href="https://www.sololearn.com/certificates/CT-VEDUG5XS" target="_blank" rel="noopener noreferrer">
              JavaScript</a>
            </td>
          </tr>
          <tr>
            <td>
              <a class="CertLink" href="https://www.sololearn.com/certificates/CT-GJWVVPJA" target="_blank" rel="noopener noreferrer">PHP</a>
            </td>
          </tr>
          <tr>
            <td>
              <a class="CertLink" href="https://www.sololearn.com/certificates/CT-AECJ6CL3" target="_blank" rel="noopener noreferrer">SQL</a>
            </td>
          </tr>
        </table>
      </div>

      <div class="workday12">
        <table>
          <tr>
            <th><img class="CertImg12" src="../assets/workday-removebg-preview.png"></th>
          </tr>
          <tr>
            <td>
              <router-link class="CertLink" :to="{name: 'SideWorkday2'}">Integration Exam 2023R1</router-link>
            </td>
          </tr>
          <tr>
              <td>
                <router-link class="CertLink" :to="{name: 'SideWorkday2'}">Tools Exam 2023R1</router-link>
            </td>
          </tr>
          <tr>
            <td>
              <router-link class="CertLink" :to="{name: 'SideWorkday2'}">Cross Functional Exam 2023R1</router-link>
            </td>
          </tr>
          <tr>
            <td>
              <router-link class="CertLink" :to="{name: 'SideWorkday2'}">Security & Privacy Exam 2023R1</router-link>
            </td>
          </tr>
          <tr>
            <td>
              <router-link class="CertLink" :to="{name: 'SideWorkday2'}">End to End Connector Integration Exam 2023R1</router-link>
            </td>
          </tr>

          <tr>
            <td>
              <router-link class="CertLink" :to="{name: 'SideWorkday2'}">Tools Exam 2022R2</router-link>
            </td>
          </tr>
          <tr>
            <td>
              <router-link class="CertLink" :to="{name: 'SideWorkday2'}">Cross Functional Exam 2022R2</router-link>
            </td>
          </tr>
          <tr>
            <td>
              <router-link class="CertLink" :to="{name: 'SideWorkday2'}">Security & Privacy Exam 2022R2</router-link>
            </td>
          </tr>
          <tr>
            <td>
              <router-link class="CertLink" :to="{name: 'SideWorkday2'}">Integration Exam 2022R2</router-link>
            </td>
          </tr>
        </table>
      </div>
      <div class="functionButtons">
          <router-link class="link" :to="{name: 'Qualifications'}"><button class="previous">Previous</button></router-link>
          <router-link class="link" :to="{name: 'Skills'}"><button class="next">Next</button></router-link>
        </div>

    </div>
    <div v-show="mobile" class="mobile">
      <br>
      <table class="CertificationTableMob">
        <tr>
          <td><a href="#"><img class="CertIMGMob" src="../assets/linkedin-removebg-preview.png"></a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/eeaf71f9cca645d534093bc2debb85600a4b6f1c276d8776037bc43a3af04f69?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">Executive Presence on Video Conference Calls</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/a3499d0d1022b620543919a2a22c514db24bb58ea4ef9013ae78380a7ce48e05?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">Getting Started with Microsoft OneNote</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/8a32b3ab62317f8b40c56e907c748074629415addfd5e767a55ddef732d9fb62?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">HTML Essential Training</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/d65e2c7234d5361b1b7a0cd0c3cd6272fc4f54a251ff73ed04a498d5443fc770?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">Learning OneNote Online (Microsoft 365)</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/b7758f3102bb3dcf870b1d1ed26a7ad48ed82385e5331ce5125f33d5d8e29d5f?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">OneNote 2016 Essential Training</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/a01f7366717ad154586091cccce10ec1d3d751f453e543279843481c1e88e75b?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">OneNote Tips and Tricks</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/80aae26490f3628c15f69fd96e1eac88288eed7adba2b2b16f8c940246b7ad53?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">Smartsheet Essential Training (2021)</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/368d93a5f6456af49f2a494e26fc531ed8df7ae65fc232fbc5681b4eedffd213?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">The Six Morning Habits of High Performers</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/62714787e4d487a5205ca6a89c5cd31f033276306d4866e40400dc521973f4d4?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">Time Management Tips: Communication</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/0573da01565809510d27402c515a94c9fb0393fcc1e14d6d9ab66ce4a2a2e219?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">XML Essential Training</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/771c9dd0432177f67b8b032a5c7ba980aff819291a646f309d5323a90722a7e9?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">Being an Effective Team Member</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/b82e3c9e7b6c5fdda53629c247c5aa419ee4fcc19247d19f7ae587aa9e4604ab?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">Developing Executive Presence</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/eeeba19ce7f69cf74cdd92947bcc5b0b84d2646474aa5cde72aac52c0cd272a2?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">Managing Projects with Microsoft Teams</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/4560852d4278a1315f0d9e1a97a5bf8b268921ec0c6fadf94ff6686703a9b600?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">Microsoft Teams Essential Training (2019)</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/cfd25442cd808ab53b91d73c3790a7aa71ae0268dab8a551887bc4e101f2f609?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">Proven Tips for Managing Your Time</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/9034ecc31b06287ad1fdecb8565006b8a4f55fc1f50e8ec517bad32434052cb1?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">The Secrets to Success at Work</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/63270f6b8af6271a1e6af54b6a3abccf3d5f55f4980fafd8ddd423b84ba1a943?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">Tips for Working Remotely</a></td>
        </tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/9348a39612d7920e5aaeb8b4e0148dd04a2f7345706bc20cdbc7e9218853bc83?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">Unconscious Bias (2017)</a></td></tr>
        <tr>
          <td><a href="https://www.linkedin.com/learning/certificates/9348a39612d7920e5aaeb8b4e0148dd04a2f7345706bc20cdbc7e9218853bc83?u=2106985&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0wdtIIRTSyKZtc9ZazTJYg%3D%3D">Unconscious Bias (2017)</a></td>
        </tr>
      </table><br><br>
      <table class="CertificationTableMob">
        <tr>
          <td></td>
          <img class="CertIMGMob1" src="../assets/sololearn-removebg-preview.png">
        </tr>
        <tr>
          <td><a href="https://www.sololearn.com/certificates/CT-8PL4J8OO">CSS</a></td>
        </tr>
        <tr>
          <td><a href="https://www.sololearn.com/certificates/CT-2U1HST9Y">HTML</a></td>
        </tr>
        <tr>
          <td><a href="https://www.sololearn.com/certificates/CT-VEDUG5XS">JavaScript</a></td>
        </tr>
        <tr>
          <td><a href="https://www.sololearn.com/certificates/CT-GJWVVPJA">PHP</a></td>
        </tr>
        <tr>
          <td> <a href="https://www.sololearn.com/certificates/CT-AECJ6CL3">SQL</a></td>
        </tr>
      </table><br><br>
      <table class="CertificationTableMob">
        <tr>
          <img class="CertIMGMob" src="../assets/workday-removebg-preview.png">
        </tr>
        <tr>
          <td>Integration Exam 2023R1</td>
        </tr>
        <tr>
          <td>Tools Exam 2023R1</td>
        </tr>
        <tr>
          <td>Cross Functional Exam 2023R1</td>
        </tr>
        <tr>
          <td>Security & Privacy Exam 2023R1</td>
        </tr>
        <tr>
          <td>End to End Connector Integration Exam 2023R1</td>
        </tr>
        <tr>
          <td>Tools Exam 2022R2</td>
        </tr>
        <tr>
          <td>Cross Functional Exam 2022R2</td>
        </tr>
        <tr>
          <td>Security & Privacy Exam 2022R2</td>
        </tr>
        <tr>
          <td>Integration Exam 2022R2</td>
        </tr>
      </table>
      <br>
      <div class="functionButtons">
          <router-link :to="{name: 'Skills'}"><button class="next">Next</button></router-link>
        </div>
    </div>
  </div>
</template>

<script>

import navBar from '@/components/navBar.vue'

export default {
  name: 'CertificationsView',
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
.linkedIn {
  width: 40%;
  align-items: center;
  text-align: center;
  padding: 2%;
  float: left;

  table, th, tr, td, .CertLink {
    text-align: center;
    color: black;
  }
}
.SoloLearn {
  width: 25%;
  align-items: center;
  text-align: center;
  padding: 2%;
  float: left;

  table, th, tr, td, .CertLink {
    text-align: center;
    color: black;
  }
}
.workday12 {
  width: 35%;
  align-items: center;
  text-align: center;
  padding: 2%;
  float: left;

  table, th, tr, td, .CertLink {
    text-align: center;
    color: black;
  }
}
.CertImg{
  width: 40%;
}
.CertImg11{
  width: 100%;
}
.CertImg12 {
  width: 35%;
}
.CertLink:hover {
  background-color: rgb(0, 0, 0);
  border: 1px solid #00afea;
  color: #00afea;
  padding: 15px;
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
