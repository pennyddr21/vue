<template>
  <div class="hello">
    <img src="../assets/images/logo.png" style="width:150px;" /> <br>
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a href="http://www.baidu.com" target="_blank">test click(aPage)</a>
      </li>
    </ul>
    <br><br>
    <button data-info="papapa" @click="parentClk($event)">父组件按钮</button>
    <br><br>
    <div v-if="pageDisplay">
      <cPage :inputName='res' v-on:childByValue="childByValue"></cPage>
    </div>
    <br><br>
    <p>父组件获取子值：{{ parentByValue }}</p>
    <br><br>
    <p>新闻ID：{{ $route.name }}</p>
    <br><br>
    <div>
      <router-link to="/phone">跳phone页面</router-link>
    </div>
  </div>
</template>

<script>
import cPage from '@/components/cPage'
export default {
  data () {
    return {
      msg: 'this is a page ..',
      pageDisplay: true,
      res: '父传子值123',
      parentByValue: ''
    }
  },
  methods: {
    childByValue (data) {
      this.parentByValue = data
    },
    parentClk (e) {
      this.res = e.target.attributes['data-info'].nodeValue
    }
  },
  components: {
    cPage
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
