<template>
  
             <!--
          </div> -->
  <div class="CQMP">
    <div class="buttonRow">
      <button> Export to Excel </button>
    </div>
    <div class="CQMP-page--container">
      <div class="cqmp-table--siteView">
        <div class="console-body--columnHeaders">
          <div
          v-for="item in columnTitles"
          v-bind:key="item.id"
          v-bind:id="item.id"
          class="console-col--Header">
            <p v-bind:class="item.id">{{ item.name }}</p>
          </div>
        </div>
        <div class="CQMP-table--container">
          <div class="CQMP-table--row"
           v-for="(item, index) in trainingRecords"
          :key="index"
          @click="activeRow = index"
          v-bind:class="[isValueEven(index), {'SelectedRow' : activeRow == index}]">
            <!-- Name -->
            <div class="content--flex content--border console-col--LeadSite ">
              <p>{{ record.siteName }}</p>
            </div>
            <!-- Created -->
            <div class="content--flex content--border console-col--AffiliatedSite">
              <p>{{ record.siteName }}</p>
            </div>
            <!-- RequestorName -->
            <div class="content--flex content--border console-col--FundingAgreement">
              <p>{{ item.fundingAgreement }}</p>
            </div>
            <!-- RequestorEmail -->
            <div class="content--flex content--border console-col--GroupAffiliation">
              <p>{{ item.groupAffiliation }}</p>
            </div>
            <!-- RequestorPhone -->
            <div class="content--flex content--border console-col--AcceptDate">
              <p>{{ item.legacyData.dateAccept }}</p>
            </div>
            <!-- SiteName -->
            <div class="content--flex content--border console-col--VersionNum">
              <p>{{ item.legacyData.vNumber }}</p>
            </div>
            <!-- VersionDate -->
            <div class="content--flex content--border console-col--VersionDate">
              <p>{{ item.legacyData.vDate }}</p>
            </div>
            <!-- PrincipalInvestigator -->
            <div class="content--flex content--border console-col--CQMPStatus">
              <p>{{ item.currentData.cqmpStatus }}</p>
            </div>
            <!-- RequestType -->
            <div class="content--flex content--border console-col--EffectiveDate">
              <p>{{ item.currentData.effDate }}</p>
            </div>
            <!-- ProposedLocation -->
            <div class="content--flex  content--border console-col--VersionNumber">
              <p>{{ item.currentData.cvNumber }}</p>
            </div>
            <!-- TopicArea -->
            <div class="content--flex content--border console-col--VersionDT">
              <p>{{ item.currentData.cvDate }}</p>
            </div>
            <!-- Date -->
            <div class="content--flex content--border console-col--ReviewerComments">
              <p>{{ item.currentData.Comments }}</p>
            </div>
            <!-- Status -->
            <div class="content--flex content--border console-col--ReviewerComments">
              <p>{{ item.currentData.Comments }}</p>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  </div>
</template>

<script>
import autocomplete from '../../../components/autoComplete.vue'
import subsiteMaster from '../CRS/subsiteMaster.js'

