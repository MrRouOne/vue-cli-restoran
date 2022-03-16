<template>
  <div>
    <main>
      <Orders />
    </main>
  </div>
</template>

<script>
import Orders from "../components/Orders";
export default {
  name: "OrdersComponent",
  components: {
    Orders,
  },
};
</script>
