<template>
  <div>

  <myheader></myheader>
       <br>
        <Breadcrumb :datas="datas"></Breadcrumb>



	<section class="featured-block text-center">
		<div class="container">

			<teble>
        <tr>
          <td style="padding: 5px">
            用户名:
          </td>
           <td style="padding: 5px">
             <input type="text" v-model="username">
          </td>
        </tr>
          <tr >
          <td style="padding: 5px">
            密码:
          </td>
           <td style="padding: 5px">
             <input type="password" v-model="password">
          </td>
        </tr>

         <tr >
          <td style="padding: 5px">

          </td>
           <td style="padding: 5px">

          </td>
        </tr>
          <tr >
          <td style="padding: 5px">

          </td>
           <td style="padding: 5px">
            <Button @click="submit">登录</Button>&nbsp;&nbsp;

          </td>
        </tr>
      </teble>



		</div>
	</section>





	<footer class="footer">

		<div class="container">
			@tanxinyue.github.io
		</div>


	</footer>

  </div>

</template>



<script>
  import myheader from "./myheader";
  import axios from "axios";

export default {
  data () {
    return {
      msg: "这是一个变量",
      datas:[{title:'首页',route:{name:'index'}},{title:'登录页面',route:{name:'Login'}}],
      username:'',
      password:'',


    }
  },
  components:{
    'myheader':myheader
  },
  mounted:function(){



},
  methods:{

    reset:function(){
      this.username=''
      this.password=''
    },
    submit:function () {
      if(this.username==''){
        this.$Message('用户名不能为空');
        return false;
      }
      if(this.password==''){
        this.$Message('密码不能为空');
        return false;
      }

                let new_form = new FormData()

                new_form.append('username', this.username)
                new_form.append('password', this.password)


                axios({
                    url: 'http://127.0.0.1:8000/login/',
                    method:'post',
                    data: new_form,


                }).then(res => {
                  this.$Message(res.data.message)
                  if(res.data.code==200){
                    //将id和用户名存储到localstorage中
                    localStorage.setItem('username',res.data.username)
                    localStorage.setItem('uid',res.data.uid)
                    //成功后跳转
                    this.$router.push('/')

                  }



                })




    }


  }
}


</script>

<style>



</style>



