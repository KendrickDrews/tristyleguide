<template>
<div>

  <div class="componentLayout">
    <!-- <div id="todo-list-example">
      <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input
          v-model="newTodoText"
          id="new-todo"
          type="checkbox"
          value="testValue"
        >
        <button>Add</button>
      </form>
      <ul>
        <li
          is="todoItem"
          v-for="(todo, index) in todos"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
          v-on:remove="todos.splice(index, 1)"
        ></li>
      </ul>
    </div> -->
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <div id="todo-list-example">
      <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input
          v-model="newTodoText"
          id="new-todo"
          placeholder="E.g. Feed the cat"
        >
        <button>Add</button>
      </form>
      <ul>
        <li
          is="todoItem"
          v-for="(todo, index) in todos"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
          v-on:remove="todos.splice(index, 1)"
        ></li>
      </ul>
    </div>
  </div>


  <div class="componentLayout">
 </div>
  <div class="componentLayout">

      <template v-for="n in 25">
        <template v-if="n <= 10">
          <p v-bind:key="'first' + n"> {{ bLength | atIndex(n) }} </p>
        </template>
        <template v-else-if="n === 11">
          <div style="background-color: aqua;" v-bind:key="'second' + n">
            <template v-for="y in 25">
              <template v-if="y >= 11">
                <p style="color: white; font-weight: bold;" v-bind:key="'third' + y"> {{ y }} </p>
              </template>
            </template>
          </div>
        </template>
        <template v-else>
        </template>
      </template>

  </div>

</div>
</template>

<script>
 import buttonList from '../components/componentList/buttonList.js';
 import todoItem from '../components/todo.vue';

  export default {
    components: {
      buttonList,
      todoItem
    },


/////
    data: function(){
      return {
        checkedNames: [],
        buttonName: 'CRS',
        smallIcon: '27px',
        buttonList,
        newTodoText: '',
        todos: [
          { id: 1, title: 'Do the dishes', },
          { id: 2, title: 'Take out the trash', },
          { id: 3, title: 'Mow the lawn' }
        ],
        nextTodoId: 4
      }
    },
    template: {

    },
    props: {
      showNav:{

        default: function(){
          return {
            Home: true,
            CRS: true,
            DocumentLibrary: true,
            SOCSCMS: true,
            Training: true,
            ServiceRequests: true,
            PRT: true,
            SMART: true,
            CSRS: true,
            GrantCapture: true,
            Protocols: true,
            Results: true,
          }
        }
      }
    },

/////
    computed: {
      bLength () {
        let list = Object.keys(buttonList)
        return list
      },
    },
/////
    filters: {

      // return a list of property values from an array of Objects
      pluck: function (objects, key) {
        return objects.map(function(object) {
      	  return object[key];
          })
        },

      // Return element at given index
      atIndex: function (value, index) {
        return value[index];
      },
      valueAt: function (object, index) {
        return (Object.entries(object)[index])
      }

    },

 ////
    methods: {
      addNewTodo: function () {
          this.todos.push({
            id: this.nextTodoId++,
            title: this.newTodoText
          })
          this.newTodoText = ''
        }
    },

////
    mounted: function () {
    },

////
    created: function () {
    },

////
    destroyed: function () {
    },
  }
</script>
<style scoped>

  .componentLayout {
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 18px;
    background-color: #ccc;
    padding: 10px 0;
    height: 600px;
  }

  .btn-01 {
    width: 200px;
    height: 200px;
    border: 5px solid #7affde;
    border-image:
    linear-gradient(45deg,#000, transparent) 5 ;
  }
  .top-to-bottom {
    width: 200px;
    height: 200px;
    border-width: 3px;
    border-style: solid;
    border-image:
      linear-gradient(to bottom, black, rgba(0, 0, 0, 0)) 1 100%;
}

  .RED {
    background-color: rgb(241, 67, 55);
  }
  .a{
    background-color: #ff7a85;
  }
  .b{
    background-color: #ff7abc;
  }
  .c{
    background-color: #f47aff;
  }
  .d{
    background-color: #ce7aff;
  }
  .e{
    background-color: #877aff;
  }
  .f{
    background-color: #7ad5ff;
  }
  .g{
    background-color: #7affde;
  }
  .h{
    background-color: #7eff7a;
  }
  .i{
    background-color: #a0ff7a;
  }
  .j{
    background-color: #e7ff7a;
  }
  .activeScrolled {
    color: black!important;
  }

.aboveItAll {
  position: fixed;
  top: 620px;
  left: 50px;
  width: 150px;
}
table thead tr{
    display:block;
    width: 100%;
}

table th,table td{
    width:100px;
}


table  tbody{
  display:block;
  height:200px;
  overflow:auto;
}
</style>
