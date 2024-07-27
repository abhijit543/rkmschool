<template>
  <header>
    <div class="navbar-top">
      <div class="navbar-top-wrapper row align-items-center" style="width: 100%">
        <div class="col-md-4 col-sm-6 col-xs-6 nav-top-a nav-top-before">
          <a href="mailto:email@email.com" class="">
            <i class="fas fa-envelope"></i>
            email@email.com
          </a>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6 nav-top-a nav-top-before">
          <a href="tel:+91 99999 99999" class="">
            <i class="fa-solid fa-phone"></i>
            +91 99999 99999
          </a>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
          <ul class="navbar-top-ul p-0 m-0">
            <li v-for="(value, index) in navIcon" :key="index" class="nav-top-a">
              <a :href="value.iconLink">
                <i :class="value.iconImage"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="navbar-middle">
      <div class="container">
        <div class="d-flex align-items-center navbar-middle-wrapper ms-5">
          <div>
            <img src="../src/assets/RKM_Logo.png" alt="" width="80px" />
          </div>
          <div class="navbar-middle-m">
            <h1>LOREM IPSUM LOREM</h1>
            <p>(lOREM ipsum KDFK LASDAD)</p>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #d4902b !important; z-index: 10">
      <div class="header-fix header-mob">
        <button
          class="navbar-toggler"
          @click="toggleClass"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ show: isActive }" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">ABOUT</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false"> RESULTS & HOSTEL </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown" style="background-color: #d4902b">
                <router-link class="dropdown-item" to="/results">RESULTS</router-link>
                <router-link class="dropdown-item" to="/hostel">HOSTEL</router-link>
              </div>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/admission">ADMISSION + VACCANCY</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/gallery">GALLERY</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/administration">ADMINISTRATION</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact-us">CONTACT US</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </header>
  <footer>
    <div class="row footer-parent">
      <div class="col-md-6 col-sm-12">
        <h1>Contact Details and Timings</h1>
        <hr />
        <div class="row" style="row-gap: 10px; align-items: center">
          <div class="col-2">
            <svg id="SvgjsSvg1001" width="60" height="60" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs">
              <defs id="SvgjsDefs1002"></defs>
              <g id="SvgjsG1008">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="60" height="60">
                  <path
                    d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"
                    fill="#ffffff"
                    class="color000 svgShape"
                  ></path>
                </svg>
              </g>
            </svg>
          </div>
          <div class="col-10">
            <p>Ramakrishna Mission, ​Ramakrishna Ashram Marg, ​New Delhi - 110055</p>
          </div>
          <div class="col-2">
            <svg id="SvgjsSvg1011" width="60" height="60" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs">
              <defs id="SvgjsDefs1012"></defs>
              <g id="SvgjsG1013">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="60" height="60">
                  <path
                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                    fill="#ffffff"
                    class="color000 svgShape"
                  ></path>
                </svg>
              </g>
            </svg>
          </div>
          <div class="col-10">
            <p>
              Visiting Hours: <br />
              05.00 am to 12.00 noon <br />
              04:00pm to 9.00 pm (Apr - Sep)<br />
              3:30 pm to 8:30 pm (Oct - Mar)
            </p>
          </div>
          <div class="col-2">
            <svg id="SvgjsSvg1016" width="60" height="60" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs">
              <defs id="SvgjsDefs1017"></defs>
              <g id="SvgjsG1018">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
                  <path
                    fill-rule="evenodd"
                    d="M12 16C14.2091 16 16 14.2091 16 12 16 9.79086 14.2091 8 12 8 9.79086 8 8 9.79086 8 12 8 14.2091 9.79086 16 12 16zM12 18C15.3137 18 18 15.3137 18 12 18 8.68629 15.3137 6 12 6 8.68629 6 6 8.68629 6 12 6 15.3137 8.68629 18 12 18zM11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4 11.6613 4 11.3276 4.02104 11 4.06189V0zM7.0943 5.68018L4.22173 2.80761 2.80752 4.22183 5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018zM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12 4 11.6613 4.02104 11.3276 4.06189 11zM5.6801 16.9056L2.80751 19.7782 4.22173 21.1924 7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056zM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20 11.6613 20 11.3276 19.979 11 19.9381zM16.9056 18.3199L19.7781 21.1924 21.1923 19.7782 18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199zM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12 20 12.3387 19.979 12.6724 19.9381 13zM18.3198 7.0943L21.1923 4.22183 19.7781 2.80762 16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943z"
                    clip-rule="evenodd"
                    fill="#ffffff"
                    class="color000 svgShape"
                  ></path>
                </svg>
              </g>
            </svg>
          </div>
          <div class="col-10">
            <p>Arati Timings: ​Mangalarati: 5 am <br />Evening Arati: At sunset</p>
          </div>
          <div class="col-2">
            <svg id="SvgjsSvg1001" width="60" height="60" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs">
              <defs id="SvgjsDefs1002"></defs>
              <g id="SvgjsG1008">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
                  <path
                    fill-rule="evenodd"
                    d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                    clip-rule="evenodd"
                    fill="#ffffff"
                    class="color000 svgShape"
                  ></path>
                </svg>
              </g>
            </svg>
          </div>
          <div class="col-10">
            <p><a href="mailto:delhi@rkmm.org">delhi@rkmm.org</a></p>
          </div>
          <div class="col-2">
            <svg id="SvgjsSvg1001" width="60" height="60" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs">
              <defs id="SvgjsDefs1002"></defs>
              <g id="SvgjsG1008">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="60" height="60">
                  <path
                    d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216T344 904q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"
                    fill="#ffffff"
                    class="color000 svgShape"
                  ></path>
                </svg>
              </g>
            </svg>
          </div>
          <div class="col-10">
            <p><a href="tel:+91 - 011 45626785">+91 - 011 45626785</a></p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12" style="padding: 25px">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.3852219086884!2d87.86893887441856!3d24.541346657954346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa40309c449e0b%3A0xa6a49bc45302965d!2sRamakrishna%20Ashram%20Vidyamandir!5e0!3m2!1sen!2sin!4v1716296530702!5m2!1sen!2sin"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      // isActive: false,
      navIcon: [
        {
          iconImage: "fab fa-facebook",
          iconLink: "https://www.facebook.com/",
        },
        {
          iconImage: "fab fa-twitter",
          iconLink: "http://www.twitter.com",
        },
        {
          iconImage: "fab fa-youtube",
          iconLink: "http://www.youtube.com/",
        },
      ],
    };
  },
  methods: {
    toggleClass() {
      this.count++;

      if (this.count % 2 == 0) {
        document.querySelector(".navbar-collapse").style.display = "none";
      } else {
        document.querySelector(".navbar-collapse").style.display = "block";
      }
    },
  },
};
</script>

