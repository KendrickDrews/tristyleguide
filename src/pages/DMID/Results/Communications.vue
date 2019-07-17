<template>
  <div class="results--container">
    <div class="currentProtocol">
      <p> 04-0089 </p>
    </div>
    <div class="results-comm--uploadContent">
      <div class="comm-upload--files">
        <div  class="header-section">
          <img class="img-header--section" src="../../../imgs/up_arrow.gif"/>
          <p> File Viewing </p>

        </div>
      <div class="comm-upload--upload console-body--columnHeaders">

        <div
          v-for="item in emailList"
          v-bind:key="item.id"
          v-bind:id="item.id"
          class="console-col--Header">
            <p v-bind:class="item.id">
            {{ item.name }} </p>
        </div>
      </div>
      <div
      v-for="n in columnLength"
      v-bind:key="n.id"
      class="comm-upload--upload console-body--columnHeaders">

        <div
          v-for="item in emailList"
          v-bind:key="item.id"
          v-bind:id="item.id"
          class="upload-content--Bottom">
            <p v-bind:class="item.id + n">
            {{ item.name }} </p>
        </div>
      </div>
      </div>
    </div>
    <div class="results-comm--uploadContainer">
      <div  class="header-section">
        <img class="img-header--section" src="../../../imgs/up_arrow.gif"/>
        <p> File Uploading </p>

      </div>
      <div class="comm-upload--upload console-body--columnHeaders">

        <div
          v-for="item in emailList"
          v-bind:key="item.id"
          v-bind:id="item.id"
          class="console-col--Header">
            <p v-bind:class="item.id">
            {{ item.name }} </p>
        </div>
      </div>
      <!-- <div
      v-for="n in columnLength"
      v-bind:key="n.id"
      class="comm-upload--upload console-body--columnHeaders">

        <div
          v-for="item in emailList"
          v-bind:key="item.id"
          v-bind:id="item.id"
          class="upload-content--Bottom">
            <p v-bind:class="item.id + n">
            {{ item.name + n }} </p>
        </div>
      </div> -->
      <div class="button--container">
        <button class="comm--button comm-upload--button" @click="showModal()">Upload</button>
        <button class="comm--button comm-cancel--button" @click="confirmDelete()">Cancel</button>
      </div>
    </div>
    <Modal
        v-show="isModalVisible"
        @close="closeModal"
      />
  </div>

</template>

<script>
import Modal from '../../../components/modalTemplate.vue'
export default {
  name: 'Communications',
  components: {
    Modal
  },
  data () {
    return {
      isModalVisible: false,
      subSiteIs: this.$route.name,
      activeItem: 'Console',
      emailList: [
        { id: 'S.No', name: 'S.No' },
        { id: 'FileName', name: 'File Name' },
        { id: 'UploadedBy', name: 'Uploaded By' },
        { id: 'UploadedDate', name: 'Uploaded Date' },
        { id: 'Comments', name: 'Comments' },
        { id: 'Delete', name: 'Delete' }
      ],
      columnLength: 4
    }
  },
  /// ////
  computed: {

  },
  /// ////
  mounted: function () {
    this.setStateSubSite()
    this.stateActiveComponent('Console')
    this.scrollReset(0)
    this.stateSiteType('ResultsPage')
  },
  /// ////
  methods: {
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    setStateSubSite: function (thisSite) {
      const DMIDSite = this.thisSite
      return this.stateSubSite(this.thisSite)
    },
    stateSubSite (value) {
      return this.subSite = value
    },
    stateActiveComponent (value) {
      return this.stateComponent = value
    },
    scrollReset (value) {
      var element = document.querySelector('#scrollContainer')
      return element.scrollTop = value
    },
    goTo (event) {
      event.preventDefault()
      this.$root.currentRoute = this.href
      window.history.pushState(
        null,
        routes[this.href],
        this.href
      )
    },
    stateSiteType (value) {
      return this.stateType = value
    },
    setActiveItem: function (value) {
      return this.activeItem = value
    },
    activeMenuItem (itemName) {
      this.stateActiveComponent(itemName)
      this.setActiveItem(itemName)
    },
    confirmDelete () {
      confirm("Delete 'Document Title' from upload list?")
    }

  }
}
</script>

<style scoped>
.results--container {
  position: relative;
}
.vertical-spacer{
  width: 0px;
  height: 13px;
  border-left: 1px solid black;
  margin: 2px 5px;
}
.console-body--columnHeaders {
  display:flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  border-left: 1px solid #999999;
}
.currentProtocol {
  color: white;
  font-family: Verdana;
  font-size: 9pt;
  font-weight: bold;
  position: absolute;
  top: -41px;
  left: 13px;
}
.console-col--Header {
  background-color: #728776;
  border-right: 1px solid #999999;
  height: 24px;
  padding: 5px;
  color: white;
  font-family: Verdana;
  font-weight: bold;
  width: 100%;
  vertical-align: middle;
  line-height: 2em;
  max-width: unset;
}
.console-col--Header p {
  margin: 0;
}
.console-body--ColumnContent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.content--flex{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: verdana;
  font-size:11.5px;
}
.content--flex p {
  margin-top: 0;
  margin-bottom: 0;
  padding: 3px;
  color: #666666;
}
.content--border {
  border-right: 1px solid #999999;
  border-bottom: 1px solid #999999;
}
.console-col--edit {
  text-decoration: underline;
  text-align: center;
  width: 33.7px;
}
.console-col--protocolNumber{
  width: 67.05px;
  text-decoration: underline;
  text-align: center;
}
.console-col--status {
  width: 47.16px;
}
.NCTNumber {
  width: 99px
}
.buttonRow {
  display: flex;
}
.resultsButton {
  background-image: url(../../../imgs/Results_AddBtn.jpg);
  height: 25px;
  width: 125px;
  margin: 20px auto;
}
.toUploadRows {
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
}
.upload-content--Bottom{
  font-family: verdana;
  font-size:11.5px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 3px;
  color: #666666;
  width:100%;
  border-bottom: 1px solid #999999;
  border-right: 1px solid #999999;
}
.results-comm--uploadContainer,
.results-comm--uploadContent {
  padding: 8px;
}
.header-section {
  margin: 0 auto;
  padding: 2px 2px 2px 6px;
  font-weight: bold;
  font-size: 10pt;
  font-family: Verdana;
  color: White;
  border-width: 1px;
  border-style: Solid;
  border-color: Black;
  background-color: #728776;
  text-align: left;
  margin-bottom: 10px;
}
.header-section p {
  display: inline-block;
  margin: 0;
}
.header-section img {
  position: relative;
  top:2px;
  left: 975px;
}
.button--container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 25px;
  margin-bottom: 20px;
}
.comm--button {
  margin-left: 10px;
}
.comm-upload--button {
 width: 95px;
 margin-right: 10px;
}
</style>
