<template>
  <div>
    <main>
      <StaffList />
    </main>
  </div>
</template>

<script>
import StaffList from "../../../components/admin/Users/StaffList";
export default {
  name: "UsersComponent",
  components: {
    StaffList,
  },
};
</script>
