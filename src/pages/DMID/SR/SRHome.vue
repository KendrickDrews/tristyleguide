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
          CRS: true,
          SOCSCMS: true,
          Training: true,
          ServiceRequests: false,
          GrantCapture: true,
          Protocols: true,
        }"
      >
        <p slot="locationName">Service Requests</p>
      </DMIDHeader>

      <div class="main-body">
        <allNav/>
        <div class="main-bodyContent">
          <div class="locationContainer lc-serviceRequests">
            <h2 class="bodyLocation">{{ stateTitle | splitStrings('-',' ') }}</h2>
          </div>
          <div class="bodyContent">
            <div class="mainContent ">
              <component :is="stateComponent" />
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
import DMIDHeader from '../../../components/DMIDhead.vue'
import colors from '../../../layouts/colors.vue'
import navList from '../../../components/navLists.vue'
import allNav from '../../../components/DMIDsideNav.vue'
import Modal from '../../../components/modalTemplate.vue'
import buttonList from '../../../components/componentList/buttonList.js'
import ServiceRequestsHome from '../SR/ServiceRequestsHome.vue'
import ClinicalMonitoring from '../SR/ClinicalMonitoring.vue'
import ClinicalMonitoringReport from '../SR/ClinicalMonitoringReport.vue'
import ClinicalQualityManagementServices from '../SR/ClinicalQualityManagementServices.vue'
import ClinicalQualityManagementServicesReport from '../SR/ClinicalQualityManagementServicesReport.vue'
import CROMSQualityCrosswalkReview from '../SR/CROMSQualityCrosswalkReview.vue'
import CROMSQualityCrosswalkReviewReport from '../SR/CROMSQualityCrosswalkReviewReport.vue'
import DSMBSMCCoordination from '../SR/DSMB-SMCCoordination.vue'
import DSMBSMCCoordinationReport from '../SR/DSMB-SMCCoordinationReport.vue'
import EssentialRegulatoryDocuments from '../SR/EssentialRegulatoryDocuments.vue'
import EssentialRegulatoryDocumentsReport from '../SR/EssentialRegulatoryDocumentsReport.vue'
import HumanSubjectsProtection from '../SR/HumanSubjectsProtection.vue'
import MedicalWriting from '../SR/MedicalWriting.vue'
import MedicalWritingReport from '../SR/MedicalWritingReport.vue'
import MiscellaneousServicesReport from '../SR/MiscellaneousServicesReport.vue'
import MiscellaneousServices from '../SR/MiscellaneousServices.vue'
import ReportAProtocolDeviation from '../SR/ReportaProtocolDeviation.vue'
import ProtocolDeviationReport from '../SR/ProtocolDeviationReport.vue'
import ProtocolNumberRequest from '../SR/ProtocolNumberRequest.vue'
import TeleconferenceSupport from '../SR/TeleconferenceSupport.vue'
import TeleconferenceSupportReport from '../SR/TeleconferenceSupportReport.vue'
import Training from '../SR/Training.vue'
import TrainingApproval from '../SR/TrainingApproval.vue'
import TrainingReport from '../SR/TrainingReport.vue'

