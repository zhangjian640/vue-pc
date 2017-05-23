<template>
  <div class="login-form" >
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel"  placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{passwordErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin" >登录</a>
        </div>
      </div>
      <p>{{errorText}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    data (){
      return {
        usernameModel: '',
        passwordModel: '',
        errorText: ''
      }
    },
    computed: {
      userErrors (){
        let errorText, status
        if (!/^([a-zA-Z0-9_\u4e00-\u9fa5_]){3,16}$/.test(this.usernameModel)){
          status = false
          errorText = '用户名长度3-16位'
        } else {
          status = true
          errorText = ''
        }
        // 解决进入页面就显示错误信息的问题
        if (!this.userFlag){
          errorText = ''
          this.userFlag = true
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors() {
        let errorText, status
        if (this.passwordModel.length < 6){
          status = false
          errorText = '密码长度必须大于六位！'
        } else {
          status = true
          errorText = ''
        }
        if (!this.passwordFlag){
          errorText = ''
          this.passwordFlag = true
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      onLogin(){
        if(!this.userErrors.status || !this.passwordErrors.status){
          this.errorText = '部分选项未通过'
        } else {
          this.errorText = ''
          this.$http.get('api/login')
          .then((res)=>{
            this.$emit('has-log', res.data)
          }, (error)=>{
            console.log(error)
          })
          
        }
      }
    }
  }
</script>
<style scoped>
</style>