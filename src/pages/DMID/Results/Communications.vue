<template>
  <div>
    <div class="results-body--columnHeaders">
      TEST Communications
      </div>
    <div class="results-body--ColumnContent">
    </div>    
  </div>

</template>

<script> 
  import Modal from "../../../components/modalTemplate.vue";
  export default {
    name: 'Communications',
    components: {      
      Modal,
    },
    data () {
      return {
        isModalVisible: false,        
        subSiteIs: this.$route.name,        
        activeItem: 'Console',

      };
    },
///////
    computed: {
      

    },
///////
    mounted: function () {
      this.setStateSubSite();
      this.stateActiveComponent('Console');
      this.scrollReset(0);
      this.stateSiteType('ResultsPage');
    },
///////
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      
    },
  }

</script>

<style>
.vertical-spacer{
  width: 0px;
  height: 13px;
  border-left: 1px solid black;
  margin: 2px 5px;
}
.active {
  border-bottom: 1px solid white;
  color: white;  
}
</style>

