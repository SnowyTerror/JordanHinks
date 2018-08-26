<template>
  <section id="work" v-editable="blok">
    <div class="container">
      <h2 class="section-title" id="work-title">Work</h2>
      <transition name="fade">
        <button @click="backBtn" v-if="viewingClient == true" class="btn-primary">back</button>
      </transition>
    </div>
    <div id="clients-area" style="left: 0%">
      <div class="clients">
        <div class="container">
          <ul>
            <component v-on:click.native="loadContent(index)" v-bind:class="{'full' : index === 0, 'half' : index !== 0}" :index="index" :key="blok.index" v-for="(blok, index) in blok.client" :blok="blok" :is="blok.component"></component>
          </ul>
        </div>
      </div>

      <div class="client">
        <ClientContent />
      </div>
    </div>
  </section>
</template>

<script>
import ClientContent from '@/components/ClientContent'

export default {
  components: {
    ClientContent
  },
  props: ['blok'],
  data() {
    return {
      viewingClient: false
    }
  },
  methods: {
    loadContent: function(i) {
      console.log(`work clicked ` + i)
      //console.log(viewingClient)
      document.getElementById('work-title').innerHTML = i
      document.getElementById('clients-area').style.left = '100%'
      this.viewingClient = true
    },
    backBtn: function() {
      document.getElementById('work-title').innerHTML = 'work'
      document.getElementById('clients-area').style.left = '0%'
      this.viewingClient = false
    }
  }
}
</script>

<style lang="less">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  #work {
    width: 100%;
    padding: 6rem 0;
    overflow: hidden;

    > .container {
      max-width: 1200px;
    }

    h2 {
      margin-bottom: 4rem;
    }

    button {
      float: right;
      transform: translateY(-1.2rem);
    }

    #clients-area {
      overflow: hidden;
      width: 200%;
      position: relative;
      transition: 0.5s ease-in-out;

      &.to-client {
        left: -100%;
      }

      .clients,
      .client {
        float: left;
        width: 50%;
        transition: 1s ease;
      }

      .clients {

        ul {
          font-size: 0;
          line-height: 0;
          padding: 0;
          max-width: 1200px;
          margin: 0 auto;

          li {
            position: relative;
            display: inline-block;
            cursor: pointer;
            overflow: hidden;

            &.full {
              width: 100%;
            }

            &.half {
              width: 50%;
            }

            img {
              width: 100%;
            }

            .overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              width: 100%;
              height: 100%;
              background: black;
              opacity: 0; // 0.4
              transition: 0.5s ease 0.1s;
            }

            h3 {
              position: absolute;
              left: -15rem;
              bottom: 1.5rem;
              font-size: 1.3rem;
              line-height: 100%;
              color: white;
              transition: 0.4s ease;

              &:after {
                transition: 0.8s ease;
                opacity: 0;
                content: ' ';
                display: block;
                position: absolute;
                left: calc(100% + 25px);
                height: 6px;
                width: 3000px;
                top: 50%;
                transform: translate(-10px, -50%) scale(0, 1);
                transform-origin: right;
                border-radius: 10px;
                background: linear-gradient(45deg, #551f78 10%,#b2549f 80%);
              }
            }

            &:hover,
            &:focus {
              .overlay {
                opacity: 0.4;
              }

              h3 {
                left: 1.5rem;

                &:after {
                  opacity: 1;
                  transform: translate(-10px, -50%) scale(1);
                }
              }
            }
          }

          // Width 640px
          @media only screen and(max-width: 640px) {

            li {
              display: block;

              &.full,
              &.half {
                width: 100%;
              }

              h3 {
                font-size: 1.2rem;

                &:after {
                  width: 640px;
                  height: 4px;
                }
              }

              &:hover,
              &:focus {
                h3 {
                  left: 1.2rem;
                }
              }
            }
          }
        }
      }

      .client {

      }
    }
  }
</style>
