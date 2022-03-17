<template>
  <div>
    <div
      class="text-danger h4 text-left m-3"
      v-for="(error, index) in this.errors"
      :key="index"
    >
      {{ error }}
    </div>
     <h2 class="text-center m-4">Сотрудник {{getUser.name}}</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ФИО</th>
          <th scope="col">Логин</th>
          <th scope="col">Статус</th>
          <th scope="col">Должность</th>
          <th scope="col">Уволить</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ getUser.id }}</th>
          <td>
            {{ getUser.name }} {{ getUser.surname }} {{ getUser.patronymic }}
          </td>
          <td>{{ getUser.login }}</td>
          <td>{{ getUser.status }}</td>
          <td>{{ getUser.group }}</td>
          <td><button @click="dissmissUser" class="btn btn-primary">Уволить</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailUserComponent",
  data() {
    return {
      errors: [],
      res: "",
      dismissRes: ""
    };
  },
  async mounted() {
    this.res = await this.$store.dispatch("showUser", this.$route.params.id);
    if (this.res.error) {
      this.errors.push(this.res.error.message);
    }
  },
  computed: {
    getUser() {
      return this.res.data;
    },
  },
  methods: {
    async dissmissUser() {
      this.dismissRes = await this.$store.dispatch("dismissUser", this.$route.params.id);
      if (this.dismissRes.error) {
        this.errors.push(this.dismissRes.error.message);
      }
    },
  },
};
</script>


<style>
</style>