 
<template>
    <div class="container">
        
        <Profile />
       
        <div class="repos-list">
            <div class="repo-container slide-in-bottom">
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
     import Profile from "./Profile.vue"
    
    export default {
        name: "RepoList",
        components: {
            Profile
        },

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
        margin: 0 auto;
        display: flex;
        width: 92%;
        padding-block: 60px;
        
    }
    
    .repos-list{
        width: 70%;
        overflow:hidden;
       
        
        
    }
    .repo-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left:50px;
        
       
    }
    .repo-container h1{
        color:#ccd6f6;
        margin-bottom: 20px;
    }
    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap:30px;
        margin-top: 50px;
    }
    .repo-content{
        width: 100%;
        border:1px solid #112240;
        height: 130px;
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

    @media (max-width:750px){
        ul{
            grid-template-columns: 1fr;
        }
        .container{
            display: flex;
            flex-direction: column;
          padding-left: 20px;
          padding-right:20px;
            
        }
        
        .repos-list{
            width: 100%;
            
        }
        .repo-container{
            padding-left: 0;
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
        width: 80%;
       
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