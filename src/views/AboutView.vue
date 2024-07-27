<template>
  <div class="full-bg-about">
    <div class="container about-main-head">
      <h1>
        History of Ramakrishna Mission, Delhi
        <hr />
      </h1>
    </div>
    <div class="container dmn-maharaj">
      <p class="maharaj-text-color">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem, dignissimos quae laborum quidem fugit, id enim dolores nostrum voluptatum mollitia nemo labore nesciunt? Quod ratione quo
        impedit modi Swami Devmayananda.
      </p>
      <div class="dmn-maharaj-know-more">
        <button @click="toggleAnimation" style="font-weight: bold" v-if="showLess">Please Click to read Less</button>
        <button @click="toggleAnimation" style="font-weight: bold" v-else>Please Click to read More</button>
      </div>
      <transition name="fade">
        <p v-if="showParagraph" class="maharaj-text-color">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsa blanditiis minima corrupti similique vitae! Quia enim incidunt omnis voluptates placeat consequatur aliquam, veniam id
          iure tempore corrupti aut earum!
        </p>
      </transition>
      <hr style="--bs-border-width: 9px; color: black" />
    </div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <!-- Carousel items -->
      <div class="carousel-inner" style="display: flex; justify-content: center; align-items: center">
        <div v-for="(items_about, index) in item" :key="index" :class="{ 'carousel-item': true, active: index === 0 }" class="card-history">
          <p>{{ items_about.text }}</p>
        </div>
        <!-- Previous button -->
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" @click.prevent="prevSlide">
          <span class="carousel-control-prev-icon" aria-hidden="true" style="background-color: #000"></span>
          <span class="sr-only">Previous</span>
        </a>
        <!-- Next button -->
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" @click.prevent="nextSlide">
          <span class="carousel-control-next-icon" aria-hidden="true" style="background-color: #000"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showParagraph: false,
      showLess: false,
      item: [],
    };
  },
  mounted() {
    this.fetchImages();
    // Fetch data from JSON file (or API)
  },
  methods: {
    fetchImages() {
      fetch("/images.json")
        .then((response) => response.json())
        .then((data) => (this.item = data.items))
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    },
    toggleAnimation() {
      this.showParagraph = !this.showParagraph;
      this.showLess = !this.showLess;
    },
    nextSlide() {
      $("#carouselExampleControls").carousel("next");
    },
    // Handle previous button click
    prevSlide() {
      $("#carouselExampleControls").carousel("prev");
    },
  },
};
</script>
<style>
.about-main-head {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.dmn-maharaj {
  padding-bottom: 20px;
}
.dmn-maharaj-know-more {
  display: flex;
  justify-content: center;
  align-items: center;
}
.full-bg-about {
  background-color: #e7b913e6;
}
.maharaj-text-color {
  color: #fff;
  font-size: large;
}
.card-history {
  margin: 0 10px;
  width: 80vw;
  height: 300px;
  --bs-card-spacer-y: 1rem;
  --bs-card-spacer-x: 1rem;
  --bs-card-title-spacer-y: 0.5rem;
  --bs-card-title-color: ;
  --bs-card-subtitle-color: ;
  --bs-card-border-width: var(--bs-border-width);
  --bs-card-border-color: var(--bs-border-color-translucent);
  --bs-card-border-radius: var(--bs-border-radius);
  --bs-card-box-shadow: ;
  --bs-card-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width)));
  --bs-card-cap-padding-y: 0.5rem;
  --bs-card-cap-padding-x: 1rem;
  --bs-card-cap-bg: rgba(var(--bs-body-color-rgb), 0.03);
  --bs-card-cap-color: ;
  --bs-card-height: ;
  --bs-card-color: ;
  --bs-card-bg: var(--bs-body-bg);
  --bs-card-img-overlay-padding: 1rem;
  --bs-card-group-margin: 0.75rem;

  flex-direction: column;
  min-width: 0;

  color: var(--bs-body-color);
  word-wrap: break-word;
  background-color: var(--bs-card-bg);
  background-clip: border-box;
  border: var(--bs-card-border-width) solid var(--bs-card-border-color);
  border-radius: var(--bs-card-border-radius);
}
</style>
