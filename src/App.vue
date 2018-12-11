<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
        <router-view :style="containRouter"></router-view>
        <!-- <router-view :style="containRouter"></router-view> -->
      </keep-alive>
    </transition>
    <!-- <getPage></getPage> -->
    <div class="navFoot">
      <ul>
        <li><router-link to="/">{{ navigator.name1 }}</router-link></li>
        <li><router-link to="/aPage">{{ navigator.name2 }}</router-link></li>
        <li><router-link to="/bPage/123">{{ navigator.name3 }}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
// import getPage from '@/components/GetPage'
export default {
  name: 'App',
  data () {
    return {
      navigator: {
        name1: '首页',
        name2: 'A页面',
        name3: 'B页面'
      },
      containRouter: '',
      clickMsg: 'click me...'
    }
  },
  components: {
    // getPage
  },
  methods: {
    get_param () {
      console.log(111)
    }
  },
  created () {
    this.containRouter = 'height:' + (window.innerHeight - 51) + 'px;overflow:scroll'
    console.log('index created')
  }
}
</script>

<style>
/* .aaaa{margin-bottom:51px;} */
.navFoot{width:100%;position: fixed;left:0;bottom:0;height: 50px;line-height: 50px;
border-top:1px solid #e5e5e5;z-index:999;}
.navFoot ul li{float: left;width:33%;text-align: center;box-sizing: border-box;
border-right:1px solid #e5e5e5;}
.navFoot ul li:nth-last-child(1){border-right: none;}
*{padding:0;margin:0;}
li{list-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:100vh;
}
.clerafix{display: block;}
.clerafix:before,.clerafix:after{
  content: "";
  display:block;
  clear: both;
  height: 0px;
}
</style>
