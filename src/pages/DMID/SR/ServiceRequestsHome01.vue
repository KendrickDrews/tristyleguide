<template>
  <div>
            <button class="excel-Btn"> Export to Excel </button>
            <!-- to implement:: Fixed header, Correct ScrollBar Styling,  -->
            <!-- <table>
                <tr>
                  <th><div class="tableHeader long" >Name </div></th>
                  <th><div class="tableHeader short">Created </div></th>
                  <th><div class="tableHeader short">Requestor Name </div></th>
                  <th><div class="tableHeader short">Requestor Email </div></th>
                  <th><div class="tableHeader short">Requestor Phone </div></th>
                  <th><div class="tableHeader short">Site Name </div></th>
                  <th><div class="tableHeader short">Principal Investigator </div></th>
                  <th><div class="tableHeader long">DMID Protocol No </div></th>
                  <th><div class="tableHeader long">DMID Protocol No Not Known </div></th>
                  <th><div class="tableHeader short">Training Course </div></th>
                  <th><div class="tableHeader short">Training Materials Info </div></th>
                  <th><div class="tableHeader short">Approval Status </div></th>
                </tr>
                </table> -->
                <img src="../../../imgs/Table_IMG.png"/>
            <!-- <div id="scrollTable" >

              <table>
                <thead>
                <tr>
                  <th><div class="tableHeader long" >Name </div></th>
                  <th><div class="tableHeader short">Created </div></th>
                  <th><div class="tableHeader short">Requestor Name </div></th>
                  <th><div class="tableHeader short">Requestor Phone </div></th>
                  <th><div class="tableHeader short">Requestor Email </div></th>

                  <th><div class="tableHeader short">Site Name </div></th>
                  <th><div class="tableHeader short">Principal Investigator </div></th>
                  <th><div class="tableHeader long">DMID Protocol No </div></th>
                  <th><div class="tableHeader long">DMID Protocol No Not Known </div></th>
                  <th><div class="tableHeader short">Training Course </div></th>
                  <th><div class="tableHeader short">Training Materials Info </div></th>
                  <th><div class="tableHeader short">Approval Status </div></th>
                </tr>
                </thead>
                <tbody >
                <tr>
                  <td><a>Training -2018-07-18T12_41_14 </a> </td>
                  <td>18-Jul-2018</td>
                  <td>	Anna Example</td>
                  <td>555801936</td>
                  <td>aexample@altasciences.com	</td>
                  <td>Alta Clinical Research, L.L.C.</td>
                  <td>	DR.KAMKAN</td>
                  <td> </td>
                  <td>True</td>
                  <td>	DMID Source Documentation Standards</td>
                  <td> </td>
                  <td>	Email Started</td>
                </tr>
                <tr>
                  <td><a>Training -2018-07-18T12_41_14 </a></td>
                  <td>18-Jul-2018</td>
                  <td>	Anna Example</td>
                  <td>555801936</td>
                  <td>aexample@altasciences.com	</td>
                  <td>Alta Clinical Research, L.L.C.</td>
                  <td>	DR.KAMKAN</td>
                  <td> </td>
                  <td>True</td>
                  <td>	DMID Source Documentation Standards</td>
                  <td> </td>
                  <td>	Email Started</td>
                </tr>
                <tr>
                  <td><a>Training -2018-07-18T12_41_14 </a></td>
                  <td>18-Jul-2018</td>
                  <td>	Anna Example</td>
                  <td>555801936</td>
                  <td>aexample@altasciences.com	</td>
                  <td>Alta Clinical Research, L.L.C.</td>
                  <td>	DR.KAMKAN</td>
                  <td> </td>
                  <td>True</td>
                  <td>	DMID Source Documentation Standards</td>
                  <td> </td>
                  <td>	Email Started</td>
                </tr>
                <tr>
                  <td><a>Training -2018-07-18T12_41_14 </a></td>
                  <td>18-Jul-2018</td>
                  <td>	Anna Example</td>
                  <td>555801936</td>
                  <td>aexample@altasciences.com	</td>
                  <td>Alta Clinical Research, L.L.C.</td>
                  <td>	DR.KAMKAN</td>
                  <td> </td>
                  <td>True</td>
                  <td>	DMID Source Documentation Standards</td>
                  <td> </td>
                  <td>	Email Started</td>
                </tr>
                <tr>
                  <td><a>Training -2018-07-18T12_41_14 </a></td>
                  <td>18-Jul-2018</td>
                  <td>	Anna Example</td>
                  <td>555801936</td>
                  <td>aexample@altasciences.com	</td>
                  <td>Alta Clinical Research, L.L.C.</td>
                  <td>	DR.KAMKAN</td>
                  <td> </td>
                  <td>True</td>
                  <td>	DMID Source Documentation Standards</td>
                  <td> </td>
                  <td>	Email Started</td>
                </tr>
                <tr>
                  <td><a>Training -2018-07-18T12_41_14 </a></td>
                  <td>18-Jul-2018</td>
                  <td>	Anna Example</td>
                  <td>555801936</td>
                  <td>aexample@altasciences.com	</td>
                  <td>Louisiana State University Health Sciences Center - Infectious Diseases</td>
                  <td>	DR.KAMKAN</td>
                  <td> </td>
                  <td>True</td>
                  <td>	DMID Source Documentation Standards</td>
                  <td> </td>
                  <td>	Email Started</td>
                </tr>
                <tr>
                  <td><a>Training -2018-07-18T12_41_14 </a></td>
                  <td>18-Jul-2018</td>
                  <td>	Anna Example</td>
                  <td>555801936</td>
                  <td>aexample@altasciences.com	</td>
                  <td>Alta Clinical Research, L.L.C.</td>
                  <td>	DR.KAMKAN</td>
                  <td> </td>
                  <td>True</td>
                  <td>	DMID Source Documentation Standards</td>
                  <td> We are requesting training for Emory's IRB DM-16-0017, we will need investigator responsibilities, regulatory file documents, source document standards, study protocol management. Please provide so that I can comply with their IRB requests. Thank you!</td>
                  <td>	Email Started</td>
                </tr>
                <tr>
                  <td><a>Training -2018-07-18T12_41_14 </a></td>
                  <td>18-Jul-2018</td>
                  <td>	Anna Example</td>
                  <td>555801936</td>
                  <td>aexample@altasciences.com	</td>
                  <td>Alta Clinical Research, L.L.C.</td>
                  <td>	DR.KAMKAN</td>
                  <td> </td>
                  <td>True</td>
                  <td>	DMID Source Documentation Standards</td>
                  <td> </td>
                  <td>	Email Started</td>
                </tr>
                </tbody>
              </table>

            </div>
             <div class="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
              </div> -->

  </div>
