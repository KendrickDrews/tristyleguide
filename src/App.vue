<template>
  <div class="container"
    v-bind:class="{'container-mirror' : ViewLocation === '/siteMirror'  }"
  >
  
    <aside 
    class="styleguide-Sidebar"
    v-bind:class="{ 'sg-closed' : !open }"
    >
      <div 
      class="sg-openList" 
      v-bind:class="{ 'closed' : !open }"
      >
        <h2 class="styleguide-title"> Styleguide </h2>
        <h3 class="styleguide-title"> DMID CROMS </h3>
        <h3></h3>
        <!-- <styleguideList/> -->
        <ul>
            <li> 
              <router-link to="/">Home</router-link>                
            </li>
            <li>
              <router-link to="/about">About</router-link>
              </li>
              <li>
              <router-link to="/siteMirror">siteMirror</router-link>
              </li>
        </ul>
      </div>
    </aside>
  

    <!-- Click Controls for StyleGuide MainMenu -->
    <div
      class="mainMenuControl" 
      v-on:click="slideNav"
      v-bind:class="{ 'control-closed' : !open }"
    >
      <img src='https:icon.now.sh/chevron/32/left'/>
    </div>

    <div 
      class="styleguide-headingContainer"
      v-bind:class="{'sghContainer-mirror' : ViewLocation === '/siteMirror','sgHeading-closed' : !open  }"        
    >
        
      <div 
      class="styleguide-heading"
                    
      > 
        <h2 v-if="this.ViewLocation === '/'" class="location-heading"> Home </h2>
        <h2 v-else-if="this.ViewLocation === '/siteMirror'" class="location-heading"> </h2>
        <h2 v-else class="location-heading"> {{ this.ViewLocation | capitalize }} </h2>
      <!-- Renders active component based on scroll when on components page, displays blank for other pages -->
        <h3 class="location-heading"
          v-if="ViewLocation === '/components'"
        >  
        {{ this.$root.store.state.activeComponent   }}  
        </h3>
        <h3 class="location-heading" v-else>  </h3>

        <h4 class="location-heading">  </h4>

      </div>

    </div>
    <!-- The slot is for the 'name.vue' component content -->
    <div 
      id="styleguide-content" 
      class="styleguide-Content"
      v-bind:class="{ 'sgContent-mirror' : ViewLocation === '/siteMirror'  }"
    >
      
       
<!-- Display Component -->
      <div class="contentArea" id="scrollContainer">
        <div          
          class="content smooth"
        >
          <div 
            class="componentContent"
            v-bind:class="{'componentContent-mirror' : ViewLocation === '/siteMirror'  }"  
          >         
          <!-- <Home/>  -->
          <router-view></router-view> 
            <!-- <component :is="ViewLocation"></component>  -->
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>
<script>
//import VLink from './components/VLink.vue'
//import styleguideList from './components/styleguideList.vue' 
//import routes from './routes.js'
//import Home from './pages/Home.vue'
//import { router } from './dmidroutes'


export default {  //name: 'mainLayout',
  components: {
    
   // VLink,
   // styleguideList,  
   // Home,
    //router,    
  },  
  props: {
    

  },
////    
  data: function(){
    return {        
      open: true,
      //routes: routes,      
      currentLocation: this.$root.currentRoute,      
      topOffset: 0,
      //Home,
     // router,      
    }           
  },

////    
  computed: {   
    rootComponent () {
      return this.$root.ViewComponent
    },
    ViewLocation () {
      const matchingView = this.$root.currentRoute
      return matchingView
    },    
         
  },  

////  
  methods: {
      slideNav: function () {
        this.open = !this.open          
      },
      linkTo: function () {
          this.$router.push({ name: 'Home'})
      }               
    },

  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(1).toUpperCase() + value.slice(2)
    }
  }
      
  }
</script>

<style scoped>
 body {
   margin: 0px;
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
    background-color: rgb(250, 250, 250);
    border-right: solid 1px #9b9b9b;
    width: 225px;
    padding-top:75px;
    left: 0;
    opacity: 1;
    transition: 0.4s ease-in-out;
  }
  .closed {
    position: relative;    
    left: -250px;    
    opacity: 0;   
    transition: 0.4s ease-in-out;
  }
  .styleguide-title {
    margin: 0;
    padding-left: 15px;
    padding-bottom: 5px;
    transition: 0.4s ease-in-out;
  }
  .mainMenuControl {
    position: fixed;
    z-index: 10;
    top: 20px;
    left: 175px;
    padding: 3px;
    background-color: rgba(255,255,255, 0.5);
    border: 1px solid white;
    border-radius: 50%;
    transition: 0.4s ease-in-out;
  }
  .mainMenuControl:hover {
    opacity: 1;
    transition: 0.4s ease-in-out;
  }
  .control-closed {
    left: 25px;
    opacity: 0.4s;
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
    background-color: transparent;
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
    transition: 0.4s ease-in-out;
  }
 
</style>
