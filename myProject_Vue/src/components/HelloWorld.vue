<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/test">前往test页路由</router-link>
        <router-link to="/message">前往Message页</router-link>
      </li>
      <li>
        <a href="https://forum.vuejs.org"
          target="_blank"> Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org"
          target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs"
          target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/"
          target="_blank">Docs for This Template</a></li>
    </ul>
    <!-- 生态 -->
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/"
          target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/"
          target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/"
          target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue"
          target="_blank">awesome-vue</a>
      </li>
    </ul>
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
