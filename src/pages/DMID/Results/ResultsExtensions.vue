<template>
  <div class="results--container">
    <div class="currentProtocol">
      <p> {{ createdProtocolArray[currentProtocol] }} </p>
    </div>
    <div
    class="console-body--columnHeaders"
    >

      <div
      v-for="item in columnList"
      v-bind:key="item.id"
      v-bind:id="item.id"
      class="console-col--Header">
        <p v-bind:class="item.id">
        {{ item.name }} </p>
      </div>
    </div>
    <div class="console-body--ColumnContent">
      <!-- Protocol Number -->
      <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        v-on:click="setCurrentProtocol( n )"
        class="console-col--protocolNumber content--border"
        >{{ createdProtocolArray[n] }}</p>
      </div>

      <!-- Extension Type -->
      <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--DCE content--border"
        > {{ generateExtension(0,2) }} </p>
      </div>
      <!-- Requested By -->
      <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--uploadDate  content--border"
        >{{ generatePerson(0,4) }}</p>
      </div>
      <!-- Date Requested -->
      <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--approvalDate content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div>
      <!-- Decision -->
      <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--submissionDate content--border"
        >{{ generateApproval(0,1) }}</p>
      </div>
      <!-- DecisionDate -->
      <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--releaseDate content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div>
      <!-- ApprovedBy -->
      <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--dueDate content--border"
        >{{ generatePerson(0,4) }}</p>
      </div>
      <!-- Communications -->
      <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        class="console-col--postedDate content--border"
        >Communications</p>
      </div>
      <!-- Comments -->
      <div
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n"
        v-bind:class="{ 'activeEmail': activeItem == 'Communications' }"
        @click="activeMenuItem('Communications')"
        class="console-col--connections content--border"
        >Comments</p>
      </div>

    </div>
  </div>
</template>

<script>
  import Modal from "../../../components/modalTemplate.vue";
  export default {
    name: 'Console',
    components: {
      Modal,
    },
    data () {
      return {
        isModalVisible: false,
        subSiteIs: this.$route.name,
        activeItem: 'Console',
        columnLength: 25,
        columnList: [
          {id: 'ProtocolNumber', name: 'Protocol'},
          {id: 'ExtensionType', name: 'Extension Type'},
          {id: 'RequestedBy', name: 'Requested By'},
          {id: 'DateRequested', name: 'Date Requested'},
          {id: 'Decision', name: 'Decision'},
          {id: 'DecisionDate', name: 'Decision Date'},
          {id: 'ApprovedBy', name: 'Approved By'},
          {id: 'Communications', name: 'Communications'},
          {id: 'Comments', name: 'Comments'},
        ],
        protocols: [],
        currentProtocol: -1,

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
      thisSite: function() {
        return this.subSiteIs
      },
      activeComponent: function() {
        return this.activeItem
      },
      stateComponent: {
        get: function() {
          return this.$root.store.state.activeComponent
        },
        set: function(value) {
          this.$root.store.commit('isActiveComponent', value )
        }
      },
      stateType: {
        get: function() {
          return this.$root.store.state.siteType
        },
        set: function(value) {
          this.$root.store.commit('setSiteType', value )
        }
      },
    },
///////
    mounted: function () {
      this.generateProtocolArray();
      this.setCurrentProtocol();
    },
///////
    methods: {
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

      generateExtension: function(start, end) {

        var DCE = new Array();

          DCE[0] = "New Use";
          DCE[1] = "Initial Approval";
          DCE[2] = "Good Cause";

        //var entityNum = ;
        var entityName = DCE[this.getRandomInt(start, end)];
        return entityName;
      },
      generateApproval: function(start, end) {

        var Appr = new Array();

          Appr[0] = "Approved";
          Appr[1] = "Denied";

        //var entityNum = ;
        var entityName = Appr[this.getRandomInt(start, end)];
        return entityName;
      },
      generatePerson: function(start, end) {

        var Person = new Array();

          Person[0] = "Kendrick Drews";
          Person[1] = "Dorie Olson";
          Person[2] = "Perry Gonella";
          Person[3] = "Mounika Pylla";
          Person[4] = "Rita Ranjit";

        //var entityNum = ;
        var entityName = Person[this.getRandomInt(start, end)];
        return entityName;
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
      clickedProtocolValue (value) {
      return  this.currentProtocol = value
      },
      setCurrentProtocol: function(value){
      this.clickedProtocolValue(value);
      },
      setStateSubSite: function (thisSite) {
        const DMIDSite = this.thisSite
        return this.stateSubSite(this.thisSite)
      },
      stateSubSite (value) {
        return  this.subSite = value
      },
      stateActiveComponent (value) {
      return  this.stateComponent = value
      },
      scrollReset (value) {
        var element = document.querySelector('#scrollContainer');
        return element.scrollTop = value;
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
      return  this.stateType = value
      },
      setActiveItem: function(value){
      return this.activeItem = value
      },
      activeMenuItem (itemName) {
        this.stateActiveComponent(itemName);
        this.setActiveItem(itemName);
      },

    },
  }

</script>
<style scoped>
.results--container {
  position: relative;
  padding-bottom: 20px;
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
  height: 52px;
  padding: 5px;
  color: white;
  font-family: Verdana;
  font-size: 8.5pt;
  font-weight: bold;
  max-width: unset;
  width: 100%;
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
#Communications {
  border-right: 1px solid #999999;
}
#ProtocolNumber {
  width: 100%;
}
.console-col--protocolNumber{
  width: 109.05px;
  text-decoration: underline;
  text-align: left;
}
.console-col--status {
  width: 47.16px;
}
.NCTNumber {
  width: 99px
}
.console-col--NCTNumber {
  width: 89.17px;
  text-decoration: underline;
}
.console-col--DCE {
  width: 108.17px;
}
.console-col--uploadDate {
  width: 109.05px;
}
.console-col--approvalDate {
  width: 108.17px;
}
.console-col--submissionDate {
  width: 109.05px;
}
.console-col--releaseDate {
  width: 107.05px;
}
.console-col--dueDate {
  width: 109.02px;
}
.console-col--postedDate {
  width: 109.05px;
  text-decoration: underline;
}
.console-col--connections {
  width: 110px;
  text-decoration: underline;
  border-right: unset;
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
</style>

