<template>
<!-- Branding Nav -->
  <div class="brandingNav">
      <div class="external">
          <img src="imgs/HHS-NIH_NIAID_LogoSet_Web-Small_Black.png">
      </div>
      <div class="policy">
          <a href="#">Privacy Policy</a>
          <hr class="vertical">
          <a href="#">Disclaimers</a>
      </div>
  </div>
</template>

<script>
import CRS from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-CRS.svg'

export default {
  components: {
    CRS
  }
}
</script>
<style scoped>
.policy {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>
