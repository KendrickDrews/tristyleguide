<template>
  <div class="DMID-main">
        <div class="row Row1">
          <div class="left">
            <img src="../../imgs/DMIDCROMS_BrandGraphic_Home.png"/>
          </div>
          <div class="right">
            <h3> WELCOME TO THE DMID-CROMS WEBLIBRARY </h3>
            <p>This site provides a central resource to the DMID and extramural investigators to facilitate/support the conduct and management of clinical research. It also provides a Web-based repository of research resources and standardized procedures for all activities for the conduct of clinical research. Please note: Access to some of the DMID-CROMS WebLibrary content is restricted. In addition to requiring authorized user sign-in, additional content-specific user privileges may limit access.</p>
          </div>
        </div>

        <div class="row Row2">
          <div class="left icon-spacing">
            <router-link tag="div" to="CRS/ClinicalResearchHome" class="home-Navigation">
              <dmidbutton
                :buttonName="buttonList.CRS"
                v-if="showNavHOME[buttonList.CRS]"
                :button-color="buttonList.CRS"
                :id="'nav-' + buttonList.CRS"
                :height="bigIcon"
                :width="bigIcon"
                :siteIcon="true"
              >
              </dmidbutton>
              <h4> Clinical Research Support </h4>
            </router-link>
            <router-link tag="div" to="DocumentLibrary" class="home-Navigation">
              <dmidbutton
                :buttonName="buttonList.DocumentLibrary"
                v-if="showNavHOME[buttonList.DocumentLibrary]"
                :button-color="buttonList.DocumentLibrary"
                :id="'nav-' + buttonList.DocumentLibrary"
                :height="bigIcon"
                :width="bigIcon"
                :siteIcon="true"
              >
              </dmidbutton>
              <h4> Document Library </h4>
            </router-link>
            <router-link tag="div" to="Training/TrainingHome"  class="home-Navigation">
              <dmidbutton
                :buttonName="buttonList.Training"
                v-if="showNavHOME[buttonList.Training]"
                :button-color="buttonList.Training"
                :id="'nav-' + buttonList.Training"
                :height="bigIcon"
                :width="bigIcon"
                :siteIcon="true"
              >
              </dmidbutton>
              <h4> Training </h4>
            </router-link>
            <router-link tag="div" to="ServiceRequests/ServiceRequestsHome" class="home-Navigation">
              <dmidbutton
                :buttonName="buttonList.ServiceRequests"
                v-if="showNavHOME[buttonList.ServiceRequests]"
                :button-color="buttonList.ServiceRequests"
                :id="'nav-' + buttonList.ServiceRequests"
                :height="bigIcon"
                :width="bigIcon"
                :siteIcon="true"
              >
              </dmidbutton>
              <h4> Service Requests </h4>
            </router-link>

          </div>
          <!-- DMART Buttons -->
          <div class="right DMART icon-spacing">

              <router-link tag="div" to="Protocols" class="home-Navigation">
                <dmidbutton
                  :buttonName="buttonList.Protocols"
                  v-if="showNavDMART[buttonList.Protocols]"
                  :button-color="buttonList.Protocols"
                  :id="'nav-' + buttonList.Protocols"
                  :height="smallIcon"
                  :width="smallIcon"
                  :siteIcon="true"
                  >
                </dmidbutton>
                <h4> Protocols </h4>
              </router-link>
              <router-link tag="div" to="GrantCapture" class="home-Navigation">
                <dmidbutton
                  :buttonName="buttonList.GrantCapture"
                  v-if="showNavDMART[buttonList.GrantCapture]"
                  :button-color="buttonList.GrantCapture"
                  :id="'nav-' + buttonList.GrantCapture"
                  :height="smallIcon"
                  :width="smallIcon"
                  :siteIcon="true"
                  >
                </dmidbutton>
                <h4> Grant Capture </h4>
              </router-link>
              <router-link tag="div" to="Results" class="home-Navigation">
                <dmidbutton
                  :buttonName="buttonList.Results"
                  v-if="showNavDMART[buttonList.Results]"
                  :button-color="buttonList.Results"
                  :id="'nav-' + buttonList.Results"
                  :height="smallIcon"
                  :width="smallIcon"
                  :siteIcon="true"
                  >
                </dmidbutton>
                <h4> Results </h4>
              </router-link>
              <div class="home-Navigation">
                <div class="horizontal"></div>
                <div>
                <h4 class="dmart-label"> DMART </h4>
                </div>
              </div>

            <!-- DMART Buttons -->
          </div>
        </div>

        <div class="row Row3">
          <div class="left">
            <div class="sign-in">
              <div class="non-NIH">
              <h4 class="signIn-title"> Access for <span class="underlined">Non-NIH </span> Users </h4>
              <div class="username">
                <h4> Username: </h4>
                <input type="text" placeholder="" class="sign-in-input">
                <button class="nav-button btn-Seven btn-nonNIH">
                  <h4> Sign IN </h4>
                <div class="navbtn-shadow"></div>
                </button>
              </div>
              <div class="pass">
                <h4> Password: </h4>
                <input type="text" placeholder="" class="sign-in-input">
                <a class="password">Forgot Password </a>
              </div>
              </div>
              <div class="NIH">
              <h4 class="signIn-title"> Access for <span class="underlined">NIH </span> Users </h4>
                <button class="nav-button btn-Seven btn-NIH">
                  <div class="carrot"><div class="pentagon"> NIH </div></div>
                    <h3> Sign In </h3>
                  <div class="navbtn-shadow"></div>
                </button>
              </div>
            </div>
            <p class="request">To request access, please submit a request using the <router-link to="SARF/userRequest"> Systems Access Request Form</router-link> </p>
          </div>
          <div class="right">
            <h2> Clinical Research Support Search</h2>
            <input type="text" placeholder="" class="CRS-search">
            <button class="nav-button btn-Seven btn-SEARCH">
                <h4> Go </h4>
              <div class="navbtn-shadow"></div>
            </button>
            </div>
        </div>

        <div class="row Row4">
          <div class="left">
            <div class="homeHeader news">
              <h2> News and Announcements </h2>
            </div>
            <div class="homeContainer">
              <div class="announcement">
                <h5>November 26, 2018</h5>
                <h4>Holiday Closure of DMID-CROMS Offices</h4>
                <p>Dear DMID Stakeholders and Collaborators: Please be aware that in observance of the Thanksgiving Holiday, the offices of the DMID-CROMS Contractor are closed on Thursday, November 22 and Friday, November 23, 2018. Your questions and concerns will be addressed by the staff when they return on Monday
                </p>
                <a>Click here read more..</a>
              </div>
            </div>
          </div>
          <div class="center">
            <div class="homeHeader tools">
              <h2> Resources and Tools </h2>
            </div>
            <div class="homeContainer">
              <ul class="ulHome">
                <li class="rt-nav-home"><a href="#contacts">Contacts</a></li>
                <li class="rt-nav-home"><a href="#about">DMID Information Sheets Guidelines and Standards</a></li>
                <li class="rt-nav-home"><a href="#contact">Forms and Templates</a></li>
                <li class="rt-nav-home"><a href="#home">Hours of Operation</a></li>
                <li class="rt-nav-home"><a href="#about">NIAID CIERS</a></li>
                <li class="rt-nav-home"><a href="#contact">Related Links</a></li>
                <li class="rt-nav-home"><a href="#home">Support and FAQs</a></li>
                <li class="rt-nav-home"><a href="#about">Training</a></li>
                <img class="rt-image" src="../../imgs/Button_AdobeReader.png">
                <img class="rt-image" src="../../imgs/Button_AdobeFlashPlayer.png">
              </ul>

            </div>
          </div>
          <div class="right">
            <div class="homeHeader support">
              <h2> Support By Study Stage </h2>
            </div>
            <div class="homeContainer">
              <div class="supportSEARCH">
                <div class="devSEARCH">
                  <dmidbutton
                    :buttonName="buttonList.Development"
                    v-if="showNavHOME[buttonList.Development]"
                    :button-color="buttonList.Development"
                    :id="'nav-' + buttonList.Development"
                    :height="support"
                    :width="support"
                    :siteIcon="true"
                  >
                  </dmidbutton>
                  <div class="supportRight">
                    <h4>Development</h4>
                    <input type="text" placeholder="" class="">
                    <button class="nav-button btn-supSEARCH">
                      <h4> Go </h4>
                      <div class="navbtn-shadow"></div>
                    </button>
                  </div>
                </div>
                <div class="devSEARCH">
                  <dmidbutton
                    :buttonName="buttonList.Initiation"
                    v-if="showNavHOME[buttonList.Initiation]"
                    :button-color="buttonList.Initiation"
                    :id="'nav-' + buttonList.Initiation"
                    :height="support"
                    :width="support"
                    :siteIcon="true"
                  >
                  </dmidbutton>
                  <div class="supportRight">
                    <h4>Initiation</h4>
                    <input type="text" placeholder="" class="">
                    <button class="nav-button btn-supSEARCH">
                      <h4> Go </h4>
                      <div class="navbtn-shadow"></div>
                    </button>
                  </div>
                </div>
                <div class="devSEARCH">
                  <dmidbutton
                    :buttonName="buttonList.InProgress"
                    v-if="showNavHOME[buttonList.InProgress]"
                    :button-color="buttonList.InProgress"
                    :id="'nav-' + buttonList.InProgress"
                    :height="support"
                    :width="support"
                    :siteIcon="true"
                  >
                  </dmidbutton>
                  <div class="supportRight">
                    <h4>In Progress</h4>
                    <input type="text" placeholder="" class="">
                    <button class="nav-button btn-supSEARCH">
                      <h4> Go </h4>
                      <div class="navbtn-shadow"></div>
                    </button>
                  </div>
                </div>
                <div class="devSEARCH">
                  <dmidbutton
                    :buttonName="buttonList.CloseOut"
                    v-if="showNavHOME[buttonList.CloseOut]"
                    :button-color="buttonList.CloseOut"
                    :id="'nav-' + buttonList.CloseOut"
                    :height="'30px'"
                    :width="'30px'"
                    :siteIcon="true"
                  >
                  </dmidbutton>
                  <div class="supportRight">
                    <h4>Close Out</h4>
                    <input type="text" placeholder="" class="">
                    <button class="nav-button btn-supSEARCH">
                      <h4> Go </h4>
                      <div class="navbtn-shadow"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="main-footer">
          <!-- Branding Nav -->
          <div class="brandingNav">
              <div class="external">
                  <img src="../../imgs/HHS-NIH_NIAID_LogoSet_Web-Small_Black.png">
              </div>
              <div class="policy">
                  <a href="#">Privacy Policy</a>
                  <a class=pipe>|</a>
                  <a href="#">Disclaimers</a>
              </div>
          </div>
        </div>
  </div>
