<template>  
  <div class="dmid-button head-icon" v-bind:class="buttonColor">      
      <slot></slot>
  </div> 
</template>
  

<script>  
  

  export default {
    components: {      
    },
    props: ['buttonColor']
      
    
  }
</script>
<style scoped>

.btn-Container{
  position: relative;
  height: 93px;
  width: 91px;
  display:flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);      
  background-image: radial-gradient(farthest-corner at 50% 25%, rgba(0,0,0,0), rgba(0,0,0,0.3) 95%);
  overflow: hidden;
  }
.dmid-button {
  position: relative;
  height: 92px;
  width: 91px;
  display:flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  box-shadow:
    2px 2px 5px rgba(0,0,0,0.5),
    inset 0px 0px 4px 2px rgba(0,0,0, 0.5);
  background-image: 
    radial-gradient(circle at 50% -200%, transparent 67%,rgba(255,255,255,0.4) 84.5% , transparent 85% ),
    linear-gradient(to top, rgba(0,0,0,0.6)  , transparent 45%);  
  background-blend-mode: normal;  
}
.svg-icon {
  position: relative;
  top: 0;
  z-index: 5;
}

/* Individual Button Colors */
/* Class Names are handles by the Props in buttonLayout.vue */
/* Keep changes here to keep scoped CSS consistent */
.CRS {
  background-color: rgb(27, 146, 76); 
}

.CSRS {
  background-color: rgb(16, 66, 79 );
}

.GrantCapture {
  background-color: rgb(158, 59, 223);
}

.Protocols {
  background-color: rgb(117, 69, 207);
}

.Results {
  background-color: rgb(223, 59, 209);
}

.DocumentLibrary { 
  background-color: rgb(241, 67, 55);
}

.Home { 
  background-color: rgb(86, 86, 86);
}

.PRT { 
  background-color: rgb(0, 51, 153);
}

.ServiceRequests { 
  background-color: rgb(52, 94, 192);
}

.SMART { 
  background-color: rgb(0, 114, 188);
}

.SOCSCMS { 
  background-color: rgb(45, 206, 255);
}

.Training { 
  background-color: rgb(44, 138, 49);
}


</style>