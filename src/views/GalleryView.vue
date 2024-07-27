<template>
  <div class="gallery">
    <transition-group name="fade" tag="div" class="gallery-grid">
      <figure v-for="(image, index) in galleris" :key="index" class="gallery-item">
        <img :src="image.src" :alt="image.alt" @click="openModal(image)" style="cursor: pointer" />
        <figcaption>{{ image.title }}</figcaption>
      </figure>
    </transition-group>

    <!-- Bootstrap Modal -->
    <div class="modal fade" ref="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedImage.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="selectedImage.src" :alt="selectedImage.alt" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <!-- Video Links -->
    <h1>Videos</h1>
    <ul class="video-links">
      <li v-for="video in rkm_videos" :key="video.id">
        <a href="#" @click.prevent="selectVideo(video.id)">
          <img :src="video.image" alt="Thumbnail for {{ video.title }}" class="video-thumbnail" />
          {{ video.title }}
        </a>
      </li>
    </ul>

    <!-- Video Player -->
    <div v-if="selectedVideoId" class="video-player">
      <iframe
        :src="`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleris: [],
      rkm_videos: [],
      selectedImage: { src: "", alt: "", title: "" },
      selectedVideoId: "",
    };
  },
  mounted() {
    this.fetchgallery();
  },
  methods: {
    async fetchgallery() {
      try {
        const response = await fetch("/images.json");
        const data = await response.json();
        this.galleris = data.gallery_image;
        this.rkm_videos = data.ytvideos;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    openModal(image) {
      this.selectedImage = image;
      this.$refs.myModal.classList.add("show");
      this.$refs.myModal.style.display = "block";
      document.body.classList.add("modal-open");
    },
    closeModal() {
      this.selectedImage = { src: "", alt: "", title: "" };
      this.$refs.myModal.classList.remove("show");
      this.$refs.myModal.style.display = "none";
      document.body.classList.remove("modal-open");
    },
    selectVideo(id) {
      this.selectedVideoId = id;
    },
  },
};
</script>

<style>
.gallery {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
  top: 10px;
}
.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: inherit;
}
.gallery-item {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.gallery-item figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 8px;
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;
}
.close {
  margin-top: -72px;
  margin-left: 258px;
}
@media only screen and (max-width: 767px) {
  .close {
    margin-left: 141px;
  }
  .modal-content {
    left: 35px;
  }
}
.video-links {
  list-style: none;
  padding: 0;
}
.video-links li {
  margin-bottom: 10px;
}
.video-links {
  display: flex !important;
  flex-direction: row !important;
  overflow: auto !important;
}
.video-thumbnail {
  object-fit: cover;
  margin-right: 10px;
}
.video-player iframe {
  width: 100%;
  height: 315px; /* Standard height for YouTube iframe */
}
h1 {
  text-shadow: 0 0 3px #ff0000, 0 0 5px #0000ff;
}
</style>
