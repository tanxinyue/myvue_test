<template>
  <div>

  <myheader></myheader>
       <br>



	<section class="featured-block text-center">
		<div class="container">

			<table>
        <tr>
          <td style="padding: 5px">
           增加:
          </td>
           <td style="padding: 5px">

             标题:<input type="text" v-model="title">
             链接:<input type="text" v-model="link">
             文件上传:<input type="file" @click="submit">
          </td>
        </tr>

          <tr  v-for="i in list">
          <td style="padding: 5px">
            <img :src="'http://127.0.0.1:8000/static/upload/'+i.image" alt="" style="width: 100px;height: 100px" >
          </td>
           <td style="padding: 5px">

             <Button @click="delete1(i.title)">删除</Button>
              <router-link :to="{name: 'UpdatePics', params: {'id': i.id}}">修改</router-link>


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

export default {
  data () {
    return {
      msg: "这是一个变量",
      title:'',
      link:'',
      list:[]


    }
  },
  components:{
    'myheader':myheader
  },
  mounted:function(){
    	this.axios.get('http://127.0.0.1:8000/showpics/').then((result) =>{

			this.list=result.data.list

				// 赋值操作

			}
		)



},
  methods:{
    submit:function (e) {
      let file = e.target.files[0];

		// 声明参数
		let param = new FormData();

		// 添加文件
		param.append('title', this.title);
		param.append('link', this.link);
		param.append('file', file);




		// 发送请求
		this.axios.post('http://127.0.0.1:8000/pics/',param).then((result) =>{
			console.log(result);

				// 赋值操作

			}
		)


    },
    delete1:function (i) {
      let param = new FormData();
      param.append('title', i);
      	this.axios.post('http://127.0.0.1:8000/dpics/',param).then((result) =>{
			console.log(result);
			window.location.href='/pics'
				// 赋值操作

			}
		)



    }
  }
}


</script>

<style>



</style>



