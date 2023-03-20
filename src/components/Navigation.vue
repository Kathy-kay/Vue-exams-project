<template>
    <header :class="{'scrolled-nav':scrollPosition}">
        <nav>
            <h1 class="logo slide-in-bottom" style="--i:0.2s">KATHY</h1>
            <ul v-show = "!mobile" class="navigation">
                <li style="--i:0.4s" class="slide-in-bottom"><router-link class="llink" to="/">Home</router-link></li>
                <li style="--i:0.6s" class="slide-in-bottom"><router-link class="llink" to="/repos">Repos</router-link></li>
                <li style="--i:0.8s" class="slide-in-bottom"><router-link class="llink" to="/error">Error</router-link></li>
            </ul>
            <div class="icon slide-in-bottom" style="--i:0.4s">
                <font-awesome-icon icon="fa-solid fa-bars" size="lg"
                v-show="mobile" @click="toggleMobileNav" class="icon-bar" :class="{'icon-active': mobileNav}"/>
            </div>
            <transition name="mobile-nav">
                <ul v-show = "mobileNav" class="drop-nav">
                    <li><router-link class="llink" to="/">Home</router-link></li>
                    <li><router-link class="llink" to="/repos">Repos</router-link></li>
                    <li><router-link class="llink" to="/error">Error</router-link></li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
import { createDOMCompilerError } from '@vue/compiler-dom';
import { RouterLink } from 'vue-router';
export default{
    name: "Navigation",

    data(){
        return{
            scrollPosition: null,
            mobile:true,
            mobileNav: null,
            windowWidth: null
        }
        
    },
    created(){
            window.addEventListener("resize", this.checkScreen);
            this.checkScreen()
        },
    methods:{
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav
        },
        checkScreen(){
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 750){
                this.mobile = true
                return
            }
            this.mobile = false
            this.mobileNav = false
            return
        }
    }
}
</script>

<style scoped>
.header{
    background-color: transparent;
    width: 100%;
    position:fixed;
    transition: .5s ease all;
   
}
nav{
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: .5s ease all;
    width: 92%;
    margin: 0 auto;
    overflow:hidden;
    

}
.logo{
    display: flex;
    align-items: center;
    transition: .5s ease all;
    cursor: pointer;
    color: #64ffda;
}


 nav ul{
    list-style: none;
    
}
.navigation{
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    overflow:hidden;
}
nav ul li{
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
    
    
}

nav ul li a{
    text-decoration: none;
    color: #8892b0;
    font-size: 14px;
  font-weight: 500;
  transition: .5s ease all;
  padding-bottom: 4px;
  border-bottom:1px solid transparent;
}
nav ul li a:hover{
    color:#64ffda;
    border-color:#8892b0;
}
.icon{
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;
   
}
.icon-bar{
    cursor:pointer;
    color: #64ffda;
    transition: .8s ease all
}
.icon-active{
    transform: rotate(180deg);
}
.drop-nav{
    display: flex;
    flex-direction: column;
    position:fixed;
    width: 100%;
    max-width: 250px;
    background-color: #ccd6f6;
    align-items: center;
    padding-top: 100px;
    height: 100%;
    top:0;
    left: 0;
    z-index: 10;

}
.drop-nav li{
    margin-left: 0 ;
   
}
.drop-nav li a{
    color: #000;
    font-size: 20px;
 
    
}

.mobile-nav-enter-active,
.mobile-nav-leave-active{
    transition: 1s ease all;

}
.mobile-nav-enter-from,
.mobile-nav-leave-to{
    transform: translateX(-250px);
}
.mobile-nav-enter-to{
    transform: translateX(0);
}
@media(min-width: 1140px){
    nav{
        max-width: 1140px;
    }
}

</style>