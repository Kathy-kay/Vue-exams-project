<template>
    <div class="container">
        <div  class="profile">
           <div class="profile-img" >
                <img src="https://avatars.githubusercontent.com/u/75392925?v=4" alt="kathy-kay profile"
                class="img">
                <div class="profile-name">
                    <h2>Kafayat Adigun</h2>
                    <p>Kathy-kay</p>
                </div>
           </div>
           <div class="profile-info">
              <h2 >Student at Altschool Africa</h2>
              <div class="profile-info1">
                <p>icons</p>
                <a href="mailto:adigunkafy27@gmail.com">adigunkafy27@gmail.com</a>
                
              </div>
              <div class="profile-info2">
                <p>icons</p>
                <p>33 folllowers, 52 following</p>
              </div>
           </div>
        </div>    
      <div class="repos-list">
         <h1>{{ repo.name }}</h1>
        <p class="par">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Esse dolore, veritatis eos tempore quaerat quibusdam!
              Commodi ut praesentium doloremque, laboriosam porro 
              culpa explicabo impedit expedita aspernatur 
              exercitationem error possimus placeat!.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Esse dolore, veritatis eos tempore quaerat quibusdam!
              Commodi ut praesentium doloremque, laboriosam porro 
              culpa explicabo impedit expedita aspernatur 
              exercitationem error possimus placeat</p>
        <div>
            <p><strong>Language:</strong> {{ repo.language }}</p>
            <p><strong>Stars:</strong> {{ repo.stargazers_count }}</p>
            <p><strong>Forks:</strong> {{ repo.forks_count }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'RepoDetails',
    data() {
      return {
        repo: null,
        error: null,
      };
    },
    async created() {
      try {
        const response = await axios.get(`https://api.github.com/repos/Kathy-kay/${this.$route.params.repoName}`);
        this.repo = response.data;
      } catch (error) {
        this.error = error.message;
      }
    },
  };
  </script>
  <style scoped>
    .container{
        padding: 100px 70px 0 130px;
        display: flex;
        width: 100%;
        
    }
    .profile{
        width: 30%;
        padding: auto;
       
    }
    .profile-img{
        display: flex;
        flex-direction: column;
    }
    .img{
        width: 250px;
        height: 250px;
        border-radius: 50%;

    }
    .profile-name{
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        color: #ccd6f6;
        margin-bottom: 30px;
    }
    .profile-name p{
        color: #8892b0;
    }
    .profile-name h2{
        font-weight: bold;
        margin-bottom: 8px;
    }
    .profile-name p{
        font-size: 20px;
       
    }
    .profile-info h2{
        color: #ccd6f6;
    }
    .profile-info a{
        text-decoration: none;
        color: #64ffda;
    }
    .profile-info1{
        margin: 10px 0;
    }
    .profile-info2{
        color: #8892b0;
    }
    .profile-list{
        padding: 0 30px;
    }
    .repos-list{
        width: 70%;
    }
    .repos-list h1{
        color: #ccd6f6;
    }
    .par{
        width: 700px;
        margin: 20px 0;
        color: #8892b0;
        font-weight: 500;
        font-size: 20px;
    }
    .repos-list p{
        color:#8892b0;
    }
 </style>
  


