<template>
  <div>
    Service Request ServiceRequestsHome
  </div>
</template>

<script>

export default {
  name: 'SR',
  components: {

  },
  data () {
    return {

    }
  },
  /// ////
  computed: {
    stateTitle: {
      get: function () {
        return this.$root.store.state.siteTitle
      },
      set: function (value) {
        this.$root.store.commit('isSiteTitle', value)
      }
    }
  },
  /// ////
  mounted: function () {
    this.$nextTick(function () {
      this.stateActiveTitle('Service Requests')
    })
  },
  /// ////
  methods: {
    stateActiveTitle (value) {
      this.stateTitle = value
      return
    },
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    }

  }
}

</script>
<style>

</style>
