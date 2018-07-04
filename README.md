#### Vue.js入门教程

[TOC]

##### 参考文献

> 1. Vue-Cli webpack打包入门：http://www.cnblogs.com/keepfool/p/5678427.html
> 2. Vue中文文档：https://cn.vuejs.org/v2/guide/index.html
> 3. Vue-cli webpack打包实战：https://segmentfault.com/a/1190000008143264
> 4. over

##### 安装Vue.js

> 1. 直接下载并用`<script>`标签引入，`Vue`会被注册为一个全局变量。重要提示：在开发时使用开发版本，http://cn.vuejs.org/guide/installation.html
> 2. 可以从 [jsdelivr](http://cdn.jsdelivr.net/vue/1.0.21/vue.min.js) 或 [cdnjs](http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.21/vue.min.js) 获取（版本更新可能略滞后）。
> 3. 有些环境，如 Google Chrome Apps，强制应用内容安全策略 (CSP) ，不能使用`new Function()` 对表达式求值。这时可以用 [CSP 兼容版本](https://github.com/vuejs/vue/tree/csp/dist)。

##### `NPM`

> 使用Vue.js构建大型应用时推荐使用nmp安装，npm能很好的和诸如 [Webpack](http://webpack.github.io/) 或者[Browserify](http://browserify.org/) 的`CommonJS`模块打包器配合使用。Vue.js也提供配套工具开发单文件组件。
>
> ```shell
> #最新稳定版本
> $ npm install vue
> # 最新稳定 CSP 兼容版本
> $ npm install vue@csp
> ```
>
> ##### 

##### 命令行工具

> Vue.js 提供一个[官方命令行工具](https://github.com/vuejs/vue-cli)，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需一分钟即可启动带热重载、保存时静态检查以及可用于生产环境的构建配置的项目：
>
> ```sh
> # 全局安装 vue-cli,
> #/Users/gaolong/.nvm/versions/node/v5.7.0/bin/vue -> /Users/gaolong/.nvm/versions/node/v5.7.0/lib/node_modules/vue-cli/bin/vue  /Users/gaolong/.nvm/versions/node/v5.7.0/lib
> $ npm install -g vue-cli
> # 创建一个基于 "webpack" 模板的新项目
> $ vue init webpack my-project
> # 安装依赖，走你
> $ cd my-project
> $ npm install
> $ npm run dev
> ```
>
> ##### 

##### 开发版本

> **重要**：发布到 NPM 上的 CommonJS 包 (`vue.common.js`) 只在发布新版本时签入 master 分支，所以这些文件在 dev 分支下跟稳定版本是一样的。想使用 GitHub 上最新的源码，需要自己编译：
>
> ```sh
> git clone https://github.com/vuejs/vue.git node_modules/vue
> cd node_modules/vue
> npm install
> npm run build
> ```
>
> 

##### vue-cli wepack打包

> 1. 参考文献：https://loulanyijian.github.io/vue-cli-doc-Chinese/structure.html
>
> 2. 两种方式
>
>    - 使用vue-webpack-simple模板
>
>    - 使用vue-webpack模板
>
>      ```js
>      安装vue-cli
>      $ npm install -g vue-cli
>      ```
>
> 3. 生成项目
>
>    ```js
>    $ vue init webpack-simple my-webpack-simple-demo
>    webpack-simple是项目模板的名称
>
>    目录结构
>    ├─.babelrc		// babel配置文件
>    ├─.gitignore	
>    ├─index.html		// 主页
>    ├─package.json		// 项目配置文件
>    ├─README.md  
>    ├─webpack.config.js	// webpack配置文件
>    ├─dist			// 发布目录
>    │   ├─.gitkeep       
>    ├─src			// 开发目录	
>    │   ├─App.vue		// App.vue组件
>    │   ├─main.js		// 预编译入口
>
>    编译的输入和输出是定义在webpack.config.js文件中的
>
>    webpack.config.js内容还是比较好理解的，它采用了CommonJS的写法，entry节点配置了编译入口，output节点配置了输出。
>    这段entry和output配置的含义是：编译src/main.js文件，然后输出到dist/build.js文件。
>    ```
>
> 4. 安装项目依赖
>
>    ```sh
>    $ cd my-webpack-simple-demo
>    $ npm install
>
>    运行项目
>    npm run dev
>    编译项目
>    npm run build
>    ```
>
> 5. over

#### Vue.js体验

##### 介绍

> 1. 参考文档：https://cn.vuejs.org/v2/guide/index.html
>
> 2. 声明式渲染
>
>    ```js
>    <div id="app">
>      {{ message }}
>    </div>
>    var app = new Vue({
>      el: '#app',
>      data: {
>        message: 'Hello Vue!'
>      }
>    })
>    ```
>
> 3. 条件和循环
>
>    ```js
>    <div id="app-2">
>      <span v-bind:title="message">
>        鼠标悬停几秒钟查看此处动态绑定的提示信息！
>      </span>
>    </div>
>    指令带有前缀 v-，以表示它们是 Vue 提供的特殊特性
>
>      <div id="app-3">
>      <p v-if="seen">现在你看到我了</p>
>      </div>
>      var app3 = new Vue({
>      el: '#app-3',
>      data: {
>        seen: true
>        }
>       })
>
>      <div id="app-4">
>      <ol>
>        <li v-for="todo in todos">
>          {{ todo.text }}
>        </li>
>      </ol>
>    </div>
>
>      var app4 = new Vue({
>      el: '#app-4',
>      data: {
>        todos: [
>          { text: '学习 JavaScript' },
>          { text: '学习 Vue' },
>          { text: '整个牛项目' }
>        ]
>      }
>    })
>    ```
>
> 4. 处理用户输入
>
>    ```js
>    <div id="app-5">
>      <p>{{ message }}</p>
>      <button v-on:click="reverseMessage">逆转消息</button>
>    </div>
>    var app5 = new Vue({
>      el: '#app-5',
>      data: {
>        message: 'Hello Vue.js!'
>      },
>      methods: {
>        reverseMessage: function () {
>          this.message = this.message.split('').reverse().join('')
>        }
>      }
>    })
>
>    methods和data平级
>    ```
>
> 5. 组件化应用构建
>
>    ```js
>    在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例
>    import Vue from 'vue'
>    Vue.component('todo-item', {
>      // todo-item 组件现在接受一个
>      // "prop"，类似于一个自定义特性。
>      // 这个 prop 名为 todo。
>      props: ['todo'],
>      template: '<li>{{ todo.text }}</li>'
>    })
>
>    <div id="app-7">
>      <ol>
>        <!--
>          现在我们为每个 todo-item 提供 todo 对象
>          todo 对象是变量，即其内容可以是动态的。
>          我们也需要为每个组件提供一个“key”，稍后再
>          作详细解释。
>        -->
>        <todo-item
>          v-for="item in groceryList"
>          v-bind:todo="item"
>          v-bind:key="item.id">
>        </todo-item>
>      </ol>
>    </div>
>
>    var app7 = new Vue({
>      el: '#app-7',
>      data: {
>        groceryList: [
>          { id: 0, text: '蔬菜' },
>          { id: 1, text: '奶酪' },
>          { id: 2, text: '随便其它什么人吃的东西' }
>        ]
>      }
>    })
>
>    ```
>
> 6. over

##### Vue实例

> 1. 创建vue实例
>
> 2. 实例生命周期钩子
>
>    ![](https://cn.vuejs.org/images/lifecycle.png)
>
> 3. over

##### 模板语法

> 1. 插值
>
>    ```js
>    文本
>    <span>Message: {{ msg }}</span>
>    <span v-once>这个将不会改变: {{ msg }}</span> 一次性插值
>    原始HTML
>
>    输出真正的html
>    <p>Using mustaches: {{ rawHtml }}</p>
>    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
>      
>     特性
>    Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令
>    <div v-bind:id="dynamicId"></div>
>
>    使用JavaScript表达式
>    对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。
>    {{ number + 1 }}
>    {{ ok ? 'YES' : 'NO' }}
>    {{ message.split('').reverse().join('') }}
>    <div v-bind:id="'list-' + id"></div>
>    单个表达式
>
>    指令
>    指令 (Directives) 是带有 v- 前缀的特殊属性
>    <p v-if="seen">现在你看到我了</p>
>
>    参数
>    <a v-bind:href="url">...</a>
>    在这里 href 是参数，告知 v-bind 指令将该元素的 href 属性与表达式 url 的值绑定。
>    <a v-on:click="doSomething">...</a>
>    这里参数是监听的事件名
>
>    修饰符
>    <form v-on:submit.prevent="onSubmit">...</form>
>    修饰符 (Modifiers) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定
>
>    缩写
>    vi-bind缩写
>    <!-- 完整语法 -->
>    <a v-bind:href="url">...</a>
>    <!-- 缩写 -->
>    <a :href="url">...</a>
>
>    <!-- 完整语法 -->
>    <a v-on:click="doSomething">...</a>
>    <!-- 缩写 -->
>    <a @click="doSomething">...</a>
>    ```
>
> 2. over

##### 计算属性和侦听器

> 1. 计算属性
>
>    ```js
>    使用计算属性
>    <div id="example">
>      <p>Original message: "{{ message }}"</p>
>      <p>Computed reversed message: "{{ reversedMessage }}"</p>
>    </div>
>    var vm = new Vue({
>      el: '#example',
>      data: {
>        message: 'Hello'
>      },
>      computed: {
>        // 计算属性的 getter
>        reversedMessage: function () {
>          // `this` 指向 vm 实例
>          return this.message.split('').reverse().join('')
>        }
>      }
>    })
>
>    使用函数
>    <p>Reversed message: "{{ reversedMessage() }}"</p>
>    // 在组件中
>    methods: {
>      reversedMessage: function () {
>        return this.message.split('').reverse().join('')
>      }
>    }
>
>    侦听属性
>    Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性
>    <div id="demo">{{ fullName }}</div>
>    var vm = new Vue({
>      el: '#demo',
>      data: {
>        firstName: 'Foo',
>        lastName: 'Bar',
>        fullName: 'Foo Bar'
>      },
>      watch: {
>        firstName: function (val) {
>          this.fullName = val + ' ' + this.lastName
>        },
>        lastName: function (val) {
>          this.fullName = this.firstName + ' ' + val
>        }
>      }
>    })
>
>    计算属性setter
>    // ...
>    computed: {
>      fullName: {
>        // getter
>        get: function () {
>          return this.firstName + ' ' + this.lastName
>        },
>        // setter
>        set: function (newValue) {
>          var names = newValue.split(' ')
>          this.firstName = names[0]
>          this.lastName = names[names.length - 1]
>        }
>      }
>    }
>    // ...
>    ```
>
> 2. 侦听器
>
>    ```js
>    <div id="watch-example">
>      <p>
>        Ask a yes/no question:
>        <input v-model="question">
>      </p>
>      <p>{{ answer }}</p>
>    </div>
>    <!-- 因为 AJAX 库和通用工具的生态已经相当丰富，Vue 核心代码没有重复 -->
>    <!-- 提供这些功能以保持精简。这也可以让你自由选择自己更熟悉的工具。 -->
>    <script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
>    <script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
>    <script>
>    var watchExampleVM = new Vue({
>      el: '#watch-example',
>      data: {
>        question: '',
>        answer: 'I cannot give you an answer until you ask a question!'
>      },
>      watch: {
>        // 如果 `question` 发生改变，这个函数就会运行
>        question: function (newQuestion, oldQuestion) {
>          this.answer = 'Waiting for you to stop typing...'
>          this.getAnswer()
>        }
>      },
>      methods: {
>        // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
>        // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
>        // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
>        // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
>        // 请参考：https://lodash.com/docs#debounce
>        getAnswer: _.debounce(
>          function () {
>            if (this.question.indexOf('?') === -1) {
>              this.answer = 'Questions usually contain a question mark. ;-)'
>              return
>            }
>            this.answer = 'Thinking...'
>            var vm = this
>            axios.get('https://yesno.wtf/api')
>              .then(function (response) {
>                vm.answer = _.capitalize(response.data.answer)
>              })
>              .catch(function (error) {
>                vm.answer = 'Error! Could not reach the API. ' + error
>              })
>          },
>          // 这是我们为判定用户停止输入等待的毫秒数
>          500
>        )
>      }
>    })
>    </script>
>    ```
>
> 3. over

##### Class与Style绑定

> 1. 绑定HTML Class
>
>    ```js
>    对象语法
>    我们可以传给 v-bind:class 一个对象，以动态地切换 class：
>    <div class="static"
>         v-bind:class="{ active: isActive, 'text-danger': hasError }">
>    </div>
>    data: {
>      isActive: true,
>      hasError: false
>    }结果渲染为
>    <div class="static active"></div>
>
>    利用计算属性渲染
>    <div v-bind:class="classObject"></div>
>    data: {
>      isActive: true,
>      error: null
>    },
>    computed: {
>      classObject: function () {
>        return {
>          active: this.isActive && !this.error,
>          'text-danger': this.error && this.error.type === 'fatal'
>        }
>      }
>    }
>
>    数组语法
>    可以把一个数组传给 v-bind:class，以应用一个 class 列表：
>    <div v-bind:class="[activeClass, errorClass]"></div>
>    data: {
>      activeClass: 'active',
>      errorClass: 'text-danger'
>    }
>     
>     绑定在组件上
>     
>    ```
>
>    ​
>
> 2. 绑定内联样式
>
>    ```js
>    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
>    data: {
>      activeColor: 'red',
>      fontSize: 30
>    }
>    绑定到一个样式对象上：
>    <div v-bind:style="styleObject"></div>
>    data: {
>      styleObject: {
>        color: 'red',
>        fontSize: '13px'
>      }
>    }
>
>    数组语法
>    <div v-bind:style="[baseStyles, overridingStyles]"></div>
>
>    自动添加前缀
>    多重值
>    ```
>
>    ​
>
> 3. over

##### 条件渲染

> ```js
> 1. v-if
> <h1 v-if="ok">Yes</h1>
> 或者
> <h1 v-if="ok">Yes</h1>
> <h1 v-else>No</h1>
>
> 新增v-else-if
> <div v-if="type === 'A'">
>   A
> </div>
> <div v-else-if="type === 'B'">
>   B
> </div>
> <div v-else-if="type === 'C'">
>   C
> </div>
> <div v-else>
>   Not A/B/C
> </div>
>
>
> 2.v-show
> 3.v-if&v-for
>
> ```
>
> 

##### 列表渲染

> 1. v-for
>
>    ```js
>    <ul id="example-1">
>      <li v-for="item in items">
>        {{ item.message }}
>      </li>
>    </ul>
>
>    <ul id="example-2">
>      <li v-for="(item, index) in items">
>        {{ parentMessage }} - {{ index }} - {{ item.message }}
>      </li>
>    </ul>
>
>    用of代替in
>    <div v-for="item of items"></div>
>
>    <ul id="v-for-object" class="demo">
>      <li v-for="value in object">
>        {{ value }}
>      </li>
>    </ul>
>
>    第三个参数为索引
>    <div v-for="(value, key, index) in object">
>      {{ index }}. {{ key }}: {{ value }}
>    </div>
>    ```
>
>    ​
>
> 2. over

##### 事件处理

##### 表单输入绑定

##### 组件

> 1. 使用组件
>
>    ```js
>    1.全局注册
>    2.局部注册
>    3.DOM模板解析
>    <option> <ul>、<ol>、<table>、<select> 
>      使用is
>      <table>
>      <tr is="my-row"></tr>
>    </table>
>    4.data必须是函数
>    5.组件组合
>
>    ```
>
> 2. Prop
>
>    ```js
>    1.使用Prop传递数据
>    Vue.component('child', {
>      // 声明 props
>      props: ['message'],
>      // 就像 data 一样，prop 也可以在模板中使用
>      // 同样也可以在 vm 实例中通过 this.message 来使用
>      template: '<span>{{ message }}</span>'
>    })
>    传入普通字符串
>    <child message="hello!"></child>
>
>    2.HTML 特性是不区分大小写的。所以，当使用的不是字符串模板时，camelCase (驼峰式命名) 的 prop 需要转换为相对应的 kebab-case (短横线分隔式命名)：
>    Vue.component('child', {
>      // 在 JavaScript 中使用 camelCase
>      props: ['myMessage'],
>      template: '<span>{{ myMessage }}</span>'
>    })
>    <!-- 在 HTML 中使用 kebab-case -->
>    <child my-message="hello!"></child>
>
>    3. 动态Prop
>    <div>
>        <input v-model="parentMsg">
>        <br>
>        <child v-bind:my-message="parentMsg"></child>
>     </div>
>    new Vue({
>      el: '#prop-example-2',
>      data: {
>        parentMsg: 'Message from parent'
>      }
>    })
>    可以使用 v-bind 的缩写语法
>    <child :my-message="parentMsg"></child>
>    child是子组件。
>
>    4.字面量语法vc动态语法
>    <!-- 传递真正的数值 -->
>    <comp v-bind:some-prop="1"></comp>
>    <!-- 传递了一个字符串 "1" -->
>    <comp some-prop="1"></comp>
>
>    5.单向数据流
>    Prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意间修改了父组件的状态，来避免应用的数据流变得难以理解。
>
>    每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你不应该在子组件内部改变 prop。
>
>    子组件定义局部变量
>    props: ['initialCounter'],
>    data: function () {
>      return { counter: this.initialCounter }
>    }
>    子组件定义计算属性
>    props: ['size'],
>    computed: {
>      normalizedSize: function () {
>        return this.size.trim().toLowerCase()
>      }
>    }
>
>    6.Prop验证
>    Vue.component('example', {
>      props: {
>        // 基础类型检测 (`null` 指允许任何类型)
>        propA: Number,
>        // 可能是多种类型
>        propB: [String, Number],
>        // 必传且是字符串
>        propC: {
>          type: String,
>          required: true
>        },
>        // 数值且有默认值
>        propD: {
>          type: Number,
>          default: 100
>        },
>        // 数组/对象的默认值应当由一个工厂函数返回
>        propE: {
>          type: Object,
>          default: function () {
>            return { message: 'hello' }
>          }
>        },
>        // 自定义验证函数
>        propF: {
>          validator: function (value) {
>            return value > 10
>          }
>        }
>      }
>    })
>
>    ```
>
>    ​
>
> 3. 非Prop特性
>
> 4. 自定义事件
>
>    ![](https://cn.vuejs.org/images/props-events.png)
>
>    ```js
>    子组件与父组件通讯
>    1.使用v-on绑定自定义事件
>    每个 Vue 实例都实现了事件接口，即：
>    使用 $on(eventName) 监听事件
>    使用 $emit(eventName, optionalPayload) 触发事件
>    <div id="counter-event-example">
>      <p>{{ total }}</p>
>      <button-counter v-on:increment="incrementTotal"></button-counter>
>      <button-counter v-on:increment="incrementTotal"></button-counter>
>    </div>
>    Vue.component('button-counter', {
>      template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
>      data: function () {
>        return {
>          counter: 0
>        }
>      },
>      methods: {
>        incrementCounter: function () {
>          this.counter += 1
>          this.$emit('increment')
>        }
>      },
>    })
>
>    new Vue({
>      el: '#counter-event-example',
>      data: {
>        total: 0
>      },
>      methods: {
>        incrementTotal: function () {
>          this.total += 1
>        }
>      }
>    })
>
>    //带参数情况
>     methods: {
>        handleSendMessage: function () {
>          this.$emit('message', { message: this.message })
>        }
>      }
>    2.给组件绑定原生事件
>    <my-component v-on:click.native="doTheThing"></my-component>
>
>    3. .sync修饰符
>    当一个子组件改变了一个带 .sync 的 prop 的值时，这个变化也会同步到父组件中所绑定的值。
>
>    4.使用自定义的表单输入组件
>    5.自定义组件的v-model
>    6.非父子组件的通讯
>    var bus = new Vue()
>    // 触发组件 A 中的事件
>    bus.$emit('id-selected', 1)
>    // 在组件 B 创建的钩子中监听事件
>    bus.$on('id-selected', function (id) {
>      // ...
>    })
>    ```
>
> 5. 使用插槽分发内容
>
>    ```js
>    1. 单个插槽
>    2.具名插槽
>    3.作用域插槽
>    4.解构
>    ```
>
> 6. 动态组件
>
>    ​
>
> 7. 其他杂项

##### 动画&过渡

> 1. Vue在插入、更新或移除DOM时，提供多种不同方法应用效果过渡
>
>    ```js
>    Vue 提供了 transition 的封装组件，在下列情形中，可以给任何元素和组件添加 entering/leaving 过渡
>
>    条件渲染 (使用 v-if)
>    条件展示 (使用 v-show)
>    动态组件
>    组件根节点
>    <div id="demo">
>      <button v-on:click="show = !show">
>        Toggle
>      </button>
>      <transition name="fade">
>        <p v-if="show">hello</p>
>      </transition>
>    </div>
>
>    new Vue({
>      el: '#demo',
>      data: {
>        show: true
>      }
>    })
>    .fade-enter-active, .fade-leave-active {
>      transition: opacity .5s;
>    }
>    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
>      opacity: 0;
>    }
>
>    过渡类名
>    在进入/离开的过渡中，会有 6 个 class 切换。
>    具体参考Vue官方文档过渡动画这一章节
>
>    css过渡
>    css动画
>    自定义过渡类名
>    enter-class
>    enter-active-class
>    enter-to-class (2.1.8+)
>    leave-class
>    leave-active-class
>    leave-to-class (2.1.8+)
>
>    ```
>
> 2. 状态过渡
>
> 3. ​

##### 可复用性&组合

> 1. 混入
>
>    ```js
>    混入 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。
>    // 定义一个混入对象
>    var myMixin = {
>      created: function () {
>        this.hello()
>      },
>      methods: {
>        hello: function () {
>          console.log('hello from mixin!')
>        }
>      }
>    }
>
>    // 定义一个使用混入对象的组件
>    var Component = Vue.extend({
>      mixins: [myMixin]
>    })
>
>    var component = new Component() // => "hello from mixin!"
>
>    当组件和混入对象含有同名选项时，这些选项将以恰当的方式混合。
>
>    全局混入
>
>    ```
>
>    ​
>
> 2. 自定义指令
>
> 3. 渲染函数& JSX
>
>    ```js
>    Vue 推荐在绝大多数情况下使用 template 来创建你的 HTML。
>
>    ```
>
>    ​
>
> 4. 插件
>
> 5. 过滤器

##### 工具

##### 规模化

> 1. 官方路由
>
>    推荐使用官方  [vue-router 库](https://github.com/vuejs/vue-router)：
>
>    ​
>
> 2. 整合第三方路由
>
>    如果有非常喜欢的第三方路由，如 [Page.js](https://github.com/visionmedia/page.js) 或者 [Director](https://github.com/flatiron/director)，整合[很简单](https://github.com/chrisvfritz/vue-2.0-simple-routing-example/compare/master...pagejs)。这有个用了 Page.js 的[复杂示例](https://github.com/chrisvfritz/vue-2.0-simple-routing-example/tree/pagejs)。
>
> 3. over

#### vue-router

##### vue-router

> 1. 参考文献：https://router.vuejs.org/zh-cn/essentials/named-routes.html
>
> 2. vue-router的基本使用方法
>
>    - 在router 、index.js文件中定义router
>
>      这里有个坑，定义path的时候不能和其他path重名，path就是展示在浏览器中的路由。
>
>    - 然后使用this.$router.push({name: Message})
>
> 3. 代码
>
>    ```js
>    import Vue from 'vue'
>    import Router from 'vue-router'
>    import HelloWorld from '@/components/HelloWorld'
>    import Test from '@/components/Test'
>    import Message from '@/components/Message'
>    // const Test = resolve => require(['../components/Test.vue'], resolve)
>    // const HelloWorld = resolve => require(['../components/HelloWorld.vue'], resolve)
>    Vue.use(Router)
>
>    // let routes = [
>
>    // ]
>    export default new Router({
>      routes: [
>        {
>          path: '/',
>          name: 'HelloWorld',
>          component: HelloWorld
>        },
>        {
>          path: '/test',
>          name: 'Test',
>          component: Test
>        },
>        {
>          path: '/message',
>          name: 'Message',
>          component: Message
>        }
>      ]
>    })
>
>
>    //Message.vue
>     methods: {
>        routeToTest () {
>          this.$router.push({name: 'Test'})
>        }
>      }
>
>    或者使用
>     <router-link to="/test">前往test页路由</router-link>
>    ```
>
> 4. over

#### Vue API

#### JQuery教程

##### jquery语法

> 1. 参加文献：http://www.runoob.com/jquery/jquery-syntax.html
>
> 2. 语法
>
>    ```js
>    1. 简写
>    $(function(){
>     
>       // 开始写 jQuery 代码...
>     
>    });
>
>    2.标签
>    3.#id选择器
>    4..class选择器
>    5. 更多：
>    $(*) $(this) $("p.intro") $("p:first") $("ul li:first") $("ul li:first-child") $("[href]") $("a[traget='_black']")
>
>    6.独立使用jquery
>    <head>
>    <script src="http://cdn.static.runoob.com/libs/jquery/1.10.2/jquery.min.js">
>    </script>
>    <script src="my_jquery_functions.js"></script>
>    </head>
>
>    7. $(":button")
>    ```
>
> 3. 效果
>
>    ```js
>    1. jquery隐藏/显示
>    $("p").hide()
>    $("p").show()
>    $("p").toggle()
>    $("p").fadeIn()
>    $("p").fadeOut()
>    $("p").fadeToggle()
>    2. 淡入淡出
>    3. 滑动
>    4. 动画
>    $(selector).animate({params},speed,callback);
>    $(selector).stop(stopAll,goToEnd);
>    5. 停止动画
>    6. callback
>    7. 链
>    ```
>
> 4. jQuery HTML
>
>    ```js
>    text()
>    html()
>    val()
>    回调方法
>    1. 捕获
>    2. 设置
>    3. 添加元素
>    4. 删除元素
>    append()、prepend()、after()、before()
>    remove()、empty()、
>    5. css类
>    addClass()、removeClass()、toggleClass() 
>    $("button").click(function(){
>      $("h1,h2,p").addClass("blue");
>      $("div").addClass("important");
>    });
>    6. css()方法
>    7. 尺寸
>    ```
>
> 5. jQuery遍历
>
>    ```
>    jquery祖先
>    $(document).ready(function(){
>      $("span").parent();
>    });
>    后代
>    children()
>    同胞
>    siblings()、next()、nextAll()、nextUntil()\pev()
>    过滤
>    first()、last()、eq()、filter()、not()、
>
>    ```
>
>    ​
>
> 6. over

