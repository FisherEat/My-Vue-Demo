<template>
  <div class="content">
    <div class="title">
      {{title}}
    </div>
    <div class="list">
      <ul>
        <li v-for="item in list" :key="item.id" @click="routeToTest(item.page)">
          <div class="li-content">
            <img class="li-img" src="http://www.uml.org.cn/html/images/2012072743.jpg" alt="">
            <div class="right-content">
             <h3>{{item.title}}</h3>
             <p>{{item.subTitle}}</p>
            </div>
            <img class="img-arrow" src="../assets/arrow.png" alt="">
          </div>
          <div class="li-seperator"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      title: '首页--本案例用来测试Vue项目',
      list: [
        {page: 'FlexPage', title: '阮一峰Flex布局', subTitle: '阮一峰Flex布局，内容来自：http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html 案例：http://www.ruanyifeng.com/blog/2015/07/flex-examples.html'},
        {page: 'WelcomePage', title: '欢迎页', subTitle: '欢迎页，添加一些关于路由的案例'},
        {page: 'Message', title: '消息页', subTitle: '消息页，随意写写'},
        {page: 'RoutePage', title: '路由页', subTitle: '路由页，vue-router案例'},
        {page: '', title: 'WebPack讲解', subTitle: '该页面主要讲解webpack相关技能和知识'},
        {page: '', title: 'ElementUI讲解', subTitle: '页面主要讲解ElementUI相关后端管理系统框架的集成和开发'},
        {page: '', title: '前端高级进阶', subTitle: '该页面讲解前端高级进阶知识'}
      ]
    }
  },
  methods: {
    routeToTest (page) {
      this.$router.push({name: page})
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 50px;
  color: cadetblue;
  padding: 20px;
}
.list {
  display: flex;
}
ul {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
}
.li-img {
  width: 100px;
  height: 100px;
  margin: 0 15px 0 0;
}
li p {
  font: 200px 12px/1.5 Georgia,Times New Roman, serif;
  margin-top: 10px;
}
li:hover {
  background: #eee;
  cursor: pointer;
  border-radius: 5px;
}
li h3 {
  height: 20px;
  margin-top: 5px;
}
li {
  display: flex;
  padding: 10px;
  flex-direction: column;
  height: 120px;
}
.li-seperator {
  margin: 10px 0;
  background: #eee;
  height: 1px;
  width: 100%;
}
.li-content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.right-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.img-arrow {
  width: 20px;
  height: 40px;
  margin:0 20px 0 auto;
  align-self: center;
}
</style>
