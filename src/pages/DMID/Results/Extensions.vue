<template>
  <div  class="results--container">
    <div class="currentProtocol">
      <p> 04-0089 </p>
    </div>
    <div class="results-body--columnHeaders">
      <div class="form-Row">
                  <p class="form-text">Protocol <span class="red">*</span><span class="unset"> :</span></p> 
                  <form class="form-input">
                    <select name="Protocol" class="form-input">
                      <option value="volvo"> AAIPharma Inc.</option>
                      <option value="select">--Select Site Name--</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select> 
                  </form>
                </div>
                <div class="form-Row">
                  <p class="form-text">Type of Extension <span class="red">*</span><span class="unset"> :</span></p> 
                  <form class="form-input">
                    <select name="Protocol" class="form-input">
                      <option value="volvo">Certify New Use</option>
                      <option value="select">Certify Initial Approval</option>
                      <option value="saab">Extension for Good Cause</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
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
                  <p class="form-text">Extension Request by: <span class="red">*</span><span class="unset"> :</span></p> 
                  <form class="form-input">
                    <select name="Protocol" class="form-input">
                      <option value="volvo">Certify New Use</option>
                      <option value="select">Certify Initial Approval</option>
                      <option value="saab">Extension for Good Cause</option>                      
                    </select> 
                  </form>
                </div>
                <div class="form-Row">
                  <p class="form-text">Extension Requested Date:  <span class="red">*</span><span class="unset"> :</span></p> 
                  <input class="form-input" placeholder=" dolson@tech-res.com"/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Decision  <span class="red">*</span><span class="unset"> :</span></p> 
                  <form class="form-input">
                    <select name="Protocol" class="form-input">
                      <option value="volvo">Approved</option>
                      <option value="select">Rejected</option>
                      
                    </select> 
                  </form>
                </div>
                <div class="form-Row">
                  <p class="form-text">Decision Date  <span class="red">*</span><span class="unset"> :</span></p> 
                  <input class="form-input" placeholder=" 301-897-7142"/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Extension Approved by:  <span class="red">*</span><span class="unset"> :</span></p> 
                  <input class="form-input" placeholder=" 301-897-7142"/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Communications:  <span class="red">*</span><span class="unset"> :</span></p> 
                  <input class="form-input" placeholder=" 301-897-7142"/>
                </div>
                <div class="form-Row">
                  <p class="form-text">Comments:  <span class="red">*</span><span class="unset"> :</span></p> 
                  <div class="form-Final">
                  
                  <textarea class="form-input" rows="6" cols="80" name="comment" form="usrform">
                  </textarea>
                  
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
  import Modal from "../../../components/modalTemplate.vue";
  export default {
    name: 'Extensions',
    components: {      
      Modal,
    },
    data () {
      return {
        isModalVisible: false,        
        subSiteIs: this.$route.name,

      };
    },
///////
    computed: {     

    },
///////
    mounted: function () {
      
    },
///////
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },

    },
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
</style>

