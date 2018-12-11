import { addNum } from '@/store/mutations'

// state
const state = {
  count: 0
}

// getters
const getters = {
  getCount: state => state
}

// mutations 通常是同步的
const mutations = {
  [addNum]: (state, number) => {
    if (number) {
      state.count += number
    } else {
      state.count++
    }
    return state
  }
}

// actions 通常是异步的
const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}
