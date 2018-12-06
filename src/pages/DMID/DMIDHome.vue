<template>
  <div class="DMID-main" style="width: 1000px; min-height: 953px; max-height: 953px; " >
    <div class="home-main" style="position: relative;">     

        <div class="row Row1">
          <div class="left">            
            <img src="../../imgs/DMIDCROMS_BrandGraphic_Home.png"/>            
          </div>
          <div class="right">
            <h3> WELCOME TO THE DMID-CROMS WEBLIBRARY </h3>
            <p>This site provides a central resource to the DMID and extramural investigators to facilitate/support the conduct and management of clinical research. It also provides a Web-based repository of research resources and standardized procedures for all activities for the conduct of clinical research. Please note: Access to some of the DMID-CROMS WebLibrary content is restricted. In addition to requiring authorized user sign-in, additional content-specific user privileges may limit access.</p>
          </div>
        </div>

        <div class="row Row2">
          <div class="left">
          </div>
          <div class="right">
          </div>
        </div>

        <div class="row Row3">
          <div class="left">
          </div>
          <div class="right">
            </div>
        </div>

        <div class="row Row4">
          <div class="left">
          </div>
          <div class="center">
          </div>
          <div class="right">
          </div>
        </div>

        <div class="main-footer">
          <!-- Branding Nav -->
          <div class="brandingNav">
              <div class="external">
                  <img src="../../imgs/HHS-NIH_NIAID_LogoSet_Web-Small_Black.png">
              </div>
              <div class="policy">
                  <a href="#">Privacy Policy</a>
                  <hr class="vertical">
                  <a href="#">Disclaimers</a>
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
    computed: {
      stateComponent: {
        get: function() {
          return this.$root.store.state.activeComponent 
        },
        set: function(value) {
          this.$root.store.commit('isActiveComponent', value )
        }
      },
    },
///////
    mounted: function () {      
      this.stateActiveComponent('');
    },
    methods: {
      stateActiveComponent (value) {
      return  this.stateComponent = value
      }
    },
  }
</script>
<style>
body {
  background-color: rgb(52, 94, 192)!important; 
}

.home-main {
  min-height: 953px;
  max-height: 953px;
  position: relative;
  background-color: white;
  padding: 30px;
}

.locationContainer {
  background-color: rgb(52, 94, 192)!important;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 35% ,rgba(0, 0, 0, 0.1) 55%,rgba(255,255,255,0.9)85%,rgba(255,255,255,1)95%)!important;
}
.SR {
  color:  rgb(52, 94, 192)!important; 
}
.mainContent {
  padding: 10px 20px 10px 10px!important;
  font-family: calibri!important;
}
.row {
  width: 100%;  
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

}
.Row1 {  
  height: 142px;
}
.Row1 .left {
  height: 102px;
  padding-right: 25px;
  border-right: 2px solid #999; 
}
.Row1 .right {
  height: 129px;
  width: 565px;
  padding-right: 10px;
  padding-left: 25px;
 
}
.Row1 .right h3 {
  font-family: 'Cinzel';
  font-size: 20px;
  line-height: 27px;
  color: #262a9a;
  font-weight: bold;
  margin: 0;
}
.Row1 .right p {
  margin: 0;
  font-family: Calibri;
  font-size: 14px;
}
.Row2 {  
  height: 191px;
  margin: 15px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-image: linear-gradient(to bottom, transparent , #e9e9e9 35%,#e9e9e9 65%, transparent );
}
.Row3 {
  background-color: lightcoral;
  height: 156px;
}
.Row4 {
  background-color: aqua;
  height: 325px;
}
.main-footer {
  min-height: 49px;
  max-height: 49px;
}
.main-footer .brandingNav {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  height: 49px;
  padding-top: 6px;
  
}
.policy {
  display: flex;
  flex-direction: row;
  line-height: 3.9em;
  font-size: 11px;
  font-weight: bold;
  vertical-align: middle;
  flex-wrap: nowrap;
  align-items: baseline;
}
.policy .vertical {
  height: 27%;
}
.main-location {
  
}

</style>
