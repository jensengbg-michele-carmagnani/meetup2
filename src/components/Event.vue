<template>
  <section id="card">
    <img class="event-img" :src="event.image" alt="" />
    <h3>{{ event.city }}</h3>
    <h3>{{ event.date }}</h3>
    <h3>{{ event.details }}</h3>
    <h3>{{ event.category }}</h3>
  </section>
</template>

<script>
export default {
  name: "Event",
  props: {
    event: Object,
  },
};
</script>

<style></style>
