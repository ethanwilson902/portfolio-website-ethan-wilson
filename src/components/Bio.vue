<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <a class="navbar-brand" href="#">Ethan Wilson</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/bio" class="nav-link">Bio</router-link>
          </li>
          <!-- Add more navbar items as needed -->
        </ul>
      </div>
    </nav>

    <div class="container my-5">
      <h1 class="text-center mb-4">About Me</h1>
      <img src="@/assets/PFP.jpg" alt="Professional Image" class="img-fluid rounded-circle mx-auto d-block" style="max-width: 300px;">
      <div class="mt-4">
        <p class="lead">
          I am a dedicated and passionate individual with a growing interest in Information Technology. With only two years of experience in IT, my journey began with a profound interest in the inner workings of computers, leading me to pursue further knowledge in this field.
        </p>
        <p>
          <strong>Interests:</strong> In my free time, I enjoy playing video games and spending time with friends and family.
        </p>
        <p>
          <strong>Vision:</strong> I am driven by my thirst for knowledge and understanding every part of a computer and how it works. My goal is to graduate from CCC and secure a job where I can continue to grow my expertise.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Your component logic...
}
</script>

<style>
/* Your CSS styles... */
body {
  background-color: #f8f9fa; /* Light background for better contrast */
}
</style>
