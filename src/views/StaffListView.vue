<template>
  <div>
    <main>
      <StaffList />
    </main>
  </div>
</template>

<script>
import StaffList from "../components/StaffList";
export default {
  name: "UsersComponent",
  components: {
    StaffList,
  },
};
</script>
