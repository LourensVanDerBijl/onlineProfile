<template>
  <div class="topNav">
    <navBar/>
    <router-view/>
  </div>
  <br><br><br><br><br><br><br><br><br>
  <p>Exsperienc</p>

</template>

<script>

import navBar from '@/components/navBar.vue'

export default {
  name: 'ExperienceView',
  components: {
    navBar
  }
}
</script>
