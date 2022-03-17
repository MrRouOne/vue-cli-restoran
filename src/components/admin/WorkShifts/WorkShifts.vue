<template>
  <div>
    <div
      class="text-danger h4 text-left m-3"
      v-for="(error, index) in this.errors"
      :key="index"
    >
      {{ error }}
    </div>
       <h2 class="text-center m-4">Смены</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Начало</th>
          <th scope="col">Конец</th>
          <th scope="col">Активность</th>
          <th scope="col">
            <a
              style="margin-left: 30px"
              class="btn btn-primary btn-sm"
              href="/add_work_shift"
              >+</a
            >
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="shift in allWorkShifts" :key="shift.id">
          <th scope="row">{{ shift.id }}</th>
          <td>{{ shift.start }}</td>
          <td>{{ shift.end }}</td>
          <td>{{ shift.active }}</td>
          <td scope="col">
             <router-link class="btn btn-primary btn-sm" :to="{ name: 'detail_work_shift', params: { id: shift.id } }">Подробнее</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "WorkShiftsComponent",
  data() {
    return {
      errors: [],
      res: "",
    };
  },
  async mounted() {
    this.res = await this.$store.dispatch("allWorkShifts");
    if (this.res.error) {
      this.errors.push(this.res.error.message);
    }
  },
  computed: {
    allWorkShifts() {
      return this.res;
    },
  },
  methods: {
  },
};
</script>


<style>
</style>