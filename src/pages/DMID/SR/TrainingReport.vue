<template>
  <div>
    <div>
      HELLO WORLD TrainingReport

    </div>

  </div>
</template>

<script>

export default {
  name: 'TrainingReport',
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
    },
  },
  /// ////
  mounted: function () {
    this.$nextTick(function () {
      this.stateActiveTitle('Training-Report')
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
