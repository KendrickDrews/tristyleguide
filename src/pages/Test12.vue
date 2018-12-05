<template>

  <div class="DMID-main">
    
      <DMIDHeader/>
    <div class="main-body">
      <allNav/>

      <div class="main-bodyContent">
        <div class="locationContainer">
          <h2 class="bodyLocation">Forms and Templates</h2>
        </div>
        <div class="bodyContent">
          <div class="mainContent ">            

              <ul class="indent">
                <li><i class="protoIcon fa-pushed" aria-hidden="true"></i><a>Clinical Quality Management Templates</a></li>
                <li><img class="protoIcon" src="src\imgs\icdoc.png"/><a>DMID Study Product Management Plan</a></li>
                <li><i class="protoIcon fa-pushed" aria-hidden="true"></i><a>Essential Regulatory Document Forms</a></li>                              
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Informed Consent Form Template Checklist</a></li>
                <li><i class="protoIcon fa-pushed" aria-hidden="true"></i><a>Protocol Development Templates</a></li>
                <li><i class="protoIcon fa-pushed" aria-hidden="true"></i><a>SAE Reporting and Safety/Pharmacovigilance Forms</a></li>
                <li><i class="protoIcon fa-pushed" aria-hidden="true"></i><a>Safety Oversight Committees Forms</a></li>
                
              </ul>

                        
          </div>
        </div>
      </div>        
                
    </div>
    <div class="main-footer">
    </div>
  </div>
</template>

<script>
  
  import DMIDHeader from "../components/DMIDhead.vue";
  import colors from "../layouts/colors.vue"
  import navList from "../components/navLists.vue";
  import allNav from "../components/DMIDsideNav.vue";

  export default {
    components: {      
      DMIDHeader,
      colors,
      navList,
      allNav
    },
///////
    data: function () {
      return {
        isModalVisible: false,        
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
.indent {
  margin-left: 25px;
  list-style-type: none;
}
.indent li  {
  font-size: 13.5px;
  font-family: Calibri;
  padding: 2px 0;
}
.indent li:hover  {
  cursor: pointer;

}
.titleHead {
  color:#244f1e;
  font-weight: bold;
  font-size: 15px;
  margin-left: -15px;
  
}
.protoIcon {
  margin-left: -28px;
  margin-right: 11px;
}
.fa-pushed {
  width: 13px;
  color: #244f1e;
  margin-left: -12px;
}

</style>
