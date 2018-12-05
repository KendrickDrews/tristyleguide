<template>  
<!--navButtons-->
    <div class="main-headButtons">
      <template 
      v-for="(item,key) in buttonList"
      >
          <NAVbutton 
          v-bind:key="key"
          v-bind:button-color="item"                                              
          v-show="showNav[key]"                        
          >
              <component :is="item"  fill="white" height="27px" width="27px"  class="svg-icon" />                            
          </NAVbutton>
      </template>
    </div>  
</template>

<script>
  import NAVbutton from '../components/buttons.vue';     
  import CRS from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-CRS.svg';
  import CSRS from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-CSRS.svg';
  import GrantCapture from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-DMART-GrantCapture.svg'; 
  import Protocols from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-DMART-Protocols.svg'; 
  import Results from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-DMART-Results.svg'; 
  import DocumentLibrary from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-DocumentLibrary.svg'; 
  import Home from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-Home.svg'; 
  import PRT from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-PRT.svg'; 
  import ServiceRequests from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-ServiceRequests.svg';
  import SMART from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-SMART.svg'; 
  import SOCSCMS from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-SOCSCMS.svg'; 
  import Training from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-Training.svg';
  import buttonList from '../components/componentList/buttonList.js';

  export default {
    components: {      
      NAVbutton,
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
      buttonList
    },
/* This list needs to be refactored out. navButtons and buttonLayout both use it */
    data: function() {
      return {
        buttonList: buttonList,
      }
    },
    props: {
      showNav: {             
        default: function() {
            return {            
              Home: true,                    
              CRS: true,
              DocumentLibrary: true,
              SOCSCMS: true,
              Training: true,
              ServiceRequests: true,
              GrantCapture: true,
              Protocols: true,
              Results: true,
              PRT: true,
              SMART: true,
              CSRS: true,            
          }
        }
      }
    }
  }
</script>
<style <style scoped>
.main-headButtons {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;   
  height: 100%;
}
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
  margin-bottom: 3px;  
}
.button-container h4 {
  color: rgba(0,0,0, 0.8);
  margin-top: 10px;
  margin-bottom: 5px;
}</style>