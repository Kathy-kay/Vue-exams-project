<script>
export default{
    name: "HomeView",

    methods:{
      goToRepo(){
        this.$router.push('/repos')
      }

    }
}

</script>

<template>
  <main class="container" >
    <p class="name" >Hi, my name is</p>
    <h1 class="hero-name">Kafayat Adigun.</h1>
    <h3 class="hero-welcome">Welcome to Kathy-kay's Repositories</h3>
    
      <button class="hero-btn" @click="goToRepo">Check out my repos</button>
  </main>
</template>

<style scoped>
  .container{
    position:relative;
    padding: 100px 0 0 150px;
  }
  .name{
    color:#64ffda;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .hero-name{
    font-weight: 600;
    font-size: clamp(40px, 8vw, 80px);
    color: #ccd6f6;
    line-height: 1.1;
  }
  .hero-welcome{
    margin-top: 20px ;
    line-height: 0.9;
    color: #8892b0;
    font-size: clamp(40px, 8vw, 80px)
  }

  .hero-btn{
   margin-top: 70px;
    padding: 10px;
    width: 200px;
    height: 70px;
    background-color: transparent;
    border: 1px solid #64ffda;
    border-radius: 5px;
    color: #64ffda;
    cursor: pointer;
  }
  .hero-btn:hover{
    background-color: rgba(100,255,218,0.1);
  }
  @media (max-width: 750px){
    .container{
      padding: 100px 0 0 70px;
      z-index: -1;
    }
  }
</style>
