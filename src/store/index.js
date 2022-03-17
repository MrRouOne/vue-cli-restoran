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
      localStorage.setItem("token", token)
    },
    removeToken(state) {
      state.token = '';
      localStorage.clear();
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
        })
        .then(response => response.json())
        .then(result => result)
        .then(error => error)
      if (res.data) { context.commit("setToken", res.data.user_token) }
      window.location.href = '/'
      return res

    },

    async fetchLogout(context) {
      const res = await fetch(
        "http://lifestealer86.ru/api-cafe/logout",
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => response.json())
        .then(result => result)
        .then(error => error)
      context.commit("removeToken")
      window.location.href = '/'
      return res
    },

    async getStaff() {
      const res = await fetch(
        "http://lifestealer86.ru/api-cafe/user",
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => response.json())
        .then(result => result)
        .then(error => error)

      return res
    },

    async addUser(context, personData) {
      const res = await fetch(
        "http://lifestealer86.ru/api-cafe/user",
        {
          method: 'POST',
          body: JSON.stringify(personData),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => response.json())
        .then(result => result)
        .then(error => error)
      if (!res.error) { window.location.href = '/staff_list' }

      return res
    },

    async showUser(context, id) {
      const res = await fetch(
        `http://lifestealer86.ru/api-cafe/user/${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => response.json())
        .then(result => result)
        .then(error => error)
      return res
    },

    async dismissUser(context, id) {
      const res = await fetch(
        `http://lifestealer86.ru/api-cafe/user/${id}/to-dismiss`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => response.json())
        .then(result => result)
        .then(error => error)
      if (!res.error) { window.location.href = `/detail_user/${id}` }

      return res
    },
    async allWorkShifts() {
      const res = await fetch(
        `http://lifestealer86.ru/api-cafe/work-shift`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => response.json())
        .then(result => result)
        .then(error => error)
      return res
    },

    async addWorkShift(context, personData) {
      const res = await fetch(
        "http://lifestealer86.ru/api-cafe/work-shift",
        {
          method: 'POST',
          body: JSON.stringify(personData),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => response.json())
        .then(result => result)
        .then(error => error)
      if (!res.error) { window.location.href = '/work_shifts' }

      return res
    },

    async showWorkShift(context, id) {
      const res = await fetch(
        `http://lifestealer86.ru/api-cafe/work-shift/${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => response.json())
        .then(result => result)
        .then(error => error)
      return res
    },
    
    async showOrdersInWorkShift(context, id) {
      const res = await fetch(
        `http://lifestealer86.ru/api-cafe/work-shift/${id}/order`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => response.json())
        .then(result => result)
        .then(error => error)
      return res
    },


    async openWorkShift(context, id) {
      const res = await fetch(
        `http://lifestealer86.ru/api-cafe/work-shift/${id}/open`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => response.json())
        .then(result => result)
        .then(error => error)
      if (!res.error) { window.location.href = `/detail_work_shift/${id}` }
      return res
    },

    async closeWorkShift(context, id) {
      const res = await fetch(
        `http://lifestealer86.ru/api-cafe/work-shift/${id}/close`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => response.json())
        .then(result => result)
        .then(error => error)
      if (!res.error) { window.location.href = `/detail_work_shift/${id}` }
      return res
    },

    async addUserToWorkShift(context, personData) {
      console.log(personData)
      const res = await fetch(
        `http://lifestealer86.ru/api-cafe/work-shift/${personData.id}/user`,
        {
          method: 'POST',
          body: JSON.stringify(personData.body),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => response.json())
        .then(result => result)
        .then(error => error)
      if (!res.error) { window.location.href = `/detail_work_shift/${personData.id}` }

      return res
    },

    async deleteUserToWorkShift(context, personData) {
      const res = await fetch(
        `http://lifestealer86.ru/api-cafe/work-shift/${personData.id}/user/${personData.user_id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => response.json())
        .then(result => result)
        .then(error => error)
      if (!res.error) { window.location.href = `/detail_work_shift/${personData.id}` }

      return res
    },

    // async getOrders(context, id) {
    //   const res = await fetch(
    //     `http://lifestealer86.ru/api-cafe/work-shift/${id}/order`,
    //     {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //         "Authorization": "Bearer " + this.state.token
    //       }
    //     })
    //     .then(response => response.json())
    //     .then(result => result)
    //     .then(error => error)

    //   return res
    // },

    // async getCooks(context, token) {
    //   const res = await fetch(
    //     "http://lifestealer86.ru/api-cafe/order/taken/get",
    //     {
    //       method: "GET",
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //         "Authorization": "Bearer " + token
    //       },
    //     }
    //   )
    //     .then(response => response.json())
    //     .then(result => result.data)
    //   console.log(res);
    //   return res;
    // },

    // async changeStatus(context, { id, status, token }) {
    //   const patchStatus = JSON.stringify({ status })
    //   const res = await fetch(
    //     "http://lifestealer86.ru/" + `api-cafe/order/${id}/`,
    //     {
    //       method: "PATCH",
    //       body: patchStatus,
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": "Bearer " + token
    //       },
    //     }
    //   )
    //     .then(response => response.json())
    //     .then(result => result.data)
    //     .catch(error => console.log(error))

    //   return res;
    // },

  },
  modules: {
  }
})
