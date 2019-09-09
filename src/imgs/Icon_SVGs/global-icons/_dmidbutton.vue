<template>
  <div v-bind:class="[{ 'dmid-button head-icon': siteIcon, 'nav-button': navIcon }, buttonColor ]">
      <component
        :is="buttonName"
        :height="height"
        :width="width"
        fill="white"
        :style="{ height: height, width: width, fill: 'white',}"
        class="svg-icon">
        <slot></slot>
        </component>
  </div>
</template>

<script>

//  Loads All Navigation Icons Globally into the site.
//  Conditionally renders classes(So a large icon, or the Nav-sized icons)
//  Based on the Truthiness of 'siteIcon' and 'navIcon' properties.

import CRS from '../DMIDCROMS-WebIcon-CRS.svg'
import CSRS from '../DMIDCROMS-WebIcon-CSRS.svg'
import GrantCapture from '../DMIDCROMS-WebIcon-DMART-GrantCapture.svg'
import Protocols from '../DMIDCROMS-WebIcon-DMART-Protocols.svg'
import Results from '../DMIDCROMS-WebIcon-DMART-Results.svg'
import DocumentLibrary from '../DMIDCROMS-WebIcon-DocumentLibrary.svg'
import Home from '../DMIDCROMS-WebIcon-Home.svg'
import PRT from '../DMIDCROMS-WebIcon-PRT.svg'
import ServiceRequests from '../DMIDCROMS-WebIcon-ServiceRequests.svg'
import SMART from '../DMIDCROMS-WebIcon-SMART.svg'
import SOCSCMS from '../DMIDCROMS-WebIcon-SOCSCMS.svg'
import Training from '../DMIDCROMS-WebIcon-Training.svg'
import Development from '../DMIDCROMS-WebIcon-CRS-Stage-Development.svg'
import Initiation from '../DMIDCROMS-WebIcon-CRS-Stage-Initiation.svg'
import CloseOut from '../DMIDCROMS-WebIcon-CRS-Stage-CloseOut.svg'
import InProgress from '../DMIDCROMS-WebIcon-CRS-Stage-InProgress.svg'
import SARF from '../DMIDCROMS-WebIcon-SARF.svg'

export default {
  name: 'dmidButton',
  components: {
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
    Training,
    Development,
    Initiation,
    InProgress,
    CloseOut,
    SARF
  },
  props: {
    buttonColor: String,
    buttonName: String,
    height: String,
    width: String,
    siteIcon: Boolean,
    navIcon: Boolean
  }
}
</script>
<style scoped>

.btn-Container{
  position: relative;
  height: 93px;
  width: 91px;
  display:flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  background-image: radial-gradient(farthest-corner at 50% 25%, rgba(0,0,0,0), rgba(0,0,0,0.3) 95%);
  overflow: hidden;
  }
.dmid-button {
  position: relative;
  height: 92px;
  width: 91px;
  display:flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  box-shadow:
    2px 2px 5px rgba(0,0,0,0.5),
    inset 0px 0px 4px 2px rgba(0,0,0, 0.5);
  background-image:
    radial-gradient(circle at 50% -200%, transparent 67%,rgba(255,255,255,0.4) 84.5% , transparent 85% ),
    linear-gradient(to top, rgba(0,0,0,0.6)  , transparent 45%);
  background-blend-mode: normal;
}
.svg-icon {
  position: relative;
  top: 0;
  z-index: 5;
}

/* vv NAV BTN PATTERN vv */
.nav-button {
  height: 34px;
  width: 33px;
  margin-left: 7px;
  border-radius: 3px;
  border: none;
  overflow: hidden;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  position: relative;
  display:flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow:
    inset 0px 0px 4px 2px rgba(0,0,0, 0.5);
  background-image:
    radial-gradient(circle at 50% -200%, transparent 67%,rgba(255,255,255,0.4) 84.5% , transparent 85% ),
    linear-gradient(to top, rgba(0,0,0,0.6)  , transparent 45%);
  background-blend-mode: normal;
}

/* vv Animation controls for focus, click, hover vv */
.nav-button:focus {
  outline: 0;
}
.nav-button:after {
  content: "";
  border-radius: 3px;
  background: #fff;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: 0px !important;
  margin-top: 0%;
  opacity: 0;
  transition: all 1s
}
.nav-button:hover {
  opacity: 0.7;
  transform: translateY(0px);
}
.nav-button:active {
  transform: translateY(4px);
}
.nav-button:active:after {
  padding: 0;
  margin: 0;
  opacity: 0.5;
  transition: 0s
}

/* Individual Button Colors */
/* Class Names are handles by the Props in buttonLayout.vue */
/* Keep changes here to keep scoped CSS consistent */
.CRS {
  background-color: rgb(27, 146, 76);
}

.CSRS {
  background-color: rgb(16, 66, 79 );
}

.GrantCapture {
  background-color: rgb(158, 59, 223);
}

.Protocols {
  background-color: rgb(117, 69, 207);
}

.Results {
  background-color: rgb(223, 59, 209);
}

.DocumentLibrary {
  background-color: rgb(241, 67, 55);
}

.Home {
  background-color: rgb(86, 86, 86);
}

.PRT {
  background-color: rgb(0, 51, 153);
}
.SARF {
  border-radius: 5px;
  height: 79px;
  width: 80px;
  background-color: rgb(250, 170, 0);
  box-shadow: 2px 2px 2px rgba(0,0,0,0.3), inset 0px 0px 5px 4px rgba(150, 85, 0, 0.25);
  background-blend-mode: color-dodge;
}
.ServiceRequests {
  background-color: rgb(52, 94, 192);
}

.SMART {
  background-color: rgb(0, 114, 188);
}

.SOCSCMS {
  background-color: rgb(45, 206, 255);
}

.Training {
  background-color: rgb(44, 138, 49);
}
.Development {
  background-color: #09aa5f;
}
.InProgress {
  background-color: #a1db36;
}
.CloseOut {
  background-color: #7fd639;
}
.Initiation {
  background-color: #37924c;
}

</style>
