<template>
    <header :class="{'scrolled-nav': scrollNav}">
        <nav>
            <div class="branding">
                <div class="logos">TBC</div>
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" :to="{name: 'Intro'}">Introduction</router-link></li>
                <li><router-link class="link" :to="{name: 'Experience'}">Work Experience</router-link></li>
                <li><router-link class="link" :to="{name: 'Qualifications'}">Qualifications</router-link></li>
                <li><router-link class="link" :to="{name: 'Certifications'}">Certifications</router-link></li>
                <li><router-link class="link" :to="{name: 'Skills'}">Skills</router-link></li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active' : mobileNav}"></i>
            </div>
            <trasition name ="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><router-link class="link" :to="{name: 'Intro'}">Intoduction</router-link></li>
                    <li><router-link class="link" :to="{name: 'Experience'}">Work Experience</router-link></li>
                    <li><router-link class="link" :to="{name: 'Qualifications'}">Qualifications</router-link></li>
                    <li><router-link class="link" :to="{name: 'Certifications'}">Certifications</router-link></li>
                    <li><router-link class="link" :to="{name: 'Skills'}">Skills</router-link></li>
                </ul>
            </trasition>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'navBar',
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
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    toggleMobileNav () {
      this.mobileNav = !this.mobileNav
    },
    updateScroll () {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        this.scrollNav = true
        return
      }
      this.scrollNav = false
    },
    checkScreen () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
    }
  }
}
</script>

<style lang="scss" scoped>
header {
    background-color: black;
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    color: white;
nav {
   position: relative;
   display: flex;
   flex-direction: row;
   padding: 12px 0;
   transition: .5 ease all;
   width: 90%;
   margin: 0 auto;
   @media (min-width: 1140px) {
    max-width: 1140px;
   }
   ul,
   .link {
    font-weight: 500;
    color: whitesmoke;
    list-style: none;
    text-decoration: none;
   }

   li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
   }

   .link {
    font-size: 14px;
    transition: .5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;

    &:hover {
        color: rgb(3, 198, 216);
        border-color: #00afea;
    }
   }

   .branding {
    display: flex;
    align-items: center;

    .logos{
        width: 50px;
        transition: .5s ease all ;
    }
   }
   .navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
   }
   .icon {
    display: flex;
    position: absolute;
    top: 0;
    align-items: center;
    right: 24px;
    height: 100%;

    i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8 ease all;
    }
   }
   .icon-active {
     transform: rotate(180deg);
   }
   .dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: whitesmoke;
    top: 0;
    left: 0;

    li {
        margin-left:  0;
        .link {
            color: black;
        }
    }
   }
   }
}
.scrolled-nav {
  background-color: black;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  nav {
    padding: 8px 0;

    .branding {
        .logos{
            width: 40px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
    }
  }
}
</style>
