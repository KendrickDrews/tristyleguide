<template>
<!-- contentElement -->
  <p style="display: block; height: 100px;"><slot>Welcome to Clinical Monitoring, the team that provides monitoring services for DMID. Sponsors of clinical investigations involving new drugs (including biological products for human use) and medical devices under 21 CFR Parts 312, and 812, are required by federal regulations to monitor the progress of the clinical investigation.</slot></p>
</template>

<script>
import CRS from '../imgs/Icon_SVGs/DMIDCROMS-WebIcon-CRS.svg'

export default {
  components: {
    CRS
  }
}
</script>
<style src="../styles/main.css"></style>
