<template>
  <section class="wrap">
    <div 
      id="nav"
      onClick="return true"
      class="flex flex-justify clearfix">
      <div class="nav-copy-block sm-col sm-col-12 md-col md-col-12">
        <p class="ag-reg"> Vanessa Place </p>
        <p class="ag-thin"> Criminal Appellate Lawyer</p>
        <p class="ag-thin"> Artist</p>
        <p class="ag-thin"> New York, NY</p>
      </div>
      <div class="nav-copy-block sm-col sm-col-12 md-col md-col-12 flex-top">
        <img 
          class="bio-photo" 
          src="~/assets/Vanessa_Site_Photo.png">
      </div>
      <div class="nav-copy-block sm-col sm-col-12 md-col md-col-12">
        <p class="ag-reg"> Contact </p>
        <p class="ag-thin"> Email: Acutlet@gmail.com </p>
        <p class="ag-thin"> Twitter: @VanessaPlace2 </p>
        <p class="ag-thin"> Instagram: @VanessaPlacex </p>
      </div>
      <div class="nav-copy-block sm-col sm-col-12 md-col md-col-12">
        <p class="ag-reg"> Site Construction  </p>
        <p class="ag-thin"> Art Direction + Design: Satomi</p>
        <p class="ag-thin"> Development: Albert Lee </p>
        <p class="ag-thin"> Photography: Dan Allegretto </p>
      </div>
      <div class="nav-copy-block sm-col sm-col-12">
        <p class="ag-reg"> Made in America, 2018 </p>
      </div>            
    </div>
    <no-ssr>
      <div 
        v-masonry 
        item-selector=".sr-container" 
        class="masonry-container">      
        <div 
          v-infinite-scroll="loadMore" 
          infinite-scroll-disabled="busy" 
          infinite-scroll-distance="50">
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
      </div>
    </no-ssr>
    <marquee-text :duration="30">
      <div class="marquee">Venmo: @Vanessa-Place • Venmo: @Vanessa-Place • Venmo: @Vanessa-Place • Venmo: @Vanessa-Place • Venmo: @Vanessa-Place • </div>
    </marquee-text>    
  </section>
</template>

<script>
import client from '~/plugins/contentful'
import ScrollReveal from '~/plugins/ScrollReveal'
import marquee from '~/plugins/marquee'
import Masonry from '~/plugins/Masonry'
import infiniteScroll from '~/plugins/infiniteScroll'

var count = 0

export default {
  data() {
    return {
      posts: [],
      busy: false
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
    loadMore: function() {
      this.busy = true

      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.posts.push({ name: count++ })
        }
        this.busy = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
html {
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    line-height: 1.25;
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
    color: #1a0dab;
    text-decoration: underline;
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
  font-size: 42px;
  margin: 3rem 0 3rem 0;
}
.nav-copy-block {
  width: 18%;
  text-align: left;
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
  margin-top: 10px;
  border: 1px solid red;
  height: 210px;
  visibility: hidden;
}
#nav {
  width: 13%;
  padding-top: 4.35rem;
  padding-right: 4rem;
  padding-left: 4rem;
  display: flex;
  z-index: 1000;
  position: fixed;
  top: 12.5%;
  background-color: black;
  height: 230px;
  border: 2px solid black;
  text-align: center;
  overflow: hidden;
  -webkit-transition: width 0.2s linear;
  -moz-transition: width 0.2s linear;
  -o-transition: width 0.2s linear;
  transition: width 0.2s linear;
  box-shadow: 5px 5px 5px #545454;
  @media only screen and (max-width: 767px) {
    height: 62%;
    width: auto;
    display: inline-table;
    transition: height 0.2s linear;
    padding-top: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
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
  visibility: visible;
}
#nav {
  img {
    &:active {
      visibility: visible;
    }
  }
}
#nav p {
  width: 30px;
  transition: all 0.2s linear;
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
  width: 95%;
  visibility: visible;
  @media only screen and (max-width: 767px) {
    width: auto;
    transition: height 0.2s linear;
  }
}
#nav:hover {
  width: 95%;
  @media only screen and (max-width: 767px) {
    width: auto;
    transition: height 0.2s linear;
  }
}
.masonry-container {
  z-index: 0;
}
</style>
