<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <ul>
      <li>
        <a href="http://www.baidu.com" target="_blank">test click</a>
      </li>
    </ul> -->
    <br>
    <input type="text" v-model="message" /> <br><br>
    <div>{{message}}</div>
    <br>
    <button v-if="!dis" @click="getStoreData">vuex store</button>
    <br><br>
    <div>{{ newMsgWatch }}</div>
    <br><br>
    <div>vuex state: {{ getCount.count }}</div>
    <br>
    <button v-if="!dis" @click="getAsyncData">打印button async await</button>
    <br><br>
    <button @click="getUtilsData">utils button</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
import api from '@/services/api'
import utils from '@/utils'
// import { bbb } from '@/utils'
import Parent from '@/utils/parent'
import Child from '@/utils/child'
export default {
  data () {
    return {
      msg: 'component',
      message: 'inputMsg',
      newMsgWatch: 'adfwqrqwrewrq',
      dis: false
    }
  },
  computed: {
    ...mapGetters({
      getCount: 'getCount'
    })
  },
  // watch: {  // watch只能监控整个对象或单个变量
  //   newMsgWatch (newVal, oldVal) {
  //     console.log(newVal + '...' + oldVal)
  //   }
  // },
  methods: {
    getStoreData () {
      // this.newMsgWatch = 'wqrq2qwqerwr'
      store.commit('increment')
      // console.log(this.getCount)
    },
    getUtilsData () {
      // utils.aaa()
      utils.bbb()
      let p = new Parent('hello', '22')
      p.say()
      let child = new Child('aa', 'bb', 'cc')
      child.sayHello()
    },
    async getAsyncData () {
      var sync = await api.axiosPostQuery(process.env.API_HOST + '/loan-product/detail', {'id': '4'}).then()
      console.log('类似同步执行axios：' + JSON.stringify(sync.data))
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
