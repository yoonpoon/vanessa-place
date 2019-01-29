<template>
  <section class="wrap">
    <div 
      id="nav"
      class="sm-show clearfix">
      <div class="nav-copy-block sm-col sm-col-12 md-col-12 lg-col-4">
        <p class="ag-reg"> Vanessa Place </p>
        <p class="ag-thin"> Criminal Appellate Lawyer</p>
        <p class="ag-thin"> Artist</p>
        <p class="ag-thin"> New York, NY</p>
      </div>
      <div class="nav-copy-block sm-col sm-col-12 md-col-12 lg-col-4">
        <img 
          class="bio-photo" 
          src="~/assets/Vanessa_Site_Photo.png">
      </div>
      <div class="nav-copy-block sm-col sm-col-12 md-col-12 lg-col-4">
        <p class="ag-reg"> Contact </p>
        <p class="ag-thin"> Email: Acutlet@gmail.com </p>
        <p class="ag-thin"> Twitter: @VanessaPlace2 </p>
        <p class="ag-thin"> Instagram: @VanessaPlacex </p>
      </div>
      <div class="nav-copy-block sm-col sm-col-12 md-col-12 lg-col-4">
        <p class="ag-reg"> Site Construction  </p>
        <p class="ag-thin"> Art Direction + Design: Satomi</p>
        <p class="ag-thin"> Development: Albert Lee </p>
        <p class="ag-thin"> Photography: Dan Allegretto </p>
      </div>
      <!-- <div class="nav-copy-block sm-col sm-col-12">
        <p class="ag-reg"> Made in America, 2018 </p>
      </div>             -->
    </div>
    <div id="mobile-nav">
      <div class="lg-hide clearfix">
        <div 
          class="nav-bar"
          @click="show=!show"/>
        <div>
          <transition 
            name="slide-toggle" 
            @after-enter="transitionComplete" 
            @before-leave="willLeave">
            <div 
              v-if="show">
              <div class="nav-copy-block sm-col sm-col-12 md-col lg-col-3">
                <p class="ag-reg"> Vanessa Place </p>
                <p class="ag-thin"> Criminal Appellate Lawyer</p>
                <p class="ag-thin"> Artist</p>
                <p class="ag-thin"> New York, NY</p>
              </div>
              <div class="sm-col sm-col-12 md-col lg-col-3">
                <img 
                  class="bio-photo-mob" 
                  src="~/assets/Vanessa_Site_Photo.png">
              </div>
              <div class="nav-copy-block sm-col sm-col-12 md-col lg-col-3">
                <p class="ag-reg"> Contact </p>
                <p class="ag-thin"> Email: Acutlet@gmail.com </p>
                <p class="ag-thin"> Twitter: @VanessaPlace2 </p>
                <p class="ag-thin"> Instagram: @VanessaPlacex </p>
              </div>
              <div class="nav-copy-block sm-col sm-col-12 md-col lg-col-3">
                <p class="ag-reg"> Site Construction  </p>
                <p class="ag-thin"> Art Direction + Design: Satomi</p>
                <p class="ag-thin"> Development: Albert Lee </p>
                <p class="ag-thin"> Photography: Dan Allegretto </p>
              </div>
              <div class="nav-copy-block sm-col sm-col-12 ">
                <p class="ag-reg"> Made in America, 2018 </p>
              </div>                 
            </div>
          </transition>
        </div>    
      </div>
    </div>
    <no-ssr>
      <div 
        v-masonry 
        item-selector=".sr-container" 
        class="masonry-container">      
        <div 
          v-for="(post, index) in posts" 
          :key="index"          
          class="sr-container sm-col sm-col-12 md-col-6 lg-col-4">
          <a 
            href="https://www.google.com/search?source=hp&ei=syYAXJyeN7TS9AP83aK4Aw&q=vanessa+place&btnK=Google+Search&oq=vanessa+place&gs_l=psy-ab.3..0l10.2461.3979..4108...0.0..0.90.1109.14......0....1..gws-wiz.....0..0i131.X9_fK_W6eT8"
            target="_blank"
            class="sr-link"> 
            <h1 class="sr-link-title"> {{ post.fields.title }} </h1> 
          </a>
          <h2 class="sr-url">{{ post.fields.link }}</h2>
          <p> {{ post.fields.intro }} </p>
        </div>        
      </div>
    </no-ssr>
    <marquee-text :duration="30">
      <div class="marquee">Pay me: <a 
        href="https://venmo.com/vanessa-place" 
        target="_blank"> @Vanessa-Place </a> • Pay me: <a 
          href="https://venmo.com/vanessa-place" 
          target="_blank"> @Vanessa-Place </a> • Pay me: <a 
            href="https://venmo.com/vanessa-place" 
            target="_blank"> @Vanessa-Place </a> • Pay me: <a 
              href="https://venmo.com/vanessa-place" 
              target="_blank"> @Vanessa-Place </a> • Pay me: <a 
                href="https://venmo.com/vanessa-place" 
                target="_blank"> @Vanessa-Place </a> • </div>
    </marquee-text>    
  </section>
