import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: {
    getToken: state => {
      return state.token
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async fetchLogin(context, personData) {
      const res = await fetch(
        "http://lifestealer86.ru/api-cafe/login",
        {
          method: 'POST',
          body: JSON.stringify(personData),
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log(error))
      context.commit("setToken", res.data.user_token)
    },
    async getCooks(context, token) {
      const res = await fetch(
        "http://lifestealer86.ru/" + "api-cafe/order/taken/get",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
        }
      )
        .then((response) => response.json())
        .then((result) => result.data)
      console.log(res);
      return res;
    },
    async changeStatus(context, { id, status, token }) {
      const patchStatus = JSON.stringify({ status })
      const res = await fetch(
        "http://lifestealer86.ru/" + `api-cafe/order/${id}/`,
        {
          method: "PATCH",
          body: patchStatus,
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
        }
      )
        .then((response) => response.json())
        .then((result) => result.data)
        .then(error => console.log(error))

      return res;
    },

  },
  modules: {
  }
})
