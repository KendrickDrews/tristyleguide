<template>
<div class="CQMP">
    <div class="buttonRow" style="display: none;">
      <button > Site Specific </button>
      <button > Protocol Specific </button>
      <button > CRA Reference </button>
      <button > Closed </button>
      <button class="addNewReport"> Add New </button>
    </div>
  <div class="CQMP-page--container" style="display: none;">
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
      <div
      class="console-body--ColumnContent"
      v-for="n in columnLength"
      v-bind:key="n"
      v-bind:class="isValueEven(n)">
         <!-- ProtocolNumber -->
        <div class="content--flex ">
          <p class="console-col--ProtocolNumber content--border">{{ createdProtocolArray[n] }}</p>
        </div>
        <!-- LeadSite -->
        <div class="content--flex ">
          <p class="console-col--LeadSite content--border">{{ generateSiteName(0,4) }}</p>
        </div>
        <!-- AffiliatedSite -->
        <div class="content--flex ">
          <p class="console-col--AffiliatedSite content--border" >{{ generateSiteName(0,4) }}</p>
        </div>
        <!-- FundingAgreement -->
        <div class="content--flex ">
          <p class="console-col--FundingAgreement content--border" >Contract</p>
        </div>
        <!-- DMIDBranch -->
        <div class="content--flex ">
          <p class="console-col--DMIDBranch content--border" >{{ generateBranch(0,4) }}</p>
        </div>
        <!-- DMIDCPM -->
        <div class="content--flex ">
          <p class="console-col--DMIDCPM content--border" > {{ randomCPM(0,4) }} </p>
        </div>
        <!-- ResourceLevel -->
        <div class="content--flex ">
          <p class="console-col--ResourceLevel  content--border" >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
        </div>
        <!-- GroupAffiliation -->
        <div class="content--flex ">
          <p class="console-col--GroupAffiliation content--border" >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
        </div>
        <!-- DMIDIND -->
        <div class="content--flex ">
          <p class="console-col--DMIDIND content--border" >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
        </div>
        <!-- AcceptDate -->
        <div class="content--flex ">
          <p class="console-col--AcceptDate content--border" >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
        </div>
        <!-- VersionNum -->
        <div class="content--flex ">
          <p class="console-col--VersionNum content--border" >{{ getRandomInt(1,3) }}.0</p>
        </div>
        <!-- VersionDate -->
        <div class="content--flex ">
          <p class="console-col--VersionDate content--border" >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
        </div>
        <!-- CQMPStatus -->
        <div class="content--flex">
          <p class="console-col--CQMPStatus content--border" > Waiting </p>
        </div>
        <!-- EffectiveDate -->
        <div class="content--flex ">
          <p class="console-col--EffectiveDate  content--border" >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
        </div>
        <!-- VersionNumber -->
        <div class="content--flex ">
          <p class="console-col--VersionNumber content--border" >{{ getRandomInt(1,3) }}.0</p>
        </div>
        <!-- VersionDT -->
        <div class="content--flex ">
          <p class="console-col--VersionDT content--border" >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
        </div>
        <!-- ReviewerComments -->
        <div class="content--flex ">
          <p class="console-col--ReviewerComments content--border" >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
        </div>
        <!-- CurrentAcceptDate -->
        <div class="content--flex ">
          <p class="console-col--CurrentAcceptDate content--border" >{{ randomDate(new Date(2012, 0, 1), new Date()) }}</p>
        </div>
        <!-- DMIDAcceptVersion -->
        <div class="content--flex ">
          <p class="console-col--DMIDAcceptVersion content--border" >{{ getRandomInt(1,3) }}.0</p>
        </div>
        <!-- Monitored -->
        <div class="content--flex ">
          <p class="console-col--Monitored content--border" >{{ headsOrTails() }}</p>
        </div>
      </div>
    </div>
  </div>
    <div class="CQMP-form--container">
      <h2> New Record </h2>
      <div class="horizontal-line "></div>
      <div class="CQMP-form--row form--btnRow">
        <button class="recordType" @click="selectedForm('site')" :class="[siteHidden ? '' : 'selectedButton']"> Site Specific CQMP </button>
        <button class="recordType" @click="selectedForm('protocol')" :class="[protocolHidden ? '' : 'selectedButton']"> Protocol Specific CQMP </button>
      </div>
      <div class="horizontal-line short"></div>
