<template>
  <div>

	<myheader></myheader>

	<br /><br />

			<!--面包屑导航-->
			<Breadcrumb :datas="datas" ></Breadcrumb>



	<section class="featured-block text-center">
		<div class="container">






			<table>
        		<tr >
						<td style="padding:5px;">

							商品类别:

						</td>
						<td style="padding:5px;">

							<input type="text" v-model="cate_id" />

						</td>
					</tr>
					<tr >
						<td style="padding:5px;">

							商品名称:

						</td>
						<td style="padding:5px;">

							<input type="text" v-model="name" />

						</td>
					</tr>

					<tr>
						<td style="padding:5px;">

							商品标签:

						</td>
						<td style="padding:5px;">

							<TagInput v-model="mytags" type="string" split="," placeholder="请输入标签，输入完毕后按回车确认"></TagInput>

						</td>
					</tr>

					<tr>
						<td style="padding:5px;">

							商品简介:

						</td>
						<td style="padding:5px;">

							<quill-editor ref="myTextEditor" :content="content" v-model="desc" @change="editchange($event)"></quill-editor>


						</td>
					</tr>

					<tr>
						<td style="padding:5px;">

							颜色:

						</td>
						<td style="padding:5px;">

							<input type="text" v-model="color" />

						</td>
					</tr>

          <tr>
            <td style="padding:5px;">

              号码:

            </td>
            <td style="padding:5px;">

              <input type="text" v-model="size" />

            </td>
          </tr>


					<tr>
						<td style="padding:5px;">

							价格:

						</td>
						<td style="padding:5px;">

							<input type="text" v-model="price" />

						</td>
					</tr>

					<tr>
						<td style="padding:5px;">


						</td>
						<td style="padding:5px;">

							<Button @click="submit" color="green">提交</Button> &nbsp;&nbsp;

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

//导包
import myheader from './myheader.vue';
import dragVerify from 'vue-drag-verify';
import {config,formatXml} from '../config.js';
import { quillEditor } from 'vue-quill-editor';

//引入编辑器样式
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export default {
  data () {
    return {
      msg: "这是一个变量",
      //声明面包屑变量
      datas:[{title:'首页',route:{name:'index'}},{title:'修改商品'}],
      name:'',
      desc:'',
      color:'',
      size:'',
      price:0,
      cate_id:1,
      //商品标签变量
      mytags:'',
      //商品id
      id:'',
      //存储编辑器信息
      content:'',

    }
  },
  //注册组件标签
  components:{
  		'myheader':myheader,
  		quillEditor
  },
  mounted:function(){



  	//接收商品id
  	var id = this.$route.query.id;

  	this.id = id;


  	//调用接口
  	this.getdata();




  },
  methods:{
    // 编辑器更改方法
    editchange:function(editor,html,text){
      this.desc=html
      console.log(this.desc)

    },
    //提交
  	submit:function(){
      //拼接商品规格
      var parms = {};
      parms['color'] = this.color;
      parms['size'] = this.size;


      //格式化字符串
      parms = JSON.stringify(parms);

      console.log(parms);


      //发送请求
      this.axios.get('http://127.0.0.1:8000/upgoods/',{params:{name:this.name,parms:parms,price:this.price,cate_id:this.cate_id,id:this.id}}).then((result) =>{

              console.log(result);

              this.$Message(result.data.message);//商品修改成功返回信息



              this.axios.get('http://127.0.0.1:8000/uptags/',{params:{id:result.data.id,tags:this.mytags}}).then((result) =>{
                this.$Message(result.data.message); //标签修改成功返回信息

     		 });




      });





  	},
  	//商品信息接口
  	getdata:function(){


  		//发送请求
      this.axios.get('http://127.0.0.1:8000/goodinfo/',{params:{id:this.id}}).then((result) =>{

              console.log(result);

              this.name = result.data.name;
              this.desc = result.data.desc;
              this.price = result.data.price;
              this.img = result.data.img;
              this.cate_id=result.data.cate_id

              var parms = result.data.parms;

              //转换类型
              parms = JSON.parse(parms);

              this.color = parms.color;
              this.size = parms.size;
              this.src = 'http://127.0.0.1:8000/static/upload/'+result.data.img;

              console.log(parms);

      });



      //请求商品标签详情
      this.axios.get('http://127.0.0.1:8000/gettags/',{params:{id:this.id}}).then((result) =>{

      console.log(result);

      	//赋值
      	var mytags = result.data.tags;
      	mytags = mytags.join(",");
      	this.mytags = mytags;



		 });



  	}


  }
}


</script>
<style>
  .ql-editor{
    height: 300px;




  }
</style>


