<template>
  <div class="topNav">
    <navBar/>
    <router-view/>
  </div>
  <div class="content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut, repellendus maxime expedita ea assumenda nulla corporis sunt totam animi dignissimos. Porro repellendus odit, ducimus ipsum perspiciatis tempore ipsam illum?
  </div>

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
<style lang="scss">
body {
  background: RGB(241, 244, 246)
}
</style>
