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
            商品名称:
          </td>
           <td style="padding: 5px">
             <input type="text" v-model="name">
          </td>
        </tr>
          <tr >
          <td style="padding: 5px">
            商品描述:
          </td>
           <td style="padding: 5px">
             <input type="text" v-model="desc">
          </td>
        </tr>
        <tr>
          <td style="padding: 5px">
            商品参数:
            <br>
            颜色
            <br>
            尺寸

          </td>
           <td style="padding: 5px">
             <br>

             <input type="text" v-model="color"><br>

             <input type="text" v-model="size">
          </td>
        </tr>
        <tr>
          <td style="padding: 5px">
            商品价格:
          </td>
           <td style="padding: 5px">
             <input type="text" v-model="price">
           </td>
        </tr>
         <tr>
          <td style="padding: 5px">
            商品分类:
          </td>
           <td style="padding: 5px">
             <input type="text" v-model="cate_id">
           </td>
        </tr>

          <tr >
   <tr>
          <td style="padding: 5px">
            商品图片:
          </td>
           <td style="padding: 5px">
          <input type="file" id="ssss">
             
           </td>
        </tr>
<tr>
          <td style="padding: 5px">
            商品视频:
          </td>
           <td style="padding: 5px">
          <input type="file" id="video">
             
           </td>
        </tr>

          <tr >
          <td style="padding: 5px">
          </td>
           <td style="padding: 5px">
            <Button @click="submit">提交</Button>&nbsp;&nbsp;

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
      datas:[{title:'首页',route:{name:'index'}},{title:'注册页面',route:{name:'register'}}],
      name:'',
      desc:'',
      color:'',
      size:'',
      price:'',
      cate_id:'',
    }
  },
  components:{
    'myheader':myheader
  },
  mounted:function(){
// 获取uptoken调用函数
    this.get_uptoken();



},
  methods:{
   // #获取七牛云凭证
    get_uptoken(){
	        this.axios.get('http://127.0.0.1:8000/uptoken/').then((result) =>{
			console.log(result);
				// 赋值操作
            this.uptoken=result.data.token

			}
		)

    },
    submit:function () {
      if(this.name==''){
        this.$Message('商品名称不能为空不能为空');
        return false;
      }
            var parms = {};
             parms['color'] = this.color
             parms['size'] = this.size;

             console.log(parms);

             //格式化-->
            parms = JSON.stringify(parms);


           console.log(params);
       //从字符串转回json-->
      // parms = JSON.parse(parms);
      // console.log(parms)
          var image =document.getElementById('ssss').files[0];
         var video =document.getElementById('video').files[0];
          let new_form = new FormData()




      new_form.append('name', this.name)
      new_form.append('desc', this.desc)
      new_form.append('parms', parms)

      new_form.append('price', this.price)
      new_form.append('cate_id', this.cate_id)
      new_form.append('img', image)
      new_form.append('video', video)

      


      }).then(res => {
        this.$Message(res.data.message)
     let param = new FormData();
       param.append('file', video);
// 定制化axios
        const axios_qiniu=this.axios.create({withCredentials:false})
  axios_qiniu({
          method: 'POST',
          url:'http://up-z1.qiniu.com/',
          data:param,

       axios({
        url: 'http://127.0.0.1:8000/insertgoods/',
        method:'post',
        data: new_form, })


      })




    }


  }
}


</script>

<style>



</style>



