<template>
  <div>
    <br>
    <section class="featured-block text-center">
		<div class="container">
<!--      跳转到商品展示页面-->
      <p><router-link to="/ksgoodslist">跳转到商品展示页</router-link></p>
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
            <br>
            季节

          </td>
           <td style="padding: 5px">
             <br>
             <input type="text" v-model="color"><br>
             <input type="text" v-model="size"><br>
             <input type="text" v-model="season">
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

          <tr>
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
            商品标签:
          </td>
           <td style="padding: 5px">

  <div>
<!--    输入标签-->

    <TagInput v-model="mytag" type="string" split="," placeholder="请输入标签"></TagInput>
  </div>
           </td>
        </tr>
        <tr>
          <td style="padding: 5px">
          </td>
           <td style="padding: 5px">
            <Button @click="submit">提交</Button>&nbsp;&nbsp;
           </td>
        </tr>
      </table>
    </div>
	</section>


  </div>

</template>



<script>

  import axios from "axios";

export default {
  data () {
    return {
      // 定义数据
      name:'',
      desc:'',
      color:'',
      size:'',
      season:'',
      price:'',
      cate_id:'',
      mytag:''
    }
  },
  components:{

  },
  mounted:function(){

  },
  methods:{

    submit:function () {
      // 判断商品名称不能为空
      if(this.name==''){
        this.$Message('商品名称不能为空不能为空');
        return false;
      }
             // 定义parms变量存放商品属性
             var parms = {};
             parms['color'] = this.color
             parms['size'] = this.size;
             parms['season'] = this.season;



             //将格式化-->
            parms = JSON.stringify(parms);
            // 获取图片id

            var image =document.getElementById('ssss').files[0];
            // 定义数据，添加数据

            let new_form = new FormData()
           new_form.append('name', this.name)
           new_form.append('desc', this.desc)
           new_form.append('parms', parms)
           new_form.append('price', this.price)
           new_form.append('cate_id', this.cate_id)
           new_form.append('img', image)
      // 发送请求
       axios({
        url: 'http://127.0.0.1:8000/ksaddgoods/',
        method:'post',
        data: new_form, }).then((result)=>{
          this.$Message(result.data.message)

           // 判断是否获取的商品id，传递标签数据给后端
          if(result.data.id){
             let new_form1 = new FormData()
             new_form1.append('id', result.data.id)
             new_form1.append('tags', this.mytag)

             axios({
              url: 'http://127.0.0.1:8000/ksaddtags/',
              method:'post',
              data:new_form1}).then((result)=>{
                // 如果成功添加返回信息
               this.$Message(result.data.message)
             })

          }



       })

    }


  }
}


</script>

<style>



</style>




