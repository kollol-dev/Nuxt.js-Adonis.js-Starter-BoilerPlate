<template>
  <div id="app">
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import Header from "~/components/Header";
// import Sidebar from "~/components/Sidebar";
export default {
  components: {
    // Header,
    // Sidebar,
  },
  computed: {
    ...mapGetters({
      authUser: "getAuthUser",
    }),
  },

  data() {
    return {};
  },

  methods: {},
  watch: {
    "$route.name": function (newVal, oldVal) {},
  },
};
</script>

