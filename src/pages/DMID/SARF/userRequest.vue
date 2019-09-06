<template>
<div class="SARF-request--body">
  <div class="SARF-form--row">
    <label for="ddlReqType"><strong>Request Type<span class="error">*</span>:</strong></label>
    <select name="ddlReqType" id="ddlReqType" v-model="reqType" class="required reqtype MD-input">
				<option value="0">Please Select</option>
				<option value="1">New Account</option>
				<option value="2">Account Update</option>
				<option value="3">Account Deactivation</option>
				<option value="4">Reactivate Account</option>
		</select>
    <div class="reqTextEntry requpreason" v-show="reqType !== 0">
      <label for="txtUpReason"><strong>Reason for Update<span class="error">*</span>:</strong></label>
      <input name="txtUpReason" type="text" id="txtUpReason" class="reasonupdate  MD-input">
    </div>
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
    <label for="ReasonOther"><strong>Reason, if other:</strong></label>
    <textarea name="ReasonOther" class="LG-input" rows="2" cols="20" id="ReasonOther" onkeydown="limitText(this,750);" onkeyup="limitText(this,750);"></textarea>
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
  <div class="SARF-form--row" v-show="(BranchSelected === Branches.length || GroupSelected === WorkingGroups.length) && (affSelection === 1 || affSelection === 2)">
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
	      <option value="">Please Select</option>
	      <option value="MI-1034">Baylor College of Medicine</option>
	      <option value="MI-1102">Children’s Hospital Medical Center</option>
	      <option value="MI-1658">Children’s Mercy Hospital</option>
	      <option value="MI-2475">Duke University</option>
	      <option value="MI-1145">Duke University Medical Center</option>
	      <option value="MI-1523">Emory University</option>
	      <option value="Group Health Cooperative">Group Health Cooperative</option>
	      <option value="MI-1648">Oakland Children’s Hospital</option>
	      <option value="MI-1488">Saint Louis University</option>
	      <option value="MI-2533">University of Cincinnati</option>
	      <option value="MI-2395">University of Iowa</option>
	      <option value="MI-1578">University of Maryland</option>
	      <option value="MI-2010">University of Texas Medical Branch</option>
	      <option value="MI-2196">Vanderbilt University</option>
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
  <div class="SARF-form--row"  v-show="affSelection === 4 || affSelection === 5">
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
    <div class="SARF-form--row">
        <fieldset  class="noBorder">
            <legend><p><strong>Products<span class="error">*</span>:</strong></p></legend>
              <ul id="Products" class="required SARF-list--products">
                <li v-for="(item, index) in Products" :key="index"><input :id="'Products_'+index" type="checkbox" name="Products" :value="index + 1"><label :for="'Products_'+index"> {{ item.name }}</label></li>
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
    <div class="SARF-form--row fill-Bottom">
      <div>
        <div class="reqmsg">Fields marked with an <span class="error">*</span> are required.</div>
        <br>
        <input type="button" name="btnUpdateRecord" value="Update Record" id="btnUpdateRecord" class="btnupdaterecord SARF-button" disabled="">
        <input type="submit" name="btnSubmit" value="Submit" id="btnSubmit" class="submitbutton SARF-button">
        <div id="waitMessage" style="display: none;">
            <span id="lblProcessing">Processing... Please wait.</span>
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
      AffSelected: false,
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
        { name: 'DMID Argus' },
		    { name: 'CEIRS ' },
		    { name: 'CSRC  '},
		    { name: 'CMS  ' },
		    { name: 'LMS  ' },
        { name: 'DART  ' },
        { name: 'DEX  '},
		    { name: 'WebLibrary  ' },
		    { name: 'Document Library' },
        { name: 'PTP' },
        { name: 'PRT' },
        { name: 'NLM and Results' },
        { name: 'SMART' },
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
        { name: 'Training &amp; Instructional Design' },
        { name: 'Human Subjects Protection' },
        { name: 'Data Analytics Group' },
        { name: 'Other' },
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
  background-color: rgb(220, 220, 220);
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
</style>
