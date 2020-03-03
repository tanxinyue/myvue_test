<template>
  <div>
    <table border="1">
            <tr>
                <th>序号</th>
                <th>商品名称</th>
                <th>商品价格</th>
                <th>购买数量</th>
                <th>操作</th>
            </tr>
            <tr v-for="i in list">
                <td>{{ i.id }}</td>
                <td>{{ i.name }}</td>
                <td>{{ i.price }}</td>

                <td><button v-bind:disabled="i.count === 1" @click="i.count -= 1">-</button>
                {{ i.count }}
                <button @click="i.count += 1">+</button></td>
                <td><button @click="i.count=1">移除</button></td>
            </tr>



        </table>
    <br>
        <p>总计：${{ totalPrice() }}</p>
  </div>

</template>

<script>
    export default {
        name: "Buycart",
      data(){
            return{
                list:[{
                    id: 1,
                    name: 'iphone 8',
                    price: 5099,
                    count: 1
                },{
                    id: 2,
                    name: 'iphone xs',
                    price: 8699,
                    count: 1
                },{
                    id: 3,
                    name: 'iphone xr',
                    price: 6499,
                    count: 1
                },
            ],

            }
        },
      methods:{
          totalPrice:function () {
              var totall = 0;
              for (var i = 0,len = this.list.length;i<len;i++) {
                totall+=this.list[i].price*this.list[i].count;
              }
              return totall;
            },
      }

    }
</script>

<style scoped>
  table{
    width:500px;
    height: 200px;
    border: solid 1px #000;
  }

</style>
