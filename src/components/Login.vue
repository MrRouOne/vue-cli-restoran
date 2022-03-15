<template>
  <article class="model mt-xl-4">
    <form
      @submit.prevent="fetchLogin;"
      class="d-flex flex-column align-items-center"
    >
      <div style="margin-bottom: 30px" class="mb3 col-8">
        <label class="form-label"><h1>Авторизация</h1></label>
      </div>
      <div style="margin-bottom: 50px" class="mb3 col-8 d-flex flex-column">
        <label class="form_label text_left h5" for="login_enter">Логин</label>
        <input class="form-control" type="text" name="login" id="login_enter" />
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
        />
      </div>
      <div style="margin-top: 50px" class="col-8">
        <button class="btn btn-lg btn-primary me-3" type="submit">
          Отправить
        </button>
        <button class="btn btn-lg btn-danger">Отмена</button>
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
    };
  },
  methods: {
    fetchLogin() {},
  },
}
</script>

<style>
</style>