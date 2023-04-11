import { createRouter, createWebHashHistory } from 'vue-router'
import Intro from '../views/IntroView.vue'
import Experience from '../views/ExperienceView.vue'
import Qualifications from '../views/QualificationsView.vue'
import Certifications from '../views/CertificationsView.vue'
import Skills from '../views/SkillsView.vue'
import SideDegree from '../views/SideDegreeView.vue'
import SideWorkday from '../views/SideWorkdayView.vue'
import SideWorkday2 from '../views/SideWorkdayView2.vue'

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
    path: '/SideDegreeView',
    name: 'SideDegree',
    component: SideDegree
  },
  {
    path: '/SideWorkdayView',
    name: 'SideWorkday',
    component: SideWorkday
  },
  {
    path: '/SideWorkdayView2',
    name: 'SideWorkday2',
    component: SideWorkday2
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
