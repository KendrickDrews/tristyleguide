<template>
              
      <dmidbutton 
      :button-color="bName"
      :buttonName="bName"
      :height="bigIcon"
      :width="bigIcon"
      > </dmidbutton>         
  
</template>

<script>  
  export default {
    components: {
      
    },

    data: function() {
      return {
        CRS: 'CRS',
        bigIcon: '75px',
        bName: 'ServiceRequests'        
    }
  },
  ///  
  computed: {
  },

///
  methods: {

  },


///
  watch: {
  },

///
  mounted: function() {
  },

///
  created() {
  },
}
</script>

<style scoped>

.tallNumber {
  height: 500px;
  background-color: lightpink;
  margin-bottom: 20px;
}

</style>