<!-- Site Specific Form -->
      <div class="CQMP-form--fields siteSpecific" :class="{ 'hidden': siteHidden }">
        <!-- Lead Site - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Lead Site </label>
          <select>
            <option value="volvo">Site 1</option>
            <option value="saab">Site 2</option>
            <option value="mercedes">Site 3</option>
            <option value="audi">Site 4</option>
          </select>
        </div>
        <!-- CQMP Reviewed By - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> CQMP Reviewed By </label>
          <div class="checkbox--row">
            <div class="checkbox--container">
              <input type="checkbox" name="Site 1" value="Site1"/> Site 1
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 3" value="Site1"/> Site 3
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 4" value="Site1"/> Site 4
            </div>
          </div>
        </div>
        <!-- Affiliated Sites - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Affiliated Sites </label>
          <select>
            <option value="volvo">Site 1</option>
            <option value="saab">Site 2</option>
            <option value="mercedes">Site 3</option>
            <option value="audi">Site 4</option>
          </select>
        </div>
        <!-- CQMP Reviewed By - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> CQMP Reviewed By </label>
          <div class="checkbox--row">
            <div class="checkbox--container">
              <input type="checkbox" name="Site 1" value="Site1"/> Site 1
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 3" value="Site1"/> Site 3
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 4" value="Site1"/> Site 4
            </div>
          </div>
        </div>
        <!-- Funding Agreement - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Funding Agreement </label>
          <div class="checkbox--row">
            <div class="checkbox--container">
              <input type="radio" name="gender" value="male" checked>Contract
            </div>
            <div class="checkbox--container">
              <input type="radio" name="gender" value="female">Grant/ cooperative agreement
            </div>
          </div>
        </div>
        <!-- Group Affiliation - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Group Affiliation </label>
          <div class="checkbox--row">
            <div class="checkbox--container">
              <input type="checkbox" name="Site 1" value="Site1"/> CEIRS
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 3" value="Site1"/> Phase 1
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 4" value="Site1"/> RPRC
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 1" value="Site1"/> TB-CDRC
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 3" value="Site1"/> TBRU
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 4" value="Site1"/> VTEU
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 4" value="Site1"/> N/A
            </div>
          </div>
        </div>
        <!-- Date of Initial Acceptance - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Date of Initial Acceptance </label>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
        </div>
        <!-- Version Number - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Version Number <span class="error">*</span></label>
          <input type="text"/>
        </div>
        <!-- Version Date - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Version Date </label>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
        </div>
        <!-- CQMP Status - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> CQMP Status </label>
          <div class="checkbox--row">
            <div class="checkbox--container">
              <input type="checkbox" name="Site 1" value="Site1"/> Accepted Initial
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 3" value="Site1"/> Accepted Revised
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 4" value="Site1"/> In Progress
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 4" value="Site1"/> Canceled
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 4" value="Site1"/> None
            </div>
          </div>
        </div>
        <!-- Effective Date - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Effective Date </label>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
        </div>
        <!-- Version Number - Site Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Version Number <span class="error">*</span> </label>
          <input type="text"/>
        </div>
        <!-- Version Date - Site Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Version Date </label>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
        </div>
        <!-- Reviewer Comments - Site Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Reviewer Comments </label>
          <textarea  rows="5" cols="51" type="text"/>
        </div>
      </div>
