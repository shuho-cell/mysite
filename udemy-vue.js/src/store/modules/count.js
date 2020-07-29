const state = {
  count: 2,
  counting: 1,
};
const getters = {
  TripleCount: (state) => state.count * 3,
};
const mutations = {
  increment(state, number) {
    state.count += number;
  },
  increment2(state, number) {
    state.counting += number;
  },
};
const actions = {
  increment2({ commit }, number) {
    commit("increment2", number);
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
