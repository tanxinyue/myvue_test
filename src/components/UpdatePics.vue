<template>
    <div>
        <form action="" @submit.prevent="update_cate">
            <p>标题：<input type="text" v-model="title"></p>
            <p>链接：<input type="text" v-model="link"></p>
            <p>图片：<input type="file" id="img"></p>
            <p><input type="submit" value="修改"></p>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            cid: this.$route.params.id,
            title:'',
            link:''

        }
    },
    methods: {
        update_cate() {
            let new_form = new FormData()
            var img = document.getElementById('img')
            new_form.append('cid', this.cid)
            new_form.append('title', this.title)
            new_form.append('link', this.link)
            new_form.append('img',img.files[0])

            axios({
                url: 'http://127.0.0.1:8000/upics/',
                method: 'post',
                data: new_form
            }).then(res=>{
                alert('修改成功')
              window.location.href='/pics'
            })
        }
    },

}
</script>
