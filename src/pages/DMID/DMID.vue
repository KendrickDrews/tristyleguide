<template>
  <router-view></router-view>
</template>

<script>

import buttonList from '../../components/componentList/buttonList.js'

export default {
  components: {

  },

  data: function () {
    return {

    }
  },
  computed: {
    stateComponent: {
      get: function () {
        return this.$root.store.state.activeComponent
      },
      set: function (value) {
        this.$root.store.commit('isActiveComponent', value)
      }
    }
  },
  /// ////
  mounted: function () {
    this.stateActiveComponent('')
  },
  methods: {
    stateActiveComponent (value) {
      return this.stateComponent = value
    }
  }
}
</script>
