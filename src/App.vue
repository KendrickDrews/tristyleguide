<template>
  <div class="container" v-bind:class="{'container-mirror' : SPLIT(ViewLocation) === 'DMID'  }">
    <aside class="styleguide-Sidebar" v-bind:class="{ 'sg-closed' : !open }">
      <div class="sg-openList" v-bind:class="{ 'closed' : !open }">
        <h2 class="styleguide-title"> DMID CROMS </h2>
        <h3 class="styleguide-title"> Styleguide </h3>
        <h3></h3>
        <ul>
          <router-link tag="li" to="/"> Home </router-link>
          <router-link tag="li" to="/components">Components</router-link>
          <router-link tag="li" to="/DMID/Home">DMID Home</router-link>
        </ul>
      </div>
    </aside>
    <!-- Click Controls for StyleGuide MainMenu -->
    <div class="mainMenuControl" v-on:click="slideNav" v-bind:class="{ 'control-closed' : !open }">
      <img src='https:icon.now.sh/chevron/32/left'/>
    </div>

    <div class="styleguide-headingContainer" v-bind:class="{'sghContainer-mirror' : SPLIT(ViewLocation) === 'DMID','sgHeading-closed' : !open  }">
      <div class="styleguide-heading">
        <h2 v-if="this.ViewLocation === '/'" class="location-heading"> Home </h2>
        <h2 v-else-if="SPLIT(ViewLocation) === 'DMID'" class="location-heading"> </h2>
        <h2 v-else class="location-heading"> {{ this.ViewLocation | capitalize }} </h2>
      <!-- Renders active component based on scroll when on components page, displays blank for other pages -->
        <h3 class="location-heading" v-if="ViewLocation === '/components'">
        {{ this.$root.store.state.activeComponent   }}
        </h3>
        <h3 class="location-heading" v-else>  </h3>
        <h4 class="location-heading">   </h4>
      </div>
    </div>
    <!-- The slot is for the 'name.vue' component content -->
    <div
      id="styleguide-content"
      class="styleguide-Content"
      v-bind:class="[{ 'sgContent-mirror' : SPLIT(ViewLocation) === 'DMID' }, siteBG]"
    >
