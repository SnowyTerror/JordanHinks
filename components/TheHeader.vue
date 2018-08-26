<template>
  <header>
    <div class="header-image" >
      <div class="fullscreen"></div>
      <!-- <div style="background-image: url('@/static/fullscreen-header.jpg')"></div> -->
      <!-- <img src="@/static/fullscreen-header.jpg" alt="Fullscreen Header"> -->
      <!-- <img v-if="" src="halfscreen-header.jpg" alt="Halfscreen Header"> -->
    </div>

    <div class="container">
      <div class="brand">
        <img src="@/static/logo.svg" alt="Jordan Hinks Logo">
      </div>
      <nav>
        <ul id="nav-items">
          <nuxt-link to="/"><li>home</li></nuxt-link>
          <nuxt-link to="/#services"><li>services</li></nuxt-link>
          <nuxt-link to="/#work"><li>work</li></nuxt-link>
          <nuxt-link to="/about"><li>about</li></nuxt-link>
          <button type="button" class="btn-primary">get in touch</button>
        </ul>

        <div id="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="less" scoped>
  header {

    .header-image {
      width: 100%;
      position: relative;
      z-index: -1;
      height: 800px;
      transform-origin: top left;
      transform: skewY(-5deg);
      overflow: hidden;

      .fullscreen {
        width: 100%;
        height: 800px;
        transform-origin: top left;
        background: url('/fullscreen-header.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        transform: skewY(5deg);
      }
    }

    > .container {
      position: absolute;
      top: 0;
      width: 95%;
      margin-left: 2.5%;
    }

    .brand {
      margin-top: 1.5rem;
      display: inline-block;
      position: relative;
      z-index: 12;

      img {
        height: 50px;
      }
    }

    nav {
      margin-top: 1.5rem;
      display: inline-block;
      text-transform: uppercase;
      float: right;

      ul {
        display: inline-block;

        a {
          display: inline-block;
          margin-right: 2rem;
          color: rgba(black, 0.6);
          transition: 0.2s ease-in-out;

          &:hover {
            color: black;
          }
        }
      }
    }

    #nav-toggle {
      display: none;
      padding: 1.5rem 2rem;
      position: relative;
      cursor: pointer;
      transition: 2s ease;
      right: 2.5%;
      z-index: 12;
      margin-top: 2rem;
      float: right;

      span {
        display: block;
        background: lighten(black, 40%);
        height: 2px;
        width: 44px;
        left: 6px;
        position: absolute;
        transition: 0.2s ease;

        &:nth-child(1) {
          top: 0.5rem;
        }

        &:nth-child(2),
        &:nth-child(3) {
          top: 1.25rem;
        }

        &:nth-child(4) {
          top: 2rem;
        }
      }

      &.active {
        position: fixed;

        span {
          background: white;

          &:nth-child(1) {
            top: 18px;
            width: 0;
            left: 50%;
          }

          &:nth-child(2) {
            transform: rotate(45deg);
          }

          &:nth-child(3) {
            transform: rotate(-45deg);
          }

          &:nth-child(4) {
            top: 18px;
            width: 0;
            left: 50%;
          }
        }
      }
    }

    // Width 780px
    @media only screen and(max-width: 780px) {
      .header-image {
        height: 100vh;

        .fullscreen {
          height: 100vh;
        }
      }

      nav {
        margin-top: 0;
        display: block;

        ul {
          position: fixed;
          display: flex;
          opacity: 0;
          height: 1px;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
          top: -100vh;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          background: rgba(black, 0.6);
          z-index: 11;
          text-align: center;
          transition: 0.4s ease;

          a {
            display: block;
            padding: 1.5rem 0;
            margin: 0;
            font-size: 1.1rem;
            color: rgba(white, 0.8);

            &:hover {
              color: white;
            }
          }

          button {
            max-width: 280px;
            width: 100%;
            font-size: 1.1rem;
            margin: 0 auto;
          }

          &.active {
            opacity: 1;
            top: 0;
            height: auto;
          }
        }
      }

      #nav-toggle {
        display: block;
      }
    }
  }
</style>
