<template>
  <div class="DMID-main">
    <div class="results-header--container">
      <div class="results-header--userInfo">
        <div class="welcome">
        </div>
        <div class="date">
        </div>
      </div>
      <div class="results-header--navigation">
        <p
        v-bind:class="{ 'active': activeItem == 'Console' }"
        @click="activeMenuItem('Console')"
        >Console</p>
        <div class="vertical-spacer"></div>
        <p
        v-bind:class="{ 'active': activeItem == 'ResultsExt' }"
        @click="activeMenuItem('ResultsExt')"
        >Results</p>
        <div class="vertical-spacer"></div>
        <p
        v-bind:class="{ 'active': activeItem == 'Reports' }"
        @click="activeMenuItem('Reports')"
        >Reports</p>
        <div class="vertical-spacer"></div>
        <p
        v-bind:class="{ 'active': activeItem == 'Support' }"
        @click="activeMenuItem('Support')"
        >Support</p>
        <div class="vertical-spacer"></div>
        <p
        v-bind:class="{ 'active': activeItem == 'Communications' }"
        @click="activeMenuItem('Communications')"
        >Communications</p>
        <div class="vertical-spacer"></div>
        <p
        v-bind:class="{ 'active': activeItem == 'Extensions' }"
        @click="activeMenuItem('Extensions')"
        >Extensions</p>
        <div class="vertical-spacer"></div>
        <router-link tag="p" to="Home">DMID-CROMS</router-link>
        <div class="vertical-spacer"></div>
        <router-link tag="p" to="Home">Exit</router-link>
        <div class="vertical-spacer"></div>
      </div>
    </div>

    <div class="results-body--container">
      <component :is="activeComponent"/>
    </div>

    <div class="results-body--footer">
    </div>
  </div>

</template>

<script>
import Modal from '../../../components/modalTemplate.vue'
import Console from '../Results/Console.vue'
import ResultsView from '../Results/ResultsView.vue'
import ResultsExt from '../Results/ResultsExtensions.vue'
import Reports from '../Results/Reports.vue'
import Support from '../Results/Support.vue'
import Extensions from '../Results/Extensions.vue'
import Communications from '../Results/Communications.vue'

export default {
  name: 'Results',
  components: {
    Modal,
    Console,
    ResultsView,
    ResultsExt,
    Reports,
    Support,
    Extensions,
    Communications

  },
  data () {
    return {
      isModalVisible: false,
      subSiteIs: this.$route.name,
      activeItem: 'Console'

    }
  },
  /// ////
  computed: {
    thisSite: function () {
      return this.subSiteIs
    },
    activeComponent: function () {
      return this.activeItem
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

    isActive () {
      return this.href === this.$root.currentRoute
    }

  },
  /// ////
  mounted: function () {
    this.setStateSubSite()
    this.stateActiveComponent('Console')
    this.scrollReset(0)
    this.stateSiteType('ResultsPage')
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
    },
    setActiveItem: function (value) {
      return this.activeItem = value
    },
    activeMenuItem (itemName) {
      this.stateActiveComponent(itemName)
      this.setActiveItem(itemName)
    }

  }
}

</script>
<style  scoped>
.DMID-main {
  background-color: transparent;
  width: 1035px;
}
</style>
<style>

.ResultsPage {
  background-image: url(../../../imgs/Results_background.jpg)!important;
  background-size: cover;
  background-repeat: no-repeat;
}
.results-header--container {
  height: 100px;
  width: 100%;
  margin-top: 8px;
  min-width: 1041px;
  max-width: fit-content;
  background-color:white;
  border-bottom: 1px solid black;
  background-image: url(../../../imgs/Results_header.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
}
.results-body--container {
  min-width: 1041px;
  min-height: 500px;
  background-color:white;
  border: 1px solid black;
  margin-top: 10px;
}
.results-body--footer{
  width: 269px;
  height: 60px;
  background-color: transparent;
  background-image: url(../../../imgs/Results_footer.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  top:0;
  left: calc(100% - 269px);
}
.results-header--navigation {
 width: 100%;
 height: 20px;
 margin-right: 5px;
 font-weight: bold;
 display: flex;
 flex-direction: row;
 flex-wrap: nowrap;
 justify-content: flex-end;
 align-self: flex-end;
}
.results-header--navigation p {
  line-height: 1.6em;
  vertical-align: middle;
  cursor: default;
  height: 16px;
  font-family: Verdana;
  font-size: 11.2px;
  margin: 0 5px;
}
.results-header--navigation p:hover {
  border-bottom: 1px solid white;
  color: white;
}
.vertical-spacer{
  width: 0px;
  height: 13px;
  border-left: 1px solid black;
  margin: 2px 5px;
}
.active {
  border-bottom: 1px solid white;
  color: white;
}
</style>