</template>

<script>
import DMIDHeader from '../../../components/DMIDhead.vue'
import colors from '../../../layouts/colors.vue'
import navList from '../../../components/navLists.vue'
import allNav from '../../../components/DMIDsideNav.vue'
import Modal from '../../../components/modalTemplate.vue'
import buttonList from '../../../components/componentList/buttonList.js'
import Training from '../SR/Training.vue'

export default {
  name: 'ServiceRequestsHome01',
  components: {
    DMIDHeader,
    colors,
    navList,
    allNav,
    Modal,
    buttonList,
    Training

  },
  data () {
    return {
      isModalVisible: false,
      showNav: {
        Home: true,
        DocumentLibrary: true,
        CRS: true,
        SOCSCMS: true,
        Training: true,
        ServiceRequests: true,
        GrantCapture: true,
        Protocols: true,
        Results: true,
        PRT: true,
        SMART: true,
        CSRS: true
      },
      subSiteIs: this.$route.name,
      buttonList: buttonList

    }
  },
  /// ////
  computed: {
    thisSite: function () {
      return this.subSiteIs
    },

    //
    subSite: {
      get: function () {
        return this.$root.store.state.DMIDSite
      },
      set: function (value) {
        this.$root.store.commit('setDMIDSubSite', value)
      }

    },
    stateComponent: {
      get: function () {
        return this.$root.store.state.activeComponent
      },
      set: function (value) {
        this.$root.store.commit('isActiveComponent', value)
      }
    },
    stateType: {
      get: function () {
        return this.$root.store.state.siteType
      },
      set: function (value) {
        this.$root.store.commit('setSiteType', value)
      }
    },

    isActive () {
      return this.href === this.$root.currentRoute
    }

  },
  /// ////
  mounted: function () {
    this.setStateSubSite()
    this.stateActiveComponent('')
    this.scrollReset(0)
    this.stateSiteType('ServiceRequests')
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
    }

  }
}

