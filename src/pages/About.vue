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
    },
///////
    mounted: function () {      
      this.stateActiveComponent('');
    },
    methods: {
      stateActiveComponent (value) {
      return  this.stateComponent = value
      }
    },
    
  }
</script>