<!-- Display Component -->
      <div class="contentArea" id="scrollContainer">
        <div class="content smooth">
          <div
            v-if="siteBG == 'ResultsPage'"
            class="componentContent resultsMargin"
            v-bind:class="{'componentContent-mirror' : SPLIT(ViewLocation) === 'DMID'}"
          >
            <router-view></router-view>
          </div>
          <div
            v-else
            class="componentContent"
            v-bind:class="{'componentContent-mirror' : SPLIT(ViewLocation) === 'DMID'}"
          >
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import routes from './routes.js'
export default { // name: 'mainLayout',
  components: {
  },
  props: {
  },
  /// /
  data: function () {
    return {
      open: true,
      currentLocation: this.$route.path,
      topOffset: 0
    }
  },
  /// /
  computed: {
    rootComponent () {
      return this.$root.ViewComponent
    },
    ViewLocation () {
      const matchingView = this.$route.path
      return matchingView
    },
    siteBG () {
      const color = this.$root.store.state.siteType
      return color
    }
  },
  /// /
  mounted: function () {
    this.SPLIT()
  },

  /// /
  methods: {
    slideNav: function () {
      this.open = !this.open
    },
    linkTo: function () {
      this.$router.push({ name: 'Home' })
    },
    SPLIT: function (value) {
      if (!value) return 'noValue'
      var toSplit = value
      var splitString = toSplit.split('/', 2)
      return splitString[1]
    }
  },

  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(1).toUpperCase() + value.slice(2)
    },
    truncate: function (value) {
      if (!value) return 'noValue'
      var toSplit = value
      var splitString = toSplit.split('/', 2)
      return splitString[1]
    }
  }
}
</script>
<style scoped>
 body {
   margin: 0px;
 }
 .HOME {
   background-color: #445b9c;
 }
  .container {
    width: 100vw;
    height: fit-content;
    margin: 0;
    padding: 0px;
    background: #fffdfb;
    display: flex;
    transition: 0.4s ease-in-out;
  }
  .styleguide-Sidebar {
    display: flex;
    flex-direction: column;
    position: relative;
    left: 0px;
    height: 100vh;
    min-width: 225px;
    max-width: 225px;
    padding-left: 0;

    transition: 0.4s ease-in-out;
  }
  .sg-closed{
    min-width: 0!important;
    max-width: 0!important;
    border-right: none;
    transition: .5s ease-in-out;
  }
  .sg-openList {
    position: fixed;
    height: 100vh;
    background-color: rgb(14, 14, 14);
    border-right: solid 1px #161616;
    width: 225px;
    padding-top:25px;
    left: 0;
    opacity: 1;
    transition: 0.4s ease-in-out;
  }
  .sg-openList ul li {
    cursor: pointer;
  }
  .closed {
    position: relative;
    left: -250px;
    opacity: 0;
    transition: 0.4s ease-in-out;
  }
  .styleguide-title {
    margin: 0;
    color: white;
    padding-left: 15px;
    padding-bottom: 5px;
    transition: 0.4s ease-in-out;
  }
  .mainMenuControl {
    position: fixed;
    z-index: 10;
    top: 20px;
    left: 175px;
    padding: 3px 5px;
    background-color: rgba(255,255,255, 0.5);
    border: 1px solid white;
    border-radius: 50%;
    transition: 0.4s ease-in-out;
    cursor: pointer;
  }
  .mainMenuControl:hover {
    opacity: 1;
    transition: 0.4s ease-in-out;
  }
  .control-closed {
    left: 25px;
    opacity: 0.4;
    transform: rotate(-180deg);
    transition: 0.45s ease-in-out;
  }
  .styleguide-Content {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.4s ease-in-out;
  }
  .styleguide-headingContainer{
    width: 100vw;
    height: 80px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 0;
    left: 225px;
    z-index: 5;
    border-bottom: solid 1px #ccc;
    transition: 0.4s ease-in-out;

  }
  .styleguide-heading {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding-left: 25px;
    transition: 0.4s ease-in-out;
  }
  .sgHeading-closed {
    left: 0;
    padding-left: 65px;
    transition: 0.4s ease-in-out;
  }
  .location-heading {
    display:flex;
    margin: 0;
    padding-right: 5px;
    transition: 0.4s ease-in-out;
  }
  .contentArea {
    width: 100%;
    justify-content: center;
    overflow-y:scroll;
    transition: 0.4s ease-in-out;
  }
  .contentArea::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.4s ease-in-out;
  }
  .componentContent {
    display:flex;
    flex-direction:column;
    margin: 0 auto;
    padding-top: 120px;
    min-width: 1010px;
    max-width: 1018px;
    transition: 0.4s ease-in-out;
  }
  .resultsMargin {
    margin: 0 auto 0 8px;
  }
  .smooth {
    transition: 0.4s ease-in-out;
  }
  .open {
    transition: 0.4s ease-in-out;

  }
  .open-width {
    width: calc(100% - 225px);
    transition: 0.4s ease-in-out;
  }

  .container-mirror {
    width: 100vw;
    height: fit-content;
    margin: 0;
    padding: 0px;
    display: flex;
    transition: 0s ;
    background: transparent;
    visibility: 0;
    transition: 0.4s ease-in-out;
  }
  .sgContent-mirror {
    background-image: linear-gradient(rgba(0,0,0,0.45), rgba(52, 94, 192,0.15));
    transition: 0.4s ease-in-out;
  }
  .sghContainer-mirror {
    height: 0px;
    border-bottom: none;
    visibility: hidden;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.4s ease-in-out;
  }
  .componentContent-mirror {
    padding-top: 0;
    min-width: 1000px;
    max-width: 1000px;
    transition: 0.4s ease-in-out;
  }
  ul {
    list-style: none;
    padding-left: 0;
    padding-top: 15px;
  }
  li {
    font-size: 16px;
    font-weight: bold;
    color: #ccc;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 45px;
    border-right: 5px solid transparent;
  }
  li:hover {
    background-color: rgba(0, 103, 187, 0.514);
    color: #eee;
  }

  a {
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: inherit;
  }
  a:link, a:visited {
    color: inherit;
  }
  .router-link-exact-active {
    background-color: rgb(0, 103, 187);
    border-right-color: rgb(57, 176, 255);
    color: white!important;
  }

</style>