export default {
  name: 'TrainingReport',
  components: {
    autocomplete,
    subsiteMaster
  },
  data () {
    return {
      activeRow: -1,
      activeItem: 'Console',
      columnTitles: [
        { id: 'Name', name: 'Name' },
        { id: 'Created', name: 'Created' },
        { id: 'RequestorName', name: 'Requestor Name' },
        { id: 'RequestorEmail', name: 'Requestor Email' },
        { id: 'RequestorPhone', name: 'Requestor Phone' },
        { id: 'SiteName', name: 'Site Name' },
        { id: 'PrincipalInvestigator', name: 'Principal Investigator' },
        { id: 'RequestType', name: 'Request Type' },
        { id: 'ProposedLocation', name: 'Proposed Location' },
        { id: 'TopicArea', name: 'Topic/ Area' },
        { id: 'ProtocolNumber', name: 'Protocol Number/ Title' },
        { id: 'Date', name: 'Date' },
        { id: 'Status', name: 'Status' }
      ],
      currentProtocol: -1,
      selected: [],      
      subsiteMasterList: Object.keys(subsiteMaster).map(function (key) {
        return subsiteMaster[key]
      }),
      trainingRecords: []
    }
  },
  /// ////
  computed: {
    sortedTrainingRecords: function () {
      // Sorts but you should be able to extract this method out so it is REUSABLE
      function compare (a, b) {
        if (a.leadSite < b.leadSite) { return -1 }
        if (a.leadSite > b.leadSite) { return 1 }
        return 0
      }
      return this.trainingRecords.sort(compare)
    },
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
      this.stateActiveTitle('Ad-Hoc-Training-Request-Report')
    }),
    this.setCurrentProtocol()
    this.isValueEven()
    this.generateTrainingRecords()
  },
  /// ////
  methods: {
    stateActiveTitle (value) {
      return this.stateTitle = value
    },
    isSelected: function () {
      return this.selected
    },
    clickedProtocolValue (value) {
      return this.currentProtocol = value
    },
    setCurrentProtocol: function (value) {
      this.clickedProtocolValue(value)
    },
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    getRandomInt: function (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min // The maximum is inclusive and the minimum is inclusive
    },
    headsOrTails: function (a, b) {
      var myNumber = this.getRandomInt(0, 1)
      if (myNumber == 0) {
        return a
      } else {
        return b
      }
    },
    randomValueFrom: function (Arr) {
      var value = Arr[this.getRandomInt(Arr[0], Arr[Arr.length -1])]
      return value
    },
    randomDate: function (start, end) {
      var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

      // month = '' + (d.getMonth() + 1),

      var day = '' + d.getDate()

      var year = d.getFullYear()
      year = year.toString().substr(-2)
      var month = new Array()

      month[0] = 'Jan'
      month[1] = 'Feb'
      month[2] = 'Mar'
      month[3] = 'Apr'
      month[4] = 'May'
      month[5] = 'Jun'
      month[6] = 'Jul'
      month[7] = 'Aug'
      month[8] = 'Sep'
      month[9] = 'Oct'
      month[10] = 'Nov'
      month[11] = 'Dec'

      var monthName = month[d.getMonth()]

      // if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day

      return [day, monthName, year].join('-')
    },
    randomLocation: function (start, end) {
      var DCE = new Array()

      DCE[0] = 'OBRRTR'
      DCE[1] = 'RDB'
      DCE[2] = 'PIPB'
      DCE[3] = 'BMB'
      DCE[4] = 'STDB'

      // var entityNum = ;
      var branchName = DCE[this.getRandomInt(start, end)]
      return branchName
    },
    randomPI: function (start, end) {
      var CPM = new Array()

      CPM[0] = 'Carol Ostrye'
      CPM[1] = 'Walt Jones'
      CPM[2] = 'Patti Gottdiener'
      CPM[3] = 'Robin Mason'
      CPM[4] = 'Walla Dempsey'

      // var entityNum = ;
      var entityName = CPM[this.getRandomInt(start, end)]
      return entityName
    },
    randomRequestType: function (start, end) {
      var Values = new Array()

      Values[0] = 'Web Conference'
      Values[1] = 'In-Person'
      Values[2] = 'On-Demand'
      Values[3] = 'Job Aid'
      Values[4] = 'Quick Start Guide'      

      // var entityNum = ;
      var outputValue = Values[this.getRandomInt(start, end)]
      return outputValue
    },
    randomName: function (start, end) {
      var sites = new Array()

      sites[0] = 'Crucell Holland BV'
      sites[1] = 'Emory University'
      sites[2] = 'Mayo Clinic'
      sites[3] = 'Quintiles, Inc.'
      sites[4] = 'N/A'

      // var entityNum = ;
      var siteName = sites[this.getRandomInt(start, end)]
      return siteName
    },
    randomTopicArea: function (start, end) {
      var status = new Array()

      status[0] = 'Accepted Initial'
      status[1] = 'Accepted Revised'
      status[2] = 'In Progress'
      status[3] = 'Cancelled'
      status[4] = 'None'

      // var entityNum = ;
      var recordStatus = status[this.getRandomInt(start, end)]
      return recordStatus
    },
    randomResource: function (start, end) {
      var resource = new Array()

      resource[0] = '1 - Low'
      resource[1] = '2 - Low'
      resource[2] = '3 - Medium'
      resource[3] = '4 - Medium'
      resource[4] = '5 - High'
      resource[5] = '6 - High'
      resource[6] = '7 - High'
      resource[7] = '8 - High'

      // var entityNum = ;
      var resourceLevel = resource[this.getRandomInt(start, end)]
      return resourceLevel
    },
    shuffle: function (array) {
      var currentIndex = array.length; var temporaryValue; var randomIndex
      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }
      return array
    },
    generateProtocolNumber: function () {
      var start = this.getRandomInt(0, 19)
      var end = this.getRandomInt(0, 1150)
      var XX = (start >= 10) ? start : '0' + start
      var XXXX = (end >= 1000) ? end : (end >= 100) ? '0' + end : (end >= 10) ? '00' + end : '000' + end
      return [XX, XXXX].join('-')
    },
    generateTrainingRecords: function () {
      var output = this.trainingRecords
      var numofRecords = 20
      
      for (var i = 0; i < numofRecords; i++) {
        var isProtocolKnown = this.headsOrTails(true, false)        
        aRecord = {
          name: '',
          created: '',
          requestor: {
            Name: '',
            Email: '',
            Phone: ''
          },
          site: {
            Name: '',
            PI: ''
          },
          protocol: {
            number: this.generateProtocolNumber(),
            protocolUnknown: isProtocolKnown,
          },
          requestType: '',
          Location: '',
          topicArea: '',          
          date: this.randomDate(new Date(2000, 0, 1), new Date(2019, 11, 31)),
          status: ''
        }
        output.push(aRecord)
      }
    },
    isValueEven: function (value) {
      var myNumber = value
      if (myNumber % 2 === 0) {
        return 'odd-row'
      } else {
        return 'striped-row'
      }
    },
    toggleActiveRow: function () {
      this.activeRow = !this.activeRow
    }
  },
  filters: {
    concatenate: function (value) {
      if (!value) return 'noValue'
      var toSplit = value
      var splitString = toSplit.split(' ')
      return splitString.join('')
    },
    plus: function (value, number) {
      if (!value) return 'noValue'
      return value + number
    }
  }
}

