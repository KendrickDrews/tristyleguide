<template>
  <div class="DMID-main">
    
    <DMIDHeader
      v-bind:showNav="{ 
        Home: true,
        DocumentLibrary: true,
        CRS: false,
        SOCSCMS: true,
        Training: true,
        ServiceRequests: true,
        GrantCapture: true,
        Protocols: true,         
        }"
    />

    <div class="main-body">
      <allNav/>

      <div class="main-bodyContent">
        <div class="locationContainer">
          <h2 class="bodyLocation">Related Links</h2>
        </div>
        <div class="bodyContent">
          <div class="mainContent ">             
              <ul class="indent">
                <li @click="showModal"><img class="protoIcon" src="src\imgs\extLink.png"/><a>Centers for Disease Control</a></li>                
                <li @click="showModal"><img class="protoIcon" src="src\imgs\extLink.png"/><a>ClinicalTrials.gov</a></li>
                <li @click="showModal"><img class="protoIcon" src="src\imgs\extLink.png"/><a>EMMES CRID</a></li>                              
                <li @click="showModal"><img class="protoIcon" src="src\imgs\extLink.png"/><a>Food and Drug Administration</a></li>
                <li @click="showModal"><img class="protoIcon" src="src\imgs\extLink.png"/><a>ICH/International Conference on Harmonization</a></li>
                <li @click="showModal"><img class="protoIcon" src="src\imgs\extLink.png"/><a>National Institutes of Health</a></li>
                <li @click="showModal"><img class="protoIcon" src="src\imgs\extLink.png"/><a>National Institute of Allergy and Infectious Diseases</a></li>
                <li @click="showModal"><img class="protoIcon" src="src\imgs\extLink.png"/><a>NIAID ClinRegs</a></li>
                <li><p class="bodyText">The National Institute of Allergy and Infectious Diseases (NIAID) has launched ClinRegs, a website designed to help the research community explore clinical research regulations within specific countries and compare regulatory requirements across countries. <br/> Visit <a>clinregs.niaid.nih.gov.</a> </p></li>
                <li @click="showModal"><img class="protoIcon" src="src\imgs\extLink.png"/><a>NIAID Division of Microbiology and Infectious Diseases</a></li>
                <li @click="showModal"><img class="protoIcon" src="src\imgs\extLink.png"/><a>Office of Clinical Research Affairs</a></li>
                <li @click="showModal"><img class="protoIcon" src="src\imgs\extLink.png"/><a>Office for Human Research Protection</a></li>
                <li @click="showModal"><img class="protoIcon" src="src\imgs\extLink.png"/><a>World Health Organization</a></li>                
              </ul>                       
          </div>
        </div>
      </div>        
                
    </div>
    <div class="main-footer">
    </div> 
    <testModal
      v-show="isModalVisible"
      @close="closeModal"
    />   
  </div>
</template>

<script>  
  import DMIDHeader from "../components/DMIDhead.vue";
  import colors from "../layouts/colors.vue"
  import navList from "../components/navLists.vue";
  import allNav from "../components/DMIDsideNav.vue";
  import testModal from "../components/modalTemplate.vue";

  export default {
    components: {      
      DMIDHeader,
      colors,
      navList,
      allNav,
      testModal,
      

    },
    data () {
      return {
        isModalVisible: false,        
        showNav: {
          Home: true,
          DocumentLibrary: true,
          CRS: true,
          SOCSCMS: true,
          Training: true,
          ServiceRequests: true,
          GrantCapture: true,
          Protocols: true,
          Results: true,
          PRT: true,
          SMART: true,
          CSRS: true, 
        },
        subSiteIs: 'crs',               
      };
    },
///////    
    computed: {  
      thisSite: function() {       
        return this.subSiteIs
      },    
      //     
      subSite: {
        get: function() {
          return this.$root.store.state.DMIDSite
        },
        set: function(value) {
          this.$root.store.commit('setDMIDSubSite', value )
        }
      },

    },
///////
    mounted: function () {
      this.setStateSubSite()
    },
///////
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      setStateSubSite: function (thisSite) {
        const DMIDSite = this.thisSite
        return this.stateSubSite(this.thisSite)
      },
      stateSubSite (value) {
        return  this.subSite = value
      }       
    },
  }

</script>
<style>
.main-headButtons .CRS {
  display:none;
}
.indent {
  margin-left: 25px;
  list-style-type: none;
}
.indent li  {
  font-size: 13.5px;
  font-family: Calibri;
  padding: 4px 0;
  width: auto;
  float: left;
  clear: both;
}
.indent li:hover  {
  cursor: pointer;  
}
a:hover {
  color: #337ab7;
}
.bodyText {
  font-family: Calibri;
}
.indent2x {
  margin-left: 25px; 
}
.indent2x li  {
  font-size: 13.5px;
  font-family: Calibri;
  padding: 2px 0;
}
.titleHead {
  color:#244f1e;
  font-weight: bold;
  font-size: 15px;
  margin-left: -15px;
  font-family: Verdana;
  
}
.protoIcon {
  margin-left: -28px;
  margin-right: 11px;
  margin-top: -5px;
}
.fa-pushed {
  width: 13px;
  color: #49a274;
  margin-left: -12px;
}
.servicesTools-List {
  padding-right: 5px;
}
.gray {
  background-color: #ccc;
}
.extLink {
  margin-left: 5px;
  margin-top: -15px;
}
/*.extLink {
  position: relative;
  z-index: 1;
  margin-right: 0px;
  margin-left: -10px;
  margin-top: -20px;
}*/
.protoIconExtLink {
  position: relative;
  z-index: 1;
  margin-left: -28px;
  margin-right: 0px;
  margin-top: -7px;
  border: 1px solid transparent;
     
}
/*.two-icons a  {
margin-left: 3px;
}*/
.two-icons a  {
margin-left: 3px;
}
.break {
  height: 14px;
}

</style>
