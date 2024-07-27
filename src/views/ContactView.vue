<template>
  <div class="bg-contact">
    <div class="container contact-us">
      <h2 class="contact-title">Send us a message now!</h2>
      <form ref="form" @submit.prevent="sendEmail" v-if="!thanksMessageShown" class="form">
        <div class="form-group">
          <label for="from_name">Name</label>
          <input id="from_name" type="text" name="from_name" v-model="formData.from_name" />
          <div class="error" v-if="formErrors.from_name">{{ formErrors.from_name }}</div>
        </div>
        <div class="form-group">
          <label for="from_email">Email</label>
          <input id="from_email" type="email" name="from_email" v-model="formData.from_email" />
        </div>
        <div class="form-group">
          <label for="from_mobile">Mobile Number</label>
          <input id="from_mobile" type="tel" name="from_mobile" v-model="formData.from_mobile" pattern="[0-9]{10}" />
          <div class="error" v-if="formErrors.from_mobile">{{ formErrors.from_mobile }}</div>
        </div>
        <div class="form-group">
          <label for="message_type">Purpose</label>
          <select id="message_type" name="message_type" v-model="formData.message_type">
            <option value="">Select</option>
            <option value="Admission">Admission</option>
            <option value="Hostel">Hostel</option>
            <option value="Guest">Guest Night Halt</option>
            <option value="other">Other</option>
          </select>
          <div class="error" v-if="formErrors.message_type">{{ formErrors.message_type }}</div>
        </div>
        <input type="submit" value="Send" class="submit-btn" />
      </form>
      <div v-if="thanksMessageShown" class="thanks-message">
        <h1>We will contact you shortly</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      formData: {
        from_name: "",
        from_email: "",
        from_mobile: "",
        message_type: "",
      },
      formErrors: {
        from_name: "",
        from_email: "",
        from_mobile: "",
        message_type: "",
      },
      thanksMessageShown: false,
    };
  },
  methods: {
    sendEmail() {
      if (!this.validateForm()) {
        return;
      }

      // Send email using EmailJS
      emailjs
        .sendForm("service_862nhrr", "template_qzm4la3", this.$refs.form, {
          publicKey: "gw_5bXjuSAz4i2iiz",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            this.showThanksMessage();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
    validateForm() {
      let valid = true;
      this.formErrors = {
        from_name: "",
        from_email: "",
        from_mobile: "",
        message_type: "",
      };

      if (!this.formData.from_name) {
        this.formErrors.from_name = "Name is required";
        valid = false;
      }

      if (!this.formData.from_mobile) {
        this.formErrors.from_mobile = "Mobile number is required";
        valid = false;
      } else if (!/^[0-9]{10}$/.test(this.formData.from_mobile)) {
        this.formErrors.from_mobile = "Please enter a valid 10-digit mobile number";
        valid = false;
      }

      if (!this.formData.message_type) {
        this.formErrors.message_type = "Message type is required";
        valid = false;
      }

      return valid;
    },
    showThanksMessage() {
      this.thanksMessageShown = true;

      this.formData = {
        from_name: "",
        from_email: "",
        from_mobile: "",
        message_type: "",
      };
    },
  },
};
</script>

<style>
/* body {
  background-image: url(@/assets/contact-bg.jpg);
} */
.contact-us {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
}

.contact-title {
  text-align: center;
  margin-bottom: 1rem;
  font-style: italic;
  color: #d38825;
  animation: bounceIn 1s ease-out;
}
@keyframes bounceIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #916f0b;
}

input[type="text"],
input[type="email"],
input[type="tel"],
select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #10cf9a;
  border-radius: 4px;
  box-sizing: border-box;
}

.error {
  color: red;
  font-size: 0.875rem;
}

.submit-btn {
  background-color: #a78539d4;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.submit-btn:hover {
  background-color: #0056b3;
}

.thanks-message {
  text-align: center;
  padding: 1rem;
  background-color: #e0ffe0;
  border: 1px solid #bb9e35;
  border-radius: 4px;
}
.bg-contact {
  background-image: url("@/assets/contact-bg.jpg");
}
</style>
