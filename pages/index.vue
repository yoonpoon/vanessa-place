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
      <div class="nav-copy-block sm-col sm-col-12 made">
        <p class="ag-reg"> Made in America, 2018 </p>
        <p class="ag-reg"> Made in America, 2018 </p>
        <p class="ag-reg"> Made in America, 2018 </p>
        <p class="ag-reg"> Made in America, 2018 </p>
      </div>            
    </div>
    <div id="mobile-nav">
      <div class="lg-hide clearfix">
        <div 
          class="nav-bar"
          @click="show=!show">
          <transition 
            name="slide-toggle" 
            @after-enter="transitionComplete" 
            @before-leave="willLeave">
            <div
              v-if="show"
              class="container nav-content">
              <div class="sm-col sm-col-12 md-col lg-col-3">
                <p class="ag-reg red"> Vanessa Place </p>
                <p class="ag-thin mg-1"> Criminal Appellate Lawyer <br> Artist</p>
                <p class="ag-thin red"> NYC</p>
              </div>
              <div class="sm-col sm-col-12 md-col lg-col-3">
                <img 
                  class="bio-photo-mob" 
                  src="~/assets/Vanessa_Site_Photo.png">
              </div>
              <div class="sm-col sm-col-12 contact-wrap">
                <p class="ag-reg"> Contact </p>
                <p class="ag-thin"> Email: <span class="red">Acutlet@gmail.com </span> </p>
                <p class="ag-thin"> Twitter: <span class="red"> @VanessaPlace2 </span> </p>
                <p class="ag-thin"> Instagram: <span class="red"> @VanessaPlacex </span> </p>
              </div>
              <div class="sm-col sm-col-12 md-col lg-col-3 p-right">
                <p class="ag-reg"> Credits  </p>
                <p class="ag-thin"> Art Direction: <span class="red"> Satomi.studio </span> </p>
                <p class="ag-thin"> Development: <span class="red">Albert Lee </span> </p>
                <p class="ag-thin"> Photography: <span class="red">Dan Allegretto </span></p>
              </div>
              <div class="sm-col sm-col-12 nav-footer center">
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
    <marquee-text 
      :repeat="10" 
      :duration="5">
      <div class="marquee"> <a 
        href="https://venmo.com/vanessa-place" 
        target="_blank">&nbsp;Pay me: @Vanessa-Place • </a> 
      </div>
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
      el.style.height = ''
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
  .bg-blk {
    background: black;
  }
  .nav-content {
    background: black;
    padding: 1rem;
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
  color: #f61900;
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
  -webkit-transition: width 0.35s linear;
  -moz-transition: width 0.35s linear;
  -o-transition: width 0.35s linear;
  transition: width 0.35s linear;
  box-shadow: 5px 5px 5px #545454;
  @media only screen and (max-width: 1024px) {
    // height: 62%;
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
  width: 92.5%;
  top: 5%;
  background: black;
  .nav-footer {
    margin-top: 25px;
    p {
      font-size: 12px;
      font-family: 'AtlasGrotesk-Light';
    }
  }
  .contact-wrap {
    margin: 25px 0px;
    .ag-reg {
      margin-bottom: 5px;
    }
  }
  .mg-1 {
    margin: 5px 0px;
  }
  .p-right {
    text-align: right;
    .ag-reg {
      margin-bottom: 5px;
    }
  }
  .ag-reg {
    font-family: 'AtlasGrotesk-Light';
    text-transform: uppercase;
    letter-spacing: 0.35px;
  }
  .ag-thin {
    font-family: 'AtlasGrotesk-Light';
    text-transform: uppercase;
    letter-spacing: 0.35px;
    color: white;
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
    margin-left: auto;
    max-height: 220px;
    height: auto !important;
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
  max-width: 100%;
  @media only screen and (max-width: 1024px) {
    // transition: height 0.2s linear;
  }
}
.slide-toggle-enter-active,
.slide-toggle-leave {
  // transition: height 0.2s ease;
}
.slide-toggle-enter,
.slide-toggle-leave-active {
  // transition: height 0.2s ease;
}
.nav-bar {
  background: black;
  position: fixed;
  width: 85%;
  left: 50%;
  transform: translateX(-51%);
  height: 50px;
  top: 5%;
}
</style>
