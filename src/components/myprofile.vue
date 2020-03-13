<template>
  <div>

  <myheader></myheader>
       <br>
        <Breadcrumb :datas="datas"></Breadcrumb>



	<section class="featured-block text-center">
		<div class="container">
      <Avater :src="src" :width="150" fit="fill"></Avater>
			<teble>
        <tr>
          <td style="padding: 5px">
            用户名:
          </td>
           <td style="padding: 5px">
             <input type="text" v-model="username">
          </td>
        </tr>
          <tr >
          <td style="padding: 5px">
            密码:
          </td>
           <td style="padding: 5px">
             <input type="password" v-model="password">
          </td>
        </tr>
         <tr >
          <td style="padding: 5px">
            头像上传:

          </td>
           <td style="padding: 5px">
             <input type="file">


          </td>
        </tr>


          <tr >
          <td style="padding: 5px">


          </td>
           <td style="padding: 5px">
            <Button @click="upload">提交</Button>&nbsp;&nbsp;

          </td>
        </tr>
      </teble>



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
  data() {
    return {

      datas: [{title: '首页', route: {name: 'index'}}, {title: '我的首页'}],
      username: '',
      password: '',
      password1: '',

      src: ''

    }
  },
  components: {
    'myheader': myheader
  },
  mounted: function () {


  },
  methods: {
    upload: function (fil) {
      let file = fil.target.files[0]
      let param = new FormData();
      param.append('file', file, file.name)
      let config = {headers: {'Content_Type': 'multipart/form-data'}}
      this.axios.post('http://127.0.0.1:8000/uploadfile', param, config).then(res => {
        alert(res)
        this.src = 'http://127.0.0.1:8000/static/upload/' + res.data.filename


      })

    }
  }

}


</script>

<style>



</style>



