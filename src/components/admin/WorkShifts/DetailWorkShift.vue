<template>
  <div>
    <div
      class="text-danger h4 text-left m-3"
      v-for="(error, index) in this.errors"
      :key="index"
    >
      {{ error }}
    </div>
    <h2 class="text-center m-4">Смена № {{ getWorkShift.id }}</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Начало</th>
          <th scope="col">Конец</th>
          <th scope="col">Активность</th>
          <th scope="col">Открыть</th>
          <th scope="col">Закрыть</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ getWorkShift.id }}</th>
          <td>{{ getWorkShift.start }}</td>
          <td>{{ getWorkShift.end }}</td>
          <td>{{ getWorkShift.active }}</td>
          <td>
            <button @click="openWorkShift" class="btn btn-primary">
              Открыть
            </button>
          </td>
          <td>
            <button @click="closeWorkShift" class="btn btn-primary">
              Закрыть
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h3 class="text-center" style="margin-top:100px;">Сотрудники</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя</th>
          <th scope="col">Должность</th>
          <th scope="col">
            <router-link
              style="margin-left: 20px"
              class="btn btn-primary btn-sm"
              :to="{
                name: 'add_user_to_work_shift',
                params: { id: this.$route.params.id },
              }"
              >+</router-link
            >
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in getWorkShift.users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.group }}</td>
          <td scope="col">
            <button @click="deleteUser(user.id)" class="btn btn-primary btn-sm">
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h3 class="text-center" style="margin-top:100px;">Заказы</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Столик</th>
          <th scope="col">Сотрудник</th>
          <th scope="col">Создан</th>
          <th scope="col">Статус</th>
          <th scope="col">Цена</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in getOrders.orders" :key="order.id">
          <th scope="row">{{ order.id }}</th>
          <td>{{ order.table }}</td>
          <td>{{ order.shift_workers }}</td>
          <td>{{ order.create_at }}</td>
          <td>{{ order.status }}</td>
          <td>{{ order.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailWorkShiftComponent",
  data() {
    return {
      errors: [],
      res: "",
      ordersRes: "",
      openRes: "",
      closeRes: "",
      userDeleteRes: "",
    };
  },
  async mounted() {
    this.res = await this.$store.dispatch(
      "showWorkShift",
      this.$route.params.id
    );
    if (this.res.error) {
      this.errors.push(this.res.error.message);
    }

    this.ordersRes = await this.$store.dispatch(
      "showOrdersInWorkShift",
      this.$route.params.id
    );
    if (this.ordersRes.error) {
      this.errors.push(this.ordersRes.error.message);
    }
  },
  computed: {
    getWorkShift() {
      return this.res.data;
    },
    getOrders() {
      return this.ordersRes.data;
    },
  },
  methods: {
    async openWorkShift() {
      this.openRes = await this.$store.dispatch(
        "openWorkShift",
        this.$route.params.id
      );
      if (this.openRes.error) {
        this.errors.push(this.openRes.error.message);
      }
    },
    async closeWorkShift() {
      this.closeRes = await this.$store.dispatch(
        "closeWorkShift",
        this.$route.params.id
      );
      if (this.closeRes.error) {
        this.errors.push(this.closeRes.error.message);
      }
    },
    async deleteUser(user_id) {
      console.log(this.$route.params.id, user_id);
      const ides = {
        id: this.$route.params.id,
        user_id: user_id,
      };
      this.userDeleteRes = await this.$store.dispatch(
        "deleteUserToWorkShift",
        ides
      );
      if (this.userDeleteRes.error) {
        this.errors.push(this.userDeleteRes.error.message);
      }
    },
  },
};
</script>


<style>
</style>