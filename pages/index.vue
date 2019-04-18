<template>
  <section class="wrap">
    <div id="mobile-nav">
      <div class="container">
        <div
          :class="{ active: show }"
          class="sm-col-10 md-col-6 lg-col-4 nav-bar"
          @click="show=!show"
        />
        <div :class="{ grow: show }" class="sm-col-10 md-col-6 lg-col-4 nav-content">
          <div class="sm-col sm-col-12 md-col lg-col-12 close-bar" @click="show=!show">
            <p class="ag-reg red">Vanessa Place</p>
            <p class="ag-thin mg-1">
              Criminal Appellate Lawyer
              <br>
              <span class="red">Artist</span>
            </p>
          </div>
          <div class="sm-col-12 md-col lg-col-12">
            <img class="bio-photo-mob" src="~/assets/Vanessa_Site_Photo.png">
          </div>
          <div class="sm-col-12 md-col lg-col-12 contact-wrap">
            <p class="ag-reg">Contact</p>
            <p class="ag-thin">
              Email:
              <span class="red">
                <a href="mailto:acutlet@gmail.com?Subject=Hello">acutlet@gmail.com</a>
              </span>
            </p>
            <p class="ag-thin">
              Twitter:
              <span class="red">
                <a href="https://twitter.com/VanessaPlace2" target="_blank">@VanessaPlace2</a>
              </span>
            </p>
            <p class="ag-thin">
              Instagram:
              <span class="red">
                <a href="https://www.instagram.com/vanessaplacex/" target="_blank">@VanessaPlacex</a>
              </span>
            </p>
            <p class="ag-thin nav-footer">NEW YORK, NY</p>
          </div>
          <div class="sm-col-12 md-col lg-col-12 p-right">
            <p class="ag-reg">Credits</p>
            <p class="ag-thin">
              Art Direction:
              <span class="red">
                <a href="http://www.satomi.studio/" target="_blank">satomi</a>
              </span>
            </p>
            <p class="ag-thin">
              Development:
              <span class="red">Albert Lee</span>
            </p>
            <p class="ag-thin">
              Photography:
              <span class="red">
                <a href="http://dallegretto.com/" target="_blank">dan allegretto</a>
              </span>
            </p>
          </div>
          <div class="sm-col-12 md-col lg-col-12 nav-footer p-right nav-footer p-right">
            <p class="ag-reg">Made in America, 2019</p>
          </div>
        </div>
      </div>
    </div>
    <no-ssr>
      <div v-masonry item-selector=".sr-container" class="masonry-container" @click="show=false">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="sr-container sm-col-12 md-col-6 lg-col-4"
        >
          <a
            href="https://www.google.com/search?source=hp&ei=syYAXJyeN7TS9AP83aK4Aw&q=vanessa+place&btnK=Google+Search&oq=vanessa+place&gs_l=psy-ab.3..0l10.2461.3979..4108...0.0..0.90.1109.14......0....1..gws-wiz.....0..0i131.X9_fK_W6eT8"
            target="_blank"
            class="sr-link"
          >
            <h1 class="sr-link-title">{{ post.fields.title }}</h1>
          </a>
          <h2 class="sr-url">{{ post.fields.link }}</h2>
          <p>{{ post.fields.intro }}</p>
        </div>
      </div>
    </no-ssr>
    <marquee-text :repeat="10" :duration="5">
      <div class="marquee">
        <a href="https://venmo.com/vanessa-place" target="_blank">&nbsp;Pay me: @Vanessa-Place •</a>
      </div>
    </marquee-text>
  </section>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  data() {
    return {
      posts: [],
      show: false
    }
  },
  asyncData() {
    return client
      .getEntries({
        content_type: 'index',
        order: '-sys.createdAt',
        include: 4
      })
      .then(({ items: [{ fields }] }) => fields)
      .catch(console.error)
  }
}
</script> 

