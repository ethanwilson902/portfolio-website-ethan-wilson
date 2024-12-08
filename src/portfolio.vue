<template>
    <div class="portfolio">
      <header class="bg-dark text-white text-center p-5">
        <h1>My Portfolio</h1>
        <p>Here are some of my projects and works.</p>
      </header>
  
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-4">
              <img src="https://via.placeholder.com/300" class="card-img-top" alt="Grocery list app">
              <div class="card-body">
                <h5 class="card-title">Grocery List app</h5>
                <p class="card-text">A simple app to help you make a grocery list</p>
                <a href="https://github.com/ethanwilson902/Grocery-List_App.git" class="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
  
          <div class="col-md-4">
            <div class="card mb-4">
              <img src="https://via.placeholder.com/300" class="card-img-top" alt="Notes app">
              <div class="card-body">
                <h5 class="card-title">Notes app</h5>
                <p class="card-text">This is a simple note taking app</p>
                <a href="https://github.com/ethanwilson902/Notes_App.git" class="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
  
          <div class="col-md-4">
            <div class="card mb-4">
              <img src="https://via.placeholder.com/300" class="card-img-top" alt="Project 3">
              <div class="card-body">
                <h5 class="card-title">Project 3</h5>
                <p class="card-text">A brief description of Project 3. This project involved using Python and Flask.</p>
                <a href="#" class="btn btn-primary">View Project</a>
              </div>
            </div>
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
    name: 'PortfolioPage'
  }
  </script>
  
  <style scoped>
  .portfolio {
    background-color: #f8f9fa; /* Light background for contrast */
  }
  
  .card {
    transition: transform 0.2s; /* Animation for hover effect */
  }
  
  .card:hover {
    transform: scale(1.05); /* Scale effect on hover */
  }
  </style>