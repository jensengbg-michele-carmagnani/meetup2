<template>
  <section id="main-page">
    <h2 class="title">Eventpage</h2>
    <Event
      class="events-section"
      v-for="(event, index) in getEvents"
      :key="index"
      :event="event"
    />
  </section>
</template>

<script>
import Event from "@/components/Event.vue";
export default {
  name: "MainPage",
  components: {
    Event,
  },
  props: {
    events: Array,
  },
  data() {
    return {};
  },
  computed:{
    getEvents(){
      return this.$store.state.events
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
