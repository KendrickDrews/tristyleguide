<template>  
  <div class="brandingNav">
      <div class="external">
          <img class="brand-icon" src="src/imgs/HHS-NIH_NIAID_LogoSet_Web-Small_Black.png">
      </div>
      <div class="policy">
          <a href="#">Privacy Policy</a>
          <p class=pipe>|</p>
          <a href="#">Disclaimers</a>
      </div>
  </div>
</template>

<script>  
 

  export default {
    components: {      
      
    }
  }
</script>
<style scoped>
.brandingNav {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-end;
  
}
.external {
  display: flex;
  justify-content: center;
  align-items: center;
}
.brand-icon {
  width: 164px;
  height: 43px;
  margin: 15px 0;

}
.policy {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: flex-end;
  align-self: flex-end;
}
.policy a {
  width: unset;
  font-size: 11px;  
  font-weight: bold;
}
.pipe {
  width: 0px;
  margin: 0;
  color: #0060ff;
}

</style>