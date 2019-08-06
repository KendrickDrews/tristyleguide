<template>
  <div>
    <p style="padding: 10px 20px 10px 40px;"> Please submit any Ad Hoc DMID-CROMS training request using the form below for any training needs not found within the LMS </p>
            <br/>
          <div class="forms F01">
                <div class="form-Row">
                  <p class="form-text">Requestor's Name<span class="unset"> :</span><span class="red"> *</span></p>
                  <!-- <input class="form-input" placeholder=" Olson, Dorie"/> -->
                  <input class="form-input" placeholder=""/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Requestor's Email<span class="unset"> :</span><span class="red"> *</span></p>
                  <!-- <input class="form-input" placeholder=" dolson@tech-res.com"/> -->
                  <input class="form-input" placeholder=""/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Requestor's Phone<span class="unset"> :</span><span class="red"> *</span></p>
                  <!-- <input class="form-input" placeholder=" 301-897-7142"/> -->
                  <input class="form-input" placeholder=""/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Site Name<span class="unset"> :</span><span class="red"> *</span></p>
                  <form class="form-input">
                    <select name="Protocol" class="form-input">
                      <option value="select">-- Select Site Name --</option>
                      <option value="volvo"> AAIPharma Inc.</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                  </form>
                </div>
                <div class="form-Row">
                  <p class="form-text">Site Principal Investigator<span class="unset"> :</span><span class="red"> *</span></p>
                  <!-- <input class="form-input" placeholder=" Dr. Gregory Storch"/> -->
                  <input class="form-input" placeholder=""/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Request Type<span class="unset"> :</span><span class="red"> *</span></p>
                  <form class="form-input">
                    <select name="Protocol" class="form-input">
                      <option value="select">-- Select Request Type --</option>
                      <option value="volvo">Web Conference</option>
                      <option value="saab">In-Person</option>
                      <option value="fiat">On-Demand</option>
                      <option value="audi">Job Aid (Ex. Brochures, Infographics)</option>
                      <option value="fiat">Quick Start Guide</option>
                    </select>
                  </form>
                </div>
                <div class="form-Row" v-show="inPerson">
                  <p class="form-text">Location Proposed for Training<span class="unset"> :</span><span class="red"> *</span></p>
                  <!-- <input class="form-input" placeholder=" Dr. Gregory Storch"/> -->
                  <input class="form-input" placeholder=""/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Training Topic Area<span class="unset"> :</span><span class="red"> *</span></p>
                  <!-- <input class="form-input" placeholder=" Dr. Gregory Storch"/> -->
                  <input class="form-input" placeholder=""/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Protocol Number/Title<span class="unset"> :</span><span class="red"> *</span></p>
                  <!-- <input class="form-input" placeholder=" Dr. Gregory Storch"/> -->
                  <input class="form-input" placeholder=""/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Calendar<span class="unset"> :</span><span class="red"> *</span></p>
                  <input class="form-input calendar-input" placeholder="01/01/2018"/>
                  <!-- <input type="date" id="start" name="trip-start"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31"> -->
            <img src="../../../imgs/calendar.gif" alt="Calendar" class="calendar-push" height="25px" width="25px"/>
                </div>

                <div class="form-Row">
                  <p>Select a date to indicate a desired completion date for your training. However, please note that the actual training completion date will depend on the scope and requirements of your training request.</p>

                </div>
                <br/>
                <!-- <div>
                  <p class="form-text" style="width: 94%">What is the goal for the training?</p>
                  <div class="form-Final">
                    <textarea class="form-input" rows="6" cols="80" name="comment" form="usrform">
                    </textarea>
                  </div>
                </div>
                <br/> -->
                <!-- <div>
                  <p class="form-text"  style="width: 94%">What are the expected learner/participant outcomes for the training? (give 2 to 3 expectations)</p>

                  <div class="form-Final">
                    <textarea class="form-input" rows="6" cols="80" name="comment" form="usrform">
                    </textarea>
                  </div>
                </div>
                <br/> -->
                <div>
                  <p class="form-text"  style="width: 94%">What triggered the need for this training?</p>

                  <div class="form-Final">
                    <textarea class="form-input" rows="6" cols="80" name="comment" form="usrform">
                    </textarea>
                  </div>
                </div>
                <br/>
                <div>
                  <p class="form-text"  style="width: 94%">Who is the target audience?</p>

                  <div class="form-Final">
                    <textarea class="form-input" rows="6" cols="80" name="comment" form="usrform">
                    </textarea>
                  </div>
                </div>
                <br/>
                <!-- <div>
                  <p class="form-text"  style="width: 94%">What is the expected training delivery date?</p>

                  <div class="form-Final">
                    <textarea class="form-input" rows="6" cols="80" name="comment" form="usrform">
                    </textarea>
                  </div>
                </div>
                <br/> -->
                <div>
                  <p class="form-text"  style="width: 94%" v-if="inPerson">Please provide any additional detail to describe the training needs or circumstances not met by the currently available DMID-CROMS training courses within the LMS. Please provide justification for In-Person Training</p>

                  <p class="form-text"  style="width: 94%" v-else>Please provide any additional detail to describe the training needs or circumstances not met by the currently available DMID-CROMS training courses within the LMS.</p>

                  <div class="form-Final">
                    <textarea class="form-input" rows="6" cols="80" name="comment" form="usrform">
                    </textarea>
                  </div>
                </div>

                <!-- <div class="btn-row">
                <button class="submit-Btn"> Save </button>
                  <button class="submit-Btn"> Email </button>
                  </div> -->
