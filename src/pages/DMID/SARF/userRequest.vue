<template>
<div class="SARF-request--body">
  <div class="Mockup-Controls">
    <div class="mockup-control--container flex-column">
      <button class="mockup-control--btn" :class="(Status === 'User-Submit') ? 'active-control':''" @click="Status = 'User-Submit'"> User-Submit </button>
      <button class="mockup-control--btn" :class="(Status === 'Pending') ? 'active-control':''" @click="Status = 'Pending'"> Pending View </button>
      <button class="mockup-control--btn" :class="(Status === 'Pending-Approval') ? 'active-control':''" @click="Status = 'Pending-Approval'"> Approver View </button>
      <div>
        <button class="mockup-control--btn" :class="(viewMode === 'hide-Products') ? 'active-control':''" @click="viewMode = 'hide-Products'"> Hidden </button>
        <button class="mockup-control--btn" :class="(viewMode === 'disable-Products') ? 'active-control':''" @click="viewMode = 'disable-Products'"> Disabled </button>
      </div>
    </div>

  </div>
  <div class="SARF-form--row">
    <label for="ddlReqType"><strong>Request Type<span class="error">*</span>:</strong></label>
    <select name="ddlReqType" id="ddlReqType" v-model="reqType" class="required reqtype MD-input">
				<option value="0">Please Select</option>
				<option value="1">New Account</option>
				<option value="2">Account Update</option>
				<option value="3">Account Deactivation</option>
				<option value="4">Reactivate Account</option>
		</select>
  </div>
  <div class="SARF-form--row">
    <label for="txtEMail"><strong>Email Address<span class="error">*</span>:</strong></label>
    <div>
    <input name="txtEMail" type="text" id="txtEMail" class="txtEmail email required  MD-input" :disabled="reqType == 0" >
    <br>
    <em>Must be institutional email address. If other, please provide reason.</em>
    </div>
  </div>
  <div class="SARF-form--row">
    <label for="txtFName"><strong>First Name<span class="error">*</span>:</strong></label>
    <input name="txtFName" type="text" id="txtFName" class="required fname  MD-input">
    <label for="txtMName" id="txtMNameLabel"><strong>Middle Name: </strong></label>
    <input name="txtMName" type="text" maxlength="10" id="txtMName" class="mname  SM-input">
  </div>
  <div class="SARF-form--row">
    <label for="txtLName"><strong>Last Name<span class="error">*</span>:</strong></label>
    <input name="txtLName" type="text" id="txtLName" class="required lname  MD-input">
  </div>
  <div class="SARF-form--row">
    <label for="txtPhone"><strong>Phone<span class="error">*</span>:</strong></label>
    <input name="txtPhone" type="text" id="txtPhone" class="required phone  MD-input">
  </div>
  <div class="SARF-form--row">
    <label for="txtTitle"><strong>Title/Role<span class="error">*</span>:</strong></label>
    <input name="txtTitle" type="text" id="txtTitle" class="required trole  MD-input">
  </div>
  <div class="SARF-form--row">
    <label for="ddlAffiliation"><strong>Affiliation<span class="error">*</span>:</strong></label>
    <select name="ddlAffiliation" id="ddlAffiliation" class="affiliation required  AFF-input" v-model="affSelection">
        <option v-for="(item, index) in affiliations" :key="index" :value="index"> {{ item.value }} </option>
	  </select>
  </div>
  <!-- START Affliation Types -->
  <div class="affiliation-menus" v-show="(affSelection !== 0)">
    <div class="SARF-form--row"  v-show="(affSelection === 1)">

        <fieldset class="noBorder">
            <legend class="inline-legend"><p><strong>Is the user a DMID-OCRA Medical Monitor?<span class="error">*</span></strong></p></legend>
              <ul id="isMedicalMonitor" class="required SARF-yesNo">
	      	      <li><input id="isMedicalMonitor_0" type="radio" name="isMedicalMonitor" value="No"><label for="isMedicalMonitor_0">No</label></li>
	      	      <li><input id="isMedicalMonitor_1" type="radio" name="isMedicalMonitor" value="Yes"><label for="isMedicalMonitor_1">Yes</label></li>
	            </ul>
          </fieldset>
          </div>

      <div class="SARF-form--row"  v-show="(affSelection === 1)">
        <fieldset  class="noBorder">
          <legend class="inline-legend"><p><strong>Is the user a DMID Program Officer?</strong></p></legend>
            <ul id="isDMIDProgOfficer" class="SARF-yesNo">
	      	    <li><input id="isDMIDProgOfficer_0" type="radio" name="isDMIDProgOfficer" value="No"><label for="isDMIDProgOfficer_0">No</label></li>
	      	    <li><input id="isDMIDProgOfficer_1" type="radio" name="isDMIDProgOfficer" value="Yes"><label for="isDMIDProgOfficer_1">Yes</label></li>
            </ul>
        </fieldset>
      </div>
      <div class="SARF-form--row"  v-show="(affSelection === 1)">
        <fieldset  class="noBorder">
            <legend><p><strong>Branch/Office<span class="error">*</span>:</strong></p></legend>
              <ul id="rblBranches" class="required SARF-list--branches">
                <li v-for="(item, index) in Branches" :key="index"><input :id="'rblBranches_'+index" type="radio" name="rblBranches" :value="index + 1" v-model="BranchSelected"><label :for="'rblBranches_'+index"> {{ item.name }}</label></li>
              </ul>
          </fieldset>
      </div>
  <div class="SARF-form--row"  v-show="affSelection === 2">
    <div class="divTRI affSpacing">
      <fieldset class="noBorder">
        <legend class="inline-legend"><p><strong>Is the user a manager?</strong></p></legend>
        <ul id="isManager" class="SARF-yesNo">
		      <li><input id="isManager_0" type="radio" name="isManager" value="No"><label for="isManager_0">No</label></li>
		      <li><input id="isManager_1" type="radio" name="isManager" value="Yes"><label for="isManager_1">Yes</label></li>
        </ul>
      </fieldset>
      <fieldset class="noBorder">
        <legend><p><strong>Working Group(s)<span class="error">*</span>:</strong></p></legend>
        <ul id="rblDMIDCROMS" class="SARF-workingGroups">
          <li v-for="(item, index) in WorkingGroups" :key="index"><input :id="'rblDMIDCROMS_'+index" type="radio" name="rblDMIDCROMS_" :value="index + 1" v-model="GroupSelected"><label :for="'rblDMIDCROMS_'+index"> {{ item.name }}</label></li>
        </ul>
      </fieldset>
    </div>
  </div>
  <div class="SARF-form--row" v-show="affSelection === 1 || affSelection === 2">
      <label for="txtDMIDOther"><strong>If Other, specify:</strong></label>
      <input name="txtDMIDOther" type="text" id="txtDMIDOther" class="other">
  </div>
  <div class="SARF-form--row" v-show="affSelection === 1 || affSelection === 2">
      <label for="txtDMIDMgr"><strong>Manager:</strong><br /><em>If applicable</em></label>
      <input name="txtDMIDMgr" type="text" id="txtDMIDMgr" class="mgr">
  </div>
  <div class="SARF-form--row" v-show="affSelection === 3">
    <label for="ddlSite"><strong>Site Name</strong><span class="error">*</span>:</label>
      <select name="ddlSite" id="ddlSite" class="dlsite MD-input">
        <option v-for="(item, index) in siteList" :key="index" :value="item.value"> {{ item.name }}</option>
      </select>
  </div>
  <div class="SARF-form--row"  v-show="affSelection === 3">
          <label for="ddlPIName"><strong>PI Name</strong><span class="error">*</span><strong>:</strong></label>
          <select name="ddlPIName" id="ddlPIName" class="piDDL MD-input">
		<!-- FAKE NAMES NEED TO GO HERE -->
	        </select>
      </div>
  <div class="SARF-form--row" v-show="affSelection === 5">
      <label for="txtSite"><strong>Organization Name</strong><span class="error">*</span>:</label>
      <input name="txtSite" type="text" id="txtSite" class="tlsite MD-input">
    </div>
  <!-- NON VTEU -->
  <div class="SARF-form--row" v-show="affSelection === 4">
    <label for="txtSiteName"><strong>Site Name</strong><span class="error">*</span><strong>:</strong></label>
    <input name="txtSiteName" type="text" id="txtSiteName" class="piTXT  MD-input">
  </div>
  <div class="SARF-form--row" v-show="affSelection === 4">
    <label for="txtPIName"><strong>PI Name</strong><span class="error">*</span><strong>:</strong></label>
    <input name="txtPIName" type="text" id="txtPIName" class="piTXT  MD-input">
  </div>
  <div class="SARF-form--row" v-show="affSelection === 3 || affSelection === 4 || affSelection === 5">
    <label for="txtVTEUProtocol"><strong>Protocol Numbers:</strong><br><em>If applicable</em></label>
    <div>
      <input name="txtVTEUProtocol" type="text" id="txtVTEUProtocol" class="protocol MD-input">
      <br>
      <em>Enter protocol numbers you need permissions to, separated by commas.</em>
    </div>
  </div>
  <div class="SARF-form--row"  v-show="( GroupSelected === 1 && affSelection === 2 ) || affSelection === 4 || affSelection === 5">
    <div class="divAddress" style="display: block;">
      <div class="SARF-form--row">
        <label for="txtAddress1"><strong>Address Line 1:<span class="error">*</span></strong></label>
        <input name="txtAddress1" type="text" id="txtAddress1" class="add1 MD-input">
      </div>
      <div class="SARF-form--row">
        <label for="txtAddress2"><strong>Address Line 2:</strong></label>
        <input name="txtAddress2" type="text" id="txtAddress2" class="add2 MD-input">
      </div>
      <div class="SARF-form--row">
        <label for="txtCity"><strong>City:<span class="error">*</span></strong></label>
        <input name="txtCity" type="text" id="txtCity" class="city MD-input">
      </div>
      <div class="SARF-form--row">
        <label for="txtZip"><strong>Zip code:</strong></label>
        <input name="txtZip" type="text" id="txtZip" class="zip MD-input">
      </div>
      <div class="SARF-form--row">
        <label for="txtState"><strong>State/Province:</strong></label>
        <input name="txtState" type="text" id="txtState" class="state MD-input">
      </div>
      <div class="SARF-form--row">
        <label for="ddlCountry"><strong>Country:<span class="error">*</span></strong></label>
        <select name="ddlCountry" id="ddlCountry" class="country MD-input">
	<!-- Countries go here -->
	      </select>
      </div>
    </div>
      <!-- End of affiliation Boxes -->
  </div>
  </div>
  <div class="SARF-form--row" v-show="affSelection !== 0">
    <fieldset  class="noBorder">
      <legend><p><strong>Products<span class="error">*</span>:</strong></p></legend>
        <ul id="Products" class="required SARF-list--products">
          <li v-for="(item, index) in Products"
              :key="index"
              :class="(viewMode === 'disable-Products' && item.visibleTo[affSelection] === false) ? 'disabled-Product':
                      (viewMode === 'disable-Products' && affSelection === 0) ? 'disabled-Product':
                      (viewMode === 'hide-Products' && item.visibleTo[affSelection] === false ) ? 'hidden': ''"
          >
            <input type="checkbox" name="Products"
              :id="'Products_'+index"
              :value="index + 1"
              :disabled="(viewMode === 'disable-Products' && item.visibleTo[affSelection] === false) || (viewMode === 'disable-Products' && affSelection === 0)">
            <label :for="'Products_'+index"> {{ item.name }}</label>
          </li>
        </ul>
    </fieldset>
  </div>
    <div class="SARF-form--row">
      <label for="txtNote"><strong>Specify Request Details:</strong></label>
      <div>
        <textarea name="txtNote" rows="2" cols="20" id="txtNote" class="note LG-input" onkeydown="limitText(this,750);" onkeyup="limitText(this,750);"></textarea>
        <br><em>Please provide additional details to help process your request appropriately.</em>
      </div>
    </div>
    <!-- Pending View -->
    <div class="SARF-form--row" v-show="Status === 'Pending'">
      <label for="txtRequestUpdate"><strong>Reason for Request:</strong></label>
      <div>
        <textarea name="txtRequestUpdate" rows="2" cols="20" id="txtNote" class="note LG-input" onkeydown="limitText(this,750);" onkeyup="limitText(this,750);"></textarea>
        <input type="submit" name="btnRequestUpdate" value="Request User Update" id="btnRequestUpdate" class="submitbutton SARF-button">
      </div>
    </div>
    <!-- End Pending View -->
    <!-- Approver View -->
    <div class="SARF-form--row margin-top" v-show="Status === 'Pending-Approval'">
      <label><strong>Suppress Emails?</strong></label>
        <ul id="supressEmail" class="SARF-yesNo">
		      <li><input id="supressEmail_0" type="radio" name="supressEmail" value="No"><label for="supressEmail_0">No</label></li>
		      <li><input id="supressEmail_1" type="radio" name="supressEmail" value="Yes" checked><label for="supressEmail_1">Yes</label></li>
        </ul>
    </div>
    <div class="SARF-form--row" v-show="Status === 'Pending-Approval'">
      <label for="txtApprove"><strong>Reason for Disapproval / Approver Comments:</strong></label>
      <div>
        <textarea name="txtApprove" rows="2" cols="20" id="txtNote" class="note LG-input" onkeydown="limitText(this,750);" onkeyup="limitText(this,750);"></textarea>
        <input type="submit" name="btnDisapprove" value="Disapprove" id="btnDisapprove" class="submitbutton SARF-button">
        <input type="submit" name="btnApproval" value="Approve" id="btnApproval" class="submitbutton SARF-button">
      </div>
    </div>
    <div class="SARF-form--row " v-show="Status === 'Pending'">
      <div>
        <input type="submit" name="btnUpdateUserInfo" value="Update User Information" id="btnUpdateUserInfo" class="submitbutton SARF-button">
        <br>
        <br>
        <input type="submit" name="btnAccept" value="Accept" id="btnAccept" class="submitbutton SARF-button">
      </div>
    </div>
    <!-- end Approver View -->
  <div class="SARF-form--row SARF-meta--info" v-show="Status === 'Pending-Approval' || Status === 'Pending'">
    <div id="divITAdmin" class="status">
        <strong>Request Status:</strong> <label for="divITAdmin" id="lbStatus"><i>{{ this.Status }}</i></label>
        <br>
        <strong>User Roles:</strong> <label for="divITAdmin" id="lbRoles"><i>DocLibrary,Partners</i></label>
        <br>
    </div>
    <div id="divStatus" class="status">
      <a id="lnkAdminPage" href="#"><strong>Admin Page</strong></a>
      <p class="Small">
        You are logged in as <span id="spnUsername">UserLast, UserFirst</span>. <a name="A" href="#">Click here to sign out</a>
	    </p>
    </div>
  </div>
  <div class="SARF-form--row fill-Bottom">
    <div>
      <div class="reqmsg">Fields marked with an <span class="error">*</span> are required.</div>
      <br>
      <div v-show="Status === 'User-Submit'">
        <input type="button" name="btnUpdateRecord" value="Update Record" id="btnUpdateRecord" class="btnupdaterecord SARF-button" :disabled="reqType == 0 || reqType == 1">
        <input type="submit" name="btnSubmit" value="Submit" id="btnSubmit" class="submitbutton SARF-button">
        <div id="waitMessage" style="display: none;">
            <span id="lblProcessing">Processing... Please wait.</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    components: {
  },
  data: function () {
    return {
      Status: 'User-Submit', // 'Pending', 'Pending-Approval
      viewMode: 'hide-Products',
      reqType: 0,
      affSelection: 0,
      BranchSelected: '',
      GroupSelected: '',
      affiliations: [
        { value: 'Please Select' },
		    { value: 'DMID Branch/Offices' },
		    { value: 'DMID CROMS Team '},
		    { value: 'Site/Institution - Vaccine and Treatment Evaluation (VTEU)' },
		    { value: 'Site/Institution - Non-Vaccine and Treatment Evaluation (non-VTEU)' },
		    { value: 'None of the above' },
      ],
      siteList: [
        { name: 'Please Select', value: ''},
	      { name: 'Baylor College of Medicine', value: '"MI-1034'},
	      { name: 'Children’s Hospital Medical Center', value: '"MI-1102'},
	      { name: 'Children’s Mercy Hospital', value: '"MI-1658'},
	      { name: 'Duke University', value: '"MI-2475'},
	      { name: 'Duke University Medical Center', value: '"MI-1145'},
	      { name: 'Emory University', value: '"MI-1523'},
	      { name: 'Group Health Cooperative', value: 'Group Health Cooperative'},
	      { name: 'Oakland Children’s Hospital', value: '"MI-1648'},
	      { name: 'Saint Louis University', value: '"MI-1488'},
	      { name: 'University of Cincinnati', value: '"MI-2533'},
	      { name: 'University of Iowa', value: '"MI-2395'},
	      { name: 'University of Maryland', value: '"MI-1578'},
	      { name: 'University of Texas Medical Branch', value: '"MI-2010'},
        { name: 'Vanderbilt University', value: '"MI-2196'},
      ],
      Branches: [
        { name: 'OCRA' },
		    { name: 'RDB' },
		    { name: 'PIPB'},
		    { name: 'BMP' },
		    { name: 'EHDB' },
        { name: 'ORA' },
        { name: 'OBRRTR'},
		    { name: 'VB' },
        { name: 'OD' },
		    { name: 'Other' },
      ],
      Products: [
        //visibleTo: 0: PleaseSelect, 1: Branch/Offices, 2: CROMS Team, 3: VTEU, 4: NON-VTEU, 5: Other
        { visibleTo: { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true }, name: 'DMID Argus'},
		    { visibleTo: { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true }, name: 'CEIRS'},
		    { visibleTo: { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true }, name: 'CSRC'},
		    { visibleTo: { 0: true, 1: true, 2: true, 3: false, 4: false, 5: true }, name: 'CMS'},
		    { visibleTo: { 0: true, 1: false, 2: false, 3: true, 4: true, 5: false }, name: 'LMS'},
        { visibleTo: { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true }, name: 'DART'},
        { visibleTo: { 0: true, 1: false, 2: true, 3: false, 4: false, 5: false }, name: 'DEX'},
		    { visibleTo: { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true }, name: 'WebLibrary '},
		    { visibleTo: { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true }, name: 'Document Library'},
        { visibleTo: { 0: true, 1: true, 2: true, 3: false, 4: false, 5: false }, name: 'PTP'},
        { visibleTo: { 0: true, 1: false, 2: true, 3: false, 4: false, 5: false }, name: 'PRT'},
        { visibleTo: { 0: true, 1: true, 2: true, 3: false, 4: false, 5: false }, name: 'NLM and Results'},
        { visibleTo: { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true }, name: 'SMART'},
        { visibleTo: { 0: true, 1: false, 2: true, 3: false, 4: false, 5: false }, name: 'Rational'}
      ],
      WorkingGroups: [
        { name: 'Clinical Site Monitoring' },
		    { name: 'CQMP Review' },
		    { name: 'Essential Regulatory Docs Group'},
		    { name: 'IT' },
		    { name: 'Medical Writing' },
        { name: 'Project Management' },
        { name: 'Quality Assurance'},
		    { name: 'Pharmacovigilance' },
		    { name: 'Safety Oversight Committee Support(SOCS)' },
        { name: 'Study Information Office(SIO)' },
        { name: 'Teleconferencing' },
        { name: 'Training & Instructional Design' },
        { name: 'Human Subjects Protection' },
        { name: 'Data Analytics Group' },
        { name: 'Other' },
      ],
      Address: [
        { name: 'Address Line 1' },
		    { name: 'Address Line 2' },
		    { name: 'City'},
		    { name: 'Zip Code' },
		    { name: 'State/Province' },
        { name: 'Country' },
      ],
    }
  },
  computed: {
    stateComponent: {
      get: function () {
        return this.$root.store.state.activeComponent
      },
      set: function (value) {
        this.$root.store.commit('isActiveComponent', value)
      }
    }
  },
  /// ////
  mounted: function () {
    this.stateActiveComponent('')
  },
  methods: {
    stateActiveComponent (value) {
      return this.stateComponent = value
    },
  }
}
</script>
<style scoped>
.Mockup-Controls {
  position: absolute;
  left: -150px;
  }
