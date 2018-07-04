<template>
  <div class="content">
    <div class="title">
      {{title}}
    </div>
    <div class="list">
      <ul>
        <li v-for="item in list">
          <div class="li-content">
            <img class="li-img" src="http://www.uml.org.cn/html/images/2012072743.jpg" alt="">
            <div class="right-content">
             <h3>{{item.title}}</h3>
             <p>subtitle</p>
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
        {page: '/FlexPage', title: '阮一峰Flex布局'},
        {page: '/WelcomePage', title: '欢迎页'},
        {page: '/Message', title: '消息页'},
        {page: '/RouterPage', title: '路由页'}
      ]
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
  list-style-type: none;
  width: 80%;
  max-width:800px;
}
.li-img {
  width: 100px;
  height: 100px;
  margin: 0 15px 0 0;
}
li p {
  font: 200px 12px/1.5 Georgia,Times New Roman, serif;
}
li:hover {
  background: #eee;
  cursor: pointer;
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
}
.img-arrow {
  width: 20px;
  height: 40px;
  margin:0 20px 0 auto;
  align-self: center;
}
</style>
