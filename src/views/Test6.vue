<template>
  
  <div>
    
   
      <div
        v-for="(object, key) in box"       
        v-bind:key="key"       
        v-bind:id="object.id"
        v-bind:class="object.text"                
        class="styled"
        ref="allItems"
        @click="scrollWhy('testScrollTop')"                    
      >  

        <h1> {{ object.text }} : {{ boxPositions[key].posTop }} :: {{ box[key].id }} </h1>

      </div>
  </div>
  
</template>

<script>
  

  export default {
    components: {
      
    },   

/////
    data: function(){
      return {

        box: [
          { id: '1', text: 'a', posTop: '' },
          { id: '2', text: 'b', posTop: '' },
          { id: '3', text: 'c', posTop: '' },
          { id: '4', text: 'd', posTop: '' },
          { id: '5', text: 'e', posTop: '' },
          { id: '6', text: 'f', posTop: '' },
          { id: '7', text: 'g', posTop: '' },
          { id: '8', text: 'h', posTop: '' },
          { id: '9', text: 'i', posTop: '' },
          { id: '10', text: 'j', posTop: '' },
        ],        

        objOffset: '',
        options: { 
            root: '',
            rootMargin: '0px',
            threshold: 1.0
        },
                
        windowScrollY: 0,
       
      };
    },

/////    
    computed: {
      windowHeight: function() {
        var wHeight = window.innerHeight
        return wHeight
      },      
    //
    //// Takes in the Box, looks at a map and returns an array 
    //// This array of objects 'boxPositions[] has any newly defined values set by'b.value' & this.box.values
    //// You can set variables to be used by b.value
      boxPositions: function(){             
          return this.box.map( (b) => {
            b.posTop = ''
            
            this.$nextTick(function() {
              var elementValue = document.getElementById(b.id)                       
              b.posTop = elementValue.offsetTop })
            //b.summary = b.id + " " + b.text
            return b
          })
          
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
      }

    },
    ////
    mounted: function () {      
      
      this.optionsRoot();
      this.$nextTick(function() 
        { this.offsetWhy('');
        }),
      
      this.boxObjs();
      
    },

 ////   
    methods: {   


      

      optionsRoot: function() {
        var OR = document.querySelector('#testScrollTop');
        return this.options.root = OR
      },

      offsetWhy: function(name) {
       var element = document.getElementById(name);
      return  console.log(element) 
      },
      scrollWhy: function(name) {
         var element = document.getElementById(name);
        return console.log(element.scrollTop)
      },

      boxObjs: function() {         
        var box = this.box;
        var ids = this.$options.filters.pluck(box, 'id')        
        return this.objOffset = ids
      },
    },

  

////    
    created: function () {      
    },

////    
    destroyed: function () {        
    } 

      // Implement Observer Pattern
      
  
  }
</script>
<style scoped>
  .styled {
    height: 500px; 
    margin-top: 50px; 
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 72px;
    color: white;
  }
  .a{
    background-color: #fda847;
  }
  .b{
    background-color: #ffce46;
  }
  .c{
    background-color: #afff7a;
  }
  .d{
    background-color: #7affa2;
  }
  .e{
    background-color: #7ad9ff;
  }
  .f{
    background-color: #7a8eff;
  }
  .g{
    background-color: #7a87ff;
  }
  .h{
    background-color: #bf7aff;
  }
  .i{
    background-color: #ff7ad3;
  }
  .j{
    background-color: #ff7a7a;
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
