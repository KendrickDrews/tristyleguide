<template>  
  <div class="resources-and-tools" id="RT">
    <div class="menu-row">
      <h4> Resources and Tools</h4>
      <button @click="myFunction()" class="dropbtn">                        
          <span id="RATFlip" class="fa-stack RATStack-Carets">
              <i  class="fa fa-stack fa-angle-double-down RATFlip"></i>              
          </span>          
      </button>
    </div>
    <div id="myDropdown" class="dropdown-content show">
      <ul>
      <li class="rt-nav-item"><a href="#contacts">Contacts</a></li>
      <li class="rt-nav-item"><a href="#about">DMID Information Sheets<br> Guidelines and Standards</a></li>
      <li class="rt-nav-item"><a href="#contact">Forms and Temp</a></li>
      <li class="rt-nav-item"><a href="#home">Hours of Operation</a></li>
      <li class="rt-nav-item"><a href="#about">NIAID CIERS</a></li>
      <li class="rt-nav-item"><a href="#contact">Related Links</a></li>
      <li class="rt-nav-item"><a href="#home">Support and FAQs</a></li>
      <li class="rt-nav-item"><a href="#about">Training</a></li>
      <li class="rt-nav-item"><a href="#contact"><img class="rt-image" src="src/imgs/Button_AdobeReader.png"></a></li>
      <li class="rt-nav-item"><a href="#contact"><img class="rt-image" src="src/imgs/Button_AdobeFlashPlayer.png"></a></li>
      </ul>
    </div>
  </div>
</template>

<script>  
 

  export default {
    components: {      
      
    },
    methods: {
      myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementById("RT").classList.toggle("short");
        document.getElementById("RATFlip").classList.toggle("fa-rotate-180");
      }
    }
  }
</script>
<style>
.menu-row {
  display: flex;
  flex-direction: row;
  color: #000;
  text-align: right;
  font-weight: bold;
  padding-top: 35px;
  padding: 5px;
}
.menu-row h4 {
  font-size: 11px;
  font-weight: bold;
    
}
.dropbtn{
  width: 19px;
  height: 17px;
  border-radius: 50%;
  margin: 5px;
  border: 1px solid #ccc;
  background-image: linear-gradient(to bottom, rgba(255,255,255, 0.75) 45%, transparent);
}
.dropdown-content {
  display: none;
}
.dropdown-content ul {
  margin-top: -4px;
}
.show {
  display: unset!important;

}
.rt-nav-item {
  min-height: 21px;
  display: flex;
  align-items: center;
  padding-right: 5px;
  padding-top: 3px;
  padding-bottom: 3px;
}
.rt-nav-item a {
border:none !important; 
color:#000!important;
margin:0 !important;
text-decoration:none !important;
text-align:right;
/*padding-right:5px;*/
outline: 0;
padding: 0px 0px;
font-size: 12.5px;
font-family: Calibri;
}
.rt-nav-item:hover {
  font-weight: bold;
}
.rt-image {
   height: 26px; 
   width: 100px; 
}
.RATStack-Carets {
  font-size: 1.2em;
  top: -8px;
  left: 0.5px;
}
.fa-rotate-180 {
  top: -11px;
}
.RATFlip {
  vertical-align: unset;
}
button:focus {outline:0;}
.short {
  height: 44px;
}
</style>