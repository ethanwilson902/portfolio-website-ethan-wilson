<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg bg-dark text-white">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav"></div>
        </div>
      </div>
    </nav>

    <header class="bg-dark text-white text-center p-5">
      <h1>Ethan Wilson</h1>
      <p>Web Developer</p>
    </header>

    <div class="container mt-4">
      <section class="row">
        <div class="col-md-6">
          <h2>About Me</h2>
          <p>Hello, my name is Ethan Wilson. I am a second-year student at Central Community College. I am in school for my Information Technology Developer degree. I graduated from Giltner High School in 2022. I plan on finishing my degree in the spring and then will begin searching for a job.</p>
        </div>
        <div class="col-md-6">
          <h2>Contact</h2>
          <p>Email: ethan09905@cccneb.edu</p>
        </div>
      </section>
    </div>

    <div class="container mt-4">
      <h2>Portfolio</h2>
      <a href="https://insweb.cccneb.edu/ethan09905/final_project/project/home.html">Previous Final</a>
      <p>This is my final project that was worked on by my website development project.</p>
    </div>

    <div class="container">
      <div class="card mt-4" style="width: 18rem;">
        <img src="images/fa4aad6c-7dcb-4fb3-b5fb-10f4acc9161e.jpg" class="card-img-top" alt="Ethan Wilson">
        <div class="card-body">
          <p class="card-text">Here is a picture of me right before I began my Information Technology career.</p>
        </div>
      </div>
    </div>

    <footer class="bg-dark text-white text-center p-3 mt-5">
      <p>&copy; 2024 Ethan Wilson</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    this.display_ct();
  },
  methods: {
    display_ct() {
      const now = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      document.getElementById('ct').innerHTML = now.toLocaleString(undefined, options);
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>