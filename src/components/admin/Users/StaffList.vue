<template>
  <div>
    <div
      class="text-danger h4 text-left m-3"
      v-for="(error, index) in this.errors"
      :key="index"
    >
      {{ error }}
    </div>
    <h2 class="text-center m-4">Список сотрудников</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя</th>
          <th scope="col">Статус</th>
          <th scope="col">Должность</th>
          <th scope="col">
            <a
              style="margin-left: 30px"
              class="btn btn-primary btn-sm"
              href="/add_user"
              >+</a
            >
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in allUsers" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.status }}</td>
          <td>{{ user.group }}</td>
          <td scope="col">
            <router-link class="btn btn-primary btn-sm" :to="{ name: 'detail_user', params: { id: user.id } }" >Подробнее</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "StafListComponent",
  data() {
    return {
      errors: [],
      res: "",
    };
  },
  async mounted() {
    this.res = await this.$store.dispatch("getStaff");
    if (this.res.error) {
      this.errors.push(this.res.error.message);
    }
  },
  computed: {
    allUsers() {
      return this.res.data;
    },
  },
  methods: {
  },
};
</script>


<style>
</style>