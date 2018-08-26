<template>
  <section  id="services">
    <div class="container">
      <h2 class="section-title">Services</h2>
      <div v-editable="blok" class="container">
        <component :key="blok._uid" v-for="blok in blok.columns" :blok="blok" :is="blok.component"></component>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="less">


  #services {
    padding: 5rem 0;

    > .container {
      max-width: 1200px;
    }

    > div > div {
      display: flex;
      justify-content: space-around;
    }

    .service {
      margin-top: 5rem;
      text-align: center;
      flex: 1;
      position: relative;
      overflow: hidden;
      position: relative;

      &:after {
        content: ' ';
        display: block;
        position: absolute;
        height: 240px;
        width: 6px;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        border-radius: 10px;
        background: linear-gradient(45deg, #551f78 10%,#b2549f 80%);
      }

      &:last-child:after {
        display: none;
      }

      img {
        width: 100%;
        max-width: 260px;
        margin-bottom: 2rem;
      }

      h4 {
        font-size: 1.4rem;
        margin-bottom: 0.8rem;
      }

      p {
        margin: 0 auto;
        line-height: 140%;
        max-width: 320px;
        font-size: 1.2rem;
        color: darken(white, 60%);
      }
    }

    // Width 960px
    @media only screen and(max-width: 960px) {
      .service img {
        max-width: 140px;
      }
    }

    // Width 780px
    @media only screen and(max-width: 780px) {
      > div > div {
        display: block;
      }

      .service {
        padding-bottom: 4rem;

        &:last-child {
          padding-bottom: 0;
        }

        &:after {
          height: 4px;
          width: 80%;
          top: auto;
          bottom: 0rem;
          right: 50%;
          transform: translate(50%, -50%);
        }

        img {
          width: 80%;
          max-width: auto;
          margin-bottom: 1rem;
        }

        h4 {
          font-size: 1.3rem;
          margin-bottom: 0.8rem;
        }

        p {
          max-width: 340px;
          width: 90%;
          font-size: 1.1rem;
        }
      }
    }

  }
</style>