<!-- Protocol Specific Form Elements -->
      <div class="CQMP-form--fields protocolSpecific" :class="{ 'hidden': protocolHidden }">
        <!-- Protocol Number - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Protocol Number </label>
          <select>
            <option v-for="(item, index) in protocols" v-bind:key="index" v-bind:value="item"> {{ item }} </option>
          </select>
        </div>
        <!-- Lead Site - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Lead Site </label>
          <div class="select-list">
            <div class="select-title" @click="dropDownHidden = !dropDownHidden"> Select Protocol(s) </div>
            <div class="select-options" :class="{ 'hidden': dropDownHidden }">
              <div class="option">
                <input type="checkbox" name="protocols" id="option1" value=""/>
                <label for="option1"> {{ generateSiteName(0,4) }} </label>
              </div>
              <div class="option">
                <input type="checkbox" name="protocols" id="option2" value=""/>
                <label for="option2"> {{ generateSiteName(0,4) }} </label>
              </div>
              <div class="option">
                <input type="checkbox" name="protocols" id="option3" value=""/>
                <label for="option3"> {{ generateSiteName(0,4) }} </label>
              </div>
              <div class="option">
                <input type="checkbox" name="protocols" id="option4" value=""/>
                <label for="option4"> {{ generateSiteName(0,4) }} </label>
              </div>
              <div class="option">
                <input type="checkbox" name="protocols" id="option5" value=""/>
                <label for="option5"> {{ generateSiteName(0,4) }} </label>
              </div>
              <div class="option">
                <input type="checkbox" name="protocols" id="option6" value=""/>
                <label for="option6"> {{ generateSiteName(0,4) }} </label>
              </div>
              <div class="option">
                <input type="checkbox" name="protocols" id="option7" value=""/>
                <label for="option7"> {{ generateSiteName(0,4) }} </label>
              </div>
              <div class="option">
                <input type="checkbox" name="protocols" id="option8" value=""/>
                <label for="option8"> {{ generateSiteName(0,4) }} </label>
              </div>
              <div class="option">
                <input type="checkbox" name="protocols" id="option9" value=""/>
                <label for="option9"> {{ generateSiteName(0,4) }} </label>
              </div>
              <div class="option">
                <input type="checkbox" name="protocols" id="option0" value=""/>
                <label for="option0"> {{ generateSiteName(0,4) }} </label>
              </div>
            </div>
          </div>
        </div>
        <!-- CQMP reviewed by - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> CQMP Reviewed by </label>
           <div class="checkbox--row">
            <div class="checkbox--container" v-for="(item, index) in todos" :key="index">
              <input type="checkbox" :name="item.title | concatenate" :id="item.title | concatenate" value="Site1"/>
              <label :for="item.title | concatenate" >{{ item.title }} </label>
            </div>
          </div>
        </div>
        <!-- Affiliated Sites - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Affiliated Site </label>
          <select>
            <option value="volvo">Site 1</option>
            <option value="saab">Site 2</option>
            <option value="mercedes">Site 3</option>
            <option value="audi">Site 4</option>
          </select>
        </div>
        <!-- CQMP reviewed by - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> CQMP Reviewed by </label>
          <div class="checkbox--row">
            <div class="checkbox--container" v-for="(item, index) in todos" :key="index">
              <input type="checkbox" :name="item.title | concatenate" :id="item.title | concatenate" value="Site2"/>
              <label :for="item.title | concatenate" >{{ item.title }} </label>
            </div>
          </div>
        </div>
        <!-- Funding Agreement - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Funding Agreement </label>
          <input type="text" disabled=""/>
        </div>
        <!-- DMID Branch - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> DMID Branch </label>
          <input type="text" v-bind:value="generateBranch(0,4)" disabled=""/>
        </div>
        <!-- DMID Clinical Project Manager - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> DMID Clinical Project Manager </label>
          <input type="text" v-bind:value="randomCPM(0,4)" disabled=""/>
        </div>
        <!-- Resource Level - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Resource Level </label>
          <input type="text" disabled=""/>
        </div>
        <!-- Group Affiliation - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Group Affiliation </label>
          <input type="text" disabled=""/>
        </div>
        <!-- DMID IND Yes/No - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> DMID IND Yes/No </label>
          <input type="text" value="" disabled=""/>
        </div>
        <!-- Date of Initial Acceptance - Protocol Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Initial Acceptance Date </label>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
        </div>
        <!-- Version Number - Protocol Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Version Number <span class="error">*</span> </label>
          <input type="text"/>
        </div>
        <!-- Version Date - Protocol Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Version Date </label>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
        </div>
        <!-- CQMP Status - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> CQMP Status </label>
          <div class="checkbox--row">
            <div class="checkbox--container">
              <input type="radio" name="CQMPStatus" value="Site1"/> Accepted Initial
            </div>
            <div class="checkbox--container">
              <input type="radio" name="CQMPStatus" value="Site1"/> Accepted Revised
            </div>
            <div class="checkbox--container">
              <input type="radio" name="CQMPStatus" value="Site1"/> In Progress
            </div>
            <div class="checkbox--container">
              <input type="radio" name="CQMPStatus" value="Site1"/> Canceled
            </div>
            <div class="checkbox--container">
              <input type="radio" name="CQMPStatus" value="Site1"/> None
            </div>
          </div>
        </div>
        <!-- Effective Date - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Effective Date </label>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
        </div>
        <!-- Version Number - Protocol Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Version Number <span class="error">*</span> </label>
          <input type="text"/>
        </div>
        <!-- Version Date - Protocol Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Version Date </label>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
        </div>
        <!-- Reviewer Comments - Protocol Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Reviewer Comments </label>
          <textarea  rows="5" cols="51" type="text"/>
        </div>
      </div>
      <div class="horizontal-line short"></div>
      <button class="submitBTN"> Submit </button>
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
        columnLength: 35,
        columnList: [
          {id: 'ProtocolNumber', name: 'Protocol Number'},
          {id: 'LeadSite', name: 'Lead Site'},
          {id: 'AffiliatedSite', name: 'Affiliated Site'},
          {id: 'FundingAgreement', name: 'Funding Agreement'},
          {id: 'DMIDBranch', name: 'DMID Branch'},
          {id: 'DMIDCPM', name: 'DMID Clinical Project Manager'},
          {id: 'ResourceLevel', name: 'Resource Level'},
          {id: 'GroupAffiliation', name: 'Group Affiliation'},
          {id: 'DMIDIND', name: 'DMID IND'},
          {id: 'AcceptDate', name: 'Accepted Date'},
          {id: 'VersionNum', name: 'Version Number'},
          {id: 'VersionDate', name: 'Version Date'},
          {id: 'CQMPStatus', name: 'CQMP Status'},
          {id: 'EffectiveDate', name: 'Effective Date'},
          {id: 'VersionNumber', name: 'Version Number'},
          {id: 'VersionDT', name: 'Version Date'},
          {id: 'ReviewerComments', name: 'Reviewer Comments'},
          {id: 'CurrentAcceptDate', name: 'Current Accepted Date'},
          {id: 'DMIDAcceptVersion', name: 'DMID Accepted Version'},
          {id: 'Monitored', name: 'Monitored by ICON?'},
        ],
        protocols: [],
        newTodoText: '',
        todos: [
          {
            id: 1,
            title: 'Site 1',
          },
          {
            id: 2,
            title: 'Site 2',
          },
          {
            id: 3,
            title: 'Site 3'
          }
        ],
        nextTodoId: 4,
        currentProtocol: -1,
        planView: "All",
        protocolHidden: true,
        siteHidden: true,
        dropDownHidden: true,
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
      this.isValueEven();
    },
