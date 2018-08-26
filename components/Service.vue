<template>
  <div class="service">
    <img :src="blok.icon" :alt="blok.title">
    <h4>{{ blok.title }}</h4>
    <p>{{ blok.caption }}</p>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
