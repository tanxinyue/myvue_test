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



},
  methods:{
    submit:function () {
      if(this.name==''){
        this.$Message('商品名称不能为空不能为空');
        return false;
      }
      let new_form = new FormData()




      new_form.append('name', this.name)
      new_form.append('desc', this.desc)
      new_form.append('color', this.color)
      new_form.append('size', this.size)
      new_form.append('price', this.price)
      new_form.append('cate_id', this.cate_id)

      axios({
        url: 'http://127.0.0.1:8000/insertgoods/',
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



