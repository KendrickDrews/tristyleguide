<template>
  <div>
    <div>
      HELLO WORLD CLINICAL Monitoring

    </div>

  </div>
</template>

<script>

export default {
  name: 'ClinicalMonitoring',
  components: {

  },
  data () {
    return {

    }
  },
  /// ////
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
      this.stateActiveTitle('ClinicalMonitoring')
    })
  },
  /// ////
  methods: {
    stateActiveTitle (value) {
      return this.stateTitle = value
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
