<template>
  <div class="topNav">
    <navBar/>
    <router-view/>
  </div>
  <br><br><br><br><br><br><br><br><br>
  <p>Louis Lourens</p>

</template>

<script>

import navBar from '@/components/navBar.vue'

export default {
  name: 'HomeView',
  components: {
    navBar
  }
}
</script>
