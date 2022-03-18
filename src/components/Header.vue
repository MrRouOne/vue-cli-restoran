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
    <div v-if="getToken === null">
      <nav>
        <a href="/login" class="btn btn-primary btn-lg">Вход</a>
        {{ isAdmin }}
      </nav>
    </div>
    <div v-else-if="admin">
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
            <li>
              <router-link class="dropdown-item" :to="{ name: 'staff_list' }"
                >Сотрудники</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item" :to="{ name: 'work_shifts' }"
                >Смены</router-link
              >
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <button @click="fetchLogout" class="dropdown-item">Выход</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div v-else-if="cook">
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
            Повар
          </a>
          <ul
            class="dropdown-menu text-small"
            aria-labelledby="dropdownUser1"
            style=""
          >
            <li>
              <router-link class="dropdown-item" :to="{ name: 'orders' }"
                >Заказы</router-link
              >
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <button @click="fetchLogout" class="dropdown-item">Выход</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div v-else-if="waiter">
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
            Официант
          </a>
          <ul
            class="dropdown-menu text-small"
            aria-labelledby="dropdownUser1"
            style=""
          >
            <li>
              <a class="dropdown-item" href="#">Официант</a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <button @click="fetchLogout" class="dropdown-item">Выход</button>
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
  data() {
    return {
      admin: false,
      cook: false,
      waiter: false,
    };
  },
  computed: {
    getToken() {
      return localStorage.getItem("token");
    },
  },
  asyncComputed: {
    async isAdmin() {
      console.log(1);
      this.admin = await this.$store.dispatch("isAdmin");
    },
    async isWaiter() {
      this.waiter = await this.$store.dispatch("isWaiter");
    },
    async isCook() {
      this.cook = await this.$store.dispatch("isCook");
    },
  },
  methods: {
    async fetchLogout() {
      await this.$store.dispatch("fetchLogout");
    },
  },
  async mounted() {
    this.admin = await this.$store.dispatch("isAdmin");
    this.waiter = await this.$store.dispatch("isWaiter");
    this.cook = await this.$store.dispatch("isCook");
  },
};
</script>


<style>
</style>