<template>

  <div class="nav-button dmid-button " v-bind:class="buttonColor">      
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
/* vv NAV BTN PATTERN vv */
.nav-button {
  height: 34px;
  width: 33px;
  margin-left: 7px;
  border-radius: 3px;
  border: none;
  overflow: hidden;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

/* vv Animation controls for focus, click, hover vv */
.nav-button:focus {
  outline: 0;
}
.nav-button:after {
  content: "";
  border-radius: 3px;
  background: #fff;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: 0px !important;
  margin-top: 0%;
  opacity: 0;
  transition: all 1s
}
.nav-button:hover {
  opacity: 0.7;
  transform: translateY(0px);
}
.nav-button:active {
  transform: translateY(4px);
}
.nav-button:active:after {
  padding: 0;
  margin: 0;
  opacity: 0.5;
  transition: 0s
}
/* ^^ Animation controls for focus, click, hover ^^ */
.dmid-button {
  position: relative;
  display:flex;
  align-items: center;
  justify-content: center;
  text-align: center;  
  box-shadow:
    /*2px 2px 5px rgba(0,0,0,0.5),*/
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
  background-color: rgb(98, 160, 72);
}

</style>