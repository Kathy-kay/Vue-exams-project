<script >
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 <main class="container">
  <div class="navbar">
    <h1 class="logo">KATHY</h1>
  
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/repos">Repos</RouterLink></li>
          <li><RouterLink to="*">Error</RouterLink></li>
      </ul>
      </nav>
 </div>

  <RouterView />
 </main>
</template>

<style scoped>
  .navbar{
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 40px 70px ;
    align-items: center;
  }
  .logo{
    color: #64ffda;
  }
  nav ul{
    list-style: none;
    
  }
  nav ul li{
    display: inline;
    margin: 30px;
    font-size: 20px;
   
  }
  nav ul li a{
    text-decoration: none;
    color: #8892b0;
  }
  nav ul li a:hover{
      color: #64ffda;
  }
  @media (max-width: 700px){
    .navbar{
      padding-left: 45px ;
    }
  }

</style>