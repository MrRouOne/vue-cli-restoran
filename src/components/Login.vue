<template>
  <article class="model mt-xl-4">
    <form
      @submit.prevent="fetchLogin;"
      class="d-flex flex-column align-items-center"
    >
      <h1 class="mb-xl-5 col-8 text-center">Авторизация</h1>

      <div>
        <div
          class="text-danger h4 text-left m-3"
          v-for="(error, index) in this.errors"
          :key="index"
        >
          {{ error }}
        </div>
      </div>

      <div style="margin-bottom: 50px" class="mb3 col-8 d-flex flex-column">
        <label class="form_label text_left h5" for="login_enter">Логин</label>
        <input
          class="form-control"
          type="text"
          name="login"
          id="login_enter"
          v-model="login"
        />
      </div>
      <div class="mb3 col-8 d-flex flex-column">
        <label class="form_label text_left h5" for="password_enter"
          >Пароль</label
        >
        <input
          class="form-control"
          type="password"
          name="password"
          id="password_enter"
          v-model="password"
        />
      </div>
      <div style="margin-top: 50px" class="col-8">
        <button
          class="btn btn-lg btn-primary me-3"
          type="submit"
          @click="fetchLogin"
        >
          Отправить
        </button>
        <a href="/" class="btn btn-lg btn-danger">Отмена</a>
      </div>
    </form>
  </article>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      login: "",
      password: "",
      errors: [],
      res: "",
    };
  },
  methods: {
    async fetchLogin() {
      const body = {
        login: this.login,
        password: this.password,
      };

      this.res = await this.$store.dispatch("fetchLogin", body);
      if (this.res.error) {
        this.errors.push(this.res.error.message);
      } else {
        this.login = "";
        this.password = "";
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
</style>