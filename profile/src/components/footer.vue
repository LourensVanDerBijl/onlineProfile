<template>
    <div class="functionButtons">
        <button class="previous">Previous</button>
        <button class="next">Next</button>
    </div>
</template>

<script>
export default {
  name: 'footerModule',
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
.functionButtons{
    bottom: 0;
    position:relative;
    width: 100%;
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
</style>
