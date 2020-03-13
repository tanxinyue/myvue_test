<template>
  <div>
<!--获取登录后的用户名，如果没有获取，跳转到登录页面，如果获取到，展示到本页面-->
<ul>
  <li class="btn btn-lg btn-full-width btn-primary" v-if="this.name!=null">欢迎你 <router-link to="/ks_log">{{name}}</router-link> /<Butoon @click="logout">登出</Butoon></li>
  </ul>
    <footer class="footer">
      <div class="container">
			@考试.cn
		</div>
    </footer>
  </div>

</template>
<script>


export default {
  data () {
    return {
      // 定义面包屑导航,跳转到指定页面
      datas:[{title:'注册',route:{name:'Kaoshi_reg'}},{title:'登录',route:{name:'Kaoshi_log'}}],
      name:''
    }
  },
  mounted:function(){
    // 获取钉钉传过来的参数
    var ding_id = this.$route.query.ding_id;
  	var uid = this.$route.query.uid;

  	console.log(ding_id);

  	if(ding_id){
      //自动登录
      localStorage.setItem("username",ding_id);
  		localStorage.setItem("uid",uid);
    }
  	// 获取seesion中的usename
  	this.name=localStorage.getItem('username')
    // 如果没有获取到，跳转到登录页面
    if (this.name==null){

      this.$Message('请先登录');

      window.location.href='/ks_log'
    }

  },
  methods:{
    // 登出，退出登录，清空seesion
    logout:function () {
       localStorage.removeItem('username')
       this.name=''
       window.location.href='/ks_log'
    }
  }
}


</script>

<style>



</style>
