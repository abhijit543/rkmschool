<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <!-- Carousel items -->
    <div class="carousel-inner">
      <div v-for="(image, index) in banners" :key="index" :class="{ 'carousel-item': true, active: index === 0 }">
        <img class="d-block w-100" :src="image.url" :alt="'Slide ' + (index + 1)" />
      </div>
    </div>

    <!-- Previous button -->
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" @click.prevent="prevSlide">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>

    <!-- Next button -->
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" @click.prevent="nextSlide">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <div class="rjgbuilt">
    <div class="content-card">
      <h1 class="content-head">Ramakrishna Mission, Delhi</h1>
      <div class="content-para">
        <div>
          <p>
            As the Mission approaches closer to its centenary, a comprehensive history of the centre was unavailable. We have arranged some of these details that we could gather from old annual
            reports, our older site (rkmissiondel.org) and arranged them in the form of a timeline, reflecting its history, heads, progress down the ages along-with the history of the Ramakrishna
            Mission Free T.B.Clinic and Medical Centre, birbhbum, rajgram.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="background-container">
    <img :src="backgroundImage" class="background-image" />
    <div class="card-container">
      <h1 class="insText">Insipred to</h1>
      <div v-for="(card, index) in inspiredImage" :key="index" class="card" :style="{ animationDelay: index * 1 + 's' }">
        <img :src="card.url" :alt="card.alt" class="card-image" />
      </div>
    </div>
  </div>
  <div class="rjgbuilt">
    <div class="content-card">
      <h1 class="content-head animate-evnts">Upcoming Events</h1>
      <hr style="height: 1px; width: 24%; border: 1px solid #000" />
    </div>
    <div class="row events-images">
      <template v-for="image in images" :key="image.id">
        <div class="col-md-3 col-sm-12" v-if="image.isDownload === true">
          <a :href="image.preview" download>
            <img :src="image.url" alt="Image" />
          </a>
          <h3>{{ image.content }}</h3>
        </div>
        <div class="col-md-3 col-sm-12" v-else="image.isDownload === false">
          <img :src="image.url" alt="Image" />
          <h3>{{ image.content }}</h3>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImage: require("@/assets/insipiration-bg-image.jpg"),
      inspiredImage: [],
      images: [],
      banners: [],
    };
  },
  mounted() {
    this.fetchImages();
    // Fetch data from JSON file (or API)
  },
  methods: {
    fetchImages() {
      fetch("/images.json") // Fetch from the JSON file in the public directory
        .then((response) => response.json())
        .then((data) => {
          this.images = data.events;
          this.banners = data.banner;
          this.inspiredImage = data.inspire;
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    },
    // Handle next button click
    nextSlide() {
      $("#carouselExampleControls").carousel("next");
    },
    // Handle previous button click
    prevSlide() {
      $("#carouselExampleControls").carousel("prev");
    },
  },
  //upcoming events functionality
};
</script>

<style>
/* Add your custom styles here */
#carouselExampleControls {
  margin-top: 20px;
}
/* h1.content-head::after {
  content: "";
  height: 2px;
  width: 200px;
  position: absolute;
  background-color: #000;
} */
.rjgbuilt {
  background-color: #ffdead !important;
}

.content-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.events-images {
  background-color: #ffdead !important;
  max-width: 100%;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}
.events-images > div {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.content-card .content-head {
  padding-top: 10px;
}

.content-card .content-para {
  text-align: center;
}
.background-container {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  margin: 0 10px;
  width: 200px;
  height: 300px;
  animation: slideIn 0.5s forwards;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media only screen and (max-width: 768px) {
  .card-container {
    flex-wrap: wrap;
  }
  .background-container {
    height: 150vh;
  }
  .card {
    margin: 10px;
  }
  .insText {
    font-weight: 700;
    color: rgb(213 3 3 / 74%);
  }
}
.insText {
  font-weight: 700;
  color: rgb(213 3 3 / 74%);
}
</style>
