<template>
  <div>
    <main>
      <AddUser />
    </main>
  </div>
</template>

<script>
import AddUser from "../../../components/admin/Users/AddUser";
export default {
  name: "AddUserComponent",
  components: {
    AddUser,
  },
};
</script>
