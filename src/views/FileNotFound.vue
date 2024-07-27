<template>
  <div class="container">
    <div class="container-fluid error-msg">
      <h1>404</h1>
      <h3>Oops! Something is wrong.</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileNotFound",
};
</script>

<style> 
.error-msg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(236, 6, 6);
  align-items: center;
  height: 100vh;
}
</style>
