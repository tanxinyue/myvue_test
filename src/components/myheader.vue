
<template>
    <div>
        <section class="header text-center">
            <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
                <div class="container"><a class="navbar-brand"  @click="changeLocale"><i class="fas fa-shopping-bag primary-color mr-1" ></i>{{$t('m.name')}}</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-1" aria-controls="navbar-1" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse pull-xs-right justify-content-end" id="navbar-1">
                        <ul class="navbar-nav mt-2 mt-md-0">
                            <li class="nav-item active"><a class="nav-link" href="#">{{$t('m.home')}} <span class="sr-only">(current)</span></a></li>
                            <li class="nav-item dropdown mega-menu"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{$t('m.shop')}} </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div class="container">
                                        <div class="divider"></div>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <h6 class="text-uppercase">{{$t('m.woman')}}</h6>
                                                <ul class="nav flex-column">
                                                    <li class="nav-item"><a class="nav-link active" href="#">{{$t('m.active')}}</a></li>
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-md-2">
                                                <h6 class="text-uppercase">{{$t('m.men')}}</h6>
                                                <ul class="nav flex-column">
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-md-2">
                                                <h6 class="text-uppercase">{{$t('m.girl')}}</h6>
                                                <ul class="nav flex-column">
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-md-2">
                                                <h6 class="text-uppercase">{{$t('m.boy')}}</h6>
                                                <ul class="nav flex-column">
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                    <li class="nav-item"><a class="nav-link" href="#">{{$t('m.link')}}</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-md-4">
                                                <h6 class="text-uppercase">{{$t('m.Featured')}}</h6>
                                                <div class="row">
                                                    <div class="col-6 text-center"><a href="item.html">
                                                        <img src="images/placeholder-product.jpg" alt="" class="img-fluid mt-2 mb-3"></a>
                                                        <h6 class="mb-0"><a href="item.html">{{$t('m.Product')}}</a></h6>
                                                        <p><span class="emphasis">$49.00</span></p>
                                                        <a href="#" class="btn btn-sm btn-outline-secondary mt-0">{{$t('m.Buy')}}</a>
                                            </div>
                                                    <div class="col-6 text-center"><a href="item.html">
                                                        <img src="images/placeholder-product.jpg" alt="" class="img-fluid mt-2 mb-3"></a>
                                                        <h6 class="mb-0"><a href="item.html">{{$t('m.Product')}}</a></h6>
                                                        <p><span class="emphasis">$49.00</span></p>
                                                        <a href="#" class="btn btn-sm btn-outline-secondary mt-0">{{$t('m.Buy')}}</a>
                                            </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{$t('m.pages')}}</a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="index.html">{{$t('m.Homepage')}}</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="catalog.html">{{$t('m.Catalog')}}</a>
                                    <a class="dropdown-item" href="item.html">{{$t('m.Item_Detail')}}</a>
                                    <a class="dropdown-item" href="cart.html">{{$t('m.Cart')}}</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="contact.html">{{$t('m.Contact')}}</a>

                                </div>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">{{$t('m.Contact')}}</a></li>
                        <li class="nav-item dropdown"><input type="text" /></li>
                            <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-shopping-cart"></i> <span class="badge badge-pill badge-primary">3</span></a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-cart" aria-labelledby="navbarDropdown">
                                    <h6>3 Items <span class="emphasis">$147.00</span></h6>
                                    <div class="dropdown-divider"></div>
                                    <ul class="shopping-cart-items">
                                        <li class="row">
                                            <div class="col-3">
                                                <img src="images/placeholder-product.jpg" width="60">
                                            </div>
                                            <div class="col-9">
                                                <h6><a href="item.html">Product Name</a></h6>
                                                <span class="text-muted">1x</span>
                                                <span class="emphasis">$49.00</span></div>
                                        </li>
                                        <li class="row">
                                            <div class="col-3">
                                                <img src="images/placeholder-product.jpg" width="60">
                                            </div>
                                            <div class="col-9">
                                                <h6><a href="item.html">Product Name</a></h6>
                                                <span class="text-muted">1x</span>
                                                <span class="emphasis">$49.00</span></div>
                                        </li>
                                        <li class="row">
                                            <div class="col-3">
                                                <img src="images/placeholder-product.jpg" width="60">
                                            </div>
                                            <div class="col-9">
                                                <h6><a href="item.html">Product Name</a></h6>
                                                <span class="text-muted">1x</span>
                                                <span class="emphasis">$49.00</span></div>
                                        </li>
                                    </ul>

                                    <a href="cart.html" class="btn btn-lg btn-full-width btn-primary" style="margin: 0;">View Cart</a>
                                </div>

                            </li>
                          <ul>
            <li  v-if="this.username!=null">{{$t('m.welcome')}} <router-link to="/profile">{{username}}</router-link> /<Button @click="logout">{{$t('m.logout')}}</Button></li>
            <li  v-else><a href="/register" style="text-decoration: none">{{$t('m.register')}}</a>/<a href="/login" style="text-decoration: none">{{$t('m.login')}}</a></li>
                            <h-switch v-model="language" @change="changeLocale">中/英</h-switch>
            </ul>
                        </ul>

                    </div>
                </div>

            </nav>
        </section>
    </div>
</template>

<script>
    export default {
    data () {
        return {
        msg: "这是一个变量",
        username: '',
          // 语言变量
          language:false
        }
    },
    mounted:function(){

     // 接收后端传过来的微博参数
      var ding_id = this.$route.query.ding_id;
  	  var uid = this.$route.query.uid;

  	console.log(ding_id);

  	if(ding_id){

  		//自动登录
  		localStorage.setItem("username",ding_id);
  		localStorage.setItem("uid",uid);

  	}
    this.username=localStorage.getItem('username')
      // 自动判断
      if(navigator.language=='zh-CN'){
        this.$i18n.locale=='cn'
         this.language=false

      }else{
        this.$i18n.locale=='en'
        this.language=true
      }

      // if(this.username!==''){
      //
      //   this.$i18n.locale=localStorage.getItem('language')
      //   if(this.$i18n.locale=='cn'){
      //     this.language=false
      //   }else{
      //     this.language=true
      //   }
      //
      // }


},
  methods:{
	logout(){
		localStorage.removeItem('username')
    	this.username=null;
		window.location.href='/login'

	},changeLocale() {
  let locale = this.$i18n.locale
      if(this.language==false){
        locale === 'cn' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'cn'
        localStorage.setItem('language','cn')



      }else{
        locale === 'cn' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'en'
        localStorage.setItem('language','en')
      }


  // LangStorage.setLang(this.$i18n.locale) //后面会用做切换和将用户习惯存储到本地浏览器
}

  }
    }

</script>

<style>

</style>