///////
    methods: {
      addNewTodo: function () {
        this.todos.push({
            id: this.nextTodoId++,
            title: this.newTodoText
        })
        this.newTodoText = ''
      },
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
      selectedForm: function (value) {
        if (value == 'site') {
          this.siteHidden = false;
          this.protocolHidden = true;
        }
        else if (value == 'protocol') {
          this.protocolHidden = false;
          this.siteHidden = true;
        }
        else {
        return console.log(value);
        }
      },
      hideDropDown: function() {
        return this.dropDownHidden = !this.dropDownHidden;
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
      isValueEven: function (value) {
        var myNumber = value;
        if (myNumber % 2 === 0) {
          return 'striped-row'
        }
        else {
          return 'odd-row'
        }
      }
    },
    filters: {
      concatenate: function (value) {
        if (!value) return 'noValue'
        var toSplit = value;
        var splitString = toSplit.split(' ');
        return splitString.join('');
      }
    },
  }

</script>
<style>
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
.hidden {
  display: none;
}
.CQMP-page--container {
  width: 100%;
  overflow: scroll;
  border: 1px solid black;
}
.CQMP-table--container {
  overflow: scroll;
  height: 600px;
  width: max-content;
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
  background-color: #ccc;
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
  width: 128px;
}
.console-col--LeadSite {
  width: 81px;
}
.console-col--AffiliatedSite {
  width: 106px;
}
.console-col--FundingAgreement {
  width: 143px;
}
.console-col--DMIDBranch {
  width: 105px;
}
.console-col--DMIDCPM {
  width: 206px;
}
.console-col--ResourceLevel {
  width: 114px;
}
.console-col--GroupAffiliation {
  width: 125px;
}
.console-col--DMIDIND {
  width: 86px;
}
.console-col--AcceptDate {
  width: 113px;
}
.console-col--VersionNum {
  width: 123px;
}
.console-col--VersionDate {
  width: 102px;
}
.console-col--CQMPStatus {
  width: 103px;
}
.console-col--EffectiveDate {
  width: 109px;
}
.console-col--VersionNumber {
  width: 122px;
}
.console-col--VersionDT {
  width: 102px;
}
.console-col--ReviewerComments {
  width: 148px;
}
.console-col--CurrentAcceptDate {
  width: 160px;
}
.console-col--DMIDAcceptVersion {
  width: 165px;
}
.console-col--Monitored {
  width: 149px;
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
.CQMP-form--container {
  width: 100%;
  margin-top: 25px;
}
.CQMP-form--fields {
  width: 90%;
  margin: 0 auto;
  padding: 10px 25px;
  background-color: rgba(245,245,245, 0.5);
  border-radius: 5px;
  border: 1px solid #ddd;
}
.CQMP-form--row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 15px 0;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.form--btnRow {
  width: 90%;
  margin: 15px auto;
  justify-content: space-evenly;
}
.form--btnRow button {
  height: 35px;
  width: 200px;

}
.CQMP-form--row label {
  font-weight: bold;
  font-size: 0.875rem;
}
.CQMP-form--row input, .CQMP-form--row select {
  border-radius: 4px;
  height: 30px;
  padding: 7px;
  width: 375px;
  border: 1px solid #666;
}
.checkbox--row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 375px;
}
.checkbox--container {
  border: 1px solid blue;
  border-radius: 5px;
  padding: 0px 7px;
  height: 30px;
  margin: 5px 0px;
}
.checkbox--container input {
  height: 15px;
  width: 45px;
  margin-top: 7px;}

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
  margin-top: 5px;
  position: absolute;
  z-index: 500;
  border: 1px solid #eaeaec;
  background: #fff;
  max-height: 200px;
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
  padding: 10px 30px 10px 10px;
}
.select-list .select-options .option:hover {
  background: #eaeaec;
}
.select-list .select-options .option input {
  margin: 10px 0 12px 15px;
}
</style>
