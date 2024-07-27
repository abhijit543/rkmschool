<template>
  <div class="wrapper row3">
    <div id="container">
      <div class="three_quarter first">
        <section class="clear">
          <h1 style="background-color: #bd7617; color: #fff">Admission for Class XI: 2024</h1>
          <details style="text-align: center !important; font-size: x-large !important; font-family: fantasy; background-color: #8b8b23; color: #a215a5">
            <table style="background-color: #bac513">
              <thead>
                <tr>
                  <th>Sl. No</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>View Details</th>
                </tr>
              </thead>
              <tbody v-for="(notice, index) in notices" :key="index">
                <tr :class="index % 2 === 0 ? 'light' : 'dark'">
                  <td>{{ index + 1 }}</td>
                  <td>{{ notice.title }}</td>
                  <td>{{ notice.date }}</td>
                  <td>
                    <a :href="notice.url" download="">
                      <p :class="index % 2 === 0 ? 'light' : 'dark'">Download</p>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </details>
          <aside v-for="(adds, index) in ads" :key="index">
            <a href="#" @click.prevent="openModal(adds.img1)">
              <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
            </a>
            <br />
            <a href="#" @click.prevent="openModal(adds.img2)">
              <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
            </a>
          </aside>
          <div class="modal" :class="{ 'is-active': showModal }">
            <div class="modal-background" @click="closeModal"></div>
            <div class="modal-content">
              <img :src="modalImageUrl" alt="Modal Image" />
            </div>
            <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notices: [],
      ads: [],
      showModal: false,
      modalImageUrl: "",
    };
  },
  mounted() {
    this.fetchNotices();
  },
  methods: {
    fetchNotices() {
      fetch("/images.json")
        .then((response) => response.json())
        .then((data) => {
          this.notices = data.admission_notice;
          this.ads = data.ad;
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    },
    openModal(url) {
      this.modalImageUrl = url;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.modalImageUrl = "";
    },
  },
};
</script>
<style>
tbody,
td,
tfoot,
th,
thead,
tr {
  border-color: inherit;
  border-style: solid;
  border-width: 1px;
}
td {
  text-align: center;
}
td a p {
  color: #5f4c08;
  font-family: cursive !important;
}
details {
  margin-bottom: 4px;
}
aside > a > p {
  width: 40%;
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  animation: moveRight 4s ease-in-out infinite alternate, colorChange 4s ease-in-out infinite alternate;
  box-shadow: inset 5px 0 5px -5px #29627e;
  font-style: italic;
}
@keyframes moveRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200px);
  }
}
@keyframes colorChange {
  0% {
    color: #333; /* Start color */
  }
  50% {
    color: blue; /* Midpoint color (adjust as needed) */
  }
  100% {
    color: red; /* End color (adjust as needed) */
  }
}
aside > p {
  margin: 0.5rem;
}
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.modal.is-active {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  text-align: center;
  position: relative;
}

.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
