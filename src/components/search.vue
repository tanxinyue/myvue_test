<template>
  <div>

  <myheader></myheader>
       <br>
        <Breadcrumb :datas="datas"></Breadcrumb>



	<section class="featured-block text-center">
		<div class="container">

			<table border="1px">
        <tr>
          <td>商品排行榜</td>
          <td>商品图片</td>
          <td>商品名称</td>
          <td>商品描述</td>
          <td>商品价格</td>
          <td>详情页</td>
        </tr>

        <tr v-for="(good,index) in good_list">
          <td>{{index+1}}</td>
          <td><a :href="'/item?id='+good.id" target="_blank"><img :src="' http://127.0.0.1:8000/static/upload/'+good.img+''"	width="100" height="100"></a></td>
          <td>
            <a :href="'/item?id='+good.id">{{good.name}}</a>
          </td>
            <td>
            {{good.desc}}
          </td>
              <td>
            {{good.price}}
          </td>
          <td>
            <a :href="'/item?id='+good.id">详情</a>
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
      datas:[{title:'首页',route:{name:'index'}},{title:'商品检索',route:{name:'search'}}],
      word:'',
      good_list:[],

    }
  },
  components:{
    'myheader':myheader
  },
  //监听属性
  watch:{
    $route(to,from){
     this.$router.go(0)



    }

  },
  mounted:function(){
    //接受参数
    var word=this.$route.query.word
    console.log(word)
    this.word=word
    this.submit()




},
  methods:{
    submit:function () {
              if(this.word!=''){
                 this.axios.get('http://127.0.0.1:8000/search/',{params:{word:this.word}}).then((result) =>{
                 this.good_list=result.data;
                   if(this.good_list.length==0){
                     this.$Message('暂时没有您需要的商品')

                   }




      });


              }





    }


  }
}


</script>

<style>



</style>



