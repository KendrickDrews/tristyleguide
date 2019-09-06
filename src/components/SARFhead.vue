<template>
<div class="main-head--container SARF-main-headContainer">
    <div class="main-head SARF-main-head">
        <div class="main-headContent">
            <div class="main-headIcon--pos1">
                <div class="SARF-headIcon--pos2">
                    <dmidbutton
                      :button-color="buttonName"
                      :buttonName="buttonName"
                      :siteIcon="true"
                      :height="bigIcon"
                      :width="bigIcon"
                    >
                    </dmidbutton>
                </div>
            </div>
            <div class="main-headTop SARF-headTop icon-space">
                <img src="../imgs/DMIDCROMS_BrandGraphic_Home.png" height="33" width="67" class="brand-graphic"/>
            </div>
            <hr class="nav-Divide SARF-divide">
            <div class="main-headBottom icon-space">
                <h2 class="main-location  SARF-header">
                    Systems Access Request Form
                </h2>
                <div class="main-headButtons">
                  <!-- <router-link tag="div" to="/DMID/Home"> -->
                  <router-link tag="div" to="/">
                    <dmidbutton
                    :buttonName="buttonList.Home"
                    :button-color="buttonList.Home"
                    :id="'nav-' + buttonList.Home"
                    v-if="showNav[buttonList.Home]"
                    :height="smallIcon"
                    :width="smallIcon"
                    :navIcon="true"
                    >
                    </dmidbutton>
                  </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import navSearch from '../components/navSearch.vue'
import navUser from '../components/navUser.vue'
import buttonList from '../components/componentList/buttonList.js'

export default {
  components: {
    navSearch,
    navUser,
    buttonList
  },
  data: function () {
    return {
      buttonList: buttonList,
      navVisibiity: this.showNav,
      bigIcon: '70px',
      smallIcon: '27px'
    }
  },
  props: {
    buttonName: {
      default: 'CRS'
    },
    type: {
      default: 'CRS'
    },
    currentSite: {
      default: 'CRS'
    },
    showNav: {
      default: function () {
        return {
          Home: true,
        }
      }
    }
  }
}
</script>
<style src="../styles/main.css"></style>