<!--
                <div class="adminView">
                  -->
<!--            <p> To view details of the Request submitted for approval, <a> Click here</a> (<strong> Note:</strong> The Request will display in a separate window.) </p>
                    <br/>
                    -->
<!--              <p> To accept or reject the Request, select the decision and provide your comments.</p>
                    <br/>
                <div class="decisions" style="padding-left: 40%">
                  <p  style="margin-right: 33px;" class="form-text">Decision<span class="unset"> :</span></p>
                  <input type="checkbox" id="scales" name="scales">
                  <label  for="scales" style="font-weight: unset;margin-right: 15px;">Approved</label>
                  <input type="checkbox" id="scales" name="scales">
                  <label for="scales" style="font-weight: unset;">Rejected</label>
                </div>
                    <div class="forms F01">
                <div class="form-Final" style="justify-content: unset; margin-left: 33.4%; margin-top: 10px;">
                  <p class="form-text">Comments<span class="unset"> :</span></p>
                  <textarea style="width: 312px; margin-left: 33px" class="form-input" rows="6" cols="20" name="comment" form="usrform">
                  </textarea>
                </div>
                </div>

              </div>
              -->
              </div>
              <div class="form-Row">
            <button class="submit-Btn" style="margin-top: 10px;"> Submit </button>
            </div>
  </div>
</template>

<script>

export default {
  name: 'Training',
  components: {

  },
  data () {
    return {
      inPerson: true
    }
  },
  /// ////
  computed: {
    thisSite: function () {
      return this.subSiteIs
    },
    stateComponent: {
      get: function () {
        return this.$root.store.state.activeComponent
      },
      set: function (value) {
        this.$root.store.commit('isActiveComponent', value)
      }
    },
    stateTitle: {
      get: function () {
        return this.$root.store.state.siteTitle
      },
      set: function (value) {
        this.$root.store.commit('isSiteTitle', value)
      }
    },
    stateType: {
      get: function () {
        return this.$root.store.state.siteType
      },
      set: function (value) {
        this.$root.store.commit('setSiteType', value)
      }
    },

    isActive () {
      return this.href === this.$root.currentRoute
    }

  },
  /// ////
  // beforeMount: function () {
  //  this.stateActiveComponent('Service-Requests-Home')
  // },
  /// ////
  mounted: function () {
    this.$nextTick(function () {
      this.stateActiveTitle('Ad-Hoc-Training-Request-Form')
    }),
    this.setStateSubSite()
    this.stateActiveComponent('Training')
    this.scrollReset(0)
    this.stateSiteType('ServiceRequests')
  },
  /// ////
  methods: {
    stateActiveTitle (value) {
      return this.stateTitle = value
    },
    stateActiveComponent (value) {
      return this.stateComponent = value
    },
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    setStateSubSite: function (thisSite) {
      const DMIDSite = this.thisSite
      return this.stateSubSite(this.thisSite)
    },
    stateSubSite (value) {
      return this.subSite = value
    },
    stateActiveComponent (value) {
      return this.stateComponent = value
    },
    scrollReset (value) {
      var element = document.querySelector('#scrollContainer')
      return element.scrollTop = value
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
      return this.stateType = value
    }

  }
}