</template>

<script>

import buttonList from '../../components/componentList/buttonList.js'

export default {
  components: {

  },
  props: {
    showNavHOME: {
      default: function () {
        return {
          Home: false,
          CRS: true,
          DocumentLibrary: true,
          SOCSCMS: false,
          Training: true,
          ServiceRequests: true,
          GrantCapture: false,
          Protocols: false,
          Results: false,
          PRT: false,
          SMART: false,
          CSRS: false,
          Development: true,
          InProgress: true,
          Initiation: true,
          CloseOut: true
        }
      }
    },
    showNavDMART: {
      default: function () {
        return {
          Home: false,
          CRS: false,
          DocumentLibrary: false,
          SOCSCMS: false,
          Training: false,
          ServiceRequests: false,
          GrantCapture: true,
          Protocols: true,
          Results: true,
          PRT: false,
          SMART: false,
          CSRS: false
        }
      }
    }
  },
  data: function () {
    return {
      HOME: {
        CRS: 'CRS',
        DocumentLibrary: 'DocumentLibrary',
        Training: 'Training',
        ServiceRequests: 'ServiceRequests',
        SOCSCMS: 'SOCSCMS',
        PRT: 'PRT',
        SMART: 'SMART',
        CSRS: 'CSRS'
      },
      DMART: {
        Protocols: 'Protocols',
        GrantCapture: 'GrantCapture',
        Results: 'Results'
      },
      buttonList,
      navVisibiity: this.showNav,
      bigIcon: '65px',
      smallIcon: '60px',
      support: '35px'

    }
  },
  computed: {
    stateComponent: {
      get: function () {
        return this.$root.store.state.activeComponent
      },
      set: function (value) {
        this.$root.store.commit('isActiveComponent', value)
      }
    },
    // Set SiteType 01
    stateType: {
      get: function () {
        return this.$root.store.state.siteType
      },
      set: function (value) {
        this.$root.store.commit('setSiteType', value)
      }
    }
  },
  /// ////
  mounted: function () {
    this.stateActiveComponent('')
    // Set SiteType 02
    this.stateSiteType('HOME')
  },
  methods: {
    stateActiveComponent (value) {
      return this.stateComponent = value
    },
    // set SiteType 03
    stateSiteType (value) {
      return this.stateType = value
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('../../styles/main.css');

.DMID-main {
  width: 1000px;
  min-height: 953px;
  max-height: 953px;
  position: relative;
  background-color: white;
  padding: 30px;
}

.locationContainer {
  background-color: rgb(52, 94, 192)!important;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 35% ,rgba(0, 0, 0, 0.1) 55%,rgba(255,255,255,0.9)85%,rgba(255,255,255,1)95%)!important;
}
.SR {
  color:  rgb(52, 94, 192)!important;
}
.mainContent {
  padding: 10px 20px 10px 10px!important;
  font-family: calibri!important;
}
.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

}
.Row1 {
  height: 142px;
}
.Row1 .left {
  height: 102px;
  padding-right: 25px;
  border-right: 2px solid #999;
}
.Row1 .right {
  height: 129px;
  width: 565px;
  padding-right: 10px;
  padding-left: 25px;

}
.Row1 .right h3 {
  font-family: 'Cinzel';
  font-size: 20px;
  line-height: 27px;
  color: #262a9a;
  font-weight: bold;
  margin: 0;
}
.Row1 .right p {
  margin: 0;
  font-family: Calibri;
  font-size: 14px;
}
.Row2 {
  height: 191px;
  margin: 15px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-image: linear-gradient(to bottom, transparent , #e9e9e9 35%,#e9e9e9 65%, transparent );
  padding: 15px 15px 15px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
}
.Row2 .left {
  flex-grow: 3;

}
.dmart-label {
  font-family: 'Cinzel';
  color:#262a9a;
  font-size: 18px!important;
}
.horizontal {
  position: relative;
  width: 311px;
  top:-5px;
  left: -113px;
  border-top: 1px solid black;
}
.home-Navigation {
  display: flex;
  flex-direction: column;
  width: 83px;
}
.home-Navigation:hover {
  cursor: pointer;
}
.home-Navigation h4 {
  font-family: 'times new roman';
  font-size: 12px;
  text-align: center;
  margin: 0 auto;
  width: 80px;
}
.home-Navigation .dmid-button {
  margin: -5px auto 25px auto;
}
.icon-spacing {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;
}
.DMART {
  width: 322px;
  background-color: #d9d9e7;
  border: 1px solid #b1b1ce;
  border-radius: 8px;

}
.dmid-button {
  height: 77px;
  width: 75px;
  border-radius: 6px;

}
.Row3 {
  height: 138px;
  margin-bottom: 18px;

}
.Row3 .left {
  width: 570px;
  padding: 7px 10px 10px 10px;
  margin-left: 10px;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #eaeaea;
  border-radius: 8px;
}
.Row3 .left .sign-in {
  width: 100%;
  height: 96px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px 5px 0 5px;
  padding: 2px;
}

.signIn-title {
  color: #213e85;
  font-family: 'Calibri';
  font-size: 14px;
}
.username {
  width: 100%;
  padding: 4px 20px 3px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  vertical-align: middle;
  line-height: 1.5em;
}
.username h4 {
  padding-right: 6px;
}
.pass {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 6px 18px 3px 0;
  vertical-align: middle;
  line-height: 1.5em;
}
.pass h4 {
  padding-right: 6px;
}
.underlined {
  text-decoration: underline;
}
.non-NIH {
  width: 63%;
  font-size: 14px;
  font-family: 'Calibri';
}
.non-NIH > h4 {
  margin-bottom: 5px;
}
.non-NIH input {
  width: 164px;
  height: 21px;

}
.NIH {
  border-left: 1px solid black;
  width: 35%;
  padding: 0 15px;
}
.request {
  width: 100%;
  padding-left: 3px;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Calibri';
}
.btn-nonNIH {
  height: 24px;
  width: 77px;
  margin-top: -2px;
}
.btn-NIH {
  height: 59px;
  width: 126px;
  margin-left: 0px;
  margin-top: 5px;
}
.password {
  color: #0060ff;
  font-size: 12px;
  font-weight: bold;

}
.Row3 .right {
  background-color: #e0f1d7;
  width: 297px;
  border-radius: 8px;
  padding-top: 5px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 5px;
  margin-left: 10px;
  margin-right: 5px;
}
.Row3 .right h2 {
  font-size: 18px;
  color: #244f1e;
  font-family: 'Calibri';
  padding: 5px;
}
.Row3 .right input {
  margin: 5px 2px;
  width: 243px;
  height: 21px;
}
.btn-SEARCH {
  height: 24px;
  width: 47px;
  margin: 2px;

}
.btn-SEARCH h4 {
  font-family: 'Calibri';
  font-size: 18px;

}
.Row4 {
  height: 325px;
}
.Row4 .right, .Row4 .center,.Row4 .left {
  display: flex;
  width: 33%;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1;
}
.Row4 .center {
  border-left: 1px solid black;
  border-right: 1px solid black;
}
.Row4 .right {
  background-color: #e0f1d7;
}
.homeHeader {
  height: 36px;
  margin: 0px;
  padding-top: 0;
  padding-bottom: 0px;
  padding-left: 12px;
  font-size: 14px;
  font-weight: bold;
  line-height: 15px;
  vertical-align: top;
  font-family: 'Calibri';
  width:100%;
}
.homeContainer {
  width: 100%;
  height: calc(100% - 36px);
  overflow-y: scroll;
}
.news {
  border-top: 10px solid #c3c5f8;
  background-color: #a1a4f3;
  color: #262a9a;
}
.tools {
  border-top: 10px solid #eee;
  background-color: #ccc;
  color: #333;
}
.ulHome {
  margin-left: 52px;
  margin-top: 12px;
}
.rt-nav-home {
  align-items: center;
  padding-right: 5px;
  list-style-type: disc;
  list-style-position: outside;
}
.rt-nav-home a {
border:none !important;
color:#000!important;
margin:0 !important;
text-decoration:none !important;
/*padding-right:5px;*/
outline: 0;
padding: 0px 0px;
font-size: 14px;
font-family: Calibri;
}
.rt-nav-home:hover {
  font-weight: bold;
}
.rt-image {
  padding-top: 15px;
  padding-right: 18px;
  margin-left: -15px;
}
.support {
  border-top: 10px solid #bfdba8;
  background-color: #9ebb87;
  color: #244f1e;
}
.devSEARCH {
  width: 100;
  display: flex;
}
.supportSEARCH .dmid-button {
  height: 42px;
  width: 42px;
  margin: 0 10px;
  border-radius: 3px;
}
.btn-supSEARCH {
  height: 16px;
  width: 31px;
  border-radius: 4px;
  -webkit-box-shadow: inset 0px 2px 0px 1px rgba(255, 255, 255, 0.75);
  box-shadow: inset 0px 2px 0px 1px rgba(255, 255, 255, 0.75);
  align-self: flex-end;
  /* background-color: var(--red-gold); */
  /* background-image: -webkit-gradient(linear, left top, left bottom, color-stop(49%, rgba(255, 200, 0, 0.5)),color-stop(61%, rgba(255, 60, 0, 0.75))); */
  /* background-image: linear-gradient(to bottom, rgba(255, 200, 0, 0.5)49%, rgba(255, 60, 0, 0.75) 61%); */
}
.btn-supSEARCH h4 {
  font-weight: bold;
  color: black;
  z-index: 10;
  margin: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 10px;

}
.btn-supSEARCH .navbtn-shadow {
  box-shadow: inset 0px 0px 0.5px 1px rgb(82, 82, 82);
}
.supportRight{
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
}
.main-footer {
  min-height: 49px;
  max-height: 49px;
}
.main-footer .brandingNav {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  height: 49px;
  padding-top: 6px;

}
.policy {
  display: flex;
  flex-direction: row;
  line-height: 3.7em;
  font-size: 11px;
  font-weight: bold;
  vertical-align: middle;
  flex-wrap: nowrap;
  align-items: baseline;
  justify-content: space-between;
  width: 136px;
  font-family: Calibri;
}
.policy a {
  width: unset;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
}
.policy a:visited {
  color: #0060ff;
}
.pipe {
  width: 0px;
  color: #0060ff;
}
#nav-Protocols {
  margin-left: auto;
}
.pentagon {
  background-color: #ccc;
  height: 37px;
  width: 43px;
  position: relative;
  display: block;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 43px;
    height: 0;
    width: 0;
    border-top: 19px solid transparent;
    border-right: 11px solid transparent;
    border-bottom: 19px solid transparent;
    border-left: 11px solid black;

  }
}
.carrot {
  position: relative;
  display: block;
  padding: 5px 15px 5px 5px;
  margin-left: -10px;
  //margin-top: 50px;
  &:before, &:after {
    content: "";
    position: absolute;
  	top: 49%;
    left: 42px;
    width: 20px;
    height: 3px;
    background: #000;
    transform: rotate(65deg);
    transform-origin: right;
  }
  &:after {
    transform: rotate(-65deg);
  }
}
</style>
