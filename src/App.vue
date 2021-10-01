<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer";

export default {
  components: {
    Navbar,
    Footer,
  },
  created() {
    this.$store.dispatch("initAuth");
  },
};
</script>

<style>
</style>