<style lang="scss">
html {
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    line-height: 1.25;
    img {
      max-width: none !important;
    }
  }
  h1 {
    font-size: 18px;
    margin-bottom: 4px;
    font-family: 'Roboto', arial, sans-serif;
    margin-top: 20px;
    font-weight: normal;
    @media only screen and (max-width: 812px) {
      margin-top: 10px;
    }
  }
  h2 {
    font-size: 16px;
    margin-bottom: 3px;
    font-family: 'Roboto', arial, sans-serif;
    margin-top: 0 !important;
    font-weight: 400 !important;
    font-weight: lighter;
  }
  a {
    color: black;
    font-family: 'AtlasGrotesk-Regular';
    &:hover {
      text-decoration: none;
    }
  }
  p {
    font-size: 15px;
    margin-bottom: 0;
    font-family: 'Roboto', arial, sans-serif;
    line-height: 1.25;
  }
  .masonry-container {
    @media only screen and (max-width: 812px) {
      margin-top: -1rem;
    }
  }
  .bg-blk {
    background: black;
  }
  .nav-content {
    background: black;
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 1.75rem;
    -webkit-transition: max-height 0.2s;
    -moz-transition: max-height 0.2s;
    -ms-transition: max-height 0.2s;
    -o-transition: max-height 0.2s;
    transition: max-height 0.2s;
    overflow: hidden;
    max-height: 0;
    top: 5%;
    &.grow {
      max-height: 650px;
      z-index: 999999;
    }
    @media only screen and (max-width: 812px) {
      left: 10px;
      right: 10px;
      top: 2%;
    }
    .close-bar {
      margin-bottom: 15px;
      cursor: pointer;
    }
    div {
      background: black;
    }
  }
  .wrap {
    padding: 0 0.75em;
    max-width: 1640px;
    margin: 0 auto;
    // overflow-x: hidden;
    .sr-container {
      padding: 0px 15px;
      z-index: 0;
      margin-bottom: 0px;
      @media only screen and (max-width: 812px) {
        padding: 0px 10px;
        margin-top: 0.75rem;
      }
      p {
        color: #575554;
      }
      .sr-link {
        color: #1a0dab;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .sr-url {
      color: #006621;
      word-break: break-word;
    }
  }
}
.made {
  .ag-reg {
    visibility: hidden !important;
    &:first-of-type {
      visibility: visible !important;
    }
  }
}
.flex-top {
  align-self: flex-end;
}
.clearfix {
  text-align: left !important;
  .col-2 {
    margin-left: 3.33%;
  }
}
.marquee {
  text-transform: uppercase;
  color: black;
  font-family: 'AtlasGrotesk-Regular';
  font-size: 42px;
  margin: 3rem 0 3rem 0;
}
.nav-copy-block {
  margin-right: 3rem;
  text-align: left;
  &:last-of-type {
    margin-right: 0rem;
  }
  @media only screen and (max-width: 767px) {
    width: auto;
  }
  p {
    &:first-child {
      margin-bottom: 0.5rem;
      color: #f61900 !important;
    }
  }
}
.bio-photo {
  visibility: hidden;
  border: 1px solid #f61900;
  display: flex;
  max-height: 270px;
  height: auto !important;
}
#nav {
  align-items: center;
  max-width: 13%;
  padding-right: 2rem;
  padding-left: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex !important;
  z-index: 1000;
  position: fixed;
  top: 12.5%;
  background-color: black;
  border: 2px solid black;
  text-align: center;
  overflow: hidden;
  -webkit-transition: width 0.35s linear;
  -moz-transition: width 0.35s linear;
  -o-transition: width 0.35s linear;
  transition: width 0.35s linear;
  box-shadow: 5px 5px 5px #545454;
  @media only screen and (max-width: 1024px) {
    width: auto;
    display: none !important;
    transition: height 0.35s linear;
    padding-top: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
  }
  @media only screen and (max-width: 1069px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 2rem;
  }
  .ag-reg {
    font-family: 'AtlasGrotesk-Regular';
    letter-spacing: 0.35px;
  }
  .ag-thin {
    font-family: 'AtlasGrotesk-Thin';
    letter-spacing: 0.35px;
  }
}
#nav:hover img {
  transition: height 0.2s linear;
  visibility: visible;
}
#nav p {
  background-color: black;
  overflow: hidden;
  white-space: nowrap;
  visibility: hidden;
  color: white;
  @media only screen and (max-width: 767px) {
    width: auto;
    visibility: visible;
    transition: height 0.2s linear;
  }
}
#nav:hover p {
  // width: 100%;
  transition: all 0.2s linear;
  visibility: visible;
  @media only screen and (max-width: 767px) {
    width: auto;
    transition: height 0.2s linear;
  }
}
#nav:hover {
  transition: all 0.2s linear;
  max-width: 100%;
  @media only screen and (max-width: 767px) {
    width: auto;
    transition: height 0.2s linear;
  }
}
.masonry-container {
  z-index: 0;
}
#mobile-nav {
  position: fixed;
  z-index: 999999;
  width: auto;
  top: 5%;
  background: black;
  .nav-footer {
    padding-top: 10px;
    font-size: 10px;
    background: black;
    @media only screen and (max-width: 812px) {
      padding-top: 5px;
    }
    p {
      font-size: 10px;
      font-family: 'AtlasGrotesk-Light';
      @media only screen and (max-width: 812px) {
        font-size: 8px;
      }
    }
  }
  .contact-wrap {
    background: black;
    margin: 15px 0px;
  }
  .mg-1 {
    margin: 5px 0px 0px 0px;
  }
  .p-right {
    text-align: right;
  }
  .ag-reg {
    font-family: 'AtlasGrotesk-Light';
    text-transform: uppercase;
    letter-spacing: 0.35px;
    @media only screen and (max-width: 812px) {
      font-size: 16px;
    }
  }
  .ag-thin {
    font-family: 'AtlasGrotesk-Light';
    text-transform: uppercase;
    letter-spacing: 0.35px;
    color: white;
    @media only screen and (max-width: 812px) {
      font-size: 16px;
    }
    &.nav-footer {
      @media only screen and (max-width: 812px) {
        font-size: 8px;
      }
    }
    a {
      color: #f61900;
      font-family: 'AtlasGrotesk-Light';
    }
  }
  .red {
    color: #f61900;
  }
  .nav-copy-block {
    &:first-of-type {
      margin-top: 50px;
    }
  }
  .bio-photo-mob {
    border: 1px solid red;
    display: flex;
    margin: 0 auto;
    max-height: 290px;
    height: auto !important;
    @media only screen and (max-width: 812px) {
      max-height: 220px;
    }
  }
}
#mobile-nav p {
  background-color: black;
  overflow: hidden;
  white-space: nowrap;
  // visibility: hidden;
  color: white;
  @media only screen and (max-width: 1024px) {
    width: auto;
    // visibility: visible;
    // transition: height 0.2s linear;
  }
}
#mobile-nav:hover p {
  // width: 100%;
  // transition: all 0.2s linear;
  // visibility: visible;
  @media only screen and (max-width: 1024px) {
    // width: auto;
    // transition: height 0.2s linear;
  }
}
#mobile-nav:hover {
  // transition: all 0.2s linear;
  // max-width: 100%;
  @media only screen and (max-width: 1024px) {
    // transition: height 0.2s linear;
  }
}

.nav-bar {
  background: black;
  position: fixed;
  cursor: pointer;
  z-index: 9999;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 1.75rem;
  top: 5%;
  @media only screen and (max-width: 812px) {
    left: 10px;
    right: 10px;
    top: 2%;
  }
}
</style>