export default {
  name: 'SR',
  components: {
    DMIDHeader,
    colors,
    navList,
    allNav,
    Modal,
    buttonList,
    ServiceRequestsHome,
    ClinicalMonitoring,
    ClinicalMonitoringReport,
    ClinicalQualityManagementServices,
    ClinicalQualityManagementServicesReport,
    CROMSQualityCrosswalkReview,
    CROMSQualityCrosswalkReviewReport,
    DSMBSMCCoordination,
    DSMBSMCCoordinationReport,
    EssentialRegulatoryDocuments,
    EssentialRegulatoryDocumentsReport,
    HumanSubjectsProtection,
    MedicalWriting,
    MedicalWritingReport,
    MiscellaneousServices,
    MiscellaneousServicesReport,
    ReportAProtocolDeviation,
    ProtocolDeviationReport,
    ProtocolNumberRequest,
    TeleconferenceSupport,
    TeleconferenceSupportReport,
    Training,
    TrainingApproval,
    TrainingReport
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
        CSRS: true
      },
      subSiteIs: this.$route.name,
      buttonList: buttonList
    }
  },
  /// ////
  computed: {
    thisSite: function () {
      return this.subSiteIs
    },

    //
    subSite: {
      get: function () {
        return this.$root.store.state.DMIDSite
      },
      set: function (value) {
        this.$root.store.commit('setDMIDSubSite', value)
      }

    },
    stateComponent: {
      get: function () {
        return this.$root.store.state.activeComponent
      },
      set: function (value) {
        this.$root.store.commit('isActiveComponent', value)
      }
    },
    stateType: {
      get: function () {
        return this.$root.store.state.siteType
      },
      set: function (value) {
        this.$root.store.commit('setSiteType', value)
      }
    },
    stateTitle: {
      get: function () {
        return this.$root.store.state.siteTitle
      },
      set: function (value) {
        this.$root.store.commit('isSiteTitle', value)
      }
    },

    isActive () {
      return this.href === this.$root.currentRoute
    }

  },
  /// ////
  beforeMount: function () {
    this.stateActiveComponent('Service-Requests-Home')
  },
  /// ////
  mounted: function () {
    this.setStateSubSite()
    this.$nextTick(function () {
      this.stateActiveComponent('Service-Requests-Home')
    })
    this.scrollReset(0)
    this.stateSiteType('ServiceRequests')
  },
  /// ////
  methods: {
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    setStateSubSite: function (thisSite) {
      const DMIDSite = this.thisSite
      return this.stateSubSite(this.thisSite)
    },
    stateSubSite (value) {
      return this.subSite = value
    },
    stateActiveComponent (value) {
      return this.stateComponent = value
    },
    scrollReset (value) {
      var element = document.querySelector('#scrollContainer')
      return element.scrollTop = value
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
      return this.stateType = value
    }
  },
  filters: {
    splitStrings: function (value, separator, connector) {
      if (!value) return 'noValue'
      var toSplit = value
      var splitString = toSplit.split(separator)
      return splitString.join(connector)
    }
  }
}

</script>
<style>
.main-headSearch h4{
  color: #2a469d;
}
.serviceRequests-loc {
  color: rgb(52, 94, 192);
}
.main-location {
  color: rgb(52, 94, 192);

}
.lc-serviceRequests {
  background-color: rgb(62, 151, 253);
}
.mainContent {
  padding: 0px 10px 10px 0px!important;
  font-family: calibri!important;
  width: 100%;
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
 
  padding-bottom: 3px;
  margin: 0;
}
.form-text {
  font-weight: bold;
  margin: 0;
}
.form-Row .form-input {

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
  /* width: 85%; */
  padding-bottom: 3px;
  margin: 0;
}
.form-Final .form-input {

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
.excel-Btn {
  width: 150px;
  height: 23px;
  margin-left: 2%;
  margin-bottom: 20px;
}
#scrollTable {
  width: 100%;
  overflow:scroll;
  height: 574px;
  border: 1px solid #9F9F9F;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 768px;
  margin-top: -1px;
  margin-left: -1px;
  border: 1px solid #9F9F9F;
}
table thead tr {
  display:block;
}
table tbody {
  display: block;
  overflow: auto;
}
.tableHeader {
  margin: 2px 8px ;
}
.short {
  width: 100px;
}
.long {
  width: 180px;
}
th {
  background-color: #DCDCDC;
  border: 1px solid #9F9F9F;
  height: 37px;
}
td, th {
  font-weight: normal;
  text-align: left;
  padding: 0px;

}
td {
  border: 1px solid #dddddd;
  padding: 3px 6px 4px;
  min-height: 50px;
}
tr:nth-child(even) {
  background-color: #EDEDEB;
}
.visible-scrollbar, .invisible-scrollbar, .mostly-customized-scrollbar {
  display: block;
  width: 10em;
  overflow: auto;
  height: 2em;
}
.mostly-customized-scrollbar::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #aaa; /* or add it to the track */
}
.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
  background: #000;
}

.pagination {
  display: inline-block;
  border-left: 1px solid #9F9F9F;
  border-right: 1px solid #9F9F9F;
  border-bottom: 1px solid #9F9F9F;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}
</style>
