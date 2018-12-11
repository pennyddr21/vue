<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <ul>
      <li>
        <a href="http://www.baidu.com" target="_blank">test click(cPage)</a>
      </li>
    </ul> -->
    <div>{{'父组件传值给子组件的值：' + inputName}}</div>
    <br><br>
    <button @click="childClk">子组件按钮</button>
  </div>
</template>

<script>
export default {
  props: ['inputName'],
  data () {
    return {
      msg: 'this is c page ..',
      childValue: '子传父的值321'
    }
  },
  methods: {
    childClk () {
      this.$emit('childByValue', this.childValue)
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