.mockup-control--container {
  position: fixed;
  display: flex;
  flex-direction: column;
}
.mockup-control--btn {
  padding: 2px 8px;
  margin: 2px 0;
  background-color: white;
  border: 1px solid black;
}
.active-control {
  border-color: teal;
  background-color: aqua;
}
.SubmitRow {
  display: flex;
  align-self: flex-end;
}
ul {
  list-style-type: none;
  display: inline-block;
  padding-left: 5px;
  margin: 0;
}
ul li {
    display: inline-block;
    width: 48%;
}
li label {
    display: inline-block;
    height: 20px;
    vertical-align: middle;
    margin-left: 2px;
}
fieldset {
  padding: 5px 3px;
  width: 100%;
}
legend {
  padding-inline-start: 0px;
  padding-inline-end: 0px;
  border-width: initial;
  border-style: none;
}
.SARF-yesNo {
  width: 50%;
}
.SARF-yesNo li {
  width: 10%;
  float: left;
}

.SARF-list--branches {
  width: 30%;
  margin-top: -4px;
  columns: 1;
}
.SARF-list--branches li {
 width: 35%;
}
.SARF-workingGroups {
  width: 62%;
  margin-top: -4px;
}
.inline-legend {
  float: left;
}

.SARF-request--body{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100%;
  flex: 0 63%;
  align-content: flex-start;
}
.SARF-form--row {
  display: flex;
  padding: 2px;
  width: 100%;
}
.SARF-form--row label {
  width: 180px;
}
.SARF-yesNo li label,
.SARF-workingGroups li label,
.SARF-list--branches li label,
.SARF-list--products li label  {
  width: calc(100% - 21px);
  vertical-align: super;
}
.affiliation-menus {
  background-color: rgb(230, 230, 230);
  width: 100%;
}
.error {
  color: red;
}
input, select, textarea {
  margin-left: 2px;
}
#txtMNameLabel {
  margin-left: 5px;
  width: unset;
}
#ddlReqType {
  margin-right: 5px;
}
input, select {
  height: 21px;
}
input[type=radio] {
  height: 18px;
}
.SM-input {
 width: 100px;
}
.MD-input {
  width: 260px;
}
.LG-input {
  height:80px;
  width:400px;
}
.AFF-input {
  width: 450px;
}
.SARF-button {
  margin-right: 4px;
  padding: 0 4px;
}
.noBorder {
  border: none;
}
.fill-Bottom {
  align-items: flex-end;
      flex-grow: 2;
}
.SARF-list--products {
  columns: 1;
}
.SARF-list--products li {
  width: 18%;
    /* background-color: aqua; */
  margin: 2px 10px 2px 0;
}
li input[type="checkbox"], li input[type="radio"], li input[type="text"], li label {
  float: left;
  line-height: 1.6em;
  height: 1.5em;
  margin: 0px 2px;
  padding: 0px;
  font-size: inherit;
}

li input[type="checkbox"], li input[type="radio"], li input[type="text"] {
    clear: left;
}
.status {
  background-color: #EEEEEE;
  width: 100%
}
.SARF-meta--info {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
.margin-top {
  margin-top: 20px;
}
.hidden {
  display: none;
}
.disabled-Product {
  color: #666;
}

</style>
