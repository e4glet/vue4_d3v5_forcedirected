<template>
 <div>
    <input type="text" v-model="User.username" placeholder="用户名"/>
    <input type="text" v-model="User.password" placeholder="密码"/>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data(){
     return {
      User: {
        username: '',
        password: ''
      },
      userToken: ''
    };
  },
  methods:{
      async login(){
        if (this.User.username === '' || this.User.password === '') {
            alert('账号或密码不能为空');
        } else {

            //这里可以异步读取数据库信息，如果信息正确返回，并将数据库查询的用户信息赋值给$store
            //调用axios获取后端数据     
            //调用封装axios方法 参数列表为自定义多个参数方法,该方法后端可直接通过对象接收参数，public String requestPost(@RequestBody demo_User user) {
            //var data = await this.$http.post('icdMangerSystem/requestPost',{username:this.User.username,password:this.User.password});
            
            //调用封装axios方法 参数列表为对象方法，下面方法后端可以接收Javabean对象，简化参数传递，为方法为上一个方法的更优化方法
            //var data = await this.$http.post('icdMangerSystem/requestPostObject',JSON.stringify(this.User));
            //console.log("postData:"+JSON.stringify(this.User));
            var data = {username:this.User.username,password:this.User.password}
            //这里data存放的是后端返回的用户名，这里可以根据需要返回指定数据
            this.$store.commit('login',data);
            //跳转网站根目录，即首页
            this.$router.push('./');
            
        }
      },
      test(){

      }
  }
}
</script>