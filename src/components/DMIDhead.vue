<template>  
<div style="margin-bottom: 10px;">
    <div class="main-head">           
        <div class="main-headContent">
            <div style="position: absolute;">
                <div style="position: relative; left: 3px; top: -5px;">

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
            <div class="main-headTop icon-space">
                <img src="../imgs/DMIDCROMS_BrandGraphic_Home.png" height="33" width="67" style="margin-top:15px;"/>                
                <div class="main-headRight">
                    <navSearch></navSearch>
                    <navUser></navUser>
                </div>
            </div>
            <hr class="nav-Divide">
            <div class="main-headBottom icon-space">
                <h2 class="main-location">
                    <p><slot name="locationName"> CLINICAL RESEARCH SUPPORT</slot></p>
                </h2> 
                <div class="main-headButtons">
                    
                    <template 
                    v-for="(item,key) in buttonList"                
                    >
                        <dmidbutton
                        :buttonName="item" 
                        :key="key"
                        :button-color="item"
                        :id="'nav-' + key"                                              
                        v-if="showNav[key]"
                        :height="smallIcon"
                        :width="smallIcon"
                        :navIcon="true"                        
                        >
                        </dmidbutton>
                    </template>

                </div>    
            </div>
        </div>
    </div> 
</div>
</template>

<script>  
  
  import navSearch from '../components/navSearch.vue';
  import navUser from '../components/navUser.vue';
  import buttonList from '../components/componentList/buttonList.js';

export default {
    components: { 
      navSearch,
      navUser,
      buttonList
    },

    data: function(){
        return {       
            buttonList: buttonList,
            navVisibiity: this.showNav,
            bigIcon: '75px',
            smallIcon: '27px',
            
        }
    },
    props: {
        buttonName: {
            default: 'CRS'
        },    
        type: {
            default: 'CRS',
        }, 
        showNav:{ 
            
            default: function(){
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
                    CSRS: false,            
                }
            }
        }                 
    },    
};

</script>
<style src="../styles/main.css"></style>