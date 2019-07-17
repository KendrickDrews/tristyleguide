<template>
<CRS fill="white" :height="height" :width="width" class="svg-icon" />
</template>
<script>
import CRS from '../DMIDCROMS-WebIcon-CRS.svg'

export default {
  components: {
    CRS
  },
  props: ['height', 'width']

}
</script>
