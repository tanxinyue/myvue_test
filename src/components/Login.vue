<template>
  <div>

  <myheader></myheader>
       <br>
        <Breadcrumb :datas="datas"></Breadcrumb>



	<section class="featured-block text-center">
		<div class="container">

			<table>
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


<drag-verify
                     :width="width"
                     :height="height"
                     :text="text"
                     :success-text="successText"
                     :background="background"
                     :progress-bar-bg="progressBarBg"
                     :completed-bg="completedBg"
                     :handler-bg="handlerBg"
                     :handler-icon="handlerIcon"
                     :text-size="textSize"
                     :success-icon="successIcon"
                     ref="Verify"
                  >
                  </drag-verify>


          </td>
        </tr>
          <tr >
          <td style="padding: 5px">

          </td>
           <td style="padding: 5px">
            <Button @click="submit">登录</Button>&nbsp;&nbsp;
             <br>

             <a :href="url"><img src="http://127.0.0.1:8000/static/sina.png" alt="新浪登陆"></a>
             <img src="http://127.0.0.1:8000/static/dingding.png" alt="钉钉登陆" style="cursor:pointer" @click="dingding" >




          </td>
        </tr>
      </table>



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
  import dragVerify from 'vue-drag-verify';
  import {config} from "../config";


export default {
  data () {
    return {
      msg: "这是一个变量",
      datas:[{title:'首页',route:{name:'index'}},{title:'登录页面',route:{name:'Login'}}],
      username:'',
      password:'',
        handlerIcon: "fa fa-angle-double-right",
      successIcon: "fa fa-check",
      background: "#cccccc",
      progressBarBg: "#4b0",
      completedBg: "#66cc66",
      handlerBg: "#fff",
      text: "请将滑块拖动到右侧",
      successText: "验证成功",
      width: 320,
      height: 42,
      textSize: "18px",
      isCircle:'true',
      url:'https://api.weibo.com/oauth2/authorize?client_id=2144764739&redirect_uri=http://127.0.0.1:8080/my_weibo',
      uri:config['uri']



    }
  },
  components:{
    'myheader':myheader,
    'dragVerify':dragVerify,
  },
  mounted:function(){




},
  methods:{
    dingding:function(){





  			//组装url
  			// let url = "https://api.weibo.com/oauth2/authorize?client_id=3440988304&redirect_uri=http://127.0.0.1:8000/md_admin/weibo";

        let url='http://127.0.0.1:8000/ding_url';
  			//进行跳转
  			window.location.href = url;

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
      if(this.$refs.Verify.isPassing == false){

  			this.$Message('请拖动验证码');
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
                    localStorage.setItem('jwt',res.data.jwtpass)

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



