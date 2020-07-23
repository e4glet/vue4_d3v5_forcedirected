<template>
    <div id="nav">      
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |      
      <a href="#" @click="logout">Logout</a>
    </div>
</template>

<script>
export default {
  
  methods:{
      logout(){
        //清空存储        
        localStorage.removeItem("Authorization");
        localStorage.clear();
        //跳转到登录页面
        this.$router.push('./login');
      }
  }
}
</script>