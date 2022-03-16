<template>
  <ul>
    <li v-for="(cook, index) in cooks" :key="cook.id">
      {{ cook.table }} - {{ cook.status }} - {{ cook.price }} -
      {{ cook.shift_workers }} - {{ cook.create_at }} -
      <button @click="changeStatus(cook.id, index)">Редактировать</button>
    </li>
    <div>GG</div>
  </ul>
</template>

<script>
export default {
  name: "CookComponent",
  data() {
    return {
      cooks: "",
      convertStatusData: {
        preparing: "Готовится",
        ready: "Готово",
      },
    };
  },
 
  async mounted() {
    
    const res = await this.$store.dispatch("getCooks", 
      this.$store.getters.getToken,
    );

    this.cooks = res;
  },
  computed: {
    undoneOrders() {
      return this.cooks.filter((cook) => cook.status !== "Готово");
    },
  },
  actions: {
    async changeStatus(id, index) {
      const cook = this.cooks[index];
      const result =
        cook.status === "Принят"
          ? await this.$store.dispatch("changeStatus", {
              id,
              status: "preparing",
              token: this.$store.getters.getToken,
            })
          : await this.$store.dispatch("changeStatus", {
              id,
              status: "ready",
              token: this.$store.getters.getToken,
            });
      this.cooks[index].status = this.convertStatusData[result.status];
    },
  },
};
</script>

<style>
</style>