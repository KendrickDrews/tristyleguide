<template>
 
  <div class="DMID-main">
    
      <DMIDHeader/>
    <div class="main-body">
      <allNav/>

      <div class="main-bodyContent">
        <div class="locationContainer">
          <h2 class="bodyLocation">DMID Information Sheets, Guidelines and Standards</h2>
        </div>
        <div class="bodyContent">
          <div class="mainContent ">

            <p class="titleHead">DMID Information Sheets</p>   

              <ul class="indent">
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a> Certificate of Confidentiality</a></li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Clinical Quality Management Plan</a></li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Clinical Site Monitoring</a></li>
                <ul class="indent">
                  <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Clinical Site Monitoring Visit - Flowchart</a></li>                  
                </ul>                
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Document Posting to the DMID-CROMS Web-Librry</a></li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Document Redaction Services</a></li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Document Version Control Guidelines</a></li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Essential Regulatory Documents and Site Activation</a></li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Laboratory Essential Regulatory Documents and Site Activation</a></li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Payment for Participation</a></li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Protocol Deviation Reporting</a></li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Safety Oversight and SAE Reporting</a></li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Shipping Specimens: Dangerous Goods Regulations</a></li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Writing Notes to the Study File</a></li>
              </ul>

              <p class="titleHead">DMID Guidelines</p>

              <ul class="indent">
                <li>Clinical Agent Repository, send email to <span><a> DMID.CAR@thermofisher.com</a></span> to request Guidance</li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>DMID Guidelines for Clinical Study Product Management</a></li>
                <ul class="indent">
                  <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>DMID Guidelines for Clinical Study Product Management - Frequently Asked Questions</a></li>                  
                </ul>
                <li>
                  <img class="protoIcon" src="src\imgs\icpdf.png"/>
                  <a>DMID Study Product Management Plan</a>
                </li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Good Clinical Practice Resource Guide</a></li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Guidelines for Writing Notes to the Study File with Template</a></li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>ICH Guidelines - Spanish</a></li>
                <li>Source Documentation Standards - Language Versions:</li>
                <ul class="indent">
                  <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>English</a></li>
                  <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>French</a></li>
                  <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Portuguese</a></li>
                  <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Spanish</a></li>
                </ul>
              </ul>

              <p class="titleHead">DMID Standards</p> 

              <ul class="indent">
                <li>Source Documentation Standards - Language Versions:</li>
                <ul class="indent">
                  <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>English</a></li>
                  <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>French</a></li>
                  <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Portuguese</a></li>
                  <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>Spanish</a></li>
                </ul>
                
                <!--<i class="fa fa-external-link-square" aria-hidden="true"></i>-->
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

</style>
