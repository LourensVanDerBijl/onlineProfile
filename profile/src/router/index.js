import { createRouter, createWebHashHistory } from 'vue-router'
import Intro from '../views/IntroView.vue'
import Experience from '../views/ExperienceView.vue'
import Qualifications from '../views/QualificationsView.vue'
import Certifications from '../views/CertificationsView.vue'
import Skills from '../views/SkillsView.vue'

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/ExperienceView',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/',
    name: 'Qualifications',
    component: Qualifications
  },
  {
    path: '/CertificationsView',
    name: 'Certifications',
    component: Certifications
  },
  {
    path: '/SkillsView',
    name: 'Skills',
    component: Skills
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
