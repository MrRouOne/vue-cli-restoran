<template>
  <article class="model mt-xl-4">
    <form
      @submit.prevent="addWorkShift;"
      class="d-flex flex-column align-items-center"
    >
      <h1 class="mb-xl-5 col-8 text-center">Добавить смену</h1>

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
        <label required class="form_label text_left h5" for="start_enter"
          >Дата начала</label
        >
        <input
          class="form-control"
          type="datetime-local"
          name="start"
          id="start_enter"
          v-model="start"
        />
      </div>
      <div style="margin-bottom: 40px" class="mb3 col-8 d-flex flex-column">
        <label required class="form_label text_left h5" for="end_enter"
          >Дата конца</label
        >
        <input
          class="form-control"
          type="datetime-local"
          name="end"
          id="end_enter"
          v-model="end"
        />
      </div>
      <div class="col-8">
        <button
          @click="addWorkShift"
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
  name: "AddWorkShiftComponent",
  data() {
    return {
      start: "",
      end: "",
      errors: [],
      res: "",
    };
  },
  methods: {
    async addWorkShift() {
      const body = {
        start: this.start.replace('T'," "),
        end: this.end.replace('T'," "),
      };
      this.res = await this.$store.dispatch("addWorkShift", body);
      if (this.res.error) {
        this.errors.push(this.res.error.message);
      } else {
        this.start = "";
        this.end = "";
      }
    },
  },
};
</script>

<style>
</style>