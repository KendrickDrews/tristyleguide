<template>
  
    <div class="componentLayout">
      <!-- <p>
      <router-link to="/routeTest"> test Link</router-link>
      </p>
      <router-view> </router-view> -->
      
    <route-test></route-test>


    </div>
<!-- <button class="btn-01">
      </button>
        <button class="top-to-bottom">
      </button> -->
    <!-- Depreciated button -->
    
    <!--<div class="btn-Container head-icon" v-bind:class="buttonColor">      
      <slot></slot>
      <div class="btn-icon active-icon"></div>
      <div class="btn-overlay" v-bind:class="overlayColor"></div>
      <div class="btn-shadow" ></div>
    </div> -->
  
</template>

<script>
import routeTest from './DMID/routeTest.vue'
  export default {
    components: {      
      routeTest
    },   

/////
    data: function(){
      return {        
      }
    },

/////    
    computed: {
    },

/////
    filters: {
      
      // return a list of property values from an array of Objects
      pluck: function (objects, key) {
        return objects.map(function(object) { 
      	  return object[key];
          })
        },

      // Return element at given index
      atIndex: function (value, index) {
        return value[index];
      }

    },

 ////   
    methods: {  
    },

////
    mounted: function () {
    },  

////    
    created: function () {
    },

////    
    destroyed: function () {
    },    
  }
</script>
<style scoped>

  .componentLayout {     
    margin-top: 25px; 
    margin-bottom: 25px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 18px;
    background-color: #ccc;
    padding: 10px 0;
  }

  .btn-01 {
    width: 200px;
    height: 200px;
    border: 5px solid #7affde;
    border-image: 
    linear-gradient(45deg,#000, transparent) 5 ;
  }
  .top-to-bottom {
    width: 200px;
    height: 200px;
    border-width: 3px;
    border-style: solid;    
    border-image:
      linear-gradient(to bottom, black, rgba(0, 0, 0, 0)) 1 100%;
}

  .RED {
    background-color: rgb(241, 67, 55);
  }
  .a{
    background-color: #ff7a85;
  }
  .b{
    background-color: #ff7abc;
  }
  .c{
    background-color: #f47aff;
  }
  .d{
    background-color: #ce7aff;
  }
  .e{
    background-color: #877aff;
  }
  .f{
    background-color: #7ad5ff;
  }
  .g{
    background-color: #7affde;
  }
  .h{
    background-color: #7eff7a;
  }
  .i{
    background-color: #a0ff7a;
  }
  .j{
    background-color: #e7ff7a;
  }
  .activeScrolled {
    color: black!important;
  }

.aboveItAll {
  position: fixed;
  top: 620px;
  left: 50px;
  width: 150px;  
}
</style>
