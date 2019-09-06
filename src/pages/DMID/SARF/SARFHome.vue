<template>
  <div class="DMID-main SARF-Main">
      <SARFHeader
        :type="thisSite"
        :button-Color="thisSite"
        :buttonName="thisSite"
        :currentSite="stateType"
        :showNav="{
          Home: true,
        }"
      >
      </SARFHeader>
      <div class="main-body SARF-main-body">
        <div class="main-bodyContent SARF-mainBody-content">
          <div class="bodyContent">
            <div class="mainContent">
              <router-view></router-view>
            </div>
          </div>
        </div>

      </div>
      <div class="main-footer SARF-footer">
          <!-- Branding Nav -->
          <div class="brandingNav">
              <div class="external">
                  <img src="../../../imgs/HHS-NIH_NIAID_LogoSet_Web-Small_Black.png">
              </div>
              <div class="policy">
                  <a href="#">Privacy Policy</a>
                  <a class=pipe>|</a>
                  <a href="#">Disclaimers</a>
              </div>
          </div>
        </div>
       <Modal
        v-show="isModalVisible"
        @close="closeModal"
      />
     </div>
</template>

<script>
import SARFHeader from '../../../components/SARFhead.vue'
import colors from '../../../layouts/colors.vue'
import navList from '../../../components/navLists.vue'
import Modal from '../../../components/modalTemplate.vue'
import buttonList from '../../../components/componentList/buttonList.js'

export default {
  name: 'SARF',
  components: {
    SARFHeader,
    colors,
    navList,
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
      subSiteIs: 'SARF',
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
    this.stateActiveComponent('Service Requests')
  },
  /// ////
  mounted: function () {
    this.setStateSubSite()
    this.$nextTick(function () {
      this.stateActiveComponent('Service Requests')
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
.SARF-Main {
  min-height: 800px;
  width: 1000px;
  padding: 20px 30px 30px 30px;
  margin-top: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.SARF-divide {
  margin-top: 5px;
}
.SARF-headTop {
  justify-content: flex-start;
      margin-left: 113px;
}
.SARF-container {
  height: 100%;
}
.SARF-mainBody-content {
  width: 100%;
}
.mainContent {
  padding: 0px 10px 10px 0px!important;
  font-family: calibri!important;
  width: 100%;
}
.SARF-main-body {
  display: flex;
  flex-grow: 2;
  width: 100%;
  height: 100%;
}
.bodyText {
  font-family: Calibri;
}

.red {
  color: red;
}
.short {
  width: 100px;
}
.long {
  width: 180px;
}
.main-footer {
  min-height: 49px;
  max-height: 49px;
}
.main-footer .brandingNav {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  height: 49px;
  padding-top: 6px;

}
.policy {
  display: flex;
  flex-direction: row;
  line-height: 3.7em;
  font-size: 11px;
  font-weight: bold;
  vertical-align: middle;
  flex-wrap: nowrap;
  align-items: baseline;
  justify-content: space-between;
  width: 136px;
  font-family: Calibri;
}
.policy a {
  width: unset;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
}
.policy a:visited {
  color: #0060ff;
}
.pipe {
  width: 0px;
  color: #0060ff;
}
.SARF-footer {
  border-top: 1px solid #262a9a;
}
</style>
