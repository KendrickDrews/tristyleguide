<template>
<div class="CQMP">
    <div class="buttonRow">
      <button @click="setView('siteView')" :class="{'activeButton' : siteView}"> Site Specific </button>
      <button @click="setView('protocolView')" :class="{'activeButton' : protocolView}"> Protocol Specific </button>
      <button @click="setView('craView')" :class="{'activeButton' : craView }"> CRA Reference </button>
      <button @click="setView('closedView')" :class="{'activeButton' : closedView}"> Closed </button>
      <button class="addNewReport"> Add New </button>
    </div>
  <div class="CQMP-page--container">
    <div class="cqmp-table--siteView" v-show="siteView">
      <div class="console-body--columnHeaders">
        <div
        v-for="item in columnSiteView"
        v-bind:key="item.id + 'Site'"
        v-bind:id="item.id + 'Site'"
        class="console-col--Header">
          <p v-bind:class="item.id">{{ item.name }}</p>
          <template v-if="item.subtext != ''"  >
            <span>{{ item.subtext }}</span>
          </template>
        </div>
      </div>
      <div class="CQMP-table--container">
        <div class="CQMP-table--row"
         v-for="(item, index) in siteBasedRecords"
        :key="index"
        @click="activeRow = index"
        v-bind:class="[isValueEven(index), {'SelectedRow' : activeRow == index}]">
          <!-- LeadSite -->
          <div class="content--flex content--border console-col--LeadSite ">
            <p>
              <template v-for="record in item.affiliatedSites">
                <template v-if="record.siteLead">
                  <span :key="record.id" :class="{'bold': record.reviewed}">{{ record.siteName }}</span>
                </template>
              </template>
            </p>
          </div>
          <!-- AffiliatedSite -->
          <div class="content--flex content--border console-col--AffiliatedSite">
            <p>
              <template v-for="record in item.affiliatedSites">
                <template v-if="!record.siteLead">
                  <span :key="record.id" :class="{'bold': record.reviewed}">{{ record.siteName }}<template v-if="(record.id + 1) !== item.affiliatedSites.length">, </template><br></span>
                </template>
              </template>
            </p>
          </div>
          <!-- FundingAgreement -->
          <div class="content--flex content--border console-col--FundingAgreement">
            <p>{{ item.fundingAgreement }}</p>
          </div>
          <!-- GroupAffiliation -->
          <div class="content--flex content--border console-col--GroupAffiliation">
            <p>{{ item.groupAffiliation }}</p>
          </div>
          <!-- Legacy Data -->
          <!-- AcceptDate -->
          <div class="content--flex legacy-data content--border console-col--AcceptDate" :class="{'legacy-data' : item.legacyData.legacy}">
            <p>{{ item.legacyData.dateAccept }}</p>
          </div>
          <!-- VersionNum -->
          <div class="content--flex content--border console-col--VersionNum" :class="{'legacy-data' : item.legacyData.legacy}" >
            <p>{{ item.legacyData.vNumber }}</p>
          </div>
          <!-- VersionDate -->
          <div class="content--flex content--border console-col--VersionDate" :class="{'legacy-data' : item.legacyData.legacy}">
            <p>{{ item.legacyData.vDate }}</p>
          </div>
          <!-- Current CQMP -->
          <!-- CQMPStatus -->
          <div class="content--flex current-data content--border console-col--CQMPStatus" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.cqmpStatus }}</p>
          </div>
          <!-- EffectiveDate -->
          <div class="content--flex current-data  content--border console-col--EffectiveDate" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.effDate }}</p>
          </div>
          <!-- VersionNumber -->
          <div class="content--flex current-data content--border console-col--VersionNumber" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.cvNumber }}</p>
          </div>
          <!-- VersionDate -->
          <div class="content--flex current-data content--border console-col--VersionDT" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.cvDate }}</p>
          </div>
          <!-- ReviewerComments -->
          <div class="content--flex current-data content--border console-col--ReviewerComments" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.Comments }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="cqmp-table--protocolView" v-show="protocolView">
      <div class="console-body--columnHeaders">
        <div
        v-for="item in openProtocols"
        v-bind:key="item.id + 'Prot'"
        v-bind:id="item.id + 'Prot'"
        class="console-col--Header">
          <p v-bind:class="item.id">{{ item.name }}</p>
          <template v-if="item.subtext != ''"  >
            <span>{{ item.subtext }}</span>
          </template>
        </div>
      </div>
      <div class="CQMP-table--container">
        <div class="CQMP-table--row"
         v-for="(item, index) in protocolBasedRecords"
        :key="index"
        @click="activeRow = index"
        v-bind:class="[isValueEven(index), {'SelectedRow' : activeRow == index}]">
           <!-- ProtocolNumber -->
          <div class="content--flex content--border console-col--ProtocolNumber">
            <p>{{ item.protocolNum }}</p>
          </div>
          <!-- LeadSite -->
          <div class="content--flex content--border console-col--LeadSite ">
            <p>
              <template v-for="record in item.affiliatedSites">
                <template v-if="record.siteLead">
                  <span :key="record.id" :class="{'bold': record.reviewed}">{{ record.siteName }}</span>
                </template>
              </template>
            </p>
          </div>
          <!-- AffiliatedSite -->
          <div class="content--flex content--border console-col--AffiliatedSite">
            <p>
              <template v-for="record in item.affiliatedSites">
                <template v-if="!record.siteLead">
                  <span :key="record.id" :class="{'bold': record.reviewed}">{{ record.siteName }}<template v-if="(record.id + 1) !== item.affiliatedSites.length">, </template><br></span>
                </template>
              </template>
            </p>
          </div>
          <!-- FundingAgreement -->
          <div class="content--flex content--border console-col--FundingAgreement">
            <p>{{ item.fundingAgreement }}</p>
          </div>
          <!-- DMIDBranch -->
          <div class="content--flex content--border console-col--DMIDBranch">
            <p>{{ item.branch }}</p>
          </div>
          <!-- DMIDCPM -->
          <div class="content--flex content--border console-col--DMIDCPM">
            <p>{{ item.cpm }} </p>
          </div>
          <!-- ResourceLevel -->
          <div class="content--flex content--border console-col--ResourceLevel">
            <p>{{ item.resourceLevel }}</p>
          </div>
          <!-- GroupAffiliation -->
          <div class="content--flex content--border console-col--GroupAffiliation">
            <p>{{ item.groupAffiliation }}</p>
          </div>
          <!-- DMIDIND -->
          <div class="content--flex content--border console-col--DMIDIND">
            <p>{{ item.dmidIND }}</p>
          </div>
          <!-- Legacy Data -->
          <!-- AcceptDate -->
          <div class="content--flex legacy-data content--border console-col--AcceptDate" :class="{'legacy-data' : item.legacyData.legacy}">
            <p>{{ item.legacyData.dateAccept }}</p>
          </div>
          <!-- VersionNum -->
          <div class="content--flex content--border console-col--VersionNum" :class="{'legacy-data' : item.legacyData.legacy}" >
            <p>{{ item.legacyData.vNumber }}</p>
          </div>
          <!-- VersionDate -->
          <div class="content--flex content--border console-col--VersionDate" :class="{'legacy-data' : item.legacyData.legacy}">
            <p>{{ item.legacyData.vDate }}</p>
          </div>
          <!-- Current CQMP -->
          <!-- CQMPStatus -->
          <div class="content--flex current-data content--border console-col--CQMPStatus" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.cqmpStatus }}</p>
          </div>
          <!-- EffectiveDate -->
          <div class="content--flex current-data  content--border console-col--EffectiveDate" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.effDate }}</p>
          </div>
          <!-- VersionNumber -->
          <div class="content--flex current-data content--border console-col--VersionNumber" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.cvNumber }}</p>
          </div>
          <!-- VersionDate -->
          <div class="content--flex current-data content--border console-col--VersionDT" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.cvDate }}</p>
          </div>
          <!-- ReviewerComments -->
          <div class="content--flex current-data content--border console-col--ReviewerComments" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.Comments }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="cqmp-table--craView" v-show="craView">
      <div class="console-body--columnHeaders border-bottom">
        <div
        v-for="item in columnListCRA"
        v-bind:key="item.id + 'CRA'"
        v-bind:id="item.id + 'CRA'"
        class="console-col--Header">
          <p v-bind:class="item.id">{{ item.name }}</p>
          <template v-if="item.subtext != ''"  >
            <span>{{ item.subtext }}</span>
          </template>
        </div>
      </div>
      <div class="CQMP-table--container">
        <div class="CQMP-table--subheader">
          <h3> Protocol-Specific CQMPs </h3>
        </div>
        <div class="CQMP-table--row"
         v-for="(item, index) in protocolBasedCRA"
        :key="index"
        @click="activeRow = item"
        v-bind:class="[isValueEven(index), {'SelectedRow' : activeRow == item}]">
          <!-- ProtocolNumber -->
          <div class="content--flex content--border console-col--ProtocolNumber">
            <p>{{ item.protocolNum }}</p>
          </div>
          <!-- LeadSite -->
          <div class="content--flex content--border console-col--LeadSite ">
            <p>
              <template v-for="record in item.affiliatedSites">
                <template v-if="record.siteLead">
                  <span :key="record.id" :class="{'bold': record.reviewed}">{{ record.siteName }}</span>
                </template>
              </template>
            </p>
          </div>
          <!-- AffiliatedSite -->
          <div class="content--flex content--border console-col--AffiliatedSite">
            <p>
              <template v-for="record in item.affiliatedSites">
                <template v-if="!record.siteLead">
                  <span :key="record.id" :class="{'bold': record.reviewed}">{{ record.siteName }}<template v-if="(record.id + 1) !== item.affiliatedSites.length">, </template><br></span>
                </template>
              </template>
            </p>
          </div>
          <!-- CRA Reference -->
          <!-- CurrentAcceptDate -->
          <div class="content--flex console-col--CurrentAcceptDate content--border">
            <p>{{ item.currentData.cvDate }}</p>
          </div>
          <!-- DMIDAcceptVersion -->
           <div class="content--flex console-col--DMIDAcceptVersion content--border">
            <p>{{ item.currentData.cvNumber }}</p>
          </div>
          <!-- ReviewerComments -->
          <div class="content--flex content--border console-col--ReviewerComments">
            <p>{{ item.currentData.Comments }}</p>
          </div>
          <!-- Monitored -->
          <!-- <div class="content--flex ">
            <p class="console-col--Monitored content--border" >{{ headsOrTails("Yes","No") }}</p>
          </div> -->
        </div>
        <div class="CQMP-table--subheader subheader-two">
          <h3> Site-Specific CQMPs </h3>
          </div>
        <div class="CQMP-table--row"
         v-for="(item, index) in siteBasedCRA"
        :key="'00' + index"
        @click="activeRow = item"
        v-bind:class="[isValueEven(index), {'SelectedRow' : activeRow == item}]">
           <!-- ProtocolNumber -->
          <div class="content--flex content--border console-col--ProtocolNumber">
            <p>N/A</p>
          </div>
          <!-- LeadSite -->
          <div class="content--flex content--border console-col--LeadSite ">
            <p>
              <template v-for="record in item.affiliatedSites">
                <template v-if="record.siteLead">
                  <span :key="record.id" :class="{'bold': record.reviewed}">{{ record.siteName }}</span>
                </template>
              </template>
            </p>
          </div>
          <!-- AffiliatedSite -->
          <div class="content--flex content--border console-col--AffiliatedSite">
            <p>
              <template v-for="record in item.affiliatedSites">
                <template v-if="!record.siteLead">
                  <span :key="record.id" :class="{'bold': record.reviewed}">{{ record.siteName }}<template v-if="(record.id + 1) !== item.affiliatedSites.length">, </template><br></span>
                </template>
              </template>
            </p>
          </div>
          <!-- CRA Reference -->
          <!-- CurrentAcceptDate -->
          <div class="content--flex console-col--CurrentAcceptDate content--border">
            <p>{{ item.currentData.cvDate }}</p>
          </div>
          <!-- DMIDAcceptVersion -->
           <div class="content--flex console-col--DMIDAcceptVersion content--border">
            <p>{{ item.currentData.cvNumber }}</p>
          </div>
          <!-- ReviewerComments -->
          <div class="content--flex content--border console-col--ReviewerComments">
            <p>{{ item.currentData.Comments }}</p>
          </div>
          <!-- Monitored -->
          <!-- <div class="content--flex ">
            <p class="console-col--Monitored content--border" >{{ headsOrTails("Yes","No") }}</p>
          </div> -->
        </div>
      </div>
    </div>
    <div class="cqmp-table--closedView" v-show="closedView">
      <div class="console-body--columnHeaders  border-bottom">
        <div
        v-for="item in openProtocols"
        v-bind:key="item.id + 'Closed'"
        v-bind:id="item.id + 'Closed'"
        class="console-col--Header">
          <p v-bind:class="item.id">{{ item.name }}</p>
          <template v-if="item.subtext != ''"  >
            <span>{{ item.subtext }}</span>
          </template>
        </div>
      </div>
      <div class="CQMP-table--container">
        <div class="CQMP-table--subheader">
          <h3> Protocol-Specific CQMPs </h3>
        </div>
        <div class="CQMP-table--row"
         v-for="(item, index) in protocolBasedClosed"
        :key="'000' + index"
        @click="activeRow = item"
        v-bind:class="[isValueEven(index), {'SelectedRow' : activeRow == item}]">
           <!-- ProtocolNumber -->
          <div class="content--flex content--border console-col--ProtocolNumber">
            <p>{{ item.protocolNum }}</p>
          </div>
          <!-- LeadSite -->
          <div class="content--flex content--border console-col--LeadSite ">
            <p>
              <template v-for="record in item.affiliatedSites">
                <template v-if="record.siteLead">
                  <span :key="record.id" :class="{'bold': record.reviewed}">{{ record.siteName }}</span>
                </template>
              </template>
            </p>
          </div>
          <!-- AffiliatedSite -->
          <div class="content--flex content--border console-col--AffiliatedSite">
            <p>
              <template v-for="record in item.affiliatedSites">
                <template v-if="!record.siteLead">
                  <span :key="record.id" :class="{'bold': record.reviewed}">{{ record.siteName }}<template v-if="(record.id + 1) !== item.affiliatedSites.length">, </template><br></span>
                </template>
              </template>
            </p>
          </div>
          <!-- FundingAgreement -->
          <div class="content--flex content--border console-col--FundingAgreement">
            <p>{{ item.fundingAgreement }}</p>
          </div>
          <!-- DMIDBranch -->
          <div class="content--flex content--border console-col--DMIDBranch">
            <p>{{ item.branch }}</p>
          </div>
          <!-- DMIDCPM -->
          <div class="content--flex content--border console-col--DMIDCPM">
            <p>{{ item.cpm }} </p>
          </div>
          <!-- ResourceLevel -->
          <div class="content--flex content--border console-col--ResourceLevel">
            <p>{{ item.resourceLevel }}</p>
          </div>
          <!-- GroupAffiliation -->
          <div class="content--flex content--border console-col--GroupAffiliation">
            <p>{{ item.groupAffiliation }}</p>
          </div>
          <!-- DMIDIND -->
          <div class="content--flex content--border console-col--DMIDIND">
            <p>{{ item.dmidIND }}</p>
          </div>
          <!-- Legacy Data -->
          <!-- AcceptDate -->
          <div class="content--flex legacy-data content--border console-col--AcceptDate" :class="{'legacy-data' : item.legacyData.legacy}">
            <p>{{ item.legacyData.dateAccept }}</p>
          </div>
          <!-- VersionNum -->
          <div class="content--flex content--border console-col--VersionNum" :class="{'legacy-data' : item.legacyData.legacy}" >
            <p>{{ item.legacyData.vNumber }}</p>
          </div>
          <!-- VersionDate -->
          <div class="content--flex content--border console-col--VersionDate" :class="{'legacy-data' : item.legacyData.legacy}">
            <p>{{ item.legacyData.vDate }}</p>
          </div>
          <!-- Current CQMP -->
          <!-- CQMPStatus -->
          <div class="content--flex current-data content--border console-col--CQMPStatus" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.cqmpStatus }}</p>
          </div>
          <!-- EffectiveDate -->
          <div class="content--flex current-data  content--border console-col--EffectiveDate" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.effDate }}</p>
          </div>
          <!-- VersionNumber -->
          <div class="content--flex current-data content--border console-col--VersionNumber" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.cvNumber }}</p>
          </div>
          <!-- VersionDate -->
          <div class="content--flex current-data content--border console-col--VersionDT" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.cvDate }}</p>
          </div>
          <!-- ReviewerComments -->
          <div class="content--flex current-data content--border console-col--ReviewerComments" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.Comments }}</p>
          </div>
        </div>
        <div class="CQMP-table--subheader">
          <h3> Site-Specific CQMPs </h3>
        </div>
        <div class="CQMP-table--row"
         v-for="(item, index) in siteBasedClosed"
        :key="'001' + index"
        @click="activeRow = item"
        v-bind:class="[isValueEven(index), {'SelectedRow' : activeRow == item}]">
           <!-- ProtocolNumber -->
          <div class="content--flex content--border console-col--ProtocolNumber">
            <p>N/A</p>
          </div>
          <!-- LeadSite -->
          <div class="content--flex content--border console-col--LeadSite ">
            <p>
              <template v-for="record in item.affiliatedSites">
                <template v-if="record.siteLead">
                  <span :key="record.id" :class="{'bold': record.reviewed}">{{ record.siteName }}</span>
                </template>
              </template>
            </p>
          </div>
          <!-- AffiliatedSite -->
          <div class="content--flex content--border console-col--AffiliatedSite">
            <p>
              <template v-for="record in item.affiliatedSites">
                <template v-if="!record.siteLead">
                  <span :key="record.id" :class="{'bold': record.reviewed}">{{ record.siteName }}<template v-if="(record.id + 1) !== item.affiliatedSites.length">, </template><br></span>
                </template>
              </template>
            </p>
          </div>
          <!-- FundingAgreement -->
          <div class="content--flex content--border console-col--FundingAgreement">
            <p>{{ item.fundingAgreement }}</p>
          </div>
          <!-- DMIDBranch -->
          <div class="content--flex content--border console-col--DMIDBranch">
            <p>{{ item.branch }}</p>
          </div>
          <!-- DMIDCPM -->
          <div class="content--flex content--border console-col--DMIDCPM">
            <p>{{ item.cpm }} </p>
          </div>
          <!-- ResourceLevel -->
          <div class="content--flex content--border console-col--ResourceLevel">
            <p>{{ item.resourceLevel }}</p>
          </div>
          <!-- GroupAffiliation -->
          <div class="content--flex content--border console-col--GroupAffiliation">
            <p>{{ item.groupAffiliation }}</p>
          </div>
          <!-- DMIDIND -->
          <div class="content--flex content--border console-col--DMIDIND">
            <p>{{ item.dmidIND }}</p>
          </div>
          <!-- Legacy Data -->
          <!-- AcceptDate -->
          <div class="content--flex legacy-data content--border console-col--AcceptDate" :class="{'legacy-data' : item.legacyData.legacy}">
            <p>{{ item.legacyData.dateAccept }}</p>
          </div>
          <!-- VersionNum -->
          <div class="content--flex content--border console-col--VersionNum" :class="{'legacy-data' : item.legacyData.legacy}" >
            <p>{{ item.legacyData.vNumber }}</p>
          </div>
          <!-- VersionDate -->
          <div class="content--flex content--border console-col--VersionDate" :class="{'legacy-data' : item.legacyData.legacy}">
            <p>{{ item.legacyData.vDate }}</p>
          </div>
          <!-- Current CQMP -->
          <!-- CQMPStatus -->
          <div class="content--flex current-data content--border console-col--CQMPStatus" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.cqmpStatus }}</p>
          </div>
          <!-- EffectiveDate -->
          <div class="content--flex current-data  content--border console-col--EffectiveDate" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.effDate }}</p>
          </div>
          <!-- VersionNumber -->
          <div class="content--flex current-data content--border console-col--VersionNumber" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.cvNumber }}</p>
          </div>
          <!-- VersionDate -->
          <div class="content--flex current-data content--border console-col--VersionDT" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.cvDate }}</p>
          </div>
          <!-- ReviewerComments -->
          <div class="content--flex current-data content--border console-col--ReviewerComments" :class="{'current-data' : item.currentData.current}">
            <p>{{ item.currentData.Comments }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

    <div class="CQMP-form--container"  style="display: none;">
      <h2> New Record </h2>
      <div class="horizontal-line "></div>
      <div class="CQMP-form--row form--btnRow">
        <button class="recordType" @click="selectedForm('site')" :class="[siteHidden ? '' : 'selectedButton']"> Site Specific CQMP </button>
        <button class="recordType" @click="selectedForm('protocol')" :class="[protocolHidden ? '' : 'selectedButton']"> Protocol Specific CQMP </button>
      </div>
      <div class="horizontal-line short"></div>
<!-- Site Specific Form -->
      <div class="CQMP-form--fields form--bg siteSpecific hidden" :class="{ 'hidden': siteHidden }">
        <!-- Lead Site - Site Specific -->
        <div class="CQMP-form--row">
          <div class="CQMP-form--col content--flex">
            <label for=""> Lead Site(s) </label>
            <autocomplete :items="siteMasterList" />
          </div>
          <div class="checkbox--row row--column">
            <label for=""> CQMP Reviewed By </label>
              <div class="checkbox--container">
                <input type="checkbox" name="Site 1" id="Site1LeadSite" value="Site1"/>
                <label for="Site1LeadSite"> Site 1 </label>
              </div>
              <div class="checkbox--container">
                <input type="checkbox" name="Site 3" id="Site2LeadSite" value="Site1"/>
                <label for="Site2LeadSite"> Site 2 </label>
              </div>
              <div class="checkbox--container">
                <input type="checkbox" name="Site 4" id="Site3LeadSite" value="Site1"/>
                <label for="Site3LeadSite"> Site 3 </label>
              </div>
            </div>
          </div>
        <div class="form--separator"></div>
        <!-- CQMP Reviewed By - Site Specific -->
        <!-- <div class="CQMP-form--row content--flex ">
          <label for=""> CQMP Reviewed By </label>
          <div class="checkbox--row row--column">
            <div class="checkbox--container">
              <input type="checkbox" name="Site 1" id="Site1LeadSite" value="Site1"/>
              <label for="Site1LeadSite"> Site 1 </label>
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 3" id="Site2LeadSite" value="Site1"/>
              <label for="Site2LeadSite"> Site 2 </label>
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 4" id="Site3LeadSite" value="Site1"/>
              <label for="Site3LeadSite"> Site 3 </label>
            </div>
          </div>
        </div> -->
        <!-- <div class="form--separator"></div> -->
        <!-- Affiliated Sites - Site Specific -->
        <div class="CQMP-form--row">
          <div class="CQMP-form--col content--flex">
            <label for=""> Affiliated Site(s) </label>
            <autocomplete :items="siteMasterList" />
          </div>
          <div class="checkbox--row row--column">
            <label for=""> CQMP Reviewed By </label>
              <div class="checkbox--container">
              <input type="checkbox" name="Site 1" id="Site1AffSite" value="Site1"/>
              <label for="Site1AffSite"> Site 1 </label>
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 3" id="Site2AffSite" value="Site1"/>
              <label for="Site2AffSite"> Site 2 </label>
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 4" id="Site3AffSite" value="Site1"/>
              <label for="Site3AffSite"> Site 3 </label>
            </div>
            </div>
          </div>
        <!-- <div class="CQMP-form--row content--flex">
          <label for=""> Affiliated Sites </label>
          <div class="select-list">
            <div class="select-title" @click="dropDownHidden = !dropDownHidden"> Select Affiliated Site(s) </div>
            <div class="select-options" :class="{ 'hidden': dropDownHidden }">
              <div class="option" v-for="n in 5" :key="n">
                <input type="checkbox" name="protocols" :id="'option' + n" value=""/>
                <label :for="'option' + n"> {{ generateSiteName((n-1),(n-1)) }} </label>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <div class="form--separator"></div> -->
        <!-- CQMP Reviewed By - Site Specific -->
        <!-- <div class="CQMP-form--row  content--flex">
          <label for=""> CQMP Reviewed By </label>
          <div class="checkbox--row row--column">
            <div class="checkbox--container">
              <input type="checkbox" name="Site 1" id="Site1AffSite" value="Site1"/>
              <label for="Site1AffSite"> Site 1 </label>
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 3" id="Site2AffSite" value="Site1"/>
              <label for="Site2AffSite"> Site 2 </label>
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 4" id="Site3AffSite" value="Site1"/>
              <label for="Site3AffSite"> Site 3 </label>
            </div>
          </div>
        </div> -->
      </div>
      <div class="CQMP-form--fields hidden">
        <button class="site-form--searchbox" :class="{ 'hidden': siteHidden }"> Search </button>
      </div>
      <div class="CQMP-page--container siteTable hidden"  :class="{ 'hidden': siteHidden }">
        <div class="console-body--columnHeaders">
          <div v-for="item in columnListSite" v-bind:key="item.id" v-bind:id="item.id" class="console-col--Header">
            <p v-bind:class="item.id"> {{ item.name }} </p>
          </div>
        </div>
        <div class="CQMP-table--container hidden">
          <div class="console-body--ColumnContent" v-for="n in 6" v-bind:key="n" v-bind:class="isValueEven(n)">
            <!-- Edit-->
            <div class="content--flex content--border console-col--Edit">
              <input class="edit" type="checkbox" :name="'editSite' + n" :id="'editSite' + n" :value="'searchedSiteTable'"/>
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
            <!-- GroupAffiliation -->
            <div class="content--flex ">
              <p class="console-col--GroupAffiliation content--border" >{{ randomAffiliation(0,6) }}</p>
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
              <p class="console-col--ReviewerComments content--border" > Lorem Ipsum </p>
            </div>
          </div>
        </div>
      </div>
      <div class="CQMP-form--fields form--bg siteSpecific" :class="{ 'hidden': siteHidden }">
        <!-- Lead Site - Site Specific -->
        <!-- <div class="CQMP-form--row content--flex">
          <label for=""> Lead Site </label>
            <autocomplete :items="siteMasterList" />
        </div> -->
        <!-- CQMP Reviewed By - Site Specific -->
        <!-- <div class="CQMP-form--row content--flex">
          <label for=""> CQMP Reviewed By </label>
          <div class="checkbox--row row--column">
            <div class="checkbox--container">
              <input type="checkbox" name="Site 1" id="Site1LeadSite" value="Site1"/>
              <label for="Site1LeadSite"> Site 1 </label>
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 3" id="Site2LeadSite" value="Site1"/>
              <label for="Site2LeadSite"> Site 2 </label>
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 4" id="Site3LeadSite" value="Site1"/>
              <label for="Site3LeadSite"> Site 3 </label>
            </div>
          </div>
        </div> -->
        <!-- Affiliated Sites - Site Specific -->
        <!-- <div class="CQMP-form--row content--flex">
          <label for=""> Affiliated Sites </label>
          <div class="select-list">
            <div class="select-title" @click="dropDownHidden = !dropDownHidden"> Select Affiliated Site(s) </div>
            <div class="select-options" :class="{ 'hidden': dropDownHidden }">
              <div class="option" v-for="n in 5" :key="n">
                <input type="checkbox" name="protocols" :id="'option' + n" value=""/>
                <label :for="'option' + n"> {{ generateSiteName((n-1),(n-1)) }} </label>
              </div>
            </div>
          </div>
        </div> -->
        <!-- CQMP Reviewed By - Site Specific -->
        <!-- <div class="CQMP-form--row content--flex">
          <label for=""> CQMP Reviewed By </label>
          <div class="checkbox--row row--column">
            <div class="checkbox--container">
              <input type="checkbox" name="Site 1" id="Site1AffSite" value="Site1"/>
              <label for="Site1AffSite"> Site 1 </label>
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 3" id="Site2AffSite" value="Site1"/>
              <label for="Site2AffSite"> Site 2 </label>
            </div>
            <div class="checkbox--container">
              <input type="checkbox" name="Site 4" id="Site3AffSite" value="Site1"/>
              <label for="Site3AffSite"> Site 3 </label>
            </div>
          </div>
        </div> -->
         <!-- Lead Site - Site Specific -->
        <div class="CQMP-form--row">
          <div class="CQMP-form--col content--flex">
            <label for=""> Lead Site(s) </label>
            <autocomplete :items="siteMasterList" />
          </div>
          <div class="checkbox--row row--column">
            <label for=""> CQMP Reviewed By </label>
              <div class="checkbox--container">
                <input type="checkbox" name="Site 1" id="Site1LeadSite" value="Site1"/>
                <label for="Site1LeadSite"> Johns Hopkins University </label>
              </div>
              <div class="checkbox--container">
                <input type="checkbox" name="Site 3" id="Site2LeadSite" value="Site1"/>
                <label for="Site2LeadSite"> Selected Lead Site 2 </label>
              </div>
              <!-- <div class="checkbox--container">
                <input type="checkbox" name="Site 4" id="Site3LeadSite" value="Site1"/>
                <label for="Site3LeadSite"> Selected Lead Site 3 </label>
              </div>  -->
            </div>
          </div>
        <div class="form--separator"></div>
        <div class="CQMP-form--row">
          <div class="CQMP-form--col content--flex">
            <label for=""> Affiliated Site(s) </label>
            <autocomplete :items="siteMasterList" />
          </div>
          <div class="checkbox--row row--column">
            <label for=""> CQMP Reviewed By </label>
               <div class="checkbox--container">
                <input type="checkbox" name="Site 1" id="Site1AffSite" value="Site1"/>
                <label for="Site1AffSite"> Selected Affiliated Site 1 </label>
              </div>
              <div class="checkbox--container">
                <input type="checkbox" name="Site 3" id="Site2AffSite" value="Site1"/>
                <label for="Site2AffSite"> Selected Affiliated Site 2 </label>
              </div>
              <div class="checkbox--container">
                <input type="checkbox" name="Site 4" id="Site3AffSite" value="Site1"/>
                <label for="Site3AffSite"> Selected Affiliated Site 3 </label>
              </div>
            </div>
          </div>
          <div class="form--separator"></div>
        <!-- Funding Agreement - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Funding Agreement </label>
          <div class="checkbox--row">
            <div class="checkbox--container">
              <input type="radio" name="fundAgree" id="contract" value="contract">
              <label for="contract">Contract </label>
            </div>
            <div class="checkbox--container">
              <input type="radio" name="fundAgree" id="grant" value="Grant/ cooperative agreement">
              <label for="grant">Grant/ cooperative agreement</label>
            </div>
          </div>
        </div>
        <div class="form--separator"></div>
        <!-- Group Affiliation - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Group Affiliation </label>
          <div class="checkbox--row row--column">
            <div class="checkbox--container" v-for="item in groupAffiliation" :key="item.id">
              <input type="radio" name="groupAffiliation" :id="item.title | concatenate" :value="item.title | concatenate"/>
              <label :for="item.title | concatenate" >{{ item.title }} </label>
            </div>
          </div>
        </div>
        <div class="form--separator"></div>
        <!-- Date of Initial Acceptance - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Date of Initial Acceptance </label>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
        </div>
        <div class="form--separator"></div>
        <!-- Version Number - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Version Number <span class="error">*</span></label>
          <input type="text"/>
        </div>
        <div class="form--separator"></div>
        <!-- Version Date - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Version Date </label>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
        </div>
        <div class="form--separator"></div>
        <!-- CQMP Status - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> CQMP Status </label>
          <div class="checkbox--row row--column">
            <div class="checkbox--container" v-for="item in CQMPStatus" :key="item.id">
              <input type="radio" name="CQMPStatus" :id="item.title | concatenate | plus('1')" :value="item.title | concatenate | plus('1')"/>
              <label :for="item.title | concatenate | plus('1')">{{ item.title }} </label>
            </div>
          </div>
        </div>
        <div class="form--separator"></div>
        <!-- Effective Date - Site Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Effective Date </label>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
        </div>
        <div class="form--separator"></div>
        <!-- Version Number - Site Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Version Number <span class="error">*</span> </label>
          <input type="text"/>
        </div>
        <div class="form--separator"></div>
        <!-- Version Date - Site Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Version Date </label>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
        </div>
        <div class="form--separator"></div>
        <!-- Reviewer Comments - Site Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Reviewer Comments </label>
          <textarea  rows="5" cols="51" type="text"/>
        </div>
        <div class="form--separator hidden"></div>
        <div class="CQMP-form--row content--flex button-row hidden">
          <button class="form-button cancelRecord hidden" :class="{ 'hidden': siteHidden }"> Cancel </button>
          <button class="form-button updateRecord hidden" :class="{ 'hidden': siteHidden }"> Add/Update Record </button>
        </div>
      </div>
<!-- Protocol Specific Form Elements -->
      <div class="CQMP-form--fields form--bg protocolSpecific" :class="{ 'hidden': protocolHidden }">
        <!-- Protocol Number - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Protocol Number </label>
          <autocomplete :items="protocols" />
        </div>
        <div class="form--separator thin"></div>
        <!-- Lead Site - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Lead Site </label>
          <input type="text" value="MI-4667 - Duke University" disabled=""/> <!-- v-bind:value="generateSiteName(0,3)" -->
        </div>
        <div class="form--separator thin"></div>
        <!-- Funding Agreement - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Funding Agreement </label>
          <input type="text" value="Contract" disabled=""/>
        </div>
        <div class="form--separator thin"></div>
        <!-- DMID Branch - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> DMID Branch </label>
          <input type="text" v-bind:value="generateBranch(0,4)" disabled=""/>
        </div>
        <div class="form--separator thin"></div>
        <!-- DMID Clinical Project Manager - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> DMID Clinical Project Manager </label>
          <input type="text" v-bind:value="randomCPM(0,4)" disabled=""/>
        </div>
        <div class="form--separator thin"></div>
        <!-- Resource Level - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Resource Level </label>
          <input type="text" value="0 - Low" disabled=""/>
        </div>
        <div class="form--separator thin"></div>
        <!-- Group Affiliation - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Group Affiliation </label>
          <input type="text" value="VTEU" disabled=""/>
        </div>
        <div class="form--separator thin"></div>
        <!-- DMID IND Yes/No - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> DMID IND Yes/No </label>
          <input type="text" value="No" disabled=""/>
        </div>
      </div>
      <!-- Returned Active CQMPs -->
      <div class="CQMP-form--fields noPadding" :class="{ 'hidden': protocolHidden }">
        <h3> Active CQMP's for Protocol </h3>
        <div class="horizontal-line "></div>
      </div>
      <!-- Start of 'Returned Table' -->
      <div class="CQMP-page--container protocolTable"  :class="{ 'hidden': protocolHidden }">
        <div class="console-body--columnHeaders">
          <div v-for="item in columnListProtocols" v-bind:key="item.id" v-bind:id="item.id" class="console-col--Header">
            <p v-bind:class="item.id"> {{ item.name }} </p>
          </div>
        </div>
        <div class="CQMP-table--container">
          <div class="console-body--ColumnContent" v-for="n in 6" v-bind:key="n" v-bind:class="isValueEven(n)">
            <!-- Edit-->
            <div class="content--flex content--border console-col--Edit">
              <input class="edit" type="checkbox" :name="'editSite' + n" :id="'editSite' + n" :value="'searchedSiteTable'"/>
            </div>
            <!-- AffiliatedSite -->
            <div class="content--flex ">
              <p class="console-col--AffiliatedSite content--border" >{{ generateSiteName(0,4) }}</p>
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
              <p class="console-col--ReviewerComments content--border" > Lorem Ip... </p>
            </div>
          </div>
        </div>
      </div>
      <div class="CQMP-form--fields form--bg protocolSpecific" :class="{ 'hidden': protocolHidden }">

        <!-- CQMP reviewed by - Protocol Specific -->
        <div class="CQMP-form--row content--flex row--column">
          <label for="">CQMP Reviewed by</label>
          <p class="subText"> Please select all that apply</p>
          <br/>
        </div>
        <!-- CQMP reviewed by - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Lead Site </label>
          <div class="checkbox--row  row--column">
            <div class="checkbox--container">
              <input type="checkbox" name="CQMPPLead" id="YesProtLead" value="Yes" checked>
              <label for="YesProtLead"> MI-4667 - Duke University </label>
            </div>
          </div>
        </div>
        <div class="form--separator"></div>
        <!-- Affiliated Sites - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <div>
            <label for=""> Affiliated Site(s) </label>
          <!-- <div class="select-list">
            <div class="select-title" @click="dropDownHidden = !dropDownHidden"> Select Affiliated Site(s) </div>
            <div class="select-options" :class="{ 'hidden': dropDownHidden }">
              <div class="option" v-for="n in 10" :key="n">
                <input type="checkbox" name="protocols" :id="'option' + n" value=""/>
                <label :for="'option' + n"> {{ generateSiteName(0,4) }} </label>
              </div>
            </div>
          </div> -->
        <!-- </div> -->
        <!-- CQMP reviewed by - Protocol Specific -->
        <!-- <div class="CQMP-form--row content--flex"> -->
          <!-- <div> -->
          </div>
          <div class="checkbox--row row--column">
            <div class="checkbox--container" v-for="(item, index) in siteList" :key="index" :class="item.index">
              <input type="checkbox" :name="item.title | concatenate" :id="item.title | concatenate" :value="item.title | concatenate" v-model="selected[index]" />
              <label :for="item.title | concatenate" >{{ item.num }} - {{ item.title }}</label>
            </div>
          </div>
        </div>
        <div class="form--separator"></div>
        <!-- Date of Initial Acceptance - Protocol Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Initial Acceptance Date </label>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
        </div>
        <div class="form--separator"></div>
        <!-- Version Number - Protocol Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Version Number <span class="error">*</span> </label>
          <input type="text"/>
        </div>
        <div class="form--separator"></div>
        <!-- Version Date - Protocol Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Version Date </label>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
        </div>
        <div class="form--separator"></div>
        <!-- CQMP Status - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> CQMP Status </label>
          <div class="checkbox--row row--column">
            <div class="checkbox--container" v-for="item in CQMPStatus" :key="item.id +'2'">
              <input type="radio" name="CQMPStatus2" :id="item.title | concatenate " :value="item.title | concatenate"/>
              <label :for="item.title | concatenate " >{{ item.title }} </label>
            </div>
          </div>
        </div>
        <div class="form--separator"></div>
        <!-- Effective Date - Protocol Specific -->
        <div class="CQMP-form--row content--flex">
          <label for=""> Effective Date </label>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
        </div>
        <div class="form--separator"></div>
        <!-- Version Number - Protocol Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Version Number <span class="error">*</span> </label>
          <input type="text"/>
        </div>
        <div class="form--separator"></div>
        <!-- Version Date - Protocol Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Version Date </label>
          <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
        </div>
        <div class="form--separator"></div>
        <!-- Reviewer Comments - Protocol Specific-->
        <div class="CQMP-form--row content--flex">
          <label for=""> Reviewer Comments </label>
          <textarea  rows="5" cols="51" type="text"/>
        </div>
        <div class="form--separator"></div>
        <!-- Button Row - Protocol Specific -->
        <div class="CQMP-form--row content--flex button-row">
          <button class="form-button cancelRecord" :class="{ 'hidden': protocolHidden }"> Cancel </button>
          <button class="form-button updateRecord" :class="{ 'hidden': protocolHidden }"> Update Record </button>
        </div>
      </div>
      <div class="horizontal-line short"></div>
      <button class="submitBTN"> Submit </button>
    </div>
  </div>
</template>

<script>
import autocomplete from '../../../components/autoComplete.vue'
import siteMaster from '../CRS/siteMaster.js'
import subsiteMaster from '../CRS/subsiteMaster.js'

export default {
  name: 'ClinicalQualityManagement',
  components: {
    autocomplete,
    siteMaster,
    subsiteMaster
  },
  data () {
    return {
      activeRow: -1,
      activeItem: 'Console',
      siteView: true,
      closedView: false,
      protocolView: false,
      craView: false,
      columnLength: 10,
      openProtocols: [
        { id: 'ProtocolNumber', name: 'Protocol Number', subtext: '' },
        { id: 'LeadSite', name: 'Lead Site', subtext: '(Bold Indicates Plan Reviewed)' },
        { id: 'AffiliatedSite', name: 'Affiliated Site(s)', subtext: '(Bold Indicates Plan Reviewed)' },
        { id: 'FundingAgreement', name: 'Funding Agreement', subtext: '' },
        { id: 'DMIDBranch', name: 'DMID Branch', subtext: '' },
        { id: 'DMIDCPM', name: 'DMID Clinical Project Manager', subtext: '' },
        { id: 'ResourceLevel', name: 'Resource Level', subtext: '' },
        { id: 'GroupAffiliation', name: 'Group Affiliation', subtext: '' },
        { id: 'DMIDIND', name: 'DMID IND', subtext: '' },
        { id: 'AcceptDate', name: 'Accepted Date', subtext: '' },
        { id: 'VersionNum', name: 'Version Number', subtext: '' },
        { id: 'VersionDate', name: 'Version Date', subtext: '' },
        { id: 'CQMPStatus', name: 'CQMP Status', subtext: '' },
        { id: 'EffectiveDate', name: 'Effective Date', subtext: '' },
        { id: 'VersionNumber', name: 'Version Number', subtext: '' },
        { id: 'VersionDT', name: 'Version Date', subtext: '' },
        { id: 'ReviewerComments', name: 'Reviewer Comments', subtext: '' }
      ],
      columnSiteView: [
        { id: 'LeadSite', name: 'Lead Site', subtext: '(Bold Indicates Plan Reviewed)' },
        { id: 'AffiliatedSite', name: 'Affiliated Site(s)', subtext: '(Bold Indicates Plan Reviewed)' },
        { id: 'FundingAgreement', name: 'Funding Agreement', subtext: '' },
        { id: 'GroupAffiliation', name: 'Group Affiliation', subtext: '' },
        { id: 'AcceptDate', name: 'Accepted Date', subtext: '' },
        { id: 'VersionNum', name: 'Version Number', subtext: '' },
        { id: 'VersionDate', name: 'Version Date', subtext: '' },
        { id: 'CQMPStatus', name: 'CQMP Status', subtext: '' },
        { id: 'EffectiveDate', name: 'Effective Date', subtext: '' },
        { id: 'VersionNumber', name: 'Version Number', subtext: '' },
        { id: 'VersionDT', name: 'Version Date', subtext: '' },
        { id: 'ReviewerComments', name: 'Reviewer Comments', subtext: '' }
      ],
      columnListSite: [
        { id: 'Edit', name: 'Edit', subtext: '' },
        { id: 'LeadSite', name: 'Lead Site', subtext: '(Bold Indicates Plan Reviewed)' },
        { id: 'AffiliatedSite', name: 'Affiliated Site(s)', subtext: '(Bold Indicates Plan Reviewed)' },
        { id: 'FundingAgreement', name: 'Funding Agreement', subtext: '' },
        { id: 'GroupAffiliation', name: 'Group Affiliation', subtext: '' },
        { id: 'CQMPStatus', name: 'CQMP Status', subtext: '' },
        { id: 'EffectiveDate', name: 'Effective Date', subtext: '' },
        { id: 'VersionNumber', name: 'Version Number', subtext: '' },
        { id: 'VersionDT', name: 'Version Date', subtext: '' },
        { id: 'ReviewerComments', name: 'Reviewer Comments', subtext: '' }
      ],
      columnListProtocols: [
        { id: 'Edit', name: 'Edit', subtext: '' },
        { id: 'AffiliatedSite', name: 'Affiliated Site(s)', subtext: '(Bold Indicates Plan Reviewed)' },
        { id: 'AcceptDate', name: 'Accepted Date', subtext: '' },
        { id: 'VersionNum', name: 'Version Number', subtext: '' },
        { id: 'VersionDate', name: 'Version Date', subtext: '' },
        { id: 'CQMPStatus', name: 'CQMP Status', subtext: '' },
        { id: 'EffectiveDate', name: 'Effective Date', subtext: '' },
        { id: 'VersionNumber', name: 'Version Number', subtext: '' },
        { id: 'VersionDT', name: 'Version Date', subtext: '' },
        { id: 'ReviewerComments', name: 'Reviewer Comments', subtext: '' }
      ],
      columnListCRA: [
        { id: 'ProtocolNumber', name: 'Protocol Number', subtext: '' },
        { id: 'LeadSite', name: 'Lead Site', subtext: '(Bold indicates accepted CQMP which should be available at the site)' },
        { id: 'AffiliatedSite', name: 'Affiliated Site(s)', subtext: '(Bold indicates accepted CQMP which should be available at the site)' },
        { id: 'CurrentAcceptDate', name: 'Current Accepted Date', subtext: '' },
        { id: 'DMIDAcceptVersion', name: 'DMID Accepted Version', subtext: '' },
        { id: 'ReviewerComments', name: 'Comments', subtext: '' }
        // { id: 'Monitored', name: 'Monitored by ICON?', subtext: ''  }
      ],
      protocols: [],
      protocolRecordStatus: [
        // Open
        { open: true, status: 'Active' },
        { open: true, status: 'Active-Enrollment Complete' },
        { open: true, status: 'Concept Approved' },
        { open: true, status: 'Concept Proposed' },
        { open: true, status: 'On Hold' },
        { open: true, status: 'In Development' },
        { open: true, status: 'Completed' },
        // Closed
        { open: false, status: 'Closed' },
        { open: false, status: 'Terminated by Sponsor' },
        { open: false, status: 'Concept Deferred' },
        { open: false, status: 'Concept Denied' },
        { open: false, status: 'Void' }
      ],
      siteList: [
        { id: 1, title: 'Crucell Holland BV', num: 'MI-0023' },
        { id: 2, title: 'Emory University', num: 'MI-1234' },
        { id: 3, title: 'Mayo Clinic', num: 'MI-4265' },
        { id: 4, title: 'Quintiles, Inc.', num: 'MI-2222' }
      ],
      CQMPStatus: [
        { id: 1, title: 'Accepted Initial' },
        { id: 2, title: 'Accepted Revised' },
        { id: 3, title: 'In Progress' },
        { id: 4, title: 'Cancelled' },
        { id: 5, title: 'None' }
      ],
      groupAffiliation: [
        { id: 1, title: 'CEIRS' },
        { id: 2, title: 'Phase 1' },
        { id: 3, title: 'RPRC' },
        { id: 4, title: 'TB-CDRC' },
        { id: 5, title: 'TBRU' },
        { id: 6, title: 'VTEU' },
        { id: 7, title: 'N/A' }
      ],
      newTodoText: '',
      nextTodoId: 4,
      currentProtocol: -1,
      planView: 'All',
      protocolHidden: true,
      siteHidden: true,
      dropDownHidden: true,
      selected: [],
      siteMasterList: Object.keys(siteMaster).map(function (key) {
        return siteMaster[key]
      }),
      subsiteMasterList: Object.keys(subsiteMaster).map(function (key) {
        return subsiteMaster[key]
      }),
      siteBasedOpen: [],
      siteBasedClosed: [],
      siteBasedCRA: [],
      protocolBasedCRA: [],
      protocolBasedOpen: [],
      protocolBasedClosed: []
    }
  },
  /// ////
  computed: {
    createdProtocolArray: function () {
      return this.protocols
    },
    currentProtocolValue: function () {
      return this.currentProtocol
    },
    siteBasedRecords: function () {
      // Sorts but you should be able to extract this method out so it is REUSABLE
      function compare (a, b) {
        if (a.leadSite < b.leadSite) { return -1 }
        if (a.leadSite > b.leadSite) { return 1 }
        return 0
      }
      return this.siteBasedOpen.sort(compare)
    },
    siteBasedClosedRecords: function () {
      return this.siteBasedClosed
    },
    protocolBasedRecords: function () {
      return this.protocolBasedOpen
    },
    protocolBasedClosedRecords: function () {
      return this.protocolBasedClosed
    },
    siteBasedCRARecords: function () {
      return this.siteBasedCRA
    },
    protocolBasedCRARecords: function () {
      return this.protocolBasedCRA
    }
  },
  /// ////
  mounted: function () {
    this.generateProtocolArray()
    this.setCurrentProtocol()
    this.isValueEven()
    this.generateSiteRecords()
    this.generateProtocolRecords()
  },
  /// ////
  methods: {
    setView: function (input) {
      switch (input) {
        case 'siteView':
          this.siteView = true
          this.craView = false
          this.protocolView = false
          this.closedView = false
          this.activeRow = -1
          break
        case 'craView':
          this.siteView = false
          this.craView = true
          this.protocolView = false
          this.closedView = false
          this.activeRow = -1
          break
        case 'protocolView':
          this.siteView = false
          this.craView = false
          this.protocolView = true
          this.closedView = false
          this.activeRow = -1
          break
        case 'closedView':
          this.siteView = false
          this.craView = false
          this.protocolView = false
          this.closedView = true
          this.activeRow = -1
          break
        default:
          console.log('There seems to be an issue with your switch statement')
          break
      }
    },
    isSelected: function () {
      return this.selected
    },
    addNewTodo: function () {
      this.siteList.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
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
    selectedForm: function (value) {
      if (value == 'site') {
        this.siteHidden = false
        this.protocolHidden = true
      } else if (value == 'protocol') {
        this.protocolHidden = false
        this.siteHidden = true
      } else {
        return console.log(value)
      }
    },
    hideDropDown: function () {
      return this.dropDownHidden = !this.dropDownHidden
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
    generateBranch: function (start, end) {
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
    randomCPM: function (start, end) {
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
    randomAffiliation: function (start, end) {
      var Aff = new Array()

      Aff[0] = 'CEIRS'
      Aff[1] = 'N/A'
      Aff[2] = 'Phase 1'
      Aff[3] = 'RPRC'
      Aff[4] = 'TB-CDRC'
      Aff[5] = 'TBRU'
      Aff[6] = 'VTEU'

      // var entityNum = ;
      var entityName = Aff[this.getRandomInt(start, end)]
      return entityName
    },
    generateSiteName: function (start, end) {
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
    randomCQMPStatus: function (start, end) {
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
    generateProtocolArray: function () {
      var arraySize = this.columnLength
      var protocolList = this.createdProtocolArray
      for (var i = 0; i < arraySize; i++) {
        var protocolNumber = this.generateProtocolNumber()
        protocolList.push(protocolNumber)
      }
    },
    generateSiteRecords: function () {
      var sites = this.siteMasterList
      var subSites = this.subsiteMasterList
      var numOfRecords = this.columnLength
      var recordStatus = this.protocolRecordStatus
      var output = this.siteBasedRecords
      var closedOutput = this.siteBasedClosedRecords
      var outputCRA = this.siteBasedCRARecords

      for (var i = 0; i < sites.length, i < numOfRecords; i++) {
        var shuffledSites = this.shuffle(subSites)
        var fundAgree = this.headsOrTails('Contract', 'Grant/ Cooperative Agreement')
        var siteGroup = this.randomAffiliation(0, 6)
        // var numOfCQMPS = this.getRandomInt(0, 5)
        var numOfCQMPS = this.getRandomInt(1, 5)
        var x = this.getRandomInt(1, 8)

        for (var j = 0; j <= numOfCQMPS; j++) {
          var aRecord = {
            leadSite: sites[i],
            id: j,
            siteStatus: recordStatus[this.getRandomInt(0, (recordStatus.length - 1))],
            NumofRecords: numOfCQMPS,
            fundingAgreement: fundAgree,
            groupAffiliation: siteGroup,
            branch: 'N/A',
            cpm: 'N/A',
            resourceLevel: 'N/A',
            dmidIND: 'N/A',
            affiliatedSites: [{ id: 0, siteName: sites[i], reviewed: j === 0, siteLead: true }],
            legacyData: {
              legacy: true,
              dateAccept: this.randomDate(new Date(2012, 0, 1), new Date(2014, 11, 31)),
              vNumber: this.getRandomInt(1, x) + '.0',
              vDate: this.randomDate(new Date(2012, 0, 1), new Date(2014, 11, 31))
            },
            currentData: {
              current: true,
              cqmpStatus: this.randomCQMPStatus(0, 4),
              effDate: this.randomDate(new Date(2015, 0, 1), new Date(2019, 11, 31)),
              cvNumber: this.getRandomInt(x, (x + (this.getRandomInt(1, 5)))) + '.0',
              cvDate: this.randomDate(new Date(2015, 0, 1), new Date(2019, 11, 31)),
              Comments: 'Reviewer comments go here.'
            }
          }
          for (var n = 1; n <= numOfCQMPS; n++) {
            var numAffSites = { id: n, siteName: shuffledSites[(n - 1)], reviewed: j === n, siteLead: false }
            aRecord.affiliatedSites.push(numAffSites)
          }
          if (aRecord.siteStatus.open) {
            output.push(aRecord)
            switch (aRecord.currentData.cqmpStatus) {
              case 'Accepted Initial':
                outputCRA.push(aRecord)
                break
              case 'Accepted Revised':
                outputCRA.push(aRecord)
                break
              case 'In Progress':
                outputCRA.push(aRecord)
                break
              default:
                break
            }
          } else {
            closedOutput.push(aRecord)
          }
        }
      }
    },

    generateProtocolRecords: function () {
      var sites = this.siteMasterList
      var subSites = this.subsiteMasterList
      var recordStatus = this.protocolRecordStatus
      var groupAff = this.groupAffiliation
      var numOfRecords = this.columnLength
      var output = this.protocolBasedRecords
      var closedOutput = this.protocolBasedClosedRecords
      var outputCRA = this.protocolBasedCRARecords
      var protNum = this.protocols

      for (var i = 0; i < numOfRecords, i < protNum.length; i++) {
        var shuffledSites = this.shuffle(sites)
        var shuffledSubSites = this.shuffle(subSites)
        var numOfCQMPS = this.getRandomInt(1, 4)
        var x = this.getRandomInt(1, 8)
        var fundAgree = this.headsOrTails('Contract', 'Grant/ Cooperative Agreement')
        var protBranch = this.generateBranch(0, 4)
        var protCPM = this.randomCPM(0, 4)
        var protResource = this.randomResource(0, 7)
        var protGroup = this.randomAffiliation(0, 6)
        var protDMIDIND = this.headsOrTails('Yes', 'No')
        var protocolNum = []

        // Fills CQMPS[]
        for (var j = 0; j <= numOfCQMPS; j++) {
          var aRecord = {
            protocolNum: protNum[this.getRandomInt(i, i)],
            protocolStatus: recordStatus[this.getRandomInt(0, (recordStatus.length - 1))],
            leadSite: shuffledSites[i],
            fundingAgreement: fundAgree,
            branch: protBranch,
            cpm: protCPM,
            resourceLevel: protResource,
            groupAffiliation: protGroup,
            dmidIND: protDMIDIND,
            id: j,
            affiliatedSites: [{ id: 0, siteName: shuffledSites[i], reviewed: j === 0, siteLead: true }],
            legacyData: {
              legacy: true,
              dateAccept: this.randomDate(new Date(2012, 0, 1), new Date(2014, 11, 31)),
              vNumber: this.getRandomInt(1, x) + '.0',
              vDate: this.randomDate(new Date(2012, 0, 1), new Date(2014, 11, 31))
            },
            currentData: {
              current: true,
              cqmpStatus: this.randomCQMPStatus(0, 4),
              effDate: this.randomDate(new Date(2015, 0, 1), new Date(2019, 11, 31)),
              cvNumber: this.getRandomInt(x, (x + (this.getRandomInt(1, 5)))) + '.0',
              cvDate: this.randomDate(new Date(2015, 0, 1), new Date(2019, 11, 31)),
              Comments: 'Reviewer comments go here.'
            }
          }
          // Fills affiliatedSites{}
          for (var n = 1; n <= numOfCQMPS; n++) {
            var numAffSites = { id: n, siteName: shuffledSubSites[n], reviewed: j === n, siteLead: false }
            aRecord.affiliatedSites.push(numAffSites)
          }
          if (aRecord.protocolStatus.open) {
            output.push(aRecord)
            switch (aRecord.currentData.cqmpStatus) {
              case 'Accepted Initial':
                outputCRA.push(aRecord)
                break
              case 'Accepted Revised':
                outputCRA.push(aRecord)
                break
              case 'In Progress':
                outputCRA.push(aRecord)
                break
              default:
                break
            }
          } else {
            closedOutput.push(aRecord)
          }
        }
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
}
.CQMP-table--container {
  overflow: scroll;
  max-height: 600px;
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
  background-color: rgb(211, 232, 220);
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
  background-color: rgb(24, 24, 24);
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

}
 .form--bg {
  background-color: rgba(245,245,245, 0.5);
  border-radius: 5px;
  border: 1px solid #ddd;
 }
.CQMP-form--row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

}
.form--separator {
  margin: 15px 0;
  border-bottom: 1px solid #ccc;
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
  vertical-align: middle;
}
.CQMP-form--row > label {
  margin-top: 5px;
}
.CQMP-form--row input, .CQMP-form--row select {
  border-radius: 4px;
  height: 28px;
  padding: 5px;
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
  border: 1px solid #666;
  border-radius: 5px;
  height: 28px;
  margin: 5px 0px;
  background-color: white;
}
.checkbox--container input {
  height: 15px;
  width: 15px;
  vertical-align: middle;
  margin: 5px 0 5px 7px;
  }
.checkbox--container label {
  padding: 5px 7px 5px 5px;
  display: inline-block;
  width: calc(100% - 22px);
  font-weight: unset;
}
input[type="checkbox"]:checked + label,
input[type="radio"]:checked + label {
  font-weight: bold;
}
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
  background-color: rgb(146, 222, 204);
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
  background-color: rgba(203, 214, 212, 0.5);
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
  background-color: rgba(146, 222, 204, 0.75);
}
.legacy-data {
  background-color: rgba(207, 218, 227, 0.5);
}
.current-data {
  background-color: rgba(219, 203, 180, 0.5);
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
