<template>
  <section id="testimonials">
    <div v-editable="blok" id="tm-slides">
      <component :key="blok._uid" v-for="blok in blok.testimonials" :blok="blok" :is="blok.component"></component>
    </div>
  </section>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="less">
  #testimonials {
    position: absolute;
    overflow: hidden;
    width: 100%;
    top: 15rem;
    z-index: 10;

    #tm-slides {
      width: 200%;
      left: -0%;
      position: relative;
      overflow: hidden;
      transition: 0.8s ease;

      .tm-slide {
        width: 50%;
        float: left;
        //background: rgba(red, 0.2);

        .tm {
          width: 640px;
          //background: rgba(red, 0.2);

          h3 {
            color: white;
            font-weight: 400;
            font-size: 2.2rem;
            line-height: 160%;
          }

          p {
            font-weight: 700;
            color: darken(white, 10%);
            font-size: 1.1rem;
            text-shadow: 1px 1px 1px rgba(black, 0.8);
          }
        }

        button {
          margin-top: 1rem;
        }
      }
    }

    // Width 780px
    @media only screen and(max-width: 780px) {
      top: 18vh;

      #tm-slides {

        .tm-slide {

          .tm {
            max-width: 90%;

            h3 {
              font-size: 2rem;
              line-height: 150%;
            }

            p {
              font-size: 1rem;
            }
          }

          button {
            font-size: 1.1rem;
          }
        }
      }
    }

    // Width 380px
    @media only screen and(max-width: 380px) {
      top: 18vh;

      #tm-slides {

        .tm-slide {

          .tm {

            h3 {
              font-size: 1.6rem;
            }
          }

          button {
            width: 100%;
          }
        }
      }
    }
  }
</style>
