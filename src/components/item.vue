<template>
  <div>


	<myheader />

	<section class="featured-block text-center">
		<div class="container">
			<div class="row">
				<div class="col-md-6 text-center">
					<div class="product-image mt-3">
						<img class="img-fluid" :src="src">
					</div>
					<div class="product-thumbnails"><a href="#">
						<img class="mt-2 mr-2 img-fluid" src="../assets/images/placeholder-product.jpg" ></a>
						<a href="#">
							<img class="mt-2 mr-2 img-fluid" src="../assets/images/placeholder-product.jpg" ></a>
						<a href="#">
							<img class="mt-2 mr-2 img-fluid" src="../assets/images/placeholder-product.jpg" ></a>
						<a href="#">
							<img class="mt-2 mr-2 img-fluid" src="../assets/images/placeholder-product.jpg" ></a>
						<a href="#">
						<img class="mt-2 mr-2 img-fluid" src="../assets/images/placeholder-product.jpg" ></a></div>
				</div>
				<div class="col-md-6 mt-5 mt-md-2 text-center text-md-left">
					<h2 class="mb-3 mt-0">{{ name }}</h2>
					<p class="lead mt-2 mb-3 primary-color">${{ price }}</p>
					<h5 class="mt-4">商品简介</h5>
					<p>{{ desc }}</p>

					<p>颜色:{{ color }}</p>
					<p>号码:{{ size }}</p>



					<select class="custom-select form-control mt-4 mb-4">
						<option selected>Size</option>
						<option value="1">Small</option>
						<option value="2">Medium</option>
						<option value="3">Large</option>
					</select>

					<!--Quantity: <input type="text" class="form-control quantity mb-4" name="" value="1">-->

					<a href="#" class="btn btn-full-width btn-lg btn-outline-primary">Add to cart</a></div>
			</div>
		</div>
	</section>

	<div class="divider"></div>

	<section class="products text-center">
		<div class="container">
			<h3 class="mb-4">Related Products</h3>
			<div class="row">
				<div class="col-sm-6 col-md-3 col-product">
					<figure>
						<img class="rounded-corners img-fluid" src="../assets/images/placeholder-product.jpg"	width="240" height="240">
						<figcaption>
							<div class="thumb-overlay"><a href="#" title="More Info">
								<i class="fas fa-search-plus"></i>
							</a></div>
						</figcaption>
					</figure>
					<h4><a href="#">Product Name</a></h4>
					<p><span class="emphasis">$19.00</span></p>
				</div>
				<div class="col-sm-6 col-md-3 col-product">
					<figure>
						<img class="rounded-corners img-fluid" src="../assets/images/placeholder-product.jpg"	width="240" height="240">
						<figcaption>
							<div class="thumb-overlay"><a href="#" title="More Info">
								<i class="fas fa-search-plus"></i>
							</a></div>
						</figcaption>
					</figure>
					<h4><a href="#">Product Name</a></h4>
					<p><span class="emphasis">$19.00</span></p>
				</div>
				<div class="col-sm-6 col-md-3 col-product">
					<figure>
						<img class="rounded-corners img-fluid" src="../assets/images/placeholder-product.jpg"	width="240" height="240">
						<figcaption>
							<div class="thumb-overlay"><a href="#" title="More Info">
								<i class="fas fa-search-plus"></i>
							</a></div>
						</figcaption>
					</figure>
					<h4><a href="#">Product Name</a></h4>
					<p><span class="emphasis">$19.00</span></p>
				</div>
				<div class="col-sm-6 col-md-3 col-product">
					<figure>
						<img class="rounded-corners img-fluid" src="../assets/images/placeholder-product.jpg"	width="240" height="240">
						<figcaption>
							<div class="thumb-overlay"><a href="#" title="More Info">
								<i class="fas fa-search-plus"></i>
							</a></div>
						</figcaption>
					</figure>
					<h4><a href="#">Product Name</a></h4>
					<p><span class="emphasis">$19.00</span></p>
				</div>
			</div>
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

export default {
  data () {
    return {
      msg: "这是一个变量",
      //商品id
      id:'',
      name:'',
      price:'',
      desc:'',
      color:'',
      size:'',
      season:'',
      img:'',
      src:''
    }
  },
  //注册组件标签
  components:{

  		myheader

  },
  mounted:function(){

  	//接收商品id
  	var id = this.$route.query.id;

  	this.id = id;


  	//调用接口
  	this.getdata();



},
  methods:{

  	//商品信息接口
  	getdata:function(){


  		//发送请求
      this.axios.get('http://127.0.0.1:8000/goodinfo/',{params:{id:this.id}}).then((result) =>{

              console.log(result);

              this.name = result.data.name;
              this.desc = result.data.desc;
              this.price = result.data.price;
              this.img = result.data.img;

              var parms = result.data.parms;

              //转换类型
              parms = JSON.parse(parms);

              this.color = parms.color;
              this.size = parms.size;
              this.src = 'http://127.0.0.1:8000/static/upload/'+result.data.img;

              console.log(parms);



      });



  	}


  }
}


</script>

<style>



</style>
