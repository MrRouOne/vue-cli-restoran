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
          <th scope="col">Столик</th>
          <th scope="col">Сотрудник</th>
          <th scope="col">Создан</th>
          <th scope="col">Статус</th>
          <th scope="col">Цена</th>
          <th scope="col">Сменить статус</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in allOrders" :key="order.id">
          <th scope="row">{{ order.id }}</th>
          <td>{{ order.table }}</td>
          <td>{{ order.shift_workers }}</td>
          <td>{{ order.create_at }}</td>
          <td>{{ order.status }}</td>
          <td>{{ order.price }}</td>
          <td>
            <button
              @click="changeStatus(order.id, order.status)"
              class="btn btn-primary btn-sm"
            >
              Сменить
            </button>
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
      statusRes: "",
    };
  },
  async mounted() {
    this.res = await this.$store.dispatch("getOrders");
    if (this.res.error) {
      this.errors.push(this.res.error.message);
    }
  },
  computed: {
    allOrders() {
      return this.res.data;
    },
  },
  methods: {
    async changeStatus(id, status) {
      status == "Принят"
        ? (this.statusRes = await this.$store.dispatch("changeStatus", {
            id: id,
            body: {
              status: "preparing",
            },
          }))
        : (this.statusRes = await this.$store.dispatch("changeStatus", {
            id: id,
            body: {
              status: "ready",
            },
          }));
      if (this.statusRes.error) {
        this.errors.push(this.statusRes.error.message);
      }
    },
  },
};
</script>


<style>
</style>