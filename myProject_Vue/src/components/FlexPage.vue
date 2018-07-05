<template>
  <div>
    <h2>{{title}}</h2>
    <!-- 单点 -->
    <div class="content">
     <div class="first-face">
      <span class="pip"></span>
     </div>
     <div class="left-first-face">
       <span class="pip"></span>
     </div>
     <div class="right-first-face">
       <span class="pip"></span>
     </div>
     <div class="top-first-face">
       <span class="pip"></span>
     </div>
     <div class="bottom-first-face">
       <span class="pip"></span>
     </div>
    </div>
    <!-- 双点 -->
    <div class="content">
      <div class="top-second-face">
        <span class="pip"></span>
        <span class="pip"></span>
      </div>
      <div class="left-second-face">
        <span class="pip"></span>
        <span class="pip"></span>
      </div>
      <div class="center-second-face">
        <span class="pip"></span>
        <span class="pip"></span>
      </div>
      <div class="right-second-face">
        <span class="pip"></span>
        <span class="pip"></span>
      </div>
      <div class="top-center-second-face">
        <span class="pip"></span>
        <span class="pip"></span>
      </div>
    </div>
    <div class="content">
      <div class="center-third-face">
        <span class="pip"></span>
        <span class="pip"></span>
        <span class="pip"></span>
      </div>
      <div class="top-center-third-face">
        <span class="pip"></span>
        <span class="pip"></span>
        <span class="pip"></span>
      </div>
      <div class="fourth-face">
        <div class="column">
          <span class="pip"></span>
          <span class="pip"></span>
        </div>
        <div class="column">
          <span class="pip"></span>
          <span class="pip"></span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="fifth-face">
        <div class="column">
         <span class="pip"></span>
         <span class="pip"></span>
        </div>
        <div class="column">
         <span class="pip"></span>
        </div>
        <div class="column">
         <span class="pip"></span>
         <span class="pip"></span>
        </div>
      </div>
      <div class="sixth-face">
        <div class="column">
         <span class="pip"></span>
         <span class="pip"></span>
         <span class="pip"></span>
        </div>
        <div class="column">
         <span class="pip"></span>
         <span class="pip"></span>
         <span class="pip"></span>
        </div>
      </div>
    </div>
    <!-- 参考文档 http://www.ruanyifeng.com/blog/2015/07/flex-examples.html -->
    <!-- https://codepen.io/LandonSchropp/pen/KpzzGo -->
  </div>
</template>
<script>
export default {
  name: 'FlexPage',
  data () {
    return {
      title: '阮一峰Flex布局案例页'
    }
  }
}
</script>
<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.first-face {
  display: flex;
  justify-content: center;
  align-items: center;
}
.left-first-face {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.right-first-face {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.top-first-face {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.bottom-first-face {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.top-second-face {
  display: flex;
  justify-content: space-between;
}
.left-second-face {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.center-second-face {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.right-second-face {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
.top-center-second-face {
  display: flex;
  justify-content: space-between;
}
.top-center-second-face .pip:nth-of-type(2) {
  align-self: flex-end;
}
.center-third-face {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.top-center-third-face {
  display: flex;
  justify-content: space-between;
}
.top-center-third-face .pip:nth-child(2) {
  align-self: center;
}
.top-center-third-face .pip:nth-child(3) {
  align-self: flex-end;
}
.fourth-face {
  display: flex;
  justify-content: space-between;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.fifth-face {
  display: flex;
  justify-content: space-between;
}
.fifth-face .column {
  display: flex;
  flex-direction: column;
  align-content: space-between;
}
.fifth-face .column:nth-child(2) {
  align-self: center;
}
.sixth-face {
  display: flex;
  justify-content: space-between;
}
* {
  box-sizing: border-box;
}
[class$="face"] {
  margin: 16px;
  padding: 4px;
  background-color: #e7e7e7;
  width: 104px;
  height: 104px;
  object-fit: contain;
  box-shadow:
    inset 0 5px white,
    inset 0 -5px #bbb,
    inset 5px 0 #d7d7d7,
    inset -5px 0 #d7d7d7;
  border-radius: 10%;
}
.pip {
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 4px;
  background-color: #333;
  box-shadow: inset 0 3px #111 inset 0 -3px #555;
}
</style>
