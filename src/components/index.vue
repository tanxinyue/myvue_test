<template>
  <div>


	<myheader>

	</myheader>

<div id="carousel" class="carousel slide" data-ride="carousel">


<!--			<ul class="carousel-indicators">-->
<!--				<li data-target="#carousel" data-slide-to="0" class="active"></li>-->
<!--				<li data-target="#carousel" data-slide-to="1"></li>-->
<!--				<li data-target="#carousel" data-slide-to="2"></li>-->
<!--			</ul>-->

			<div class="carousel-inner">

				<!--Text only with background image-->
<!--				<div class="carousel-item active">-->
<!--					<div class="container slide-textonly">-->
<!--						<div>-->
<!--							<h1>York &amp; Smith</h1>-->
<!--							<p class="lead">Spring/Summer 2018 Collection</p>-->
<!--							<a href="#" class="btn btn-outline-secondary">View Collection</a>-->
<!--						</div>-->
<!--					</div>-->
<!--				</div>-->
<!--        幻灯片组件-->
            <Carousel :height="700" :datas="params" @click="click" pageTheme="cricle"></Carousel>


			</div>
		</div>
		<section class="collections text-center ">
			<div class="container-fluid">
				<div class="row">
					<div class="collection col-md-6 alt-background">
						<div class="container container-right text-center">
							<div>
								<h1>Women's</h1>
								<p class="lead">Spring/Summer 2018 Collection</p>
								<a href="catalog.html" class="btn btn-outline-secondary">Browse Women's</a>
							</div>
						</div>
					</div>
					<div class="collection col-md-6 bg-secondary inverted">
						<div class="container container-left text-center">
							<div>
								<h1>Men's</h1>
								<p class="lead">Spring/Summer 2018 Collection</p>
								<a href="catalog.html" class="btn btn-outline-white">Browse Men's</a>
							</div>
						</div>
					</div>
				</div>
			</div>
    </section>

		<section class="featured-block text-center">
			<div class="container">
				<div class="row justify-center">
					<div class="col-md-6 text-center">
						<img class="mt-4 mb-4 img-fluid" src="../assets/images/placeholder-jacket.png" style="width: 100%;">
					</div>
					<div class="col-md-6 text-center text-md-left">
						<h2 class="mb-3">Spring/Summer Collection 2018</h2>
						<p class="lead mt-2 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus erat sed sem sagittis cursus.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Suspendisse cursus erat sed sem sagittis cursus. Etiam porta sem malesuada magna mollis euismod.</p>
						<a href="#" class="btn btn-md btn-outline-primary mt-3">Shop Now</a>
					</div>
				</div>
			</div>
		</section>
<!--    商品排行榜-->

	<div class="top-10">
    <h1>商品排行榜</h1>
			<ul>
				<li v-for="top in top_list"><a :href="'/item?id='+top.id">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img :src="'http://127.0.0.1:8000/static/upload/'+top.img+''" style="width:50px;height:50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{top.name}}&nbsp</a></li>

			</ul>
  </div>

		<section class="products text-center">
			<div class="container">
				<h3 class="mb-4">商品展示</h3>
				<div class="row">


<!--             遍历商品列表&ndash;&gt;-->
					<div  v-for="item in datalist" class="col-sm-6 col-md-3 col-product">
						<figure>
							<a :href="'/item?id='+item.id"><img class="rounded-corners img-fluid" :src="' http://127.0.0.1:8000/static/upload/'+item.img+''"	width="240" height="240"></a>
							<figcaption>
								<div class="thumb-overlay"><a :href="'/item?id='+item.id" title=More Info>
									<i class="fas fa-search-plus"></i>
								</a></div>
							</figcaption>
						</figure>
						<h4><a :href="'/item?id='+item.id">{{item.name}}</a></h4>
            	<h4><a :href="'/editgood?id='+item.id">修改商品</a></h4>
						<p><span class="emphasis">{{item.price}}</span></p>



					</div>

<!--          分页逻辑-->



				</div>
           <br>
          <div>
            <Pagination v-model="pagination" @change="change"></Pagination>
          </div>
          <br>
<!--        &lt;!&ndash;自主分页&ndash;&gt;-->
<!--        <br /><br />-->
<!--					<div>-->

<!--						<a @click="getdata(lastpage)" v-show="lastpage"  >上一页</a>-->

<!--						<ul>-->

<!--							<li v-for="index in all">-->

<!--								<a @click="getdata(index)"  >{{ index }}</a>-->

<!--							</li>-->

<!--						</ul>-->

<!--						<a @click="getdata(nextpage)" v-show="nextpage" >下一页</a>-->
<!--</div>-->




			</div>
		</section>

		<div class="divider"></div>

		<section class="cta text-center">
			<div class="container">
				<h3 class="mt-0 mb-4">Sign up now to save 10% on your first order</h3>
				<form class="subscribe">
					<div class="form-group row pt-3">
						<div class="col-sm-8 mb-3">
							<input type="text" class="form-control" id="inputName" placeholder="Your Name">
						</div>
						<div class="col-sm-4">
							<button type="submit" class="btn btn-lg btn-outline-primary">Sign me up</button>
						</div>
					</div>
				</form>
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

