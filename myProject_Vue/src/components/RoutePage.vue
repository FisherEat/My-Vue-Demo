<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h2>Essetial Link</h2>
    <ul>
      <li v-for="item in essentailList" :key="item.id">
        <a :href="item.url">{{item.title}}</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li v-for="item in ecosystemList" :key="item.id">
       <a :href="item.url">{{item.title}}</a>
      </li>
    </ul>
    <div>
      <button v-on:click="routeToMessage"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      essentailList: [
        {url: 'https://vuejs.org', title: 'Core Docs'},
        {url: 'https://forum.vuejs.org', title: 'Forum'},
        {url: 'https://forum.vuejs.org', title: 'Community Chat'},
        {url: 'https://twitter.com/vuejs', title: 'Twitter'},
        {url: 'http://vuejs-templates.github.io/webpack/', title: 'Docs for This Template'},
        {url: '', title: ''},
        {url: '', title: ''}
      ],
      ecosystemList: [
        {url: 'http://router.vuejs.org/', title: 'vue-router'},
        {url: 'http://vuex.vuejs.org/', title: 'vuex'},
        {url: 'http://vue-loader.vuejs.org/', title: 'vue-loader'},
        {url: 'https://github.com/vuejs/awesome-vue', title: 'awesome-vue'}
      ]
    }
  },
  methods: {
    routeToMessage () {
      this.$router.push({name: 'Message'})
    }
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