</template>

<script>
import client from '~/plugins/contentful'
import marquee from '~/plugins/marquee'
import Masonry from '~/plugins/Masonry'

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
  },
  methods: {
    transitionComplete: function(el) {
      el.style.height = '30px'
    },
    willLeave: function(el) {
      el.style.height = ''
    }
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
    margin-bottom: 5px;
    margin-top: 20px;
    font-weight: normal;
  }
  h2 {
    font-size: 14px;
    margin-bottom: 3px;
    margin-top: 0 !important;
    font-weight: 400 !important;
    font-weight: lighter;
  }
  a {
    color: #ff0000;
    font-family: 'AtlasGrotesk-Regular';
    &:hover {
      text-decoration: none;
    }
  }
  p {
    font-size: 14px;
    margin-bottom: 0;
    line-height: 1.25;
  }
  .wrap {
    width: 95%;
    margin: 0 auto;
    overflow-y: hidden;
    overflow-x: hidden;
    .sr-container {
      padding-right: 15px;
      z-index: 0;
      margin-bottom: 0px;
      @media only screen and (max-width: 767px) {
        padding-right: 0px;
      }
      .sr-link {
        color: #1a0dab;
        text-decoration: underline;
      }
    }
    .sr-url {
      color: #006621;
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
  color: red;
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
      color: red !important;
    }
  }
}
.bio-photo {
  visibility: hidden;
  border: 1px solid red;
  display: flex;
  max-height: 220px;
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
  // height: 230px;
  border: 2px solid black;
  text-align: center;
  overflow: hidden;
  -webkit-transition: width 0.2s linear;
  -moz-transition: width 0.2s linear;
  -o-transition: width 0.2s linear;
  transition: width 0.2s linear;
  box-shadow: 5px 5px 5px #545454;
  @media only screen and (max-width: 1024px) {
    // height: 62%;
    width: auto;
    display: none !important;
    transition: height 0.2s linear;
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
  width: 92.5%;
  top: 5%;
  background: black;
  .ag-thin {
    color: white;
  }
  .nav-copy-block {
    &:first-of-type {
      margin-top: 50px;
    }
  }
  .bio-photo-mob {
    border: 1px solid red;
    display: flex;
    max-height: 220px;
    height: auto !important;
  }
}
#mobile-nav:hover img {
  transition: height 0.2s linear;
  visibility: visible;
}
#mobile-nav p {
  background-color: black;
  overflow: hidden;
  white-space: nowrap;
  visibility: hidden;
  color: white;
  @media only screen and (max-width: 1024px) {
    width: auto;
    visibility: visible;
    transition: height 0.2s linear;
  }
}
#mobile-nav:hover p {
  // width: 100%;
  transition: all 0.2s linear;
  visibility: visible;
  @media only screen and (max-width: 1024px) {
    width: auto;
    transition: height 0.2s linear;
  }
}
#mobile-nav:hover {
  transition: all 0.2s linear;
  max-width: 100%;
  @media only screen and (max-width: 1024px) {
    transition: height 0.2s linear;
  }
}
.slide-toggle-enter-active,
.slide-toggle-leave {
  // height: 30px;
  transition: height 0.2s;
}
.slide-toggle-enter,
.slide-toggle-leave-active {
  height: 0px;
  transition: height 0.2s;
}
.nav-bar {
  background: black;
  position: fixed;
  width: 92.5%;
  height: 50px;
  top: 5%;
}
</style>
