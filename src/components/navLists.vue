<template>
  <div class="contextNav">
      <ul id="nav-group">
          <router-link tag="li" class="nav-item"
          v-bind:page="page"
          v-for="(post, index) in pageNavigation[page]"
          v-bind:key="index"
          v-on:click="active = post"
          :to="{ name: post.name}"
          exact>
          <a>{{ post.text }}</a>
          </router-link>
      </ul>
  </div>
</template>

<script>
import pageNavigation from '../components/componentList/DMIDsideNavigation.js'
import { mapState } from 'vuex'

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
      pageNavigation: pageNavigation
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
  computed: {
    subSite: {
      get: function () {
        return this.$root.store.state.siteType
      },
      set: function () {
      }
    },
    activeComponent: function () {
      return this.active.text
    },
    //
    stateComponent: {
      get: function () {
        return this.$root.store.state.activeComponent
      },
      set: function (value) {
        this.$root.store.commit('isActiveComponent', value)
      }
    }
  },
  filters: {
    concatenate: function (value) {
      if (!value) return 'noValue'
      var toSplit = value
      var splitString = toSplit.split(' ')
      return splitString.join('')
    }
  }
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
.router-link-active {
  background-image: linear-gradient(to left,rgba(74, 179, 60, 0.2), transparent);
}
/* Service Requests List */
.bodyNavStyleServiceRequests .nav-item:hover {
  background-image: linear-gradient(to left,rgba(52, 94, 192, 0.15), transparent);
}
/* Service Requests List */
.bodyNavStyleServiceRequests .router-link-active {
  background-image: linear-gradient(to left,rgba(52, 94, 192, 0.25), transparent);
}
</style>
