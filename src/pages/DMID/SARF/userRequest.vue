<template>
<div class="SARF-request--body">
  <div class="SARF-form--row">
    <label for="ddlReqType"><strong>Request Type<span class="error">*</span>:</strong></label>
    <select name="ddlReqType" id="ddlReqType" class="required reqtype" style="width:264px;">
				<option value="">Please Select</option>
				<option value="1">New Account</option>
				<option value="2">Account Update</option>
				<option value="3">Account Deactivation</option>
				<option value="4">Reactivate Account</option>

			</select>
  </div>
  <div class="SARF-form--row">
    <label for="txtEMail"><strong>Email Address<span class="error">*</span>:</strong></label>
    <input name="txtEMail" type="text" id="txtEMail" class="txtEmail email required" style="width:260px;" disabled="">
  </div>
  <div class="SARF-form--row">
    <label for="txtEmailOther"><strong>Reason, if other:</strong></label>
    <textarea name="txtEmailOther" rows="2" cols="20" id="txtEmailOther" onkeydown="limitText(this,750);" onkeyup="limitText(this,750);" style="height:80px;width:400px;"></textarea>
  </div>
  <div class="SARF-form--row">
    <label for="txtFName"><strong>First Name<span class="error">*</span>:</strong></label>
    <input name="txtFName" type="text" id="txtFName" class="required fname" style="width:260px;">
    <label for="txtMName"><strong>Middle Name:</strong></label>
    <input name="txtMName" type="text" maxlength="10" id="txtMName" class="mname" style="width:100px;">
  </div>
  <div class="SARF-form--row">
    <label for="txtLName"><strong>Last Name<span class="error">*</span>:</strong></label>
    <input name="txtLName" type="text" id="txtLName" class="required lname" style="width:260px;">
  </div>
  <div class="SARF-form--row">
    <label for="txtPhone"><strong>Phone<span class="error">*</span>:</strong></label>
    <input name="txtPhone" type="text" id="txtPhone" class="required phone" style="width:260px;">
  </div>
  <div class="SARF-form--row">
    <label for="txtTitle"><strong>Title/Role<span class="error">*</span>:</strong></label>
    <input name="txtTitle" type="text" id="txtTitle" class="required trole" style="width:260px;">
  </div>
  <div class="SARF-form--row">
    <label for="ddlAffiliation"><strong>Affiliation<span class="error">*</span>:</strong></label>
    <select name="ddlAffiliation" id="ddlAffiliation" class="affiliation required" style="width:450px;">
		<option value="">Please Select</option>
		<option value="2">DMID Branch/Offices</option>
		<option value="6">DMID CROMS Team</option>
		<option value="4">Site/Institution - Vaccine and Treatment Evaluation (VTEU)</option>
		<option value="3">Site/Institution - Non-Vaccine and Treatment Evaluation (non-VTEU)</option>
		<option value="5">None of the above</option>
	</select>
  </div>
</template>
<script>
export default {
    components: {

  },

  data: function () {
    return {

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
    }
  }
}
</script>
<style scoped>
</style>
