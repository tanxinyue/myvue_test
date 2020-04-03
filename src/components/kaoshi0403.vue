<template>
  <div>

      遍历商品列表-->
					<div  v-for="item in goods_list">
						<figure>
							<img  :src="' http://127.0.0.1:8000/static/upload/'+item.img+''"	width="240" height="240">

						</figure>
						<h4><a href="item.html">{{item.name}}</a></h4>
						<p><span class="emphasis">{{item.price}}</span></p>
            <p><a :href="'/item?id='+item.id" >关注该商品</a></p>

					</div>

<!--          分页逻辑-->
     <br>
          <div>
            <Pagination v-model="pagination" @change="change"></Pagination>
          </div>
    <br>





				</div>



</template>



<script>


export default {
  data () {
    return {
      goods_list:[],
            pagination:{
	    page:1,
        size:3,
        total:5
      },





    }
  },
//   注册组件标签
components:{
	'myheader': myheader,

},
  mounted:function(){

    this.axios.get('http://127.0.0.1:8000/goodslist/',{params:{page:1,size:3}}).then((result) =>{
      console.log(result)
      this.goods_list=result.data.data;
    });

},
  methods:{

  // 分页器事件
    change:function () {
	     // 请求商品接口
    this.axios.get('http://127.0.0.1:8000/goodslist/',{params:{page:this.pagination.page,size:this.pagination.size}}).then((result) =>{
      console.log(result)
      this.goods_list=result.data.data;
    });


    }

  }
}


</script>

<style>



</style>
