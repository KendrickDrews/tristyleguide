<template>
  <div class="DMID-main">
    <div style="position: relative;">

      <DMIDHeader     
        :type="thisSite"
        :button-Color="thisSite"
        :buttonName="thisSite"
        :showNav="{ 
          Home: true,
          DocumentLibrary: true,
          CRS: true,
          SOCSCMS: true,
          Training: true,
          ServiceRequests: false,
          GrantCapture: true,
          Protocols: true,         
        }"
      >    
        <p slot="locationName" class="SR"> Service Requests  </p>

      </DMIDHeader>

      <div class="main-body">
        <allNav/>

        <div class="main-bodyContent">
          <div class="locationContainer">
            <h2 class="bodyLocation">Essential Regulatory Documents Services</h2>
          </div>
          <div class="bodyContent">
          <div class="mainContent "> 
            <p class="form-text" style="margin-bottom: 10px;">To submit a Essential Regulatory Documents Services request, complete the form below.Fields marked with red asterisks are mandatory for completion. An electronic confirmation of receipt will be sent via email to the requestor.</p>
            <p class="form-text">The following will auto-populate from DMID-CROMS Website:</p>
            <ul class="indent2x">
              
              <!-- <li>To submit a Essential Regulatory Documents Services request, complete the form below.Fields marked with red asterisks are mandatory for completion.</li> -->
              <!-- <li>Fields marked with red asterisks are mandatory for completion.</li> -->
              <!-- <li>The following will auto-populate from DMID-CROMS Website:</li>                -->
                <ul class="indent2x">
                  <li>Requestor's Name</li>
                  <li>Requestor's Email</li>
                  <li>Abbreviated Protocol Title and Clinical Project Manager (if the Protocol Number is selected)</li>
                  <!--<li>Anticipated Activation Date</li>-->
                  <li>Site Contact Information (if the Site Name is selected)</li>
                  <li>Principal Investigator contact Information (if the Principal Investigator is selected)</li>
                </ul>
              <!-- <li>An electronic confirmation of receipt will be sent via email to the requestor.</li> -->
            </ul>

              <br/>
              
              <div class="forms F01">
                <div class="form-Row">
                  <p class="form-text">Requestor's Name <span class="red">*</span><span class="unset"> :</span></p> 
                  <input class="form-input" placeholder=" User Name"/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Requestor's Email  <span class="red">*</span><span class="unset"> :</span></p> 
                  <input class="form-input" placeholder=" uName@tech-res.com"/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Protocol Number  <span class="red">*</span><span class="unset"> :</span></p> 
                  <form class="form-input">
                    <select name="Protocol" class="form-input">
                      <option value="volvo">--Select Protocol--</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select> 
                  </form>
                </div>
                <div class="form-Row">
                  <p class="form-text">Abbreviated Protocol Title  <span class="red">*</span><span class="unset"> :</span></p> 
                  <input class="form-input" placeholder=""/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Clinical Project Manager <span class="red">*</span><span class="unset"> :</span></p>   <input class="form-input" placeholder=""/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Anticipated Activation Date <span class="red">*</span><span class="unset"> :</span></p> <form class="form-input">
                    <select name="Protocol" class="form-input">
                      <option value="volvo"> </option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select> 
                  </form> 
                </div>
                <div class="form-Row">
                  <p class="form-text">Protocol version approved by DMID for document <br/> collection <span class="red">*</span><span class="unset"> :</span></p> 
                  <input class="form-input" placeholder=""/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Number of Sites <span class="red">*</span><span class="unset"> :</span></p> 
                  <input class="form-input" placeholder=""/>
                </div>
              </div>
              <br/>

              <p style="font-weight: bold;"> Information about Sites Requiring Collection (Please do not include satellite sites)</p>
              <ul class="indent">                
                <ul class="indent2x">
                  <li>Select the Site Name from the dropdown list.</li>
                  <li>If your site is not listed, select the "View Complete List of Sites" checkbox to select a site from all sites listed in NIAID CRMS. Select "Add New Site" option if your site is not listed in the dropdown list.</li>
                  <li>Select “Add New Principal Investigator” option if the Principal Investigator is not listed in the dropdown list.</li>
                  </ul>
              </ul>
              <br/>
              <div>
                <input type="checkbox" id="scales" name="scales">
                <label for="scales" style="font-weight: unset;">View Complete List Of Sites</label>
              </div>

              <div class="forms F02">
                
                <div class="column">
                  <div class="form-Column">
                    <p class="form-text">Site Name  <span class="red">*</span><span class="unset"> :</span></p> 
                    <form class="input-column">
                    <select name="Protocol" class="input-column">
                      <option value="volvo"> </option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select> 
                  </form> 
                  </div>
                  <div class="form-Column">
                    <p class="form-text">Address1  <span class="red">*</span><span class="unset"> :</span></p> 
                    <input class="input-column" placeholder=""/>
                  </div>
                  <div class="form-Column">
                    <p class="form-text">Address2 <span class="unset"> :</span></p> 
                    <input class="input-column" placeholder=""/>
                  </div>
                  <div class="form-Column">
                    <p class="form-text">Address3 <span class="unset"> :</span></p> 
                    <input class="input-column" placeholder=""/>
                  </div>
                  <div class="form-Column">
                    <p class="form-text">City  <span class="red">*</span><span class="unset"> :</span></p> 
                    <input class="input-column" placeholder=""/>
                  </div>
                  <div class="form-Column">
                    <p class="form-text">Country  <span class="red">*</span><span class="unset"> :</span></p> 
                    <input class="input-column" placeholder=""/>
                  </div>
                  <div class="form-Column">
                    <p class="form-text">State <span class="unset"> :</span></p> 
                    <input class="input-column" placeholder=""/>
                  </div>
                  <div class="form-Column">
                    <p class="form-text">Zip Code <span class="unset"> :</span></p> 
                    <input class="input-column" placeholder=""/>
                  </div>
                </div>
                <div class="column">
                  <br/>
                  <div class="form-Column">
                    <p class="form-text">Principal Investigator  <span class="red">*</span><span class="unset"> :</span></p> 
                    <form class="input-column">
                    <select name="Protocol" class="input-column">
                      <option value="volvo"> </option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select> 
                  </form>
                  </div>
                  <div class="form-Column">
                    <p class="form-text">Principal Investigator Email  <span class="red">*</span><span class="unset"> :</span></p> 
                    <input class="input-column" placeholder=""/>
                  </div>
                  <div class="form-Column">
                    <p class="form-text">Principal Investigator Phone  <span class="red">*</span><span class="unset"> :</span></p> 
                    <input class="input-column" placeholder=""/>
                  </div>
                  <div class="form-Column">
                    <p class="form-text">Type Of Site  <span class="red">*</span><span class="unset"> :</span></p> 
                    <form class="input-column">
                    <select name="Protocol" class="input-column">
                      <option value="volvo"> -- Select TypeOfSite --</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select> 
                  </form>
                  </div>
                  <div class="form-Column-Btn">
                   <button class="form-Btn"> Click here to Add/Update Site </button>
                    <button class="form-Btn"> Cancel/Reset </button>
                  </div>
                  <div class="form-Column-Btn">
                  
                  </div>
                
                </div>
                
                

              </div>
              <div>
                <input type="checkbox" id="Please" name="please">
                <label for="please" style="font-weight: unset; position: relative; top: -22px; z-index: -1;"> &nbsp; &nbsp; &nbsp; Please check here if the administrating site will be responsible for collecting documents from the other sites and sending to CROMS. In this case the administrating site will be the only site contacted for document collection. Please list any further comments/instructions below.</label>
              </div>
              <div class="forms F01">
                <div class="form-Final">
                  <p class="form-text">Comments/Special Instructions<span class="unset"> :</span></p> 
                  <textarea class="form-input" rows="6" cols="20" name="comment" form="usrform">
                  </textarea>
                </div>
                
              </div>
              <br/>              
              <button class="submit-Btn"> Submit </button>
              <br/>
              <br/>
              

              
                        
          </div>
          <!--<div class="servicesAndTools">
            <h4> SERVICES AND TOOLS </h4>
              <ul class="servicesTools-List">
                  <li class="servicesTools-Item">Request Essential Regulatory Documents Services</li>
                  <li class="servicesTools-Item">Essential Regulatory Documents Report</li>
                  <li class="servicesTools-Item">Essential Regulatory Document FAQ</li>
              </ul>
          </div>
          
          <li>Fax: <span class="gray">301-897-7482</span></li>
          -->
        </div>
          <!-- <div class="bodyContent">
            <div class="mainContent ">             
                <ul class="indent">
                  <li @click="showModal"><img class="protoIcon" src="../imgs/extLink.png"/><a><span data-descr="Centers for Disease Control on external site">Centers for Disease Control</span></a></li>                
                  <li @click="showModal"><img class="protoIcon" src="../imgs/extLink.png"/><a>ClinicalTrials.gov</a></li>
                  <li @click="showModal"><img class="protoIcon" src="../imgs/extLink.png"/><a>EMMES CRID</a></li>                              
                  <li @click="showModal"><img class="protoIcon" src="../imgs/extLink.png"/><a>Food and Drug Administration</a></li>
                  <li @click="showModal"><img class="protoIcon" src="../imgs/extLink.png"/><a>ICH/International Conference on Harmonization</a></li>
                  <li @click="showModal"><img class="protoIcon" src="../imgs/extLink.png"/><a>National Institutes of Health</a></li>
                  <li @click="showModal"><img class="protoIcon" src="../imgs/extLink.png"/><a>National Institute of Allergy and Infectious Diseases</a></li>
                  <li @click="showModal"><img class="protoIcon" src="../imgs/extLink.png"/><a>NIAID ClinRegs</a></li>
                  <li><p class="bodyText">The National Institute of Allergy and Infectious Diseases (NIAID) has launched ClinRegs, a website designed to help the research community explore clinical research regulations within specific countries and compare regulatory requirements across countries. <br/> Visit <a>clinregs.niaid.nih.gov.</a> </p></li>
                  <li @click="showModal"><img class="protoIcon" src="../imgs/extLink.png"/><a>NIAID Division of Microbiology and Infectious Diseases</a></li>
                  <li @click="showModal"><img class="protoIcon" src="../imgs/extLink.png"/><a>Office of Clinical Research Affairs</a></li>
                  <li @click="showModal"><img class="protoIcon" src="../imgs/extLink.png"/><a>Office for Human Research Protection</a></li>
                  <li @click="showModal"><img class="protoIcon" src="../imgs/extLink.png"/><a>World Health Organization</a></li>                
                </ul>           
                              
            </div>
          </div> -->
        </div>        

      </div>
      <div class="main-footer">
      </div> 
       <Modal
        v-show="isModalVisible"
        @close="closeModal"
      />
    </div> 
  </div> 
