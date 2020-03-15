<template>
  <div>

	<myheader></myheader>

	<br><br>
	<!--面包屑导航-->
	<Breadcrumb :datas='datas'></Breadcrumb>

	<section class="featured-block text-center">
		<div class="container">
			<Avatar :src='src' :width='150' fit='fill'></Avatar>
			<table>
				<tr>
					<td>
						密码:
					</td>
					<td>
						<input type="password" v-model='password'>
					</td>
				</tr>
				<tr>
					<td>
						确认密码:
					</td>
					<td>
						<input type="password" v-model='password1'>
					</td>
				</tr>

				<tr>

						<td style="padding: 5px;">
						<!--图像上传-->
							头像上传:
						</td>
						<td style="padding: 5px;">
							<input type="file" @click='upload'>
						</td>
				</tr>
					<tr>
						<td style="padding: 5px;">

						</td>
						<td style="padding: 5px;">
							<Button @click='submit'>提交</Button> &nbsp;&nbsp;
						</td>
					</tr>
			</table>
		</div>

	</section>





	<footer class="footer">

		<div class="container">
			@v3u.cn
		</div>


	</footer>

  </div>

</template>



<script>

// 导包
import myheader from './myheader.vue';
import axios from "axios";


export default {
  data () {
    return {
	   username: "",
	//   声明面包屑变量
	  datas: [{title: '首页' ,route:{name: 'index'}},{title:'我的首页'}],
	  password: '',
	  password1: '',
	  src: '',


    }
  },
//   注册组件标签
components:{
	'myheader': myheader,

},
  mounted:function(){



},
  methods:{
	  // 修改提交
	      submit:function () {


      if(this.password!=this.password1){
        this.$Message('两次密码一致');
        return false;
      }


                let new_form = new FormData()
                this.username=localStorage.getItem('username')
                new_form.append('username',this.username)
                new_form.append('password', this.password)


                axios({
                    url: 'http://127.0.0.1:8000/update/',
                    method:'post',
                    data: new_form,


                }).then(res => {

                  if(res.data.code==200){

                    this.$Message('修改成功');
                    //成功后跳转
                    this.$router.push('/')

                  }



                })




    },


	// 提交注册
	upload:function(e){
		// 获取文件对象
		let file = e.target.files[0];

		// 声明参数
		let param = new FormData();
		this.username=localStorage.getItem('username')
		// 添加文件
		param.append('file', file);
		// 添加当前登录的用户
		param.append('username', this.username);
		// 声明请求头
		let config = {headers: {'Content-type': 'mulipart/form-data'}}
		// 发送请求
		this.axios.post('http://127.0.0.1:8000/uploadfile/',param, config).then((result) =>{
			console.log(result);
				// 赋值操作
				this.src = 'http://127.0.0.1:8000/static/upload/'+result.data.filename;
			}
		)

	},


  }
}


</script>

<style>



</style>
