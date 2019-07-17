<template>
  <div  class="results--container">
    <div class="currentProtocol">
      <p> 04-0089 </p>
    </div>
    <div class="results-body--columnHeaders">
      <div class="form-Row">
                  <p class="form-text">Protocol Number:</p>
                  <form class="form-input">
                    <select name="Protocol" class="form-input">
                      <option value="PleaseSelect"> Please Select </option>
                      <option
                      v-for="n in protNumber"
                      v-bind:key="n"
                      v-bind:value="n"
                      > {{ generateProtocolNumber() }}
                      </option>
                    </select>
                  </form>
                </div>
      <div class="form-Row">
        <p class="form-text">Type of Extension:</p>
        <form class="form-input">
          <select name="Protocol" class="form-input">
            <option value="PleaseSelect"> Please Select </option>
            <option value="volvo">Certify New Use</option>
            <option value="select">Certify Initial Approval</option>
            <option value="saab">Extension for Good Cause</option>
          </select>
        </form>
      </div>
    </div>
    <div class="results-body--ColumnContent">
      <div  class="header-section">
          <img class="img-header--section" src="../../../imgs/up_arrow.gif"/>
          <p> Protocol Number - Type of Extension</p>

        </div>
      <div class="main-bodyContent">
          <div class="bodyContent">
          <div class="mainContent ">
          <div class="forms F01">
                <div class="form-Row">
                  <p class="form-text">Extension Request by:</p>
                  <form class="form-input">
                    <select name="Protocol" class="form-input">
                      <option value="volvo">Dorie Olson</option>
                      <option value="select">Perry Gonella</option>
                      <option value="saab">Kendrick Drews</option>
                    </select>
                  </form>
                  <!-- <form class="form-input gray">
                    <select name="Protocol" class="form-input gray">
                      <option value="volvo">Dorie Olson</option>
                      <option value="select">Perry Gonella</option>
                      <option value="saab">Kendrick Drews</option>
                    </select>
                  </form> -->
                </div>
                <div class="form-Row">
                  <p class="form-text">Extension Requested Date:</p>
                  <input class="form-input" placeholder="09-Mar-2019"/>
                  <!-- <input class="form-input gray" placeholder="09-Mar-2019"/> -->
                  <img style="position: relative; top: 6px;" src="../../../imgs/calendar.gif"/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Decision:</p>
                  <form class="form-input">
                    <select name="Protocol" class="form-input">
                      <option value="volvo">Approved</option>
                      <option value="select">Rejected</option>
                    </select>
                  </form>
                  <!-- <form class="form-input gray">
                    <select name="Protocol" class="form-input gray">
                      <option value="volvo">Approved</option>
                      <option value="select">Rejected</option>
                    </select>
                  </form> -->
                </div>
                <div class="form-Row">
                  <p class="form-text">Decision Date:</p>
                  <input class="form-input" placeholder="01-Apr-2019"/>
                  <!-- <input class="form-input gray" placeholder="01-Apr-2019"/> -->
                  <img style="position: relative; top: 6px;" src="../../../imgs/calendar.gif"/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Extension Approved by:</p>
                  <input class="form-input" placeholder="Kendrick Drews"/>
                  <!-- <input class="form-input gray" placeholder="Kendrick Drews"/> -->
                </div>
                <div class="form-Row">
                  <p class="form-text">Communications:</p>
                  <input class="form-input" placeholder="Emails"/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Comments:</p>
                  <div class="form-Final">
                  <textarea class="form-input" rows="6" cols="80" name="comment" form="usrform" placeholder="(Character limit = 5000)">

                  </textarea><!-- <textarea class="form-input gray" rows="6" cols="80" name="comment" form="usrform" placeholder="(Character limit = 5000)"> -->

                </div>
                </div>
                <div class="btn-row">
                  <button class="submit-Btn"> Edit </button>
                  <button class="submit-Btn"> Save </button>
                  <button class="submit-Btn"> Cancel </button>
                </div>

              </div>

          </div>
        </div>
    </div>
    </div>
  </div>

</template>

<script>
import Modal from '../../../components/modalTemplate.vue'
export default {
  name: 'Extensions',
  components: {
    Modal
  },
  data () {
    return {
      isModalVisible: false,
      subSiteIs: this.$route.name,
      protNumber: 10

    }
  },
  /// ////
  computed: {

  },
  /// ////
  mounted: function () {

  },
  /// ////
  methods: {
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    getRandomInt: function (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min // The maximum is inclusive and the minimum is inclusive
    },
    generateProtocolNumber: function () {
      var XX = '0' + this.getRandomInt(0, 9)
      var XXXX = '00' + this.getRandomInt(0, 9) + this.getRandomInt(0, 9)
      return [XX, XXXX].join('-')
    }

  }
}

</script>

<style scoped>
.results--container {
  position: relative;
  padding: 10px;
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
.results-body--columnHeaders {
margin-bottom: 25px;
}
.form-Row {
      width: 50%;
    display: inline-block;
}
.form-text {
  display: inline-block;
  width: 42%;
  color: #999999;
    font-family: Verdana;
    font-size: 10pt;
    font-weight: bold;
}
.form-input {
  display: inline-block;
  color: #666666;
    font-family: Verdana;
    font-size: 10pt;
    font-weight: bold;
}
.vertical-spacer{
  width: 0px;
  height: 13px;
  border-left: 1px solid black;
  margin: 2px 5px;
}
.header-section {
  margin: 0 auto;
  padding: 2px 2px 2px 6px;
  font-weight: bold;
  font-size: 10pt;
  font-family: Verdana;
  color: White;
  border-width: 1px;
  border-style: Solid;
  border-color: Black;
  background-color: #728776;
  text-align: left;
  margin-bottom: 10px;
}
.header-section p {
  display: inline-block;
  margin: 0;
}
.header-section img {
  position: relative;
  top:2px;
  left: 975px;
}
.btn-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 25px 0px 15px 0px;
}
.submit-Btn {
  margin-left: 20px;
  width: 60px;
}
.gray {
  background-color: #ccc;
}
</style>
