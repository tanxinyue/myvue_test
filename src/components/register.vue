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
            验证码:
          </td>
           <td style="padding: 5px">
             <input type="text" v-model="code">
          </td>
        </tr>
         <tr >
          <td style="padding: 5px">

          </td>
           <td style="padding: 5px">
             <img @click="change" :src="src" alt="">
          </td>
        </tr>
          <tr >
          <td style="padding: 5px">

          </td>
           <td style="padding: 5px">
            <Button @click="submit">提交</Button>&nbsp;&nbsp;
            <Button color="green" @click="reset">重置</Button>
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
      datas:[{title:'首页',route:{name:'index'}},{title:'注册页面',route:{name:'register'}}],
      username:'',
      password:'',
      code:'',
      src:'http://127.0.0.1:8000/code/'
    }
  },
  components:{
    'myheader':myheader
  },
  mounted:function(){



},
  methods:{
    change:function(){
      var num=Math.ceil(Math.random()*100)
      this.src=this.src+"?code"+num;
    },
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
                new_form.append('code', this.code)

                axios({
                    url: 'http://127.0.0.1:8000/register/',
                    method:'post',
                    data: new_form,


                }).then(res => {
                    this.$Message(res.data.message)


                })




    }


  }
}


</script>

<style>



</style>



