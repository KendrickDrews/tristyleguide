<template>
  <div class="DMID-main">
    <div class="DMID-container--home">
      <DMIDHeader
        :type="thisSite"
        :button-Color="thisSite"
        :buttonName="thisSite"
        :currentSite="stateType"
        :showNav="{
          Home: true,
          DocumentLibrary: true,
          CRS: true,
          SOCSCMS: true,
          Training: false,
          ServiceRequests: true,
          GrantCapture: true,
          Protocols: true,
        }"
      >
        <p slot="locationName"> Training</p>
      </DMIDHeader>
      <div class="main-body">
        <allNav/>
        <div class="main-bodyContent">
          <div class="locationContainer" :class="(stateType === 'ServiceRequests') ? 'blue-bg' : 'green-bg'">
            <h2 class="bodyLocation">{{ stateTitle | splitStrings('-',' ') }}</h2>
          </div>
          <div class="bodyContent">
              <router-view></router-view>
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

export default {
  name: 'Training',
  components: {
    DMIDHeader,
    colors,
    navList,
    allNav,
    Modal,
    buttonList

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
      subSiteIs: 'Training',
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
    this.stateActiveComponent('TrainingHome')
    // this.stateActiveComponent('Ad-Hoc-Training-Registration')
  },
  /// ////
  mounted: function () {
    this.setStateSubSite()
    this.$nextTick(function () {
      this.stateActiveComponent('TrainingHome')
      // this.stateActiveComponent('Ad-Hoc-Training-Registration')
    })
    this.scrollReset(0)
    this.stateSiteType('CRS')
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
.mainContent {
  padding: 10px 0px 10px 0px!important;
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
.courseRow {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
}
</style>
