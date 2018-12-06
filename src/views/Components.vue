<template>  
  <div>
    <div class="outside-list">
      <div class="list">
        <FList/>
      </div>
    </div> 

    <div class="components-container">  

      <div 
        class="componentsPage"        
        v-for="(item, key) in componentList"
        v-bind:key="key"
        v-bind:id="item"      
      >
        
        <h1> #{{ item }} </h1> <hr/>

        <component :is="item"/>

      </div> 
    </div> 
  </div> 
</template>

<script>
  import componentList from '../components/componentList/componentList.js';
  import buttonList from '../components/componentList/buttonList.js';
  import FList from '../layouts/FList.vue';   
  import Colors from '../layouts/colors.vue';
  import Dropdowns from '../layouts/dropdownLayout.vue'; 
  import Buttons from '../layouts/buttonLayout.vue'; 
  import Input from '../layouts/inputLayout.vue';
  import Navigation from '../layouts/navigationLayout.vue';
  import Breadcrumbs from '../layouts/breadcrumbLayout.vue';
  import Pagination from '../layouts/paginationLayout.vue';
  import Labels from '../layouts/labelLayout.vue';
  import Badges from '../layouts/badgeLayout.vue';
  import Header from '../layouts/headerLayout.vue';
  import Thumbnails from '../layouts/thumbnailLayout.vue';
  import Alerts from '../layouts/alertLayout.vue';
  import Modals from '../layouts/modalLayout.vue';
  import MediaObject from '../layouts/mediaObjectLayout.vue';
  import Lists from '../layouts/listLayout.vue';
  import Panels from '../layouts/panelLayout.vue';  
  

  export default {
    name: 'Components',
    components: {      
      componentList,
      buttonList,
      FList, 
      Colors,
      Dropdowns,     
      Buttons,
      Input,
      Navigation,
      Breadcrumbs,
      Pagination,
      Labels,
      Badges,
      Header,
      Thumbnails,
      Alerts,
      Modals,
      MediaObject,
      Lists,
      Panels,
    }, 

    data: function() {
      return {
        componentList: componentList,
        buttonList: buttonList,                
      }
    }, 
    props: [
      
    ],
    computed:{     
      
    },
    mounted: function() {
      this.scrollReset(0);
    },
    methods:{  
      scrollReset (value) {
        var element = document.querySelector('#scrollContainer');
        return element.scrollTop = value;
      }    

    },
    
    
  
  }
</script>
<style scoped>
.components-container {
  position: relative;
  top: -1px;
  background-color: white;
}
.componentsPage {
  background-color: #fff;
  padding-top: 0px;
  margin-bottom: 200px; 
   
}
.componentsPage h1 {
  margin-bottom: 5px;
  margin-top: 0;
  font-size: 36px;
  color: rgba(0,0,0, 0.9);
}
.markup {
  background-color: #e6e6e6;
  min-height: 200px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  position:relative;
  top:0;
}
.markup-type {
  position: absolute;
  top: 5px;
  right: 2px;
}
.markup-type h5 {
  margin: 0;
  opacity: 0.5;
}
.outside-list {
  transition: 0.5s;
  position: absolute;  
  top: 0;  
  margin-left: 0;
}
.list {
  width: 120px;  
  background-color: white;
  position: relative;
  display: sticky;
  top: 120px;
  left: 1025px;
}


</style>
