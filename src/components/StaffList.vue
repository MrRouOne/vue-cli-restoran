<template>
  <div>
    <div
      class="text-danger h4 text-left m-3"
      v-for="(error, index) in this.errors"
      :key="index"
    >
      {{ error }}
    </div>
    <div v-for="user in this.allUsers" :key="user.id">
      {{ allUsers.name }} - {{ allUsers.login }} - {{ allUsers.status }} -
      {{ allUsers.group }}
    </div>
  </div>
</template>

<script>
export default {
  name: "StafListComponent",
  data() {
    return {
      errors: [],
      res: '',
    };
  },
  computed: {
    allUsers() {
      return this.res.data;
    },
  },
  methods: {
    async getStaff() {
      this.res = await this.$store.dispatch("getStaff");
      if (this.res.error) {
        this.errors.push(this.res.error.message);
      }
    },
  },
};
</script>


<style>
</style>