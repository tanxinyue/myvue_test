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
<!--              <Progress v-show="loadpercent_int" :percent="loadpercent_int" color="blue"><span slot="title"></span><span slot="text">{{ loadpercent_int }}%</span></Progress>-->

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
      <video  v-show="videosrc" :src="videosrc" controls="controls" width="300px" height="300px" id="video"></video>
      <br>
      <Button color="green" @click="changevideo">{{ mybutton }}</Button>
      <br>
     关注商品列表: <Checkbox :datas="goods" v-model="good_value"></Checkbox>
      <br><br>
      <Button color="red" @click="flow">批量取消关注</Button>


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
      // 七牛上传凭证
      uptoken:'',
		videosrc:'',
		loadpercent:'',
     mybutton:'进入画中画',
      goods:[],
      good_value:[],
      ids:{},
      lot:1




    }
  },
//   注册组件标签
components:{
	'myheader': myheader,

},
  mounted:function(){
    this.get_goods()

// 获取uptoken调用函数
    this.get_uptoken();
    	this.axios.get('http://127.0.0.1:8000/userinfo/',{params:{uid:localStorage.getItem('uid')}}).then((result) =>{
			console.log(result);
			 this.videosrc='http://q79xdrrpr.bkt.clouddn.com/'+result.data.img;



			}
		)

},
  methods:{
    //批量操作
    flow:function(){
      console.log(this.good_value)
      var goods=[]
        for(let i=0,l=this.good_value.length;i<l;i++) {
             goods.push(this.ids[this.good_value[i]])

         }

      var glist=JSON.stringify(goods)
      console.log(glist)
              		//发送请求
      this.axios.get('http://127.0.0.1:8000/alldisflow/',{params:{ids:glist,uid:localStorage.getItem('uid')}}).then((result) =>{


               this.$Message(result.data.message)

      });
    },

    //获取关注商品
    get_goods:function(){
       this.axios.get('http://127.0.0.1:8000/uidflow/',{params:{uid:localStorage.getItem('uid')}}).then((result) =>{

         console.log(result.data)
         var goods=[]
         for(let i=0,l=result.data.length;i<l;i++) {
             goods.push(result.data[i].name)
             this.ids[result.data[i].name]=result.data[i].id
         }


         this.goods=goods
         this.good_value=goods

      });


    },
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
					// this.loadpercent=Number((complete * 100).toFixed(2))
          // 	this.loadpercent_int = parseInt((complete * 100).toFixed(2));
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
          // this.loadpercent_int =100;
        })
      },


  }
}


</script>

<style>



</style>
