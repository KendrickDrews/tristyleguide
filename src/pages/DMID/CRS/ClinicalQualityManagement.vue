<template>
  <div class="CQMP-page--container">
    <div class="buttonRow">
      <button> Site Specific </button>
      <button > Protocol Specific </button>
      <button class="selectedButton"> CRA Reference </button>
      <button> Closed </button>
      <button class="addNewReport"> Add New </button>
    </div>
    <div class="console-body--columnHeaders">
      <div
      v-for="item in columnList"
      v-bind:key="item.id"
      v-bind:id="item.id"
      class="console-col--Header">
        <p v-bind:class="item.id">
        {{ item.name }} </p>
      </div>
    </div>
    <div class="CQMP-table--container">
    <div class="console-body--ColumnContent">
       <!-- ProtocolNumber -->
      <div class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--ProtocolNumber content--border"
        >{{ createdProtocolArray[n] }}</p>
      </div>
      <!-- LeadSite -->
      <div class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--LeadSite content--border"
        >{{ generateSiteName(0,4) }}</p>
      </div>
      <!-- AffiliatedSite -->
      <div class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--AffiliatedSite content--border"
        >{{ generateSiteName(0,4) }}</p>
      </div>
      <!-- FundingAgreement -->
    <!--  <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--FundingAgreement content--border"
        >Contract</p>
      </div> -->
      <!-- DMIDBranch -->
    <!--  <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--DMIDBranch content--border"
        >{{ generateBranch(0,4) }}</p>
      </div> -->
      <!-- DMIDCPM -->
     <!-- <div class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--DMIDCPM content--border"
        > {{ randomCPM(0,4) }} </p>
      </div> -->
      <!-- ResourceLevel -->
     <!-- <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--ResourceLevel  content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div> -->
      <!-- GroupAffiliation -->
    <!--  <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--GroupAffiliation content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div> -->
      <!-- DMIDIND -->
    <!--  <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--DMIDIND content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div> -->
      <!-- AcceptDate -->
    <!--  <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--AcceptDate content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div> -->
      <!-- VersionNum -->
    <!--  <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--VersionNum content--border"
        >{{ getRandomInt(1,3) }}.0</p>
      </div> -->
      <!-- VersionDate -->
    <!--  <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--VersionDate content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div> -->
      <!-- CQMPStatus -->
    <!--  <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--CQMPStatus content--border"
        > Waiting </p>
      </div> -->
      <!-- EffectiveDate -->
    <!--  <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--EffectiveDate  content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div> -->
      <!-- VersionNumber -->
    <!--  <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--VersionNumber content--border"
        >{{ getRandomInt(1,3) }}.0</p>
      </div>-->
      <!-- VersionDT -->
    <!--  <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--VersionDT content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div>-->
      <!-- ReviewerComments -->
    <!--  <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--ReviewerComments content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div> -->
      <!-- CurrentAcceptDate -->
      <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--CurrentAcceptDate content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div>
      <!-- DMIDAcceptVersion -->
      <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--DMIDAcceptVersion content--border"
        >{{ getRandomInt(1,3) }}.0</p>
      </div>
      <!-- Monitored -->
      <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        v-bind:class="{ 'activeEmail': activeItem == 'Communications' }"
        @click="activeMenuItem('Communications')"
        class="console-col--Monitored content--border"
        >{{ headsOrTails() }}</p>
      </div>

    </div>
    </div>


  </div>
</template>

