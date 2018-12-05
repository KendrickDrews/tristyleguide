<template>  
  <div class="contextNav">
      <ul id="nav-group">        
          <li class="nav-item"
          v-bind:page="page"           
          v-for="(post, index) in pageNavigation[page]"
          v-bind:key="index" 
          @click="active = post" 
          v-bind:class="{ active: active == post }"
          >
          <!-- Need to set up a State HREF Routing Situation -->
          <!-- When State == active post -->
          <!-- MainBody Component is PageContent.Post -->
          <a href="#">{{ post.text }}</a>
          </li>        
      </ul>
  </div>  
</template>

<script>  
  import pageNavigation from '../components/componentList/DMIDsideNavigation.js';  

  export default {
    components: {   
      pageNavigation   
      
    },
    props: 
      ['page'],
    data: function () {
      return {
          active: 'active',
          thisSubSite: '',
          pageNavigation: pageNavigation,
      }
    },
    computed: {
      subSite: {
        get: function() {
          return this.$root.store.state.DMIDSite
        },
        set: function() {

        }
      },
    },
   
    
  }
</script>

<style scoped>
.nav-item {
  min-height: 23px;
  display: flex;
  align-items: center;
}
.nav-item a {
  border:none !important; 
  color:#244f1e!important;
  margin:0 !important;
  text-decoration:none !important;
  font-weight:bold;
  text-align:right;
  /*padding-right:5px;*/
  outline: 0;
  padding:2px 0px 2px 5px;
  font-size: 13px;
  font-family: Calibri;
}
/* Service Requests List */
.bodyNavStyleServiceRequests .nav-item a {
  color:#395594!important;
}

.nav-item:hover {
  background-image: linear-gradient(to left,rgba(74, 179, 60, 0.2), transparent);
}
.active {
  background-image: linear-gradient(to left,rgba(74, 179, 60, 0.2), transparent);
}
/* Service Requests List */
.bodyNavStyleServiceRequests .nav-item:hover {
  background-image: linear-gradient(to left,rgba(52, 94, 192, 0.15), transparent);
}
/* Service Requests List */
.bodyNavStyleServiceRequests .active {
  background-image: linear-gradient(to left,rgba(52, 94, 192, 0.25), transparent);
}
</style>