<template>
    <div  class="profile slide-in-left " >
           <div class="profile-img" >
                <img src="https://avatars.githubusercontent.com/u/75392925?v=4" alt="kathy-kay profile"
                class="img ">
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
</template>

<script>
export default{
    name: "Profile",
    
}
</script>

<style scoped>
    .profile{
        width: 30%;
        padding: auto;
        overflow-x:hidden;
       
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
    @media(max-width:750px){
        .profile{
            width: 100%;
        }
        .img{
            margin-right: 40px;
            width: 100px;
            height: 100px;
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
    }
    @media(max-width: 900px){
        .img{
            width: 120px;
            height: 120px;
        }
    }
</style>