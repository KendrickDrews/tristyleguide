<template>
  
    <div class="store-test">
      <h2> store test </h2>
        <button @click="increment"> Click PLUS </button>
        <button @click="decrement"> Click MINUS </button>
        <p> value : {{ count }}  </p>
        <p> state Message : {{ stateMessage }} </p>
        <button @click="stateMsg('You Did it!')"> set message to "You did it" </button>
    </div>       
  
</template>

<script>  
  import { mapState } from 'vuex'
  

  export default {
    components: {
      
         
    },

/////
    computed: {
      
      count: function () {
        return this.$root.store.state.count
      },
    // Grabs the value from Store and sets it to a new input value
      stateMessage: {
        get: function() {
          return this.$root.store.state.msg 
        },
        set: function(value) {
          this.$root.store.commit('setMsg', value )
        }
      },

    },

/////
    methods: {
      increment () {
        this.$root.store.commit('increment')
      },
      decrement () {
    	  this.$root.store.commit('decrement')
      },
    // takes gives value to the set of computed value
      stateMsg (value) {
        this.stateMessage = value
      }
    }
  }
</script>

<style scoped>

</style>
