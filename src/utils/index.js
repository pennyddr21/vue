function aaa () {
  console.log('utils aaa func.')
}

export function bbb () { // import { bbb } from '@/utils'    export default {} import utils from '@/utils'
  console.log('utils bbb func2.')
}

export default {
  aaa,
  bbb
}
