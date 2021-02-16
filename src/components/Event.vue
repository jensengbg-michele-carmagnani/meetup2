<template>
  <section id="card">
    <img class="event-img" :src="event.image" alt="" />
    <h3>{{ event.location }}dfsfsa</h3>
    <h3>{{ event.date }}dfasdfsa</h3>
    <h3>{{ event.price }}dfasf</h3>
    <h3>{{ event.name }}dfsaf</h3>
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
