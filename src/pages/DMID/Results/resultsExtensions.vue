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
      <!-- edit -->
      <div                  
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n" 
        class="console-col--edit content--border"
        >Edit</p>
      </div>
      <!-- Protocol Number -->
      <div                  
      class="content--flex ">
       <!-- why no referencing computed property here? -->
        <p
        v-for="n in columnLength"
        v-bind:key="n"       
        v-on:click="setCurrentProtocol( n )"
        class="console-col--protocolNumber content--border"
        >{{ createdProtocolArray[n] }}</p>
      </div>
      <!-- Status -->
      <div                  
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n" 
        class="console-col--status content--border"
        >Posted</p>
      </div>
      <!-- NCT Number -->
      <div                  
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n" 
        class="console-col--NCTNumber content--border"
        >{{ generateNCTNumber() }}</p>
      </div>
      <!-- Data Collection Entity -->
      <div                  
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n" 
        class="console-col--DCE content--border"
        > {{ generateDataCollectionEntity(0,4) }} </p>
      </div>
      <!-- DCE XML Upload Date -->
      <div                  
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n" 
        class="console-col--uploadDate  content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div>
      <!-- DCE Approval Date -->      
      <div                  
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n" 
        class="console-col--approvalDate content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div>
      <!-- NLM Submission Date -->
      <div                  
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n" 
        class="console-col--submissionDate content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div>
      <!-- NLM Release Date -->
      <div                  
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n" 
        class="console-col--releaseDate content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div>
      <!-- NLM Due Date -->
      <div                  
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n" 
        class="console-col--dueDate content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div>
      <!-- NLM Posted Date -->
      <div                  
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n" 
        class="console-col--postedDate content--border"
        >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
      </div>
      <!-- Connections -->
      <div                  
      class="content--flex ">
        <p
        v-for="n in columnLength"
        v-bind:key="n" 
        v-bind:class="{ 'activeEmail': activeItem == 'Communications' }"
        @click="activeMenuItem('Communications')"
        class="console-col--connections content--border"
        >Emails</p>
      </div>
      
    </div>
    <div class="buttonRow">
      <button class="resultsButton" type="button"></button>
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
          {id: 'Edit', name: ''},
          {id: 'ProtocolNumber', name: 'Protocol Number'},
          {id: 'Status', name: 'Status'},
          {id: 'NCTNumber', name: 'NCT Number'},
          {id: 'DataCollectionEntity', name: 'Data Collection Entity'},
          {id: 'DCEXMLUploadDate', name: 'DCE XML Upload Date'},
          {id: 'DCEApprovalDate', name: 'DCE Approval Date'},
          {id: 'NLMSubmissionDate', name: 'NLM Submission Date'},
          {id: 'NLMReleaseDate', name: 'NLM Release Date'},
          {id: 'NLMDueDate', name: 'NLM Due Date'},
          {id: 'NLMPostedDate', name: 'NLM Posted Date'},
          {id: 'Communications', name: 'Communications'},
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

      generateDataCollectionEntity: function(start, end) {
        
        var DCE = new Array();

          DCE[0] = "EMMES";
          DCE[1] = "FHI";
          DCE[2] = "CASG";
          DCE[3] = "CWRU";
          DCE[4] = "CHP";

        //var entityNum = ;
        var entityName = DCE[this.getRandomInt(start, end)];
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
<style>
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
  max-width: 120px;
}
.console-col--Header p {
  margin: 0;
}
#Edit {
  width: 30px;
}
#ProtocolNumber {
width: 63px;
}
#Status {
width: 43px;
}
#NCTNumber {
width: 85px;
}
#DataCollectionEntity { 
width: 65px;
}
#DCEXMLUploadDate {
width: 85px;
}
#DCEApprovalDate{ 
width: 84px;
}
#NLMSubmissionDate {
width: 84px;
}
#NLMReleaseDate {
width: 85px;
}
#NLMDueDate {
width: 85px;
}
#NLMPostedDate {
width :85px;
}
#Communications {
  width: 112px;
  border-right: unset;
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
.console-col--NCTNumber {
  width: 89.17px;
  text-decoration: underline;
}
.console-col--DCE {
  width: 69.17px;
}
.console-col--uploadDate {
  width: 89.05px;
}
.console-col--approvalDate {
  width: 87.17px;
}
.console-col--submissionDate {
  width: 88.05px;
}
.console-col--releaseDate {
  width: 88.05px;
}
.console-col--dueDate {
  width: 88.02px;
}
.console-col--postedDate {
  width: 89.05px;
}
.console-col--connections {
  width: 116px;
  border-right: unset;
  text-decoration: underline;  
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

