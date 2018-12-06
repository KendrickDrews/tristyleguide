<template>  
<!-- DEPRECIATED :: You're looking for DMID RnT -->
  <div class="resources-and-tools">
      <div class="menu-row">
      <h4> Resources and Tools</h4>
      <button onclick="myFunction()" class="dropbtn">
          <span class="fa-stack RATStack">
              <i class="fa fa-circle-thin fa-stack-2x RATButton"></i>
              <span id="RATFlip" class="fa-stack RATStack-Carets">
              <i  class="fa fa-angle-up RATFlip"></i>
              <i  class="fa fa-angle-up RATFlip"></i>
          </span>
          </span>
      </button>
  </div>
  <div id="myDropdown" class="dropdown-content show">
      <ul>
      <li><a href="#contacts">Contacts</a></li>
      <li><a href="#about">DMID Information Sheets<br>\ Guidelines and Standards</a></li>
      <li><a href="#contact">Forms and Temp</a></li>
      <li><a href="#home">Hours of Operation</a></li>
      <li><a href="#about">NIAID CIERS</a></li>
      <li><a href="#contact">Related Links</a></li>
      <li><a href="#home">Support and FAQs</a></li>
      <li><a href="#about">Training</a></li>
      <li><a href="#contact"><img src="imgs/Button_AdobeReader.png" ></a></li>
      <li><a href="#contact"><img src="imgs/Button_AdobeFlashPlayer.png"></a></li>
      </ul>
  </div>
  </div>  
</template>

<script>  
  export default {
    components: {     
      
    }
  }
</script>
<style src="../styles/main.css"></style>