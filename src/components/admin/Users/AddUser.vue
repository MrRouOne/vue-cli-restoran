<template>
  <article class="model mt-xl-4">
    <form
      @submit.prevent="addUser;"
      class="d-flex flex-column align-items-center"
    >
      <h1 class="mb-xl-5 col-8 text-center">Добавить сотрудника</h1>

      <div>
        <div
          class="text-danger h4 text-left m-3"
          v-for="(error, index) in this.errors"
          :key="index"
        >
          {{ error }}
        </div>
      </div>
      <div style="margin-bottom: 40px" class="mb3 col-8 d-flex flex-column">
        <label required class="form_label text_left h5" for="name_enter"
          >Имя</label
        >
        <input
          class="form-control"
          type="text"
          name="name"
          id="name_enter"
          v-model="name"
        />
      </div>
      <div style="margin-bottom: 40px" class="mb3 col-8 d-flex flex-column">
        <label required class="form_label text_left h5" for="login_enter"
          >Логин</label
        >
        <input
          class="form-control"
          type="text"
          name="login"
          id="login_enter"
          v-model="login"
        />
      </div>
      <div style="margin-bottom: 40px" class="mb3 col-8 d-flex flex-column">
        <label required class="form_label text_left h5" for="password_enter"
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
      <div class="mb3 col-8 d-flex flex-column">
        <label class="form_label text_left h5" for="role_id">Роль</label>

        <select required class="form-select" name="role_id" v-model="role_id">
          <option selected disabled value="">---------</option>
          <option value="1">Администратор</option>
          <option value="2">Официант</option>
          <option value="3">Повар</option>
        </select>
      </div>
      <div style="margin-top: 50px" class="col-8">
        <button
          @click="addUser"
          class="btn btn-lg btn-primary me-3"
          type="submit"
        >
          Добавить
        </button>
      </div>
    </form>
  </article>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      name: "",
      login: "",
      password: "",
      role_id: "",
      errors: [],
      res: "",
    };
  },
  methods: {
    async addUser() {
      const body = {
        name: this.name,
        login: this.login,
        password: this.password,
        role_id: this.role_id,
      };
      this.res = await this.$store.dispatch("addUser", body);
      if (this.res.error) {
        this.errors.push(this.res.error.message);
      } else {
        this.name = "";
        this.login = "";
        this.password = "";
        this.role_id = "";
      }
    },
  },
};
</script>

<style>
</style>