<script>

  export default {
    name: 'ClinicalQualityManagement',
    components: {

    },
    data () {
      return {
        activeItem: 'Console',
        columnLength: 25,
        columnList: [
          {id: 'ProtocolNumber', name: 'Protocol Number'},
          {id: 'LeadSite', name: 'Lead Site'},
          {id: 'AffiliatedSite', name: 'Affiliated Site'},
        //  {id: 'FundingAgreement', name: 'Funding Agreement'},
        //  {id: 'DMIDBranch', name: 'DMID Branch'},
        //  {id: 'DMIDCPM', name: 'DMID Clinical Project Manager'},
        //  {id: 'ResourceLevel', name: 'Resource Level'},
        //  {id: 'GroupAffiliation', name: 'Group Affiliation'},
        //  {id: 'DMIDIND', name: 'DMID IND'},
        //  {id: 'AcceptDate', name: 'Accepted Date'},
        //  {id: 'VersionNum', name: 'Version Number'},
        //  {id: 'VersionDate', name: 'Version Date'},
        //  {id: 'CQMPStatus', name: 'CQMP Status'},
        //  {id: 'EffectiveDate', name: 'Effective Date'},
        //  {id: 'VersionNumber', name: 'Version Number'},
        //  {id: 'VersionDT', name: 'Version Date'},
        //  {id: 'ReviewerComments', name: 'Reviewer Comments'},
          {id: 'CurrentAcceptDate', name: 'Current Accepted Date'},
          {id: 'DMIDAcceptVersion', name: 'DMID Accepted Version'},
          {id: 'Monitored', name: 'Monitored by ICON?'},
        ],
        protocols: [],
        currentProtocol: -1,
        planView: "All",
      };
    },
///////
    computed: {
      createdProtocolArray: function() {
        return this.protocols
      },
      currentProtocolValue: function() {
        return this.currentProtocol
      },
    },
///////
    mounted: function () {
      this.generateProtocolArray();
      this.setCurrentProtocol();
    },
///////
    methods: {
      clickedProtocolValue (value) {
      return  this.currentProtocol = value
      },
      setCurrentProtocol: function(value){
      this.clickedProtocolValue(value);
      },
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      getRandomInt: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
      },
      headsOrTails: function() {
        var myNumber = this.getRandomInt(0,1);
        if (myNumber == 0) {
          return 'Yes'
        }
        else {
          return 'No'
        }
      },
      randomDate: function (start, end) {

        var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),

          //month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
          var month = new Array();

          month[0] = "Jan";
          month[1] = "Feb";
          month[2] = "Mar";
          month[3] = "Apr";
          month[4] = "May";
          month[5] = "Jun";
          month[6] = "Jul";
          month[7] = "Aug";
          month[8] = "Sep";
          month[9] = "Oct";
          month[10] = "Nov";
          month[11] = "Dec";

          var monthName = month[d.getMonth()];

        // if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [day, monthName, year].join('-');
      },

      generateBranch: function(start, end) {

        var DCE = new Array();

          DCE[0] = "OBRRTR";
          DCE[1] = "RDB";
          DCE[2] = "PIPB";
          DCE[3] = "BMB";
          DCE[4] = "STDB";

        //var entityNum = ;
        var branchName = DCE[this.getRandomInt(start, end)];
        return branchName;
      },
      randomCPM: function(start, end) {

        var CPM = new Array();

          CPM[0] = "Carol Ostrye";
          CPM[1] = "Walt Jones";
          CPM[2] = "Patti Gottdiener";
          CPM[3] = "Robin Mason";
          CPM[4] = "Walla Dempsey";

        //var entityNum = ;
        var entityName = CPM[this.getRandomInt(start, end)];
        return entityName;
      },

      generateSiteName: function(start, end) {

        var sites = new Array();

          sites[0] = "Crucell Holland BV";
          sites[1] = "Emory University";
          sites[2] = "Mayo Clinic";
          sites[3] = "N/A";
          sites[4] = "Quintiles, Inc.";

        //var entityNum = ;
        var siteName = sites[this.getRandomInt(start, end)];
        return siteName;
      },

      generateNCTNumber: function() {

        var NCT = 'NCT0';
        var num = new Array();
        var NCTLength = 8;

        for (var i = 0; i < NCTLength; i++) {
          var randomNumber = this.getRandomInt(0,9);
          num.push(randomNumber);
        }
        var numOrganized = num.join('');
        return [NCT, numOrganized].join('');
      },

      generateProtocolNumber: function() {
        var XX = '0' + this.getRandomInt(0,9);
        var XXXX = '00' + this.getRandomInt(0,9) + this.getRandomInt(0,9);
        return [XX, XXXX].join('-');
      },
      generateProtocolArray: function() {

          var arraySize = this.columnLength;
          var protocolList = this.createdProtocolArray;

          for(var i = 0; i <= arraySize; i++) {
            var protocolNumber = this.generateProtocolNumber();
            protocolList.push(protocolNumber);
          }

      },
    },
  }

</script>
<style>
.CQMP-page--container {
  width: 100%;
  overflow: scroll;
}
.CQMP-table--container {
  overflow: scroll;
  height: 600px;
  width: max-content;
  border: 1px solid black;
}
.CQMP-page--container::-webkit-scrollbar {
  color: rgb(36, 36, 36);
  background: #123456;
  background-color: #ccc; /* or add it to the track */
  height: 8px;
  border-radius: 5px;
}
.CQMP-page--container::-webkit-scrollbar-thumb {
  background-color: #008299;
  border-radius: 5px;
}
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
  width: max-content;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
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
  background-color: rgb(24, 24, 24);
  border-right: 1px solid white;
  height: 52px;
  padding: 5px 12px 5px 12px;
  color: white;
  font-weight: bold;
  max-width: fit-content;
  display: flex;
  align-items: center;
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
}
.content--flex p {
  margin-top: 0;
  margin-bottom: 0;
  padding: 3px;
  color: #666666;
  height: 24px;
    overflow: hidden;
}
.content--border {
  border-right: 1px solid #999999;
  border-bottom: 1px solid #999999;
}
.console-col--ProtocolNumber {
  width: 125px;
}
.console-col--LeadSite {
  width: 77px;
}
.console-col--AffiliatedSite {
  width: 103px;
}
.console-col--FundingAgreement {
  width: 139px;
}
.console-col--DMIDBranch {
  width: 103px;
}
.console-col--DMIDCPM {
  width: 202px;
}
.console-col--ResourceLevel {
  width: 111px;
}
.console-col--GroupAffiliation {
  width: 122px;
}
.console-col--DMIDIND {
  width: 83px;
}
.console-col--AcceptDate {
  width: 110px;
}
.console-col--VersionNum {
  width: 119px;
}
.console-col--VersionDate {
  width: 99px;
}
.console-col--CQMPStatus {
  width: 101px;
}
.console-col--EffectiveDate {
  width: 105px;
}
.console-col--VersionNumber {
  width: 119px;
}
.console-col--VersionDT {
  width: 99px;
}
.console-col--ReviewerComments {
  width: 145px;
}
.console-col--CurrentAcceptDate {
  width: 156px;
}
.console-col--DMIDAcceptVersion {
  width: 163px;
}
.console-col--Monitored {
  width: 143px;
  border-right: unset;
}
#Monitored {
  border-right: unset;
}
.buttonRow {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 10px 0px;

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
  margin: 20px auto;
}
</style>
