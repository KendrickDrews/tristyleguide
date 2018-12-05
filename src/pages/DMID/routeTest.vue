<template>
  
    <p>THIS IS ROUTEDMID TEST</p>
  
</template>

<script>  

  export default {
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