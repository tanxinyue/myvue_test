<template>
    <div>

    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Test",
      data(){
          return{
            token:''

          }
      },
      mounted() {
          this.token=this.$route.query['code']
          // alert(this.token)
          let new_form = new FormData()

                new_form.append('code', this.token)


                axios({
                    url: 'http://127.0.0.1:8000/user_login/',
                    method:'post',
                    data: new_form,


                }).then(res => {
                   alert('欢迎用户'+res.data.username+'正在跳转......')
                    localStorage.setItem('username',res.data.username)
                    localStorage.setItem('uid',res.data.uid)
                    window.location.href='/'


                })






      }
    }
</script>

<style scoped>

</style>