</script>
<style>
.calendar-push {
  position: absolute;
    left: 661px;
}
.calendar-input {
  padding-left: 5px;
    width: 82px;
    margin-right: 230px;
}
.main-headSearch h4{
  color: #2a469d;
}
.main-location {
  color: rgb(52, 94, 192);

}
.locationContainer {
  background-color: rgb(62, 151, 253);
}
.mainContent {
  padding: 0px 10px 10px 0px!important;
  font-family: calibri!important;
  width: 100%;
}
.bodyText {
  font-family: Calibri;
}
.indent li  {
  font-size: 13.5px;
  font-family: Calibri;
  padding: 2px 0;
  font-weight: bold;
  list-style: none;
}
.indent2x {
  margin-left: 45px;
}
.indent2x li  {
  font-size: 13.5px;
  font-family: Calibri;
  padding: 2px 0;
  font-weight: bold;
  list-style: disc;
}

.titleHead {
  color:#244f1e;
  font-weight: bold;
  font-size: 15px;
  margin-left: -15px;
  font-family: Verdana;
}
.gray {
  background-color: #ccc;
}
.break {
  height: 14px;
}
.F01 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding-left: 40px;

}
.form-Row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  padding-bottom: 3px;
  margin: 0;
}
.form-text {
  font-weight: bold;
  margin: 0;
}
.form-Row .form-input {
  width: 312px;
  height: 23px;
  color: #777;
}

.input-column {
  width: 312px;
  height: 20px;
  color: #777;
}
.red {
  color: red;
}
.unset {
  font-weight: unset;
}
.F02 {
  height: 350px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.column {
  width: 41%;
  margin-right: 25px;
}
.form-Column {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  padding-bottom: 0px;
  margin: 0px;
  margin-bottom: 2px;
}
.form-Final {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 94%;
  padding-bottom: 3px;
  margin: 0;
}
.form-Final .form-input {
  width: 100%;
  color: #777;
}
.form-Column-Btn {
  height: 70px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-bottom: 0px;
  margin: 0px;
  margin-top: 70px;
}
.form-Btn {
  width: 200px;
  height: 26px;
  margin-bottom: 5px;
}
.btn-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 663.84px;
  margin-top: 15px;
  justify-content: center;
}
.submit-Btn {
  width: 150px;
  height: 23px;
  margin: 0 auto;
  /*margin-left: 2%;
  margin-bottom: 20px;*/
}
#scrollTable {
  width: 100%;
  overflow:scroll;
  height: 574px;
  border: 1px solid #9F9F9F;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 768px;
  margin-top: -1px;
  margin-left: -1px;
  border: 1px solid #9F9F9F;
}
table thead tr {
  display:block;
}
table tbody {
  display: block;
  overflow: auto;
}
.tableHeader {
  margin: 2px 8px ;
}
.short {
  width: 100px;
}
.long {
  width: 180px;
}
th {
  background-color: #DCDCDC;
  border: 1px solid #9F9F9F;
  height: 37px;
}
td, th {
  font-weight: normal;
  text-align: left;
  padding: 0px;

}
td {
  border: 1px solid #dddddd;
  padding: 3px 6px 4px;
  min-height: 50px;
}
tr:nth-child(even) {
  background-color: #EDEDEB;
}
.visible-scrollbar, .invisible-scrollbar, .mostly-customized-scrollbar {
  display: block;
  width: 10em;
  overflow: auto;
  height: 2em;
}
.mostly-customized-scrollbar::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #aaa; /* or add it to the track */
}
.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
  background: #000;
}

.pagination {
  display: inline-block;
  border-left: 1px solid #9F9F9F;
  border-right: 1px solid #9F9F9F;
  border-bottom: 1px solid #9F9F9F;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.decisions {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>
