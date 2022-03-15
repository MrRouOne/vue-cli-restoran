import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async fetchLogin(context, personData) {
      const res = await fetch(
        process.env.VUE_APP_SECOND_URL + "api-cafe/login",
        {
          method: "POST",
          body: JSON.stringify(personData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((result) => result)
        .then((error) => console.log(error));
      context.commit("setToken", res.data.user_token)
    }
  },
  modules: {
  }
})