</script>
<style>
@font-face {
  font-family: 'DroidSans';
  src:  url('../../../styles/Typefaces/DroidSansMono.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
.site-form--searchbox {
  padding: 5px 20px;
  margin-bottom: 15px;
  margin-left: calc(100% - 87px);
}
.subText {
  padding: 0px!important;
  font-style: italic;
}
.error {
  font-weight: bold;
  color: red;
}
.submitBTN {
  float: right;
  padding: 5px 20px;
  margin-right: 5%;
}
.horizontal-line {
  width: 100%;
  margin: 5px 0px;
  height: 0px;
  border-bottom: 2px solid #999;
}
.short {
  width: 90%;
  margin: 5px auto;
}
.CQMP-page--container {
  width: 100%;
  overflow: scroll;
  border: 1px solid black;
  overflow-y: hidden;
}
.CQMP-table--container {
  overflow: scroll;
  max-height: 600px;
  width: max-content;
  scrollbar-width: none;
}
.CQMP-page--container::-webkit-scrollbar {
  color: rgb(36, 36, 36);
  background: #123456;
  background-color: #ccc; /* or add it to the track */
  height: 8px;
  border-radius: 5px;
}
.CQMP-table--container::-webkit-scrollbar {
  height: 1px;
  border-top: 1px solid black;
}
.CQMP-page--container::-webkit-scrollbar-thumb {
  background-color: #008299;
  border-radius: 5px;
}
.results--container {
  position: relative;
}
.striped-row {
  background-color: rgb(211, 219, 232);
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
  width: max-content;
}
.currentProtocol {
  color: white;
  font-size: 9pt;
  font-weight: bold;
  position: absolute;
  top: -41px;
  left: 13px;
}
.console-col--Header {
  background-color: rgb(100, 100, 100);
  border-right: 1px solid white;
  padding: 5px 12px 7px 12px;
  color: white;
  font-weight: bold;
  /*max-width: fit-content;*/
  display: flex;
  flex-direction: column;
  align-items: center;
}
.console-col--Header p {
  margin: 0;
  text-align: center;
}
.console-col--Header span {
  font-weight:normal;
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
}
.content--flex p {
  margin-top: 0;
  margin-bottom: 0;
  padding: 3px 3px 3px 5px;
  color: #666666;
  overflow: hidden;
}
.content--flex .edit {
  margin: 0 auto;
  padding: 3px;
  color: #666666;
  height: 24px;
  overflow: hidden;
}
.content--border {
  border-right: 1px solid #999999;
}
.console-col--Edit {
  width: 49px;
  height: 24px;
  margin: 0 auto;
}
.console-col--ProtocolNumber,
#ProtocolNumber,
#ProtocolNumberSite,
#ProtocolNumberClosed,
#ProtocolNumberCRA,
#ProtocolNumberProt {
  width: 81px;
}
.console-col--LeadSite,
#LeadSite, #LeadSiteSite,
#LeadSiteCRA,
#LeadSiteClosed,
#LeadSiteProt {
  width: 235px;
}
.console-col--AffiliatedSite,
#AffiliatedSite,
#AffiliatedSiteSite,
#AffiliatedSiteClosed,
#AffiliatedSiteCRA,
#AffiliatedSiteProt {
  width: 235px;
}
.console-col--FundingAgreement,
#FundingAgreementSite,
#FundingAgreementClosed,
#FundingAgreementCRA,
#FundingAgreementProt  {
  width: 190px;
}
.console-col--DMIDBranch,
#DMIDBranch,
#DMIDBranchSite,
#DMIDBranchClosed,
#DMIDBranchCRA,
#DMIDBranchProt {
  width: 75px;
}
.console-col--DMIDCPM,
#DMIDCPM,
#DMIDCPMSite,
#DMIDCPMClosed,
#DMIDCPMCRA,
#DMIDCPMProt {
  width: 141px;
}
.console-col--ResourceLevel,
#ResourceLevelSite,
#ResourceLevelClosed,
#ResourceLevel,
#ResourceLevelCRA,
#ResourceLevelProt {
  width: 114px;
}
.console-col--GroupAffiliation,
#GroupAffiliation,
#GroupAffiliationSite,
#GroupAffiliationClosed,
#GroupAffiliationCRA,
#GroupAffiliationProt {
  width: 80px;
}
.console-col--DMIDIND,
#DMIDIND,
#DMIDINDSite,
#DMIDINDClosed,
#DMIDINDCRA,
#DMIDINDProt {
  width: 86px;
}
.console-col--AcceptDate,
#AcceptDate,
#AcceptDateSite,
#AcceptDateClosed,
#AcceptDateCRA,
#AcceptDateProt {
  width: 85px;
}
.console-col--VersionNum,
#VersionNum,
#VersionNumSite,
#VersionNumClosed,
#VersionNumCRA,
#VersionNumProt {
  width: 69px;
}
.console-col--VersionDate,
.console-col--VersionNum,
.console-col--AcceptDate,
.console-col--EffectiveDate,
.console-col--VersionDT,
.console-col--CurrentAcceptDate,
.console-col--DMIDAcceptVersion   {
  font-family: DroidSans;
  font-size: 13px;
  padding-top: 1px;
}
.console-col--VersionDate,
#VersionDate,
#VersionDateSite,
#VersionDateClosed,
#VersionDateCRA,
#VersionDateProt {
  width: 85px;
}
.console-col--CQMPStatus,
#CQMPStatus,
#CQMPStatusSite,
#CQMPStatusClosed,
#CQMPStatusCRA,
#CQMPStatusProt {
  width: 118px;
}
.console-col--EffectiveDate,
#EffectiveDate,
#EffectiveDateSite,
#EffectiveDateClosed,
#EffectiveDateCRA,
#EffectiveDateProt {
  width: 85px;
}
.console-col--VersionNumber,
#VersionNumber,
#VersionNumberSite,
#VersionNumberClosed,
#VersionNumberCRA,
#VersionNumberProt {
  width: 69px;
}
.console-col--VersionDT,
#VersionDT,
#VersionDTSite,
#VersionDTClosed,
#VersionDTCRA,
#VersionDTProt {
  width: 85px;
}
.console-col--ReviewerComments,
#ReviewerComments,
#ReviewerCommentsSite,
#ReviewerCommentsClosed,
#ReviewerCommentsCRA,
#ReviewerCommentsProt {
  width: 153px;
  border-right: unset;

}
.console-col--CurrentAcceptDate,
#CurrentAcceptDate,
#CurrentAcceptDateSite,
#CurrentAcceptDateClosed,
#CurrentAcceptDateCRA,
#CurrentAcceptDateProt {
  width: 116px;
}
.console-col--DMIDAcceptVersion,
#DMIDAcceptVersion,
#DMIDAcceptVersionSite,
#DMIDAcceptVersionClosed,
#DMIDAcceptVersionCRA,
#DMIDAcceptVersionProt {
  width: 116px;
}
.console-col--Monitored,
#Monitored,
#MonitoredSite,
#MonitoredClosed,
#MonitoredCRA,
#MonitoredProt {
  width: 150px;
  border-right: unset;
}
#Monitored {
  border-right: unset;
}
.buttonRow {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0px 0px;

}
.buttonRow button {
  padding: 5px 10px;
  width: 125px;
  margin: 10px 0px;
}
.selectedButton {
  background-color: #0099ff;
}
.addNewReport {
  margin-left: 150px!important;
}
.resultsButton {
  background-image: url(../../../imgs/Results_AddBtn.jpg);
  height: 25px;
  width: 125px;
  margin: 20px auto;}

