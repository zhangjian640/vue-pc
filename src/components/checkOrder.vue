<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
        请检查您的支付状态
        <div class="button" @click="checkStatus">支付成功</div>
        <div class="button" @click="checkStatus">支付失败</div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccessDialog" @on-close="closeDialog('isShowSuccessDialog')">
        支付成功
    </this-dialog>
    <this-dialog :is-show="isShowFailkDialog" @on-close="closeDialog('isShowFailkDialog')">
        支付失败
    </this-dialog>
  </div>
</template>

<script>
import Dialog from './base/diaLog'
export default {
    components: {
      thisDialog: Dialog
    },
    props:{
      isShowCheckDialog: {
        type: Boolean,
        default: false
      },
      orderId: [String, Number]
    },
    data () {
      return {
          isShowSuccessDialog: false,
          isShowFailkDialog: false
      }
    },
    methods: {
      checkStatus(){
        this.$http.post('/api/checkOrder', {
          orderId: this.orderId
        })
        .then((res) => {
          this.isShowSuccessDialog = true
          this.$emit('on-close-check-dialog')
        })
        .catch((err)=>{
          console.log(err)
          this.isShowFailkDialog = true
          this.$emit('on-close-check-dialog')
        })
      },
      closeDialog(attr){
        this[attr] = false
        this.$router.push({path: '/orderList'})
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
