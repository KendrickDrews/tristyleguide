<template>  
<!--navSearch -->
  <div class="main-headSearch">
      <h4> Clinical Research Support Search </h4>
      <input type="text" placeholder="">
      <button class="nav-button btn-Seven">
          <h4> Go </h4>          
          <div class="navbtn-shadow"></div>
      </button>
  </div>  
</template>

<script>    

  export default {
    components: {      
     
    }
  }
</script>
<style scoped>
.btn-Seven h4 {
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.5);
  font-family: arial;
  /*text-shadow:
       1px 1px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;*/
}
</style>