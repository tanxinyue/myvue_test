<template>
    		<div class="container">
				<h3 class="mb-4">商品展示</h3>
				<p><router-link to="/kaoshiaddgoods">跳转到商品添加页</router-link></p><!--          //跳转到商品添加页面-->

				<div class="row">
          <!--             遍历商品列表&ndash;&gt;-->
					<div  v-for="item in datalist" class="col-sm-6 col-md-3 col-product">
						<figure>
<!--              展示商品图片-->
							<a><img class="rounded-corners img-fluid" :src="' http://127.0.0.1:8000/static/upload/'+item.img+''"	width="240" height="240"></a>
						</figure>
<!--            展示商品信息-->
						<h4><a>{{item.name}}</a></h4>
						<p><span class="emphasis">{{item.price}}</span></p>
						<p><span class="emphasis">{{item.desc}}</span></p>
						<p><span class="emphasis">{{item.parms}}</span></p>
						<p><span class="emphasis">{{item.cate_id}}</span></p>
          </div>

<!--          分页逻辑-->
        </div>
           <br>
          <div>
            <Pagination v-model="pagination" @change="change"></Pagination>
          </div>
          <br>

        </div>
</template>

<script>
    export default {
        name: "kaoshigoodslist",
      data(){
          return{
            // 接受后端传过来的数据
            datalist:[],
            // 定义分页，总共5页，每页4个数据，总共20个数据
            pagination:{
	            page:5,
              size:4,
              total:20
            },
          }
      },
      mounted() {
          // 访问路由时，自动向后台发送请求获取数据
        this.axios.get('http://127.0.0.1:8000/ksgoodlist/',{params:{page:1,size:5}}).then((result) =>{
          // 接受返回的数据
      this.datalist=result.data.data;
    });
      },
      methods:{
          // 分页器事件
          change:function () {
	     // 请求商品接口
       //      切换不同的页面,展示不同的数据
            this.axios.get('http://127.0.0.1:8000/ksgoodlist/',{params:{page:this.pagination.page,size:this.pagination.size}}).then((result) =>{

                  // 接受返回的数据
                  this.datalist=result.data.data;
            });


          }
      }
    }
</script>

<style scoped>

</style>