import myheader from './myheader.vue';
export default {
  data () {
    return {
	  msg: "这是一个变量",
	  username: '',
      top_list:[],//排行榜列表
      datalist:[],
       //自主分页
      total:0,//商品总数
      cur:1,//当前页
      all:0,//总页数
      lastpage:0,//上一页
      nextpage:0,//下一页
      size:2,
      color:'blue',

      // 幻灯片数据
      params:[
        {
          title:'第一张',
          link:'',
          image:"https://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg"
        }, {
          title:'第二张',
          link:'',
          image:"https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
        }
      ],
        pagination:{
	    page:6,
        size:3,
        total:12
      },

    }
  },
  // 注册主见
  components:{
	'myheader': myheader,

},
   //自定义过滤器
  filters:{
    //自定义方法
    myfilter:function (value) {
      //通过key(用户id)获取用户名


      return value

    }
  },
  mounted:function(){
    this.top_rank(); //每次访问调用商品排行榜路由
    // this.getdata(1);

      //请求商品接口
      // 发送请求
       // 请求商品接口
    this.axios.get('http://127.0.0.1:8000/goodslist/',{params:{page:1,size:3}}).then((result) =>{
      console.log(result)
      this.datalist=result.data.data;
    });
	this.username = localStorage.getItem('username')
    	this.axios.get('http://127.0.0.1:8000/showpics/').then((result) =>{

			this.list=result.data.list

			for(var i=0;i<this.list.length;i++){
			  let dict={}
			  dict['title']=this.list[i]['title']
			  dict['link']=this.list[i]['link']
			  dict['image']='http://127.0.0.1:8000/static/upload/'+this.list[i]['image']
        console.log(dict)
        this.params.push(dict)


      }


				// 赋值操作

			}
		)







},
  methods:{
    //展示商品排行榜
    top_rank:function(){
             this.axios.get('http://127.0.0.1:8000/goodrank/').then((result) =>{
               console.log(result.data)
               this.top_list=result.data


      });

    },
    // 自主分页接口
    //自主分页接口
  	// getdata:function(mypage){
    //
    //
  	// 	//发送请求
    //   this.axios.get('http://127.0.0.1:8000/goodslist/',{params:{page:mypage,size:this.size}}).then((result) =>{
    //
    //           console.log(result);
    //           this.datalist = result.data.data;
    //
    //           //判断上一页
    //           if(mypage==1){
    //
    //           	this.lastpage = 0;
    //
    //           }else{
    //
    //           	this.lastpage = mypage - 1;
    //
    //           }
    //
    //           //计算总页数
    //           this.all = Math.ceil(result.data.total / this.size);
    //
    //           //判断下一页
    //           if(mypage==this.all){
    //
    //           	this.nextpage = 0;
    //
    //           }else{
    //
    //           	this.nextpage = mypage + 1;
    //
    //           }
    //
    //   });
    //
    //
    //
  	// },
	logout(){
		localStorage.removeItem('username')
    	this.username=null;
	},
    // 幻灯片点击事件
    click:function (index,data) {
	  console.log(data)
      // 点击后跳转到具体页面
      window.location.href=data.link

    },

  // 分页器事件
    change:function () {
	     // 请求商品接口
    this.axios.get('http://127.0.0.1:8000/goodslist/',{params:{page:this.pagination.page,size:this.pagination.size}}).then((result) =>{
      console.log(result)
      this.datalist=result.data.data;
    });


    }

  }
}


</script>

<style>

a {
			color: #525C66;
			text-decoration: none;
		}
        <!-- div 大小设定 -->
		.top-10 {
			/*float: left;*/
			width: 340px;
      margin-top:106px;
			margin-left:118px;
			background: #fff;
			border: 1px solid #FFF;
			box-shadow: #d0d0d0 1px 1px 10px 0px;
		}

		.top-10 ul {
			counter-reset: section;
		}

		.top-10 li {
			width: 260px;
			border-bottom: 1px solid #b8c2cc;
			line-height: 46px;
			height: 46px;
			overflow: hidden;
			color: #525C66;
			font-size: 14px;

		}

		.top-10 li:before {
			counter-increment: section;
			content: counter(section);
			display: inline-block;
			padding: 0 12px;
			margin-right: 10px;
			height: 18px;
			line-height: 18px;
			background: #b8c2cc;
			color: #fff;
			border-radius: 3px;
			font-size: 9px
		}
        <!-- 排名前三名颜色控制 -->
    .top-10 li:nth-child(0):before {
          background:#F00
        }
		.top-10 li:nth-child(1):before {
			background:#F00
		}

		.top-10 li:nth-child(2):before {
			background:#F00
		}

		.top-10 li:nth-child(3):before {
			background:#F00
		}


</style>
