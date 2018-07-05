<template>
  <div class="hello">
    <div>
      <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/test">前往test页路由</router-link>
        <router-link to="/message">前往Message页</router-link>
      </li>
    </ul>
    </div>
    <!-- router -->
    <div>
      <button v-on:click="routeToTest">前往</button>
    </div>
    <div class="example">
      <p>Original message : "{{msg}}"</p>
      <p>computed reversed message = "{{reversedMessage}}"</p>
    </div>
    <div>
      <button @click="testSome" id="test-button">好诶</button>
    </div>
    <div>
      <li v-for="item in items" :key="item.id">
        {{ item.message }}
        <gen></gen>
      </li>
    </div>
    <div>
      <input v-model="msg" placeholder="edit me">
      <p>Message is : {{ msg }}</p>
    </div>
    <div>
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
    <div>
      <my-component></my-component>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// Vue.component('my-component', {
//   template: '<div>A custom component!</div>'
// })
var Child = {
  template: '<div>A custom component!</div>'
}
console.log(this.$jquery)
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      selected: ''
    }
  },
  methods: {
    routeToTest () {
      this.$router.push({name: 'Test'})
    },
    testSome (event) {
      alert('Hello ' + this.msg)
      if (event) {
        alert(event.target.tagName)
      }
    }
  },
  computed: {
    reversedMessage () {
      return this.msg.split('').reverse().join('')
    }
  },
  components: {
    'my-component': Child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hello {
  display: flex;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
