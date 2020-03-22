<template>
  <div>

	<myheader></myheader>

	<br><br>
	<!--面包屑导航-->
	<Breadcrumb :datas='datas'></Breadcrumb>

	<section class="featured-block text-center">
		<div class="container">
      <table>
				<tr>
					<td>
						标题:
					</td>
					<td>
						<input type="text" v-model='title'>
					</td>
				</tr>
				<tr>
					<td>
						简介
					</td>
					<td>
						<input type="text" v-model='desc'>
					</td>
				</tr>

        	<tr>

						<td style="padding: 5px;">
						<!--七牛文件上传-->
							七牛文件上传:
						</td>
						<td style="padding: 5px;">
							<input type="file" @click='uploadqiniu'>
						</td>
				</tr>
					<tr>

						<td style="padding: 5px;">
						上传进度:
						</td>
						<td style="padding: 5px;">
							{{loadpercent}}
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
      <h-switch v-model="language" @click="changeLocale()">中/英</h-switch>
      <br>
      {{$t('m.title')}}
      <br>
    {{$t('m.desc')}}
      <br>
      <video  v-show="videosrc" :src="videosrc" controls="controls" width="300px" height="300px" id="video"></video>
      <br>
      <Button color="green" @click="changevideo">{{ mybutton }}</Button>
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
	  title: '',
	  desc: '',
      // 七牛上传凭证
      uptoken:'',
		videosrc:'',
		loadpercent:'',
     mybutton:'进入画中画',
      title1:'',
      desc1:'',
      language:false



    }
  },
//   注册组件标签
components:{
	'myheader': myheader,

},
  mounted:function(){
// 获取uptoken调用函数
    this.get_uptoken();
    	this.axios.get('http://127.0.0.1:8000/userinfo/',{params:{uid:localStorage.getItem('uid')}}).then((result) =>{
			console.log(result);
			 this.videosrc='http://q79xdrrpr.bkt.clouddn.com/'+result.data.img;



			}
		)

},
  methods:{
    // 定义画中画切换
    changevideo:function(){
      if(video!==document.pictureInPictureElement){
        video.requestPictureInPicture();
        this.mybutton='退出画中画'

      }else {
        document.exitpictureInPicture();
      }

    },
	  // 修改提交
	      submit:function () {
                let new_form = new FormData()
                new_form.append('title',this.title)
                new_form.append('desc', this.desc)


                axios({
                    url: 'http://127.0.0.1:8000/ksup/',
                    method:'post',
                    data: new_form,


                }).then(res => {



                    this.title1=res.data.title
                    this.desc1=res.data.desc


                })
        },

    // #获取七牛云凭证
    get_uptoken(){
	        this.axios.get('http://127.0.0.1:8000/uptoken/').then((result) =>{
			console.log(result);
				// 赋值操作
            this.uptoken=result.data.token

			}
		)

    },
    	uploadqiniu:function(e){
	        console.log(this.uptoken)
		// 获取文件对象
		let file = e.target.files[0];

		// 声明参数
		let param = new FormData();
		this.username=localStorage.getItem('username')
        // 将上传凭证添加参数
		// 添加文件
		param.append('file', file);
		param.append('token', this.uptoken);
		// 添加当前登录的用户
		param.append('username', this.username);
		// 定制化axios
        const axios_qiniu=this.axios.create({withCredentials:false})
        // 发送请求
        axios_qiniu({
          method: 'POST',
          url:'http://up-z1.qiniu.com/',
          data:param,
          timeout:30000,
			onUploadProgress:(e)=>{
          	// 设置总进度对象
          	var complete=(e.loaded / e.total);
          	// 安慰剂按钮
				if(complete<1){
					this.loadpercent=(complete*100).toFixed(2)+'%'
				}
			}

        }).then(result=>{
          console.log(result)
          this.src='http://q79xdrrpr.bkt.clouddn.com/'+result.data.key;
          this.videosrc='http://q79xdrrpr.bkt.clouddn.com/'+result.data.key;
          // 修改视频地址
			this.axios.get('http://127.0.0.1:8000/updateuser/',{params:{uid:localStorage.getItem('uid'),img:result.data.key}}).then((result) =>{
			console.log(result);



			}
		);


          // 上传成功后，强行百分之百
          this.loadpercent='100%';

        })
      },


  },changeLocale() {
  let locale = this.$i18n.locale
      if(this.language==false){
        locale === 'cn' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'cn'
        localStorage.setItem('language','cn')
        this.language=false



      }else{
        locale === 'cn' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'en'
        localStorage.setItem('language','en')
        this.language=true
      }



}
}


</script>

<style>



</style>
