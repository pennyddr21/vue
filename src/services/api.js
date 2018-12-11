import axios from 'axios'
import qs from 'qs'

function axiosPostQuery (paramUrl, paramQuery) {
  return new Promise(function (resolve, reject) {
    let url = paramUrl || ''
    let paraQuery = qs.stringify(paramQuery) || ''
    axios.post(url, paraQuery).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

async function test () { // async 等价于 new Promise  test().then().catch()
  return 'asdfsdf'
}

export default {
  axiosPostQuery,
  test
}