/* Multi-select Drop Down List */
.select-title {
  border-radius: 4px;
  height: 30px;
  padding: 7px;
  width: 375px;
  border: 1px solid #666;
}
.select-list {
  font-family: 'Open Sans', sans-serif;
  color: #555;
  background: #fff;
}
.select-list .title {
  display: inline-block;
  cursor: pointer;
  background: #fff;
  border: 1px solid #eaeaec;
  border-radius: 5px;
  padding: 10px 15px 10px 15px;
}
.select-list .title::after {
  display: inline-block;
  content: '>';
  margin-left: 15px;
  font-size: 11px;
  transform: rotate(90deg) scale(1, 2);
}
.select-list .title:hover {
  background: #eaeaec;
}
.option input {
  height: unset;
  width: unset;
}
.select-list .select-options {
  margin-top: -105px;
  position: absolute;
  z-index: 500;
  border: 1px solid #666;
  background: #fff;
  max-height: 200px;
  right: -140px;
  overflow: scroll;
}
.select-options::-webkit-scrollbar {
  color: rgb(36, 36, 36);
  background: #123456;
  background-color: #ccc; /* or add it to the track */
  height: 0px;
  width: 8px;
  border-radius: 5px;
}
.select-options::-webkit-scrollbar-thumb {
  background-color: #008299;
  border-radius: 5px;
}
.select-list .select-options .option label {
  display: inline-block;
  width: calc(100% - 28px);
  vertical-align: middle;
  padding: 10px 30px 10px 10px;
}
.select-list .select-options .option:hover {
  background: #eaeaec;
}
.select-list .select-options .option input {
  margin: 10px 0 12px 15px;
  vertical-align: middle;
}
.row--column {
  flex-direction: column;
}
.siteTable {
  width: 90%;
  margin: 0 auto 15px;
}
.protocolTable {
  width: 90%;
  margin: 0px auto 15px;
}
.noPadding {
  padding: 0;
  margin-top: 10px;
}
.thin {
  margin-top: 5px;
  margin-bottom: 5px;
}
.button-row {
  justify-content: flex-end;
}
.form-button {
  padding: 5px 20px;
}
.cancelRecord {
  margin-right: 15px;
}
.updateRecord {
  background-color: #0099ff;
  color: white;
  /* border: 1px solid teal; */
}
.CQMP-table--row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: max-content;
  border-bottom: 1px solid #999999;
  position: relative;
}
.bold {
  font-weight: bold;
}
.SelectedRow {
  background-color: rgb(146, 185, 222);
  position: relative;
}
.SelectedRow div p {
  color: black;
}
.SelectedRow:before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #000;
  border-top: 1px solid #000;
}
.CQMP-table--row:hover{
  background-color: rgba(179, 215, 230, 0.5);
}
.CQMP-table--row:hover:before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #000;
  border-top: 1px solid #000;
}
.SelectedRow:hover {
  background-color: rgba(124, 183, 223, 0.75);
}
.legacy-data {
  background-color: rgba(207, 208, 227, 0.5);
}
.current-data {
  background-color: rgba(205, 180, 219, 0.5);
}
.hidden {
  display: none;
}
.CQMP-table--subheader {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: white;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 50;
  background-color: #468a68;
  padding: 8px 5px;
  border-bottom: 1px solid black;
  box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.7);
}
.subheader-two {
  z-index: 55;
}
.border-bottom {
  border-bottom: 1px solid #ccc;
}
</style>
