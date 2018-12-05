<template>
  <scrollactive
    active-class="activate"
    scroll-container-selector="#scrollContainer"    
    :alwaysTrack = true
    :offset="120"
    :duration="850"
    bezier-easing-value=".5,0,.35,1"
    v-on:itemchanged="onItemChanged"
  >
    <ul >    
      <li       
        v-for="item in componentList"      
        v-bind:key="item.key"  
        v-bind:id="'list-item' + item" 
        v-bind:class="{'active': activeItem === item }"
      >
        <a 
          v-bind:href="'#' + item " 
          class="scrollactive-item"
          :name="item"
          @click="activeItem = activeItem !== item ? item : item"
        > 
        {{ item }} 
        </a>
      </li>
    </ul>
  </scrollactive>
</template>

<script>    
  import routes from '../routes'
  import componentList from '../components/componentList/componentList.js'
  
  export default {  
    
    components: {
      componentList,
    },

///////  
    data: function () {
      return {
        componentList: componentList,
        topSet: '',        
        activeItem: -1,

      }
    },

///////    
    computed: {
      scrollContainer: function() {
        return this.topSet = document.querySelector('#scrollContainer')
      }, 
      activeComponent: function() {       
        return this.activeItem
      },
      //     
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
    methods: {
      onItemChanged(event, currentItem, lastActiveItem) {
        const activeComponent = this.activeComponent
        return this.stateActiveComponent(currentItem.name)       
      },
      stateActiveComponent (value) {
      return  this.stateComponent = value
      }      
    },

  }
  
  
</script>

<style scoped>

.list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.list li {
  font-size: 16px;
  color: #565656; 
  height: 24px;
  width: 100%;
  display: table;
}
li:hover {
  background-color: rgba(0,0,0, 0.05);
  font-weight: bold;
}
.list li a {
  padding-left: 15px;
  display: table-cell;
  vertical-align: middle;
  text-decoration: none;
  border-left: 2px solid transparent;
}
a:visited {
  text-decoration: none;
  color: inherit;
}
a:link {
  text-decoration: none;
  color: inherit;
}
.activate {    
  font-weight: bold;
  color: black;    
}
a.activate {
  border-left: 2px solid indigo!important;
  color: black;  
}

</style>
