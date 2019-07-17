<template>
<!-- DMIDsideNav -->
  <div class="main-bodyNav"
  v-bind:class='"bodyNavStyle" + subSite'>
      <navList
      v-bind:page='subSite'
      />
      <resAndTools/>
      <brandingNav/>
  </div>
</template>

<script>
import navList from '../components/navLists.vue'
import resAndTools from '../components/DMIDResourcesAndTools.vue'
import brandingNav from '../components/DMIDBrandingNav.vue'

export default {
  components: {
    navList,
    resAndTools,
    brandingNav
  },
  data: function () {
    return {

    }
  },
  // A Prop Passed to navLists from any page which uses it
  computed: {
    subSite () {
      return this.$root.store.state.siteType
    }
  }

}
</script>
<style scoped>
.bodyNavStyleCRS{
  background-image: linear-gradient(to bottom,rgba(36, 79, 30, 0.05), transparent)
}
.bodyNavStyleServiceRequests{
  background-image: linear-gradient(to bottom,rgba(52, 94, 192, 0.05), transparent)
}

</style>
