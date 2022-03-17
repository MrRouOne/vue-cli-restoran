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
        <label required class="form_label text_left h5" for="id_enter"
          >Id сотрудника</label
        >
        <input
          class="form-control"
          type="text"
          name="user_id"
          id="id_enter"
          v-model="user_id"
        />
      </div>

      <div class="col-8">
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
  name: "AddUserToWorkShiftComponent",
  data() {
    return {
      user_id: "",
      errors: [],
      res: "",
    };
  },
  methods: {
    async addUser() {
      const body = {
        body: {
          user_id: Number(this.user_id),
        },
        id: this.$route.params.id,
      };
      this.res = await this.$store.dispatch("addUserToWorkShift", body);
      console.log(this.res)
      if (this.res.error) {
        this.errors.push(this.res.error.message);
      } else {
        this.user_id = "";
      }
    },
  },
};
</script>

<style>
</style>