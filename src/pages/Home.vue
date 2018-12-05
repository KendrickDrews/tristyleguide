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

  export default {
    name: 'Home',
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
      username () {
      // We will see what `params` is shortly
      return this.$route.params.username
      },
    },
///////
    mounted: function () {      
      this.stateActiveComponent('');
    },
    methods: {
      stateActiveComponent (value) {
      return  this.stateComponent = value
      },
      goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
    },
  }
</script>
