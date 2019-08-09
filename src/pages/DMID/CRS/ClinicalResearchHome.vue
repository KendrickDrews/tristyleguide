<template>
  <div>
    <div>
      HELLO WORLD HOME
    </div>

  </div>
</template>

<script>

export default {
  name: 'ClinicalResearchHome',
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
    },
    activeComponent: function () {
      return this.active.text
    },
    stateComponent: {
      get: function () {
        return this.$root.store.state.activeComponent
      },
      set: function (value) {
        this.$root.store.commit('isActiveComponent', value)
      }
    },
  },  
  /// ////
  beforeMount: function () {
    this.stateActiveComponent('Welcome to Clinical Research Support')
  },
  /// ////
  mounted: function () {
    this.$nextTick(function () {
      this.stateActiveTitle('Clinical Research')
    }),
    this.stateActiveComponent('Welcome to Clinical Research Support')
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
    },
    stateActiveComponent (value) {
      return this.stateComponent = value
    },

  }
}

</script>
<style>

</style>
