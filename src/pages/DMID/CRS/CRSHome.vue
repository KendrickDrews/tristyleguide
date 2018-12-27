<template>
  <div class="DMID-main">
    <div style="position: relative">

      <DMIDHeader     
        :type="thisSite"
        :button-Color="thisSite"
        :buttonName="thisSite"
        :showNav="{ 
          Home: true,
          DocumentLibrary: true,
          CRS: false,
          SOCSCMS: true,
          Training: true,
          ServiceRequests: true,
          GrantCapture: true,
          Protocols: true,         
        }"
      >    
        <p slot="locationName"> Clinical Research Support </p>

      </DMIDHeader>

      <div class="main-body">
        <allNav/>

        <div class="main-bodyContent">
          <div class="locationContainer">
            <h2 class="bodyLocation">Welcome to Clinical Research Support</h2>
          </div>
          <div class="bodyContent">
          <div class="mainContent "> 
            <p class="form-text" style="margin-bottom: 10px;">The information provided on this Training page applies to all sites and to all key personnel engaged in DMID-supported clinical research.</p>
            <h3 class="lmsTitle">TRAINING AND LEARNING MANAGEMENT SYSTEM (LMS)</h3>
            <p>Training courses are now available through the LMS allowing authorized users to access Course Completion Certificates and transcripts through a user-friendly interface. To access the LMS, please select the following button: </p>
            <br/>
            <div class="LMS">
                <h4 align="center"> Enter the <strong>Training and Learning Management System (LMS) </strong> </h4> 
            </div>
            <br/>
            <p>Please reference the LMS Quick Start Guide for assistance with navigating through the LMS.</p>  
            <br />
            <p> <strong>Important note: </strong></p>
            
            <p>
Sites should maintain training records for all courses required by the Division of Microbiology and Infectious Diseases (DMID), the National Institutes of Health (NIH), National Institute of Allergy and Infectious Diseases (NIAID). Documentation of training should be current and retained on site.</p>  
             
           

              <br/>
              <hr style="width: 100%">
              
              <p> <strong> Other training requirements: </strong> </p>
                <br/>
              <p>All investigators and site staff responsible for the conduct, management and oversight of NIH-funded clinical trials are required to complete training in the protection of human research participants and Good Clinical Practice (GCP). </p>
              <br/>
              <p>Training may be completed through a class or course, academic training program, or certification from a recognized clinical research professional organization. GCP refresher training should be completed at least every three years in order for applicable site staff to remain current with regulations, standards and guidelines.</p>
              <br/>
              <p>The NIAID GCP and NIH Protecting Human Research Participants training may be accessed via the links provided, below, or per site institutional requirements. Please retain the certificate of completion at the end of the training course. The NIH Protecting Human Research Participants course will no longer be available after September 26, 2018. Please complete the course and/or print your certificate by this date. As of September 27, 2018, please refer to your institution, professional organization, or other training program for equivalent training, and retain certificates of courses completed.</p>

              
              
              <br/>              
              <button class="submit-Btn"> Submit </button>
              <br/>
              <br/>
              

              
                        
          </div>
          <div class="servicesAndTools">
            <h4> SERVICES AND TOOLS </h4>
              <ul class="servicesTools-List">
                  <li class="servicesTools-Item">Ad hoc Training Request Report</li>
                  <li class="servicesTools-Item">Ad Hoc Training Request Form</li>
                  <li class="servicesTools-Item">Ad Hoc Training Registration</li>
                  <li class="servicesTools-Item">Ad Hoc Training Request Approval</li>
              </ul>
          </div>
          
          
         
        </div>          
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
  import DMIDHeader from "../../../components/DMIDhead.vue";
  import colors from "../../../layouts/colors.vue"
  import navList from "../../../components/navLists.vue";
  import allNav from "../../../components/DMIDsideNav.vue";
  import Modal from "../../../components/modalTemplate.vue";
  import buttonList from '../../../components/componentList/buttonList.js';
  

  export default {
    name: 'CRS',
    components: {      
      DMIDHeader,
      colors,
      navList,
      allNav,
      Modal,
      buttonList,
      
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
        subSiteIs: this.$route.name,
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
      stateType: {
        get: function() {
          return this.$root.store.state.siteType 
        },
        set: function(value) {
          this.$root.store.commit('setSiteType', value )
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
      this.stateSiteType('CRS');
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
      stateSiteType (value) {
      return  this.stateType = value
      }    
                   
    },
  }

</script>
<style>
.locationContainer {
  background-color: var(--green-background);
  background-image: var(--content-gradient);
  display: flex;
  align-content: center;
  min-height: 50px;  
  margin: 0;
}
.mainContent {
  padding: 10px 10px 10px 5px!important;
  font-family: calibri!important;
}
.main-location {
  color: var(--green-header);
}
.main-headSearch h4 {
  color: var(--green-header);
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
.lmsTitle {
    font-family: Verdana;
    font-size: 16px;
    text-align: center;
    color: #244f1e;
}
.LMS {
    background-color: #4f81bd;
    border: 2px solid #003471;
    border-radius: 6px; 
    width: 445px;
    height: 33px;
    line-height: 2em;
    vertical-align: center; 
    margin: 0 auto;  
}
.LMS h4 {
    color: white;    
}
</style>