</script>
<style>
.main-headSearch h4{
  color: #2a469d;
}
.main-location {
  color: rgb(52, 94, 192);

}
.locationContainer {
  background-color: rgb(62, 151, 253);
}
.mainContent {
  padding: 0px 10px 10px 0px!important;
  font-family: calibri!important;
  width: 100%;
}
.bodyText {
  font-family: Calibri;
}
.indent li  {
  font-size: 13.5px;
  font-family: Calibri;
  padding: 2px 0;
  font-weight: bold;
  list-style: none;
}
.indent2x {
  margin-left: 45px;
}
.indent2x li  {
  font-size: 13.5px;
  font-family: Calibri;
  padding: 2px 0;
  font-weight: bold;
  list-style: disc;
}

.titleHead {
  color:#244f1e;
  font-weight: bold;
  font-size: 15px;
  margin-left: -15px;
  font-family: Verdana;
}
.gray {
  background-color: #ccc;
}
.break {
  height: 14px;
}
.F01 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
.form-Row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  padding-bottom: 3px;
  margin: 0;
}
.form-text {
  font-weight: bold;
  margin: 0;
}
.form-Row .form-input {
  width: 312px;
  height: 23px;
  color: #777;
}

.input-column {
  width: 312px;
  height: 20px;
  color: #777;
}
.red {
  color: red;
}
.unset {
  font-weight: unset;
}
.F02 {
  height: 350px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.column {
  width: 41%;
  margin-right: 25px;
}
.form-Column {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  padding-bottom: 0px;
  margin: 0px;
  margin-bottom: 2px;
}
.form-Final {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 85%;
  padding-bottom: 3px;
  margin: 0;
}
.form-Final .form-input {
  width: 312px;
  color: #777;
}
.form-Column-Btn {
  height: 70px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-bottom: 0px;
  margin: 0px;
  margin-top: 70px;
}
.form-Btn {
  width: 200px;
  height: 26px;
  margin-bottom: 5px;
}
.excel-Btn {
  width: 150px;
  height: 23px;
  margin-left: 2%;
  margin-bottom: 20px;
}
#scrollTable {
  width: 100%;
  overflow:scroll;
  height: 574px;
  border: 1px solid #9F9F9F;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 768px;
  margin-top: -1px;
  margin-left: -1px;
  border: 1px solid #9F9F9F;
}
table thead tr {
  display:block;
}
table tbody {
  display: block;
  overflow: auto;
}
.tableHeader {
  margin: 2px 8px ;
}
.short {
  width: 100px;
}
.long {
  width: 180px;
}
th {
  background-color: #DCDCDC;
  border: 1px solid #9F9F9F;
  height: 37px;
}
td, th {
  font-weight: normal;
  text-align: left;
  padding: 0px;

}
td {
  border: 1px solid #dddddd;
  padding: 3px 6px 4px;
  min-height: 50px;
}
tr:nth-child(even) {
  background-color: #EDEDEB;
}
.visible-scrollbar, .invisible-scrollbar, .mostly-customized-scrollbar {
  display: block;
  width: 10em;
  overflow: auto;
  height: 2em;
}
.mostly-customized-scrollbar::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #aaa; /* or add it to the track */
}
.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
  background: #000;
}

.pagination {
  display: inline-block;
  border-left: 1px solid #9F9F9F;
  border-right: 1px solid #9F9F9F;
  border-bottom: 1px solid #9F9F9F;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}
</style>
