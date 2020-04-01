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

					<a href="#" class="btn btn-full-width btn-lg btn-outline-primary">Add to cart</a>
          <br>
          <br>
          <Button color="blue" @click="userflow">收藏该商品</Button>
        </div>
      </div>
		</div>
	</section>
    <div class="divider"></div>
    <div align="center">
<!--      展示关注人数和关注用户-->
    <p>关注人数:{{count}}</p>
    <p v-for="people in people_list">{{people.username}}</p>
      </div>

	<div class="divider"></div>
    <section class="products text-center">
		<div class="container">
      <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
      <br>
      <Button color="blue" @click="comment">点击评论</Button>

	<div class="divider" style="background: black"></div>
 <p v-show="content_list" v-for="content in content_list">{{content.uid | myfilter}}:{{content.content}},{{content.create_time}}</p>
       <br>
          <div>
            <Pagination v-model="pagination" @change="change"></Pagination>
          </div>

	<div class="divider" style="background: black"></div>

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
      src:'',
      content:'',
      content_list:[],
      people_list:[],
      count:0,
      //用户信息字典
      user_list:{},
        pagination:{
        page:1,
        size:3,
        total:5
      },

    }
  },
    //在渲染之前定义that变量
  beforeCreate() {
    window.that=this;
  },
  //自定义过滤器
  filters:{
    //自定义方法
    myfilter:function (value) {
      //通过key(用户id)获取用户名


      return window.that.user_list[value]


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
  	this.getcontent();
      // 请求商品接口

  	//调用用户列表
  	this.get_user();
  	this.flowshowpeople();



},
  methods:{
    //展示关注人的数量和用户名称
    flowshowpeople:function(){
            this.axios.get('http://127.0.0.1:8000/peopleflow/',{params:{gid:this.id}}).then((result) =>{

               this.people_list=result.data
              for(let i=0,l=result.data.length;i<l;i++){
                this.count++

              }


      });


    },
    //收藏该商品
    userflow:function(){
           		//发送请求
      this.axios.get('http://127.0.0.1:8000/goodflow/',{params:{gid:this.id,uid:localStorage.getItem('uid')}}).then((result) =>{

            if(result.data.code==200){
              this.$Message(result.data.message)
            }else{
               this.$Message(result.data.message)

            }

      });

    },

        change:function () {
	     // 请求商品接口
    this.axios.get('http://127.0.0.1:8000/pagelist/',{params:{page:this.pagination.page,size:this.pagination.size,id:this.id}}).then((result) =>{
      console.log(result)
      this.content_list=result.data.data;
    })
    },

    get_user:function(){
          this.axios.get('http://127.0.0.1:8000/userlist/').then((result) =>{

         console.log(result.data)
            //动态赋值
            for(let i=0,l=result.data.length;i<l;i++){
              this.user_list[result.data[i].id]=result.data[i].username


            }
            console.log(this.user_list)


      });


},
    //评论方法
    comment:function(){
       		//发送请求
      this.axios.post('http://127.0.0.1:8000/insertcommet/',this.qs.stringify({content:this.content,uid:localStorage.getItem('uid'),gid:this.id})).then((result) =>{

            this.$Message(result.data.message)
             if(result.data.code==200){
               //将评论内容和作者实时填充到评论容器中
             this.content_list.unshift({'uid':localStorage.getItem('uid'),'content':this.content})
               this.content=''


             }


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

              var parms = result.data.parms;

              //转换类型
              parms = JSON.parse(parms);

              this.color = parms.color;
              this.size = parms.size;
              this.src = 'http://127.0.0.1:8000/static/upload/'+result.data.img;

              console.log(parms);



      });



  	},
    getcontent:function () {
      //  		//发送请求
      // this.axios.get('http://127.0.0.1:8000/showcomment/',{params:{id:this.id}}).then((result) =>{
      //
      //       console.log(result.data)
      //       this.content_list=result.data
      //
      // });
      this.axios.get('http://127.0.0.1:8000/pagelist/',{params:{page:1,size:3,id:this.id}}).then((result) =>{
      console.log(result)
      this.content_list=result.data.data;
    });


    }


  }
}


</script>

<style>



</style>
