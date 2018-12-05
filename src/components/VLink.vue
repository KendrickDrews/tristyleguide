<template>
  <li
  v-bind:class="{ active: isActive }"
  v-on:click="go"
  >
    <a v-bind:href="href">
      <slot></slot>
    </a>    
  </li>
</template>

<script>
  export default {
    props: {
      href: {
        type:String,
        required: true 
      }
    },  
    
    computed: {
      isActive () {
        return this.href === this.$root.currentRoute
      },      
    },
    methods: {
      go (event) {
        event.preventDefault()
        this.$root.currentRoute = this.href
        window.history.pushState(
          null,
          routes[this.href],
          this.href
        )
      },      
    }
  }
</script>

<style scoped>

  a {
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;    
    color: inherit;       
  }
  a:link, a:visited {
    color: inherit;
  }  
  .active {
    background-color: rgba(216, 216, 216, 0.25);
    border-right-color: rgb(57, 176, 255);
    color: #000!important;
  }
  li {
    color: #565656;
  }
  
</style>