</template>

<script>    
  import VLink from '../components/VLink.vue';
  import DMIDHeader from "../components/DMIDhead.vue";
  import colors from "../layouts/colors.vue"
  import navList from "../components/navLists.vue";
  import allNav from "../components/DMIDsideNav.vue";
  import Modal from "../components/modalTemplate.vue";
  import buttonList from '../components/componentList/buttonList.js';
  

  export default {
    name: 'siteMirror',
    components: {      
      DMIDHeader,
      colors,
      navList,
      allNav,
      Modal,
      buttonList,
      VLink
    },
    //props: {
    //  href: {
    //    type:String,
    //    required: true 
    //  }
    //},
    

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
        subSiteIs: 'ServiceRequests',
        buttonList: buttonList,
                
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
        },
        
      },
      stateComponent: {
        get: function() {
          return this.$root.store.state.activeComponent 
        },
        set: function(value) {
          this.$root.store.commit('isActiveComponent', value )
        }
      },
     
      isActive () {
        return this.href === this.$root.currentRoute
      },

    },
///////
    mounted: function () {
      this.setStateSubSite();
      this.stateActiveComponent('');
      this.scrollReset(0);
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
      },  
      showCRS () {
        return this.showNav.CRS = true
      }, 
      stateActiveComponent (value) {
      return  this.stateComponent = value
      },
      scrollReset (value) {
        var element = document.querySelector('#scrollContainer');
        return element.scrollTop = value;
      },      
      goTo (event) {
        event.preventDefault()
        this.$root.currentRoute = this.href
        window.history.pushState(
          null,
          routes[this.href],
          this.href
        )
      },     
                   
    },
  }

