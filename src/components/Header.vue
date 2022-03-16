<template>
  <header
    class="
      d-flex
      flex-row
      justify-content-between
      align-items-center
      border-bottom
    "
  >
    <article>
      <a href="/" class="text-decoration-none"><h1>Toitotoro</h1></a>
    </article>
    <div v-if="getToken == ''">
      <nav>
        <a href="/login" class="btn btn-primary btn-lg">Вход</a>
      </nav>
    </div>
    <div v-else>
      <nav>
        <div class="dropdown text-end">
          <a
            style="margin-right: 100px"
            href="#"
            class="d-block link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Администратор
          </a>
          <ul
            class="dropdown-menu text-small"
            aria-labelledby="dropdownUser1"
            style=""
          >
            <li><a class="dropdown-item" href="/staff_list">Сотрудники</a></li>
            <li><a class="dropdown-item" href="#">Смены</a></li>
            <li>
              <a class="dropdown-item" href="/orders">Заказы</a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a @click="fetchLogout" class="dropdown-item" href="">Выход</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  computed: {
    getToken() {
      return this.$store.getters.getToken;
    },
  },
  methods: {
    async fetchLogout() {
      await this.$store.dispatch("fetchLogout");
    },
  },
};
</script>


<style>
</style>