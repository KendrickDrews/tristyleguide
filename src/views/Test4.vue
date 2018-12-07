<template>
<div>

  <div class="componentLayout">   
   
    <template
      v-if="bLength.length"                
    >
      <template 
        v-for="(item,key) in buttonList"                
      >
        <dmidbutton          
          :buttonName="item" 
          :key="key"
          :button-color="item"
          :id="'nav-' + key"                                              
          v-if="showNav[key]"
          :height="smallIcon"
          :width="smallIcon"
          :navIcon="true"                        
        >
        </dmidbutton>
      </template>
    </template>
      <p v-else> does this work? </p>

  </div>


  <div class="componentLayout">


<!--  <p v-for="n in 10" :key="n"> {{ buttonList | valueAt(n)}} </p> -->

 </div>
  <!-- <template v-for="n in bLength.length">
    <template v-if=" n <= 5">
      <p :key="n"> {{bLength[n]}} </p>
    </template>
    <template v-else-if="n === 6">
      <div :key="n" style="background-color: aqua;">
        <template v-for="n in bLength.length">      
          <template v-if="n >= (bLength.length - 3)">
            <p :key="n"> {{ bLength[n] }} </p>
          </template>
        </template>
      </div>
    </template>
    <template v-else></template>
  </template>  -->
 
    <!-- <template v-for="(item,key) in buttonList">
        <template v-for="n <= 10">
          <dmidbutton          
          :buttonName="item" 
          :key="key"
          :button-color="item"
          :id="'nav2-' + key"                                              
          v-if="showNav[key]"
          :height="smallIcon"
          :width="smallIcon"
          :navIcon="true"                        
        >
        </dmidbutton>
        </template>
        <template v-else-if="n === 11">
          <div style="background-color: aqua;" v-bind:key="'second' + n">
            <template v-for="y in 25">
              <template v-if="y >= 11">
                <p style="color: white; font-weight: bold;" v-bind:key="'third' + y"> {{ y }} </p>
              </template>
            </template>
          </div>
        </template>
        <template v-else> 
        </template>
      </template> -->

  


  <div class="componentLayout">

      <template v-for="n in 25">
        <template v-if="n <= 10">
          <p v-bind:key="'first' + n"> {{ bLength | atIndex(n) }} </p>
        </template>
        <template v-else-if="n === 11">
          <div style="background-color: aqua;" v-bind:key="'second' + n">
            <template v-for="y in 25">
              <template v-if="y >= 11">
                <p style="color: white; font-weight: bold;" v-bind:key="'third' + y"> {{ y }} </p>
              </template>
            </template>
          </div>
        </template>
        <template v-else> 
        </template>
      </template> 

  </div>

</div>
</template>

<script>
 import buttonList from '../components/componentList/buttonList.js';

  export default {
    components: {      
      buttonList
    },   

/////
    data: function(){
      return { 
        buttonName: 'CRS',
        smallIcon: '27px', 
        buttonList      
      }
    },
    props: {
      showNav:{ 
            
            default: function(){
                return {            
                    Home: true,                    
                    CRS: true,
                    DocumentLibrary: true,
                    SOCSCMS: true,
                    Training: true,
                    ServiceRequests: true,                    
                    PRT: true,
                    SMART: true,
                    CSRS: true, 
                    GrantCapture: true,
                    Protocols: true,
                    Results: true,           
                }
            }
        }
    },

/////    
    computed: {
      bLength () {
        let list = Object.keys(buttonList)        
        return list
      },           
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
      },
      valueAt: function (object, index) {
        return (Object.entries(object)[index])
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
    height: 600px;
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
