<template>
  <div class="flex">
      <div>
              <p class="form-text" style="margin-bottom: 10px;">The information provided on this Training page applies to all sites and to all key personnel engaged in DMID-supported clinical research.</p>
              <br/>
              <h3 class="lmsTitle">TRAINING AND LEARNING MANAGEMENT SYSTEM (LMS)</h3>
              <br/>
              <p>Training courses are now available through the LMS allowing authorized users to access Course Completion Certificates and transcripts through a user-friendly interface. To access the LMS, please select the following button: </p>
              <br/>
              <div class="LMS">
                <h4 align="center" style="font-weight: normal; font-size: 16px;"> Enter the <strong>Training and Learning Management System (LMS) </strong> </h4>
              </div>
              <br/>
              <p>Please reference the <a>LMS Quick Start Guide</a> for assistance with navigating through the LMS.</p>
              <br />
            <!-- <p>To request additional Web Conference, In-Person or On-Demand training not found within the Learning Management System, please use the Ad Hoc Training Request Form found in the Services and Tools menu on the right side of this page.</p> -->
              <p><em><strong>New</strong></em></p>
              <p>Effective August 26, 2019, a new version of <em>45 CFR Part 46 - Protection of Human Subjects</em> will be available on the LMS. You will no longer have access to the separate courses, <em>45 CFR Part 46</em>, and <em>Informed Consent.</em></p>
              <p><br />The new course covers the revised Common Rule and regulations in place under 45 CFR 46 for protecting the safety and welfare of prospective participants in clinical research, and includes a detailed section on the informed concent process and requirements.</p>
              <br />
              <p><strong>Important note: </strong></p>

            <!-- <p>
Sites should maintain current documentation of completed trainings for all courses required by the Division of Microbiology and Infectious Diseases (DMID), the National Institutes of Health (NIH), National Institute of Allergy and Infectious Diseases (NIAID).</p> -->
              <p>Sites should maintain training records for all courses required by the Division of Microbiology and Infectious Diseases (DMID), the National Institutes of Health (NIH), National Institute of Allergy and Infectious Diseases (MIAID). Documentation of training should be current and retained on site.</p>

              <br/>
              <hr style="width: 100%; margin-bottom: 20px;">
              <p><strong> Other training requirements: </strong> </p>
              <br/>
              <p>All investigators and site staff responsible for the conduct, management and oversight of NIH-funded clinical trials are required to complete training in the protection of human research participants and Good Clinical Practice (GCP). </p>
              <br/>
              <p>Training may be completed through a class or course, academic training program, or certification from a recognized clinical research professional organization. GCP refresher training should be completed at least every three years in order for applicable site staff to remain current with regulations, standards and guidelines.</p>
              <br/>
              <p>The NIAID GCP and NIH Protecting Human Research Participants training may be accessed via the links provided, below, or per site institutional requirements. Please retain the certificate of completion at the end of the training course. The NIH Protecting Human Research Participants course will no longer be available after September 26, 2018. Please complete the course and/or print your certificate by this date. As of September 27, 2018, please refer to your institution, professional organization, or other training program for equivalent training, and retain certificates of courses completed.</p>
              <br/>
              <div class="trainingCourses">
                <div class="courseRow">
                  <div style="width: 70px; margin-right: 8px;">
                    <p> <strong> Courses </strong> </p>
                  </div>
                  <div style="width: calc(100% - 80px);">
                    <p> <strong> Description </strong> </p>
                  </div>
                </div>
                <br/>
                <div class="courseRow">
                  <div style="width: 70px; margin-right: 8px;">
                    <a> Good Clinical Practice  </a>
                  </div>

                  <div style="width: calc(100% - 80px);">
                    <p>This course is offered by NIAID and covers the scientific and ethical standards of human subject research, including NIH, FDA, HHS, and international clinical trial policies, guidelines, and regulations. For detailed information, please refer to the NIH Policy on Good Clinical Practice Training for NIH Awardees Involved in NIH-funded Clinical Trials.​​ </p>
                  </div>
                  </div>
                  <br/>
                <div class="courseRow">
                  <div style="width: 70px; margin-right: 8px;">
                    <a>Protecting Human Research Participants</a>
                  </div>
                  <div style="width: calc(100% - 80px);">
                    <p>This course is offered by the NIH Office of Extramural Research. Your institution/IRB/IEC equivalent training is also  acceptable. </p>
                  </div>
                </div>
              </div>
          </div>
    <div class="servicesAndTools">
            <h4> SERVICES AND TOOLS </h4>
              <ul class="servicesTools-List">
                  <!-- <li class="servicesTools-Item">Ad hoc Training Request Report</li>
                  <li class="servicesTools-Item">Ad Hoc Training Request Form</li>
                  <li class="servicesTools-Item">Ad Hoc Training Registration</li> -->
                  <!-- <li class="servicesTools-Item">Ad Hoc Training Request Approval</li> -->
                  <li class="servicesTools-Item">Training Report</li>
                  <li class="servicesTools-Item">Request Training Services</li>
                  <router-link :to="{name: 'AdHocTrainingRegistration'}" tag='li' class="servicesTools-Item">Registration Report/Training Logs</router-link>
                  <li class="servicesTools-Item">Training FAQ</li>
                  <li class="servicesTools-Item">Request for Services Approval</li>
              </ul>
          </div>
  </div>
</template>

<script>

export default {
  name: 'TrainingHome',
  components: {

  },
  data () {
    return {
      active: 'TrainingHome',
      subSiteIs: 'Training'
    }
  },
  watch: {
    active: function () {
      function kebabCase (value, separator, connector) {
        if (!value) return ''
        var stringArray = value.split(separator)
        return stringArray.join(connector)
      }
      var string = this.active.text
      var componentString = kebabCase(string, ' ', '-')
      return this.$root.store.commit('isActiveComponent', componentString)
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
    },
    activeComponent: function () {
      return this.active.text
    },
    stateComponent: {
      get: function () {
        return this.$root.store.state.activeComponent
      },
      set: function (value) {
        this.$root.store.commit('isActiveComponent', value)
      }
    },
  },
   /// ////
  beforeMount: function () {
    this.stateActiveComponent('TrainingHome')
  },
  /// ////
  mounted: function () {
    this.$nextTick(function () {
      this.stateActiveTitle('Training')
    }),
    this.stateActiveComponent('TrainingHome')
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
    },
    stateActiveComponent (value) {
      return this.stateComponent = value
    },

  }
}

</script>
<style>
.flex {
    display: flex;
}
.locationContainer {
  background-color: var(--green-background);
  background-image: var(--content-gradient);
  display: flex;
  align-content: center;
  min-height: 50px;
  margin: 0;
}
.main-location {
  color: var(--green-header);
}

.main-headSearch h4 {
  color: var(--green-header);
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
}
.form-Row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 85%;
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
  width: 85%;
  padding-bottom: 3px;
  margin: 0;
}
.form-Final .form-input {
  width: 312px;
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
.submit-Btn {
  width: 150px;
  height: 26px;
  margin-left: 40%;
}
.lmsTitle {
    font-family: Verdana;
    font-size: 16px;
    text-align: center;
    color: #244f1e;
}
.LMS {
    background-color: #4f81bd;
    border: 2px solid #003471;
    border-radius: 6px;
    width: 445px;
    height: 33px;
    line-height: 2em;
    vertical-align: center;
    margin: 0 auto;
}
.LMS h4 {
    color: white;
}
.courseRow {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
}
</style>
