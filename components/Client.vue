<template>
  <li class="client"> /* :data-folder="blok.slug" */
    <img v-if="index === 0" :src="blok.largeImage" :alt="blok.name">
    <img v-else :src="blok.image" :alt="blok.name">

    <div class="overlay"></div>
    <h3>{{ blok.name }}</h3>
  </li>
</template>

<script>
export default {
  props: ['blok', 'index']
}
</script>

<!-- FURTURE FEATURES -->
<!--
  Change latest client image from largeImage
  to image when in mobile view [640px]
 -->
