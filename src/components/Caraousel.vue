<template>
  <div class="mb-5">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template #img>
            <img
              class="d-block d-md-none img-fluid w-100"
              width="750"
              height="1334"
              src="https://azamirugsd1aa27cd3a7a49e19234d2b0adc6db8f183234-dev.s3.ap-south-1.amazonaws.com/public/images/unsplash-home-1.jpg"
              alt="image slot"
            >
            <img
              class="d-none d-md-block img-fluid w-100"
              width="1920"
              height="768"
              src="https://azamirugsd1aa27cd3a7a49e19234d2b0adc6db8f183234-dev.s3.ap-south-1.amazonaws.com/public/images/unsplash-home-1.jpg"
              alt="image slot"
            >
        </template>
        <b-jumbotron bg-variant="transparent" class="rounded py-0">
          <template #header> 
            <transition name="slide-fade" appear><div class="font-courgette" v-t="'carousel[0].header'"></div></transition>
          </template>
          <template #lead>
            <div class="font-courgette" v-t="'carousel[0].subheader'"></div>
          </template>
        </b-jumbotron>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
            <img
              class="d-block d-md-none img-fluid w-100"
              width="750"
              height="1334"
              src="https://azamirugsd1aa27cd3a7a49e19234d2b0adc6db8f183234-dev.s3.ap-south-1.amazonaws.com/public/images/unsplash-home-2.jpg"
              alt="image slot"
            >
            <img
              class="d-none d-md-block img-fluid w-100"
              width="1920"
              height="768"
              src="https://azamirugsd1aa27cd3a7a49e19234d2b0adc6db8f183234-dev.s3.ap-south-1.amazonaws.com/public/images/unsplash-home-2.jpg"
              alt="image slot"
            >
        </template>
        <b-jumbotron bg-variant="transparent" class="rounded py-0">
          <template #header> 
            <transition name="slide-fade" appear><div class="font-courgette" v-t="'carousel[1].header'"></div></transition>
          </template>
          <template #lead>
            <div class="font-courgette" v-t="'carousel[0].subheader'"></div>
          </template>
        </b-jumbotron>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
            <img
              class="d-block d-md-none img-fluid w-100"
              width="750"
              height="1334"
              src="https://azamirugsd1aa27cd3a7a49e19234d2b0adc6db8f183234-dev.s3.ap-south-1.amazonaws.com/public/images/unsplash-home-3.jpg"
              alt="image slot"
            >
            <img
              class="d-none d-md-block img-fluid w-100"
              width="1920"
              height="768"
              src="https://azamirugsd1aa27cd3a7a49e19234d2b0adc6db8f183234-dev.s3.ap-south-1.amazonaws.com/public/images/unsplash-home-3.jpg"
              alt="image slot"
            >
        </template>
        <b-jumbotron bg-variant="transparent" class="rounded py-0">
          <template #header> 
            <transition name="slide-fade" appear><div class="font-courgette" v-t="'carousel[2].header'"></div></transition>
          </template>
          <template #lead>
            <div class="font-courgette" v-t="'carousel[0].subheader'"></div>
          </template>
        </b-jumbotron>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style>
.carousel-caption {
   /* top: 10%; */
   text-align: left !important;
   background:rgba(0,0,0,0.4);
   border-radius: 0.3rem;
}

.slide-fade-enter-active {
  transition: all 3.3s ease;
}
.slide-fade-leave-active {
  transition: all 3.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>