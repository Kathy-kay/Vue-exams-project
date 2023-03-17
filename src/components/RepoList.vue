 
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
                
                <a href="mailto:adigunkafy27@gmail.com">adigunkafy27@gmail.com</a>
                
              </div>
              <div class="profile-info2">
                
                <p>33 folllowers, 52 following</p>
              </div>
           </div>
        </div>    
        <div class="repos-list">
            <div class="repo-container">
                <h1>My GitHub Repositories</h1>
            <ul >
                <li v-for="repo in slicedRepos" :key="repo.id" class="repo-content">
                  <router-link :to="{ name: 'RepoDetails', params: { repoName: repo.name } }">
                    <h2>{{ repo.name }} </h2>
                    <p>{{ repo.description }}</p>
                    <p>{{ repo.language }}</p>
                  </router-link>
                </li>
            </ul>
            <div v-if="loading">Loading...</div>
            <div v-if="error" class="">{{ error }}</div>
            <div v-if="!loading && !error && !repos.length" class="">No repositories found</div>
            <div class="pagination" v-if="pages.length > 1">
                <button class="prev" @click="prevPage" :disabled="currentPage === 1">Prev</button>
                <button v-for="page in pages" 
                @click="setCurrentPage(page)" 
                :key="page" 
                :class="{ active: page === currentPage }">{{ page }}</button>
                <button class="next" @click="nextPage" :disabled="currentPage === pages.length">Next</button>
            </div>

            </div>
        </div>    
    </div>
</template>

<script >
     import axios from "axios"
    
    export default {
    

        data(){
            return{
                repos: [],
                error: null,
                loading: true,
                perPage: 6,
                currentPage:1,
                
            }
        },
        computed:{
            pages(){
                let pages = []
                let total = Math.ceil(this.repos.length / this.perPage)
               
                for(let i = 1; i <=total; i++){
                    pages.push(i)
                }
                return pages
            },
            slicedRepos(){
                let start = (this.currentPage - 1) * this.perPage;
                let end   = start + this.perPage;
                return this.repos?.slice(start, end) || [] ;
            }
        },
       
        methods:{
            
            fetchRepos(){
            axios.get('https://api.github.com/users/Kathy-kay/repos')
            .then ( response =>{
                this.repos = response.data
                this.loading = false
            })
            .catch(error =>{
                this.error = error.message
                this.loading = false
            }) 
          },
          setCurrentPage(page){
                this.currentPage = page
            },
            nextPage(){
                if(this.currentPage < this.pages.length){
                    this.currentPage++
                }
            },
            prevPage(){
                if(this.currentPage > 1){
                    this.currentPage--
                }
            },
           

        },

        mounted(){
            this.fetchRepos()
        }
        
        
    }

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
    .repo-container{
        width: 100%;
       
    }
    .repo-container h1{
        color:#ccd6f6;
        margin-bottom: 20px;
    }
    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap:20px;
        margin-top: 50px;
    }
    .repo-content{
        width: 100%;
        border:1px solid #112240;
        height: 100px;
        padding: 10px 30px;
        border-radius: 8px;
        background-color: #233554;
    }
    ul li{
        list-style: none;
    }
    ul li a{
        text-decoration: none;
        color: #ccd6f6;
    }

    @media (max-width:900px){
        ul{
            grid-template-columns: 1fr;
        }
        .container{
            display: flex;
            flex-direction: column;
            
        }
        .profile{
            width: 100%;
        }
        .img{
            margin-right: 40px;
            width: 150px;
            height: 150px;
        }
        .profile-img{
            flex-direction: row;
        }
        .profile-name{
            margin: auto;
        }
        .profile-info{
            margin: 40px 0;
        }
        .repos-list{
            width: 100%;
        }
        .pagination{
            width: 100%;
            margin-left: 40px;
        }
        .pagination button{
            margin-right: 10px;
        }
}

    .pagination{
        margin: 40px 0 0 70px;
        width: 70%;
       
    }
    .pagination button{
        margin-right: 20px;
        width: 50px;
        height: 30px;
        
        
    }
    .pagination button:hover{
        background-color: #112240;
        border: 1px solid transparent;
        color: #8892b0;
    }
    .active{
        background-color: #112240;
        border: 1px solid transparent;
        color:#ccd6f6;

    }
</style>