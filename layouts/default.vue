<template>
  <main>
    <TheHeader />
    <nuxt/>
  </main>
</template>

<script>
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="less">
@import 'assets/normalize.css';

html {
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  line-height: 140%;
}

* {
  box-sizing: border-box;
  margin: 0;
  letter-spacing: 1px;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
  padding: 0;
}

.container {
  width: 95%;
  margin: 0 auto;
}

@gradient: linear-gradient(45deg, #551f78 10%,#b2549f 80%);

button {
  border: none;
  border-radius: 5px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s ease;
}

.btn-primary {
  background: @gradient;
  color: white;
  padding: 1.3rem 1.5rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  }
}

hr {
  border: none;
  height: 4px;
  background: @gradient;
  border-radius: 100px;
  width: 80px;
  margin: 1rem 0;
}

h2.section-title {
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  //transform: translateX(50px);

  &:before {
    content: ' ';
    position: absolute;
    display: block;
    height: 10px;
    width: 400px;
    right: calc(100% + 1.5rem);
    top: 50%;
    transform: translateY(-50%);
    border-radius: 10px;
    background: @gradient;
  }
}
</style>
