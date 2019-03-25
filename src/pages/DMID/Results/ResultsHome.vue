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
        <div class="vertical-spacer"></div>
        <p> Console</p>
        <div class="vertical-spacer"></div>
        <p> Results</p>
        <div class="vertical-spacer"></div>
        <p> Reports</p>
        <div class="vertical-spacer"></div>
        <p> Support</p>
        <div class="vertical-spacer"></div>
        <p> DMID-CROMS</p>
        <div class="vertical-spacer"></div>
        <p> Exit</p>
        <div class="vertical-spacer"></div>
      </div>
    </div>
    <div class="results-body--container">
      <div class="results-body--columnHeaders">
      </div>
      <div class="results-body--ColumnContent">
      </div>
    </div>
    <div class="results-body--footer">
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
    name: 'Results',
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
      this.stateSiteType('ResultsPage');
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
<style  scoped>
.DMID-main {
  background-color: transparent;
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
  background-color:white;
  border-bottom: 1px solid black;
  background-image: url(../../../imgs/Results_header.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
}
.results-body--container {
  width: 100%;
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
 font-weight: bold;
 display: flex;
 flex-direction: row;
 flex-wrap: nowrap;
 justify-content: flex-end;
 align-self: flex-end;
}
.results-header--navigation p {
  line-height: 1.5em;
  vertical-align: middle;
  cursor: default;
  height: 18px;
}
.results-header--navigation p:hover {
  border-bottom: 1px solid white;
  color: white;
}
.vertical-spacer{
  width: 0px;
  height: 16px;
  border-left: 1px solid black;
  margin: 2px 5px;
}
</style>

