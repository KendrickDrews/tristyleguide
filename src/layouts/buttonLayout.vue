<template>

    <div>
        <h1> Nav Buttons </h1>
        <div class="allButtons">
          <div
            v-for="(button, key) in buttonList"
            v-bind:key="key"
            class="button-container"
          >
          <h4> {{ button }} </h4>
            <dmidbutton
              :key="key"
              :buttonName="button"
              :button-color="button"
              :height="bigIcon"
              :width="bigIcon"
              :siteIcon="true"
            >
            </dmidbutton>
          </div>
        </div>

      <h1> Basic Snippet </h1> <hr/>
      <p> a paragraph explaining the component </p>

      <h1> A Breakdown of Parts </h1> <hr/>
      <p> a paragraph explaining the component </p>

      <div class="markup">
        <div class="markup-type"><h5>type</h5></div>
      </div>

      <h1> Use Cases </h1> <hr/>
      <p> a paragraph explaining the component </p>

      <h1> Do's and Don'ts </h1> <hr/>
      <p> a paragraph explaining the component </p>
    </div>

</template>

<script>
import DMIDbutton from '../components/button.vue'
import CRS from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-CRS.svg'
import CSRS from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-CSRS.svg'
import GrantCapture from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-DMART-GrantCapture.svg'
import Protocols from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-DMART-Protocols.svg'
import Results from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-DMART-Results.svg'
import DocumentLibrary from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-DocumentLibrary.svg'
import Home from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-Home.svg'
import PRT from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-PRT.svg'
import ServiceRequests from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-ServiceRequests.svg'
import SMART from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-SMART.svg'
import SOCSCMS from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-SOCSCMS.svg'
import Training from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-Training.svg'
import buttonList from '../components/componentList/buttonList.js'

export default {
  components: {
    DMIDbutton,
    CRS,
    CSRS,
    GrantCapture,
    Protocols,
    Results,
    DocumentLibrary,
    Home,
    PRT,
    ServiceRequests,
    SMART,
    SOCSCMS,
    Training
  },
  /* This list needs to be refactored out. navButtons and buttonLayout both use it */
  data: function () {
    return {
      buttonList: buttonList,
      bigIcon: '75px'
    }
  },
  computed: {

  },
  methods: {

  }

}
</script>
<style scoped>

.markup {
  background-color: #e6e6e6;
  min-height: 200px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  position:relative;
  top:0;
}
.markup-type {
  position: absolute;
  top: 5px;
  right: 5px;
}
.markup-type h5 {
  margin: 0;
  opacity: 0.5;}

.allButtons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  margin-top: 2px;
  margin-bottom: 45px;
}
.button-container h4 {
  color: rgba(0,0,0, 0.8);
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