<style>
.navbar-top {
  padding: 9px 0;
  background-color: #d4902b;
}

.navbar-top-ul {
  display: flex;
  gap: 10px;
  list-style: none;
  align-items: center;
}

.nav-top-a a {
  color: #fff;
  text-decoration: none;
}

.fa-phone:before {
  font-weight: 600;
}

.navbar-middle {
  background-color: #ffdead;
  color: #d4902b;
  padding: 10px 0;
}

.navbar-middle h1,
p {
  margin: 0;
}

.navbar-middle h1 {
  font-size: 55px;
}

.navbar-middle-wrapper p {
  color: #000;
  font-size: 13px;
  font-weight: 500;
  margin-top: 5px;
}

.navbar {
  background-color: #d4902b;
  /* Orange color */
}

.nav-link {
  color: #ffffff;
  /* White text color */
}

.header-fix ul {
  display: flex;
}

.gap-n {
  gap: 100px;
}

.nav-top-before::after {
  content: "";
  display: inline-block;
  width: 1px;
  margin-left: 150px;
  height: 24px;
  vertical-align: middle;
  background-color: #fff;
}

@media (max-width: 460px) {
  .navbar-top {
    display: flex;
    width: 100%;
  }

  .navbar-middle-m {
    display: none;
  }

  .navbar-middle-wrapper {
    margin: 0 !important;
  }

  .gap-n {
    gap: 0;
  }
}
@media (max-width: 768px) {
  .header-mob {
    padding-left: 20px;
  }
}

footer {
  background-color: #d4902b;
  width: 100%;
}
.footer-parent {
  width: 100%;
}
.row > .col-10,
a {
  color: #fff !important;
  font-weight: bold !important;
  text-decoration: none !important;
}
.navbar-top-wrapper > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar {
  position: sticky !important;
  top: 0px !important;
  z-index: 1;
}
body {
  -ms-overflow-style: scrollbar;
}
body::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}
body::-webkit-scrollbar {
  width: 4px;
  background-color: #f5f5f5;
}
body::-webkit-scrollbar-thumb {
  background-color: hsla(76, 62%, 41%, 0.774);
}
.dropdown-item:hover {
  color: green !important;
}
.navbar-nav {
  display: flex;
  column-gap: 100px;
}
</style>
