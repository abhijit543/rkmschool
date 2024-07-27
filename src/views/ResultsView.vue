<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="section-title text-center">
          <h2>Secondary Results</h2>
          <h5 class="schl-name">RAMAKRISHNA MISSION VIDYALAYA NARENDRAPUR, KOLKATA – 700103</h5>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="synop" style="float: right">
        <h2>Results summery</h2>
      </div>
      <div style="margin-bottom: 10px">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item" v-for="(item, index) in images" :key="item.id">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" :class="{ collapsed: !item.isOpen }" @click="toggleAccordion(index)">MADHYAMIK RESULTS {{ item.id }}</button>
            </h2>
            <div id="'collapse'+index" class="accordion-collapse collapse" :class="{ show: item.isOpen }" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <img :src="item.url" alt="Accordion Image" style="width: 100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [],
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
          this.images = data.results_rkm;
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    },
    toggleAccordion(index) {
      this.images.forEach((item, i) => {
        if (i === index) {
          item.isOpen = !item.isOpen;
        } else {
          item.isOpen = false;
        }
      });
    },
  },
};
</script>
<style>
.schl-name {
  font-size: 14px;
  text-align: center;
  font-weight: 300;
  line-height: 22px;
  font-style: italic;
  text-decoration: underline;
  text-decoration-color: rgb(164, 228, 15);
  text-decoration-thickness: 20%;
  animation: mymove 3s infinite;
}
@keyframes mymove {
  50% {
    text-decoration-color: #df4b19cf;
    text-decoration-thickness: 20%;
  }
}
.synop {
  text-align: center;
  background: #e49c00;
  color: #19e619;
  font-size: 16px;
  padding: 10px 30px;
  border-radius: 50px;
  margin: 0 0 15px 0;
  width: auto;
}
.synop :hover {
  background: #2fb206;
  color: #ccc;
  width: auto;
  border-radius: 50px;
}
</style>
