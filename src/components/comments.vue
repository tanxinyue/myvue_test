
<template>
    <div>
      <p v-show="content_list" v-for="content in content_list">{{get_username(content.uid)}}:{{content.content}},{{content.create_time}}</p>
    </div>
</template>

<script>
    export default {
    data () {
        return {
        msg: "这是一个变量",

        }
    },
      //接受参数
      props:['content_list','myuser'],
      mounted:function(){


      },
  methods:{
          //格式化用户名
        get_username:function(uid) {
          return this.myuser[uid];

        }


  }
    }

</script>

<style>

</style>
