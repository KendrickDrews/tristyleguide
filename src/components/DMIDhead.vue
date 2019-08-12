<template>
<div class="main-head--container">
    <div class="main-head">
        <div class="main-headContent">
            <div class="main-headIcon--pos1">
                <router-link tag="div" :to="{name: buttonName}" class="main-headIcon--pos2">
                    <dmidbutton
                      :button-color="buttonName"
                      :buttonName="buttonName"
                      :siteIcon="true"
                      :height="bigIcon"
                      :width="bigIcon"
                    >
                    </dmidbutton>
                </router-link>
            </div>
            <div class="main-headTop icon-space">
                <img src="../imgs/DMIDCROMS_BrandGraphic_Home.png" height="33" width="67" class="brand-graphic"/>
                <div class="main-headRight">
                    <navSearch></navSearch>
                    <navUser></navUser>
                </div>
            </div>
            <hr class="nav-Divide">
            <div class="main-headBottom icon-space">
                <h2 class="main-location" :class="(currentSite === 'ServiceRequests') ? 'blue-text' : 'green-text'">
                    <slot name="locationName"> CLINICAL RESEARCH SUPPORT</slot>
                </h2>
                <div class="main-headButtons">
                  <router-link tag="div" to="/DMID/Home">
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
                  <router-link tag="div" to="/DMID/CRS/ClinicalResearchHome">
                    <dmidbutton
                    :buttonName="buttonList.CRS"
                    :button-color="buttonList.CRS"
                    :id="'nav-' + buttonList.CRS"
                    v-if="showNav[buttonList.CRS]"
                    :height="smallIcon"
                    :width="smallIcon"
                    :navIcon="true"
                    >
                    </dmidbutton>
                  </router-link>
                  <router-link tag="div" to="/DMID/Home">
                    <dmidbutton
                    :buttonName="buttonList.DocumentLibrary"
                    :button-color="buttonList.DocumentLibrary"
                    :id="'nav-' + buttonList.DocumentLibrary"
                    v-if="showNav[buttonList.DocumentLibrary]"
                    :height="smallIcon"
                    :width="smallIcon"
                    :navIcon="true"
                    >
                    </dmidbutton>
                  </router-link>
                  <router-link tag="div" to="/DMID/Training/TrainingHome">
                    <dmidbutton
                    :buttonName="buttonList.Training"
                    :button-color="buttonList.Training"
                    :id="'nav-' + buttonList.Training"
                    v-if="showNav[buttonList.Training]"
                    :height="smallIcon"
                    :width="smallIcon"
                    :navIcon="true"
                    >
                    </dmidbutton>
                  </router-link>
                  <router-link tag="div" to="/DMID/ServiceRequests/ServiceRequestsHome">
                    <dmidbutton
                    :buttonName="buttonList.ServiceRequests"
                    :button-color="buttonList.ServiceRequests"
                    :id="'nav-' + buttonList.ServiceRequests"
                    v-if="showNav[buttonList.ServiceRequests]"
                    :height="smallIcon"
                    :width="smallIcon"
                    :navIcon="true"
                    >
                    </dmidbutton>
                  </router-link>
                  <router-link tag="div" to="/DMID/Home">
                    <dmidbutton
                    :buttonName="buttonList.SOCSCMS"
                    :button-color="buttonList.SOCSCMS"
                    :id="'nav-' + buttonList.SOCSCMS"
                    v-if="showNav[buttonList.SOCSCMS]"
                    :height="smallIcon"
                    :width="smallIcon"
                    :navIcon="true"
                    >
                    </dmidbutton>
                  </router-link>
                  <router-link tag="div" to="/DMID/Home">
                    <dmidbutton
                    :buttonName="buttonList.Protocols"
                    :button-color="buttonList.Protocols"
                    :id="'nav-' + buttonList.Protocols"
                    v-if="showNav[buttonList.Protocols]"
                    :height="smallIcon"
                    :width="smallIcon"
                    :navIcon="true"
                    >
                    </dmidbutton>
                  </router-link>
                  <router-link tag="div" to="/DMID/Home">
                    <dmidbutton
                    :buttonName="buttonList.GrantCapture"
                    :button-color="buttonList.GrantCapture"
                    :id="'nav-' + buttonList.GrantCapture"
                    v-if="showNav[buttonList.GrantCapture]"
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
      bigIcon: '75px',
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
          CRS: true,
          DocumentLibrary: true,
          SOCSCMS: true,
          Training: true,
          ServiceRequests: true,
          GrantCapture: true,
          Protocols: true,
          Results: false,
          PRT: false,
          SMART: false,
          CSRS: false
        }
      }
    }
  }
}
</script>
<style src="../styles/main.css"></style>
