<template>
  <div>
    <div class="results-body--columnHeaders">
      TEST RESULTS
      </div>
    <div class="results-body--ColumnContent">
    </div>
  </div>

</template>

<script>
import Modal from '../../../components/modalTemplate.vue'

export default {
  name: 'ResultsView',
  components: {
    Modal
  },
  data () {
    return {
      isModalVisible: false,
      subSiteIs: this.$route.name
    }
  },
  /// ////
  computed: {

  },
  /// ////
  mounted: function () {
  },
  /// ////
  methods: {
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

.vertical-spacer{
  width: 0px;
  height: 13px;
  border-left: 1px solid black;
  margin: 2px 5px;
}

</style>
