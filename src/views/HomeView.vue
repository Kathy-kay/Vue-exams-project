<script>
export default{
    name: "HomeView",

    methods:{
      goToRepo(){
        this.$router.push('/repos')
        console.log("Hello")
      }

    }
}

</script>

<template>
  <main class="container" >
    <div class="hero-content">
      <div class="">
        <p class="name slide-in-bottom" style="--i:1.2s">Hi, my name is</p>
      </div>
      <div class="">
        <h1 class="hero-name slide-in-bottom" style="--i:1.4s">Kafayat Adigun.</h1>
      </div>
      <div class="">
        <h3 class="hero-welcome slide-in-bottom" style="--i:1.6s">Welcome to Kathy-kay's Repositories</h3>
      </div>
      
       <div class=""> <button class="hero-btn slide-in-bottom" @click="goToRepo" style="--i:1.8s">Check out my repos</button></div>
    </div>
  </main>
</template>

<style scoped>
  .container{
    position:relative;
    padding: 100px 0 0 150px;
  }
  .hero-content > div {
    overflow-y: hidden;
  }

  .name, .hero-name,
  .hero-welcome, .hero-btn{
    animation-delay: calc(var(--i) * 1);
    
  }
  .name{
    color:#64ffda;
    font-size: 20px;
    margin-bottom: 20px;
    overflow-y: hidden;
    /*animation: slideup .5s calc(var(--i) * 1) ease-in;*/
    
  }

  .hero-name{
    font-weight: 600;
    font-size: clamp(40px, 8vw, 80px);
    color: #ccd6f6;
    line-height: 1.1;
    overflow-y: hidden;
   
  }
  .hero-welcome{
    margin-top: 20px ;
    line-height: 0.9;
    color: #8892b0;
    font-size: clamp(40px, 8vw, 80px);
    overflow-y: hidden;
  
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
    
    }
    
  }
</style>
