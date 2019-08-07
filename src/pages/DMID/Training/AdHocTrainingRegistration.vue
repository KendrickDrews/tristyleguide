<template>
  <div class="flex">
    <div class="mainContent">
      <div class="training-form--row">
        <div class="training-form--label">
          <p>Course Title:</p>
        </div>
        <div class="training-form--input">
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
      </div> 
      <div class="training-form--row">
        <div class="training-form--label">
          <p>Date:</p>
        </div>
        <div class="training-form--input">
          <div class="training-form--row">
            <input class="form-input calendar-input" placeholder="01/01/2018"/>
            <img src="../../../imgs/calendar.gif" alt="Calendar" class="calendar-push" height="25px" width="25px"/>
            <form>
              <select name="Protocol" class="form-input--date">
                <option value="select">00</option>
                <option value="volvo"> AAIPharma Inc.</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </form>
            <form>
              <select name="Protocol" class="form-input--date">
                <option value="select">00</option>
                <option value="volvo"> AAIPharma Inc.</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </form>
          </div>
          <div class="training-form--row no-pad">
            <input class="form-input calendar-input" placeholder="01/01/2018"/>
            <img src="../../../imgs/calendar.gif" alt="Calendar" class="calendar-push" height="25px" width="25px"/>
            <form>
              <select name="Protocol" class="form-input--date">
                <option value="select">00</option>
                <option value="volvo"> AAIPharma Inc.</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </form>
            <form>
              <select name="Protocol" class="form-input--date">
                <option value="select">00</option>
                <option value="volvo"> AAIPharma Inc.</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div class="training-form--row">
        <div class="training-form--label">
          <p>Institution:</p>
        </div>
        <div class="training-form--input">
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
      </div>
      <div class="training-form--row">
        <div class="training-form--label">
          <p>Training:</p>
        </div>
        <div class="training-form--input">
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
      </div> 
      <div class="training-form--row button-row">
        <button class="training-button"> Filter </button>
        <button class="training-button"> Clear </button>
      </div> 
    </div> 
  </div>
</template>

<script>

export default {
  name: 'AdHocTrainingRegistration',
  components: {

  },
  data () {
    return {

    }
  },
  /// ////
  computed: {
    stateTitle: {
      get: function () {
        return this.$root.store.state.siteTitle
      },
      set: function (value) {
        this.$root.store.commit('isSiteTitle', value)
      }
    }
  },
  /// ////
  mounted: function () {
    this.$nextTick(function () {
      this.stateActiveTitle('Ad-Hoc-Training-Registration')
    })
  },
  /// ////
  methods: {
    stateActiveTitle (value) {
      return this.stateTitle = value
    },
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    }

  }
}

</script>
<style scoped>
.flex {
  width: 100%;
  display: flex;
}
.mainContent {
  width: 100%;
}
.training-form--row {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  padding-bottom: 5px;
  margin-left: 125px;
}
.no-pad {
  padding: unset;
}
.training-form--row input, 
.form-input select,
.training-form--row form,
.training-form--input div {
  margin: 0px 5px 0px 5px;
}

.training-form--label {
  display: flex;
  width: 20%;
  font-weight: bold;
}
.training-form--input {
  display: flex;
  flex-direction: column;
  width: 82%;
}
form, select {
  height: 25px;
  color: #777;
}
.form-input {
  width: 77%;  
}
.form-input--date {
  width: 40px;
  vertical-align: sub;  
}
.calendar-input {
  width: 14%;
  padding: 3px 7px;
}
.button-row {
  width: 69%;
  justify-content: flex-end;
}
.training-button {
  height: 30px;
  padding: 3px;
  width: 75px;
  margin: 0 5px 0 10px;
  background-color: white;
  border: 1px solid #777;
}
.training-button:hover {
  border-color: teal;
}
.training-button:focus {
  border-color: #666;
}
</style>
