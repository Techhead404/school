<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from "./components/Card.vue"

  export default{
    components:{
      card:Card
    }
  }

</script>

<template>
  <h1 class="h1">Hello</h1>
  <card></card>
  <card></card>
  <card></card>
  <card></card>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
