<template>
<div class="SARF-request--body">
  <div class="SARF-form--row">
    <label for="ddlReqType"><strong>Request Type<span class="error">*</span>:</strong></label>
    <select name="ddlReqType" id="ddlReqType" class="required reqtype MD-input">
				<option value="">Please Select</option>
				<option value="1">New Account</option>
				<option value="2">Account Update</option>
				<option value="3">Account Deactivation</option>
				<option value="4">Reactivate Account</option>
		</select>
    <div class="reqTextEntry requpreason" style="display: block;">
      <label for="txtUpReason"><strong>Reason for Update<span class="error">*</span>:</strong></label>
      <input name="txtUpReason" type="text" id="txtUpReason" class="reasonupdate  MD-input">
    </div>
  </div>
  <div class="SARF-form--row">
    <label for="txtEMail"><strong>Email Address<span class="error">*</span>:</strong></label>
    <div>
    <input name="txtEMail" type="text" id="txtEMail" class="txtEmail email required  MD-input" disabled="">
    <br>
    <em>Must be institutional email address. If other, please provide reason.</em>
    </div>
  </div>
  <div class="SARF-form--row">
    <label for="ReasonOther"><strong>Reason, if other:</strong></label>
    <textarea name="ReasonOther" class="LG-input" rows="2" cols="20" id="ReasonOther" onkeydown="limitText(this,750);" onkeyup="limitText(this,750);" style="height:80px;width:400px;"></textarea>
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
    <div class="SARF-form--row">
      <div class="divBranches affSpacing"  v-show="(affSelection !== 0)">
        <fieldset class="noBorder">
          <legend class="inline-legend"><p><strong>Is the user a DMID-OCRA Medical Monitor?<span class="error">*</span></strong></p></legend>
            <ul id="isMedicalMonitor" class="required SARF-yesNo">
	    	      <li><input id="isMedicalMonitor_0" type="radio" name="isMedicalMonitor" value="No"><label for="isMedicalMonitor_0">No</label></li>
	    	      <li><input id="isMedicalMonitor_1" type="radio" name="isMedicalMonitor" value="Yes"><label for="isMedicalMonitor_1">Yes</label></li>
	          </ul>
        </fieldset>
        <fieldset  class="noBorder">
          <legend class="inline-legend"><p><strong>Is the user a DMID Program Officer?</strong></p></legend>
            <ul id="isDMIDProgOfficer" class="SARF-yesNo">
	    	      <li><input id="isDMIDProgOfficer_0" type="radio" name="isDMIDProgOfficer" value="No"><label for="isDMIDProgOfficer_0">No</label></li>
	    	      <li><input id="isDMIDProgOfficer_1" type="radio" name="isDMIDProgOfficer" value="Yes"><label for="isDMIDProgOfficer_1">Yes</label></li>
            </ul>
        </fieldset>
        <fieldset  class="noBorder">
          <legend><p><strong>Branch/Office<span class="error">*</span>:</strong></p></legend>
            <ul id="rblBranches" class="required SARF-list--branches">
	    	      <li><input id="rblBranches_0" type="radio" name="rblBranches" value="1"><label for="rblBranches_0">OCRA</label></li>
	    	      <li><input id="rblBranches_1" type="radio" name="rblBranches" value="2"><label for="rblBranches_1">RDB</label></li>
	    	      <li><input id="rblBranches_2" type="radio" name="rblBranches" value="3"><label for="rblBranches_2">PIPB</label></li>
	    	      <li><input id="rblBranches_3" type="radio" name="rblBranches" value="4"><label for="rblBranches_3">BMB</label></li>
	    	      <li><input id="rblBranches_4" type="radio" name="rblBranches" value="5"><label for="rblBranches_4">EHDB</label></li>
	    	      <li><input id="rblBranches_5" type="radio" name="rblBranches" value="6"><label for="rblBranches_5">ORA</label></li>
	    	      <li><input id="rblBranches_6" type="radio" name="rblBranches" value="7"><label for="rblBranches_6">OBRRTR</label></li>
	    	      <li><input id="rblBranches_7" type="radio" name="rblBranches" value="8"><label for="rblBranches_7">VB</label></li>
	    	      <li><input id="rblBranches_8" type="radio" name="rblBranches" value="9"><label for="rblBranches_8">OD</label></li>
	    	      <li><input id="rblBranches_9" type="radio" name="rblBranches" value="10"><label for="rblBranches_9">Other</label></li>
            </ul>
        </fieldset>
      </div>
    </div>
  <div class="SARF-form--row">
    <div class="divTRI affSpacing"  v-show="(affSelection === 2)">
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
		      <li><input id="rblDMIDCROMS_0" type="radio" name="rblDMIDCROMS" value="1"><label for="rblDMIDCROMS_0">Clinical Site Monitoring</label></li>
		      <li><input id="rblDMIDCROMS_1" type="radio" name="rblDMIDCROMS" value="2"><label for="rblDMIDCROMS_1">CQMP Review</label></li>
		      <li><input id="rblDMIDCROMS_2" type="radio" name="rblDMIDCROMS" value="3"><label for="rblDMIDCROMS_2">Essential Regulatory Docs Group</label></li>
		      <li><input id="rblDMIDCROMS_3" type="radio" name="rblDMIDCROMS" value="4"><label for="rblDMIDCROMS_3">IT</label></li>
		      <li><input id="rblDMIDCROMS_4" type="radio" name="rblDMIDCROMS" value="5"><label for="rblDMIDCROMS_4">Medical Writing</label></li>
		      <li><input id="rblDMIDCROMS_5" type="radio" name="rblDMIDCROMS" value="6"><label for="rblDMIDCROMS_5">Project Management</label></li>
		      <li><input id="rblDMIDCROMS_6" type="radio" name="rblDMIDCROMS" value="7"><label for="rblDMIDCROMS_6">Quality Assurance</label></li>
		      <li><input id="rblDMIDCROMS_7" type="radio" name="rblDMIDCROMS" value="8"><label for="rblDMIDCROMS_7">Pharmacovigilance</label></li>
		      <li><input id="rblDMIDCROMS_8" type="radio" name="rblDMIDCROMS" value="9"><label for="rblDMIDCROMS_8">Safety Oversight Committee Support(SOCS)</label></li>
		      <li><input id="rblDMIDCROMS_9" type="radio" name="rblDMIDCROMS" value="10"><label for="rblDMIDCROMS_9">Study Information Office(SIO)</label></li>
		      <li><input id="rblDMIDCROMS_10" type="radio" name="rblDMIDCROMS" value="11"><label for="rblDMIDCROMS_10">Teleconferencing</label></li>
		      <li><input id="rblDMIDCROMS_11" type="radio" name="rblDMIDCROMS" value="12"><label for="rblDMIDCROMS_11">Training &amp; Instructional Design</label></li>
		      <li><input id="rblDMIDCROMS_12" type="radio" name="rblDMIDCROMS" value="13"><label for="rblDMIDCROMS_12">Other</label></li>
        </ul>
      </fieldset>
    </div>
  </div>
  <div class="SARF-form--row" v-show="affSelection === 1 || 2">
    <div class="divOther">
      <label for="txtDMIDOther"><strong>If Other, specify:</strong></label>
      <input name="txtDMIDOther" type="text" id="txtDMIDOther" class="other">
      <label for="txtDMIDMgr"><strong>Manager:</strong><br /><em>If applicable</em></label>
      <input name="txtDMIDMgr" type="text" id="txtDMIDMgr" class="mgr">
    </div>
  </div>
  <div class="SARF-form--row">
    <div class="divVTEU"  v-show="(affSelection === 3)">
      <div class="SARF-form--row">
        <label for="ddlSite"><strong>Site Name</strong><span class="error">*</span>:</label>
        <div class="dsite">
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
      </div>
      <div class="SARF-form--row">
      <div class="lorg"  v-show="(affSelection !== 0)">
        <label for="txtSite"><strong>Organization Name</strong><span class="error">*</span>:</label>
      </div>

      <div class="tsite"  v-show="(affSelection !== 0)">
          <input name="txtSite" type="text" id="txtSite" class="tlsite MD-input">
      </div>
      </div>
      <div class="SARF-form--row"  v-show="(affSelection !== 0)">
          <label for="ddlPIName"><strong>PI Name</strong><span class="error">*</span><strong>:</strong></label>
          <select name="ddlPIName" id="ddlPIName" class="piDDL MD-input">
		<!-- FAKE NAMES NEED TO GO HERE -->
	        </select>
        <div class="tPIName"  v-show="(affSelection !== 0)">
          <label for="txtPIName"><strong>PI Name</strong><span class="error">*</span><strong>:</strong></label>
          <div class="tPIName"  v-show="(affSelection !== 0)">
            <input name="txtPIName" type="text" id="txtPIName" class="piTXT  MD-input">
          </div>
        </div>
      </div>
      <div class="SARF-form--row">
        <label for="txtVTEUProtocol"><strong>Protocol Numbers:</strong><br><em>If applicable</em></label>
        <div>
          <input name="txtVTEUProtocol" type="text" id="txtVTEUProtocol" class="protocol MD-input">
          <br>
          <em>Enter protocol numbers you need permissions to, separated by commas.</em>
        </div>
      </div>
    </div>
  </div>

    <div class="SARF-form--row"  v-show="(affSelection == 0 || 1)">
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
      <label for="txtNote"><strong>Specify Request Details:</strong></label>
      <div>
        <textarea name="txtNote" rows="2" cols="20" id="txtNote" class="note LG-input" onkeydown="limitText(this,750);" onkeyup="limitText(this,750);"></textarea>
        <br><em>Please provide additional details to help process your request appropriately.</em>
      </div>
    </div>
    <div class="SARF-form--row">
      <div class="reqmsg">Fields marked with an <span class="error">*</span> are required.</div>
    </div>
    <div class="SARF-form--row">
      <input type="button" name="btnUpdateRecord" value="Update Record" id="btnUpdateRecord" class="btnupdaterecord SARF-button" disabled="">
      <input type="submit" name="btnSubmit" value="Submit" id="btnSubmit" class="submitbutton SARF-button">
      <div id="waitMessage" style="display: none;">
            <span id="lblProcessing">Processing... Please wait.</span>
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
      affSelection: 0,
      affiliations: [
        { value: 'Please Select' },
		    { value: 'DMID Branch/Offices' },
		    { value: 'DMID CROMS Team '},
		    { value: 'Site/Institution - Vaccine and Treatment Evaluation (VTEU)' },
		    { value: 'Site/Institution - Non-Vaccine and Treatment Evaluation (non-VTEU)' },
		    { value: 'None of the above' },
      ]
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
.SARF-request--body{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.SARF-form--row {
  display: flex;
  padding: 2px;
}
.SARF-form--row label {
  width: 180px;
}
.affiliation-menus {
  background-color: rgb(238, 238, 238)
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
input {
  height: 21px;
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
</style>
