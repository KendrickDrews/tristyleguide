<template>
  
    <p>About page</p>
  
</template>

<script>  

  export default {
    name: 'About',
    components: {
      
    },

    computed: {
      stateComponent: {
        get: function() {
          return this.$root.store.state.activeComponent 
        },
        set: function(value) {
          this.$root.store.commit('isActiveComponent', value )
        }
      },
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
      this.stateActiveComponent('');
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
