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
            <template v-for="(item,key) in buttonList">
              <div 
                class="home-Navigation"
                :key="key"
                v-if="showNavHOME[key]"
              >
                <dmidbutton 
                  :buttonName="item" 
                  :key="key"
                  :button-color="item"
                  :id="'nav-' + key"
                  :height="bigIcon"
                  :width="bigIcon"
                  :siteIcon="true"
                > 
                </dmidbutton>
                <h4> {{ item }} </h4>
              </div>
            </template>  
                        
          </div>
          <div class="right DMART icon-spacing">
            <template v-for="(item,key) in buttonList">
              <div 
                class="home-Navigation"
                :key="key"
                v-if="showNavDMART[key]"
              >
                <dmidbutton
                  :buttonName="item" 
                  :key="key"
                  :button-color="item"
                  :id="'nav-' + key"
                  :height="bigIcon"
                  :width="bigIcon"
                  :siteIcon="true"                        
                  > 
                </dmidbutton>
                <h4> {{ item }} </h4>
              </div>
            </template>
          </div>
        </div>

        <div class="row Row3">
          <div class="left">
            <div class="sign-in"></div>
            <div class="NIH">
              <h4> Access for NIH Users </h4>
              <button class="nav-button btn-Seven">
              <h4> Sign IN </h4>          
              <div class="navbtn-shadow"></div>
            </button>

            </div>
            <p class="request">To request access, please submit a request using the <a> Systems Access Request Form</a> </p>
          </div>
          <div class="right">
            <h2> Clinical Research Support Search</h2>
            <input type="text" placeholder="" class="CRS-search"> 
            <button class="nav-button btn-Seven">
              <h4> Go </h4>          
              <div class="navbtn-shadow"></div>
            </button>
            </div>
        </div>

        <div class="row Row4">
          <div class="left">
          </div>
          <div class="center">
          </div>
          <div class="right">
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

import buttonList from '../../components/componentList/buttonList.js';

  export default {
    components: {
      
    },
    props: {
      showNavHOME: {             
        default: function(){
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
          }
        }
      },
      showNavDMART: {             
        default: function(){
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
            CSRS: false,            
          }
        }
      },
    },
    data: function(){
      return {       
        HOME: {          
          CRS: 'CRS',
          DocumentLibrary: 'DocumentLibrary',  
          Training: 'Training',
          ServiceRequests: 'ServiceRequests',
          SOCSCMS: 'SOCSCMS',          
          PRT: 'PRT',
          SMART: 'SMART',
          CSRS: 'CSRS',
        },
        DMART: {          
          Protocols: 'Protocols',
          GrantCapture: 'GrantCapture',  
          Results: 'Results',
        },
        buttonList,
        
        navVisibiity: this.showNav,
        bigIcon: '69px',
        smallIcon: '27px',
          
      }
    },
    computed: {
      stateComponent: {
        get: function() {
          return this.$root.store.state.activeComponent 
        },
        set: function(value) {
          this.$root.store.commit('isActiveComponent', value )
        }
      },
    },
///////
    mounted: function () {      
      this.stateActiveComponent('');
    },
    methods: {
      stateActiveComponent (value) {
      return  this.stateComponent = value
      }
    },
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
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly
}
.home-Navigation {
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  width: 83px;
}
.icon-spacing {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  padding: 5px;
}
.DMART {
  width: 322px;
  background-color: lightseagreen;
  border: 1px solid #666;
  border-radius: 8px;
  
}
.dmid-button {
  height: 82px;
  width: 80px;
  border-radius: 6px;
}
.Row3 {
  background-color: lightcoral;
  height: 156px;
}
.Row4 {
  background-color: aqua;
  height: 325px;
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

</style>
<style>
body {
  background-color: rgb(52, 94, 192)!important; 
} 
</style>
