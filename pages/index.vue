<template>
  <section class="wrap">
    <div 
      id="nav" 
      class="clearfix">
      <div class="col col-2">
        <p> Vanessa Place </p>
        <p> Criminal Appellate Lawyer</p>
        <p> Artist</p>
        <p> New York, NY</p>
      </div>
      <div class="col col-2">
        <img 
          class="bio-photo" 
          src="~/assets/Vanessa_Site_Photo.png">
      </div>
      <div class="col col-2">
        <p> Vanessa Place </p>
        <p> Criminal Appellate Lawyer</p>
        <p> Artist</p>
        <p> New York, NY</p>
      </div>
      <div class="col col-2">
        <p> Vanessa Place </p>
        <p> Criminal Appellate Lawyer</p>
        <p> Artist</p>
        <p> New York, NY</p>
      </div>
      <div class="col col-2">
        <p> Vanessa Place </p>
        <p> Criminal Appellate Lawyer</p>
        <p> Artist</p>
        <p> New York, NY</p>
      </div>            
    </div>
    <no-ssr>
      <div 
        v-masonry 
        item-selector=".sr-container" 
        class="masonry-container">
        <div 
          v-masonry-tile 
          v-for="(post, index) in posts" 
          :key="index"
          transition-duration="0.15s"
          class="sr-container sm-col sm-col-12 md-col-6 lg-col-4">
          <section v-scroll-reveal>
            <a 
              href="https://www.google.com/search?source=hp&ei=syYAXJyeN7TS9AP83aK4Aw&q=vanessa+place&btnK=Google+Search&oq=vanessa+place&gs_l=psy-ab.3..0l10.2461.3979..4108...0.0..0.90.1109.14......0....1..gws-wiz.....0..0i131.X9_fK_W6eT8"
              target="_blank"
              class="sr-link"> 
              <h1 class="sr-link-title"> {{ post.fields.title }} </h1> 
            </a>
            <h2 class="sr-url">{{ post.fields.link }}</h2>
            <p> {{ post.fields.intro }} </p>
          </section>
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

export default {
  data() {
    return {
      posts: []
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

<style lang="scss" scoped>
html {
  body {
    line-height: 1.15;
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
    line-height: 1.15;
  }
  .wrap {
    width: 95%;
    margin: 0 auto;
    .sr-container {
      padding-right: 15px;
      margin-bottom: 0px;
      // padding-right: 15px;
      visibility: hidden;
    }
    .sr-url {
      color: #006621;
    }
  }
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
.bio-photo {
  visibility: hidden;
}
#nav {
  width: 13%;
  display: flex;
  z-index: 1000;
  align-content: center;
  align-items: center;
  position: fixed;
  top: 15%;
  background-color: black;
  height: 200px;
  border: 2px solid black;
  text-align: center;
  transition: all 0.2s linear;
  box-shadow: 5px 5px 5px #545454;
}
#nav:hover img {
  visibility: visible;
}
#nav p {
  width: 30px;
  transition: all 0.2s linear;
  background-color: black;
  overflow: hidden;
  white-space: nowrap;
  visibility: hidden;
  color: white;
}
#nav:hover p {
  width: 95%;
  visibility: visible;
}
#nav:hover {
  width: 95%;
  display: flex !important;
  align-content: center !important;
  align-items: center;
}
</style>
