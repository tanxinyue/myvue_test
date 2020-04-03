<template>
  <div>


	<section class="featured-block text-center">
		<div class="container">
			<div class="row">
				<div class="col-md-6 text-center">
					<div class="product-image mt-3">
						<img class="img-fluid" :src="src">

				<div class="col-md-6 mt-5 mt-md-2 text-center text-md-left">
					<h2 class="mb-3 mt-0">{{ name }}</h2>
					<p class="lead mt-2 mb-3 primary-color">${{ price }}</p>
					<h5 class="mt-4">商品简介</h5>
					<p>{{ desc }}</p>

					<p>颜色:{{ color }}</p>
					<p>号码:{{ size }}</p>

          <br>
          <br>
          <Button color="blue" @click="userflow">收藏该商品</Button>
          <Button color="blue" @click="disflow">取消关注该商品</Button>
        </div>
      </div>
		</div>
	</section>










  </div>

</template>



<script>

//导包
import myheader from './myheader.vue';
import comments from './comments.vue';

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


  //注册组件标签
  components:{

  		myheader,
      comments

  },

  mounted:function(){


  	//接收商品id
  	var id = this.$route.query.id;

  	this.id = id;

    this.getdata()



},
  methods:{



      //取消该商品
    disflow:function(){
           		//发送请求
      this.axios.get('http://127.0.0.1:8000/disflow/',{params:{gid:this.id,uid:localStorage.getItem('uid')}}).then((result) =>{

            if(result.data.code==200){
               this.$Message(result.data.message)
               this.disflowshowpeople()


            }else{
               this.$Message(result.data.message)

            }

      });

    },

    //收藏该商品
    userflow:function(){
           		//发送请求
      this.axios.get('http://127.0.0.1:8000/goodflow/',{params:{gid:this.id,uid:localStorage.getItem('uid')}}).then((result) =>{

            if(result.data.code==200){
              this.$Message(result.data.message)
              this.flowshowpeople();

            }else{
               this.$Message(result.data.message)

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


  }
}


</script>

<style>



</style>
