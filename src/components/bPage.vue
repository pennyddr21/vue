<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a href="http://www.baidu.com" target="_blank">test click(bPage)</a>
      </li>
    </ul>
    <br><br>
    <button @click="interClk">交互按钮</button>
    <br><br>
    <div>{{ '获取的code值：'+interValue }}</div>
    <br><br>
    <div>params: {{ $route.params.id }}</div>
    <br><br>
    <div>vuex state: {{ getCount.count }}</div>
  </div>
</template>

<script>
import api from '@/services/api'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      msg: 'this is b page ..',
      interValue: ''
    }
  },
  computed: {
    ...mapGetters({
      getCount: 'getCount'
    })
  },
  methods: {
    interClk () {
      api.axiosPostQuery(process.env.API_HOST + '/loan-product/detail', {'id': '4'}).then(res => {
        console.log(res.data)
        this.interValue = res.data.code
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    // console.log(1213)
    // store.commit('increment')
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
