<template>

  <div class="tm-slide">
    <div class="container">
      <div class="tm">
        <h3>{{ blok.content }}</h3>
        <hr>
        <p>{{ blok.by }}</p>
      </div>
      <button class="btn-primary">get in touch</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
