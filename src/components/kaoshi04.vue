<template>
  <div>
  <section>
<!--    商品展示-->
    <div>
				<h3>商品展示</h3>
				<div>
          <table border="1px">
            <tr v-for="item in datalist">
              <td><img :src="' http://127.0.0.1:8000/static/upload/'+item.img+''"	width="120" height="120"></td>
              <td><a :href="'/ksitem?id='+item.id">{{item.name}}</a></td>
              <td><p><span>{{item.price}}</span></p></td>
            </tr>
          </table>
        </div>
      </div>
		</section>
          <div class="divider"></div>
          <div>
            <Pagination v-model="pagination" @change="change"></Pagination>
          </div>

</div>

</template>



<script>

import myheader from './myheader.vue';
export default {
  data () {
    return {
      datalist:[],
      pagination:{
	    page:6,
        size:3,
        total:12
      },

    }
  },
  components:{


},
  mounted:function(){

       // 请求商品接口
    this.axios.get('http://127.0.0.1:8000/goodslist/',{params:{page:1,size:3}}).then((result) =>{
      console.log(result)
      this.datalist=result.data.data;
    });




},
  methods:{


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



</style>