</script>
<style>
/*  body {
  background-color: rgb(52, 94, 192)!important;
} 
.SR {
  color:  rgb(52, 94, 192)!important; 
}
 .locationContainer {
  background-color: rgb(52, 94, 192)!important;
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
}
.protoIconExtLink {
  position: relative;
  z-index: 1;
  margin-left: -28px;
  margin-right: 0px;
  margin-top: -7px;
  border: 1px solid transparent;
     
}
.two-icons a  {
margin-left: 3px;
}
.two-icons a  {
margin-left: 3px;
}
.break {
  height: 14px;
}

span[data-descr] {
  position: relative; 
  cursor: help;
}

span[data-descr]:hover::after {
  content: attr(data-descr);
  position: absolute;
  left: 100px;
  top: 24px;
  min-width: 250px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: #000000;
  font-size: 14px;
  z-index: 1;
}
 */

</style>
<style>
body {
  background-color: rgb(52, 94, 192)!important; 
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


.bodyText {
  font-family: Calibri;
}

.indent li  {
  font-size: 13.5px;
  font-family: Calibri;
  padding: 2px 0;
  font-weight: bold;
  list-style: none;
}
.indent2x {
  margin-left: 45px; 
}
.indent2x li  {
  font-size: 13.5px;
  font-family: Calibri;
  padding: 2px 0;
  font-weight: bold;
  list-style: disc;
}

.titleHead {
  color:#244f1e;
  font-weight: bold;
  font-size: 15px;
  margin-left: -15px;
  font-family: Verdana;  
}
.gray {
  background-color: #ccc;
}
.break {
  height: 14px;
}
.F01 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;  
}
.form-Row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  padding-bottom: 3px;
  margin: 0;
}
.form-text {
  font-weight: bold;
  margin: 0;
}
.form-Row .form-input {
  width: 312px;
  height: 23px;
  color: #777;
}

.input-column {
  width: 312px;
  height: 20px;
  color: #777;
}
.red {
  color: red;
}
.unset {
  font-weight: unset;
}
.F02 {
  height: 350px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap; 
}
.column {
  width: 41%;
  margin-right: 25px;
}
.form-Column {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;  
  padding-bottom: 0px;
  margin: 0px;
  margin-bottom: 2px; 
}
.form-Final {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 85%;
  padding-bottom: 3px;
  margin: 0;
}
.form-Final .form-input {
  width: 312px;  
  color: #777;
}
.form-Column-Btn {  
  height: 70px;  
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;  
  padding-bottom: 0px;
  margin: 0px;
  margin-top: 70px;
}
.form-Btn {
  width: 200px;
  height: 26px;
  margin-bottom: 5px;
}
.submit-Btn {
  width: 150px;
  height: 26px;
  margin-left: 40%;
}
</style>