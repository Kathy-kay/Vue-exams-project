<template>
    <div class="container">
       <Profile />
      <div class="repos-list">
        <div class="repo-content">
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
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Profile from "./Profile.vue"
  
  export default {
    name: 'RepoDetails',
    components:{
      Profile
    },
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
    .repos-list{
        width: 70%;
    }
    .repo-content{
      width: 80%;
      margin:0 auto
    }
    .repos-list h1{
        color: #ccd6f6;
    }
    .par{
        margin: 20px 0;
        color: #8892b0;
        font-weight: 500;
        font-size: 20px;
    }
    .repos-list p{
        color:#8892b0;
    }
    @media(max-width: 1115px){
        .container{
            padding-left: 100px;
        }
    }
        
    @media (max-width:950px){
        .container{
            padding-left: 80px;
        }
        
    }
    @media(max-width:750px){
      .container{
        flex-direction: column;
      }
      .repos-list{
        width:100%
      }
      .repo-content{
        width: 100%;
      }
    }
      
    
  
 </style>
  


