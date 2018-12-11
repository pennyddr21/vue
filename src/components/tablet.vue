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
    <div v-if="!dis">abcabc</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'component',
      message: 'inputMsg',
      dis: true
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
