<template>
  <div class="topNav">
    <navBar/>
    <router-view/>
  </div>
  <br><br><br><br><br><br><br><br><br>
  <p>Qualifications</p>

</template>

<script>

import navBar from '@/components/navBar.vue'

export default {
  name: 'QualificationView',
  components: {
    navBar
  }
}
</script>
