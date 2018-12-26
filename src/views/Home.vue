<template>
  <div>
    <p>Welcome to the DMID Styleguide. Currently under construction. : )</p>
    <div> 
      <p> 
        
      </p> 
    </div>
    
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },

  computed: {
    //Set SiteType 01
      stateType: {
        get: function() {
          return this.$root.store.state.siteType 
        },
        set: function(value) {
          this.$root.store.commit('setSiteType', value )
        }
      },
  },
  ///////
    mounted: function () { 
      //Set SiteType 02
      this.stateSiteType('whiteBackground');
    },
    methods: {
      stateActiveComponent (value) {
      return  this.stateComponent = value
      },
      //set SiteType 03
      stateSiteType (value) {
      return  this.stateType = value
      } 
    },
}
</script>
