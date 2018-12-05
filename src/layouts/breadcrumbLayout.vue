<template>
  
    
    <div> 
        <h1> Blank! </h1 ><hr/>
        <breadcrumbs>
        </breadcrumbs>

        <h1> Basic Snippet </h1> <hr/>
        <p> a paragraph explaining the component </p>
        <h1> A Breakdown of Parts </h1> <hr/>

        <p> a paragraph explaining the component </p>
        <div class="markup">
          <div class="markup-type"><h5>type</h5></div>

        </div>
        <h1> Use Cases </h1> <hr/>
        <p> a paragraph explaining the component </p>
        <h1> Do's and Don'ts </h1> <hr/>
        <p> a paragraph explaining the component </p>

    </div>       
      

</template>

<script>   
import breadcrumbs from '../components/breadcrumbs.vue'; 
  export default {
    components: {           
      breadcrumbs 
    }, 

    data: function() {
      return {
                        
      }
    }, 
    computed:{     
      
    },
    methods:{     

    },    
  
  }

</script>

<style scoped>

.markup {
  background-color: #e6e6e6;
  min-height: 200px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  position:relative;
  top:0;
}
.markup-type {
  position: absolute;
  top: 0;
  right:0;
}
.markup-type h5 {
  margin: 0;
  opacity: 0.5;
}

</style>
