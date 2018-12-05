<template>
  <div class="DMID-main">
    
      <DMIDHeader/>
    <div class="main-body">
      <allNav/>

      <div class="main-bodyContent">
        <div class="locationContainer">
          <h2 class="bodyLocation">Essential Regulatory Documents</h2>
        </div>
        <div class="bodyContent">
          <div class="mainContent "> 
            <p class="titleHead">Essential Regulatory Documents Services</p> 

            <p class="bodyText">The Essential Regulatory Documents Group provides essential regulatory document tracking and review services to the DMID and their Partners for domestic and international protocols. Essential Regulatory Document Group Services include:</p>  
            <ul class="indent2x">
              <li>Collect, review, transmit, and file Essential Regulatory Documents required for all stages of the study (Start-up, Interim, and Close out).</li>
              <li>Communicate with site to resolve essential regulatory document issues and/or obtain outstanding documents.</li>
              <li>Send Site Activation Memo to sites as notification that they can begin study-related activities.</li>
              </ul>
              <p class="bodyText">If you have any questions or concerns, please contact DMID CROMS using the information provided below:</p>  
            <ul class="indent2x">
              <li>Email : <a>ERDG@dmidcroms.com</a></li>
              <li>Phone: <span class="gray">301-897-7437 </span></li>
              <li>Fax: <span class="gray">301-897-7482</span></li>
              <li>Mailing Address: 
                <br/> DMID-CROMS
                <br/> Essential Regulatory Documents Group (ERDG)
                <br/> 6500 Rock Spring Dr. Suite 650
                <br/> Bethesda, MD 20817
              </li>
              </ul>
              <p class="bodyText">Sites conducting DMID clinical research must submit their essential regulatory documents to the CROMS Essential Regulatory Document Group (ERDG) for review and tracking. DMID document review guidelines have been developed in the form of a worksheet to assist CROMS ERDG, site staff, clinical site monitors and other DMID contractors in the review of essential regulatory documents.</p>
              <br/>
              <p class="titleHead">Guidelines and Forms</p> 
              <ul class="indent">
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>DMID Financial Disclosure Form with Instructions</a></li>                
                <li><img class="protoIcon" src="src\imgs\icdoc.png"/><a>DMID Investigator of Record Form</a></li>
                <li><img class="protoIcon" src="src\imgs\icdoc.png"/><a>DMID Investigator of Record Form Instructions</a></li>                              
                <li><img class="protoIcon" src="src\imgs\icdoc.png"/><a>DMID IRB Approval Certification Form​​</a></li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>DMID Language and Translation Requirements Summary</a></li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>DMID Records Shipping for Retention Instructions</a></li>
                <li><img class="protoIcon" src="src\imgs\icdoc.png"/><a>DMID Translation Equivalence Form (Appendix A)</a></li>
                <li><img class="protoIcon" src="src\imgs\icdoc.png"/><a>Essential Regulatory Document Review Worksheet </a></li>
                <li><img class="protoIcon" src="src\imgs\icxlsx.png"/><a>Essential Regulatory Documents Inventory List Template</a></li>
                <li><img class="protoIcon" src="src\imgs\icdoc.png"/><a>Investigator of Record Form For IDE</a></li>
                <li><img class="protoIcon" src="src\imgs\icpdf.png"/><a>​Laboratory Essential Regulatory Documents Information Sheet​</a></li>
                <li><img class="protoIcon" src="src\imgs\icdoc.png"/><a>Study Personnel Signature-Responsibility List</a></li>

                <li class="break"></li> 

                    <li @click="showModal" class="two-icons">
                      <img class="protoIconExtLink" src="src\imgs\icpdf.png"/>
                      <img class="extLink" height="11px" width="11px" src="src\imgs\extArrow.png"/>
                      <a>FDA Form 1572</a>
                    </li>

                    <li @click="showModal">
                      <img class="protoIcon" src="src\imgs\extLink.png"/>
                      <a>Federalwide Assurance Application</a>
                    </li>

                    <li @click="showModal">
                      <img class="protoIcon" src="src\imgs\extLink.png"/>
                      <a>Federalwide Assurance Instructions and Resources</a>
                    </li>  

                    <li @click="showModal" class="two-icons">
                      <img class="protoIconExtLink" src="src\imgs\icpdf.png"/>
                      <img class="extLink" height="11px" width="11px" src="src\imgs\extArrow.png"/>
                      <a>Translation and Communication Requirements for Sites Conducting DMID-Supported Clinical Research</a>
                    </li>

                  <li class="break"></li> 
                
              </ul>

              <p class="titleHead">Information Sheets and Standards</p>
              <p class="bodyText">For a complete list of DMID Information Sheets, Guidelines, and Standards refer to the links below.</p> 
                <ul class="indent">
                  <li><span class="protoIcon fa-pushed"></span><a>Regulatory Document Guidelines</a></li>
                  <li><span class="protoIcon fa-pushed"></span><a>Source Documentation Standards</a></li>
                </ul>

              <p class="titleHead">Collection Process</p> 
                <ul class="indent">
                  <li>
                    <img class="protoIcon" src="src\imgs\icpdf.png"/>
                    <a>CROMS ERDG Site Activation Flowchart</a>
                  </li>
                </ul>
                        
          </div>
          <div class="servicesAndTools">
            <h4> SERVICES AND TOOLS </h4>
              <ul class="servicesTools-List">
                  <li class="servicesTools-Item">Request Essential Regulatory Documents Services</li>
                  <li class="servicesTools-Item">Essential Regulatory Documents Report</li>
                  <li class="servicesTools-Item">Essential Regulatory Document FAQ</li>
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
  padding: 4px 0;
  width: auto;
  float: left;
  clear: both;
}
.indent li:hover  {
  cursor: pointer;
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
/*.extLink {
  margin-left: 5px;
  margin-top: -15px;
}*/
/*.extLink {
  position: relative;
  z-index: 1;
  margin-right: 0px;
  margin-left: -10px;
  margin-top: -20px;
}*/
.extLink {
  position: relative;
  z-index: 2;
  margin-right: 14px;
  margin-left: -22px;
  margin-top: 8px;
}
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
