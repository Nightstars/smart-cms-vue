<template>
  <div class="login">
    <!--    <div class="team-name hidden-sm-and-down"><img src="@/assets/image/login/team-name.png" alt="logo" /></div>-->
    <div class="form-box" v-loading="loading" element-loading-background="rgba(0, 0, 0, 0)">
      <div class="title"><h1 title="Lin">Smart CMS</h1></div>
      <form class="login-form" autocomplete="off" @submit.prevent="throttleLogin()">
        <div class="form-item nickname">
          <span class="icon account-icon"></span>
          <input type="text" v-model="form.username" autocomplete="off" placeholder="请填写用户名" />
        </div>
        <div class="form-item password">
          <span class="icon secret-icon"></span>
          <input type="password" v-model="form.password" autocomplete="off" placeholder="请填写用户登录密码" />
        </div>
        <button class="submit-btn" type="submit">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import AppConfig from '@/config/index'
import User from '@/lin/model/user'
import Utils from '@/lin/util/util'

export default {
  name: 'login',
  data() {
    return {
      loading: false, // 加载动画
      wait: 2000, // 2000ms之内不能重复发起请求
      throttleLogin: null, // 节流登录
      form: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      const { username, password } = this.form
      try {
        this.loading = true
        await User.getToken(username, password)
        await this.getInformation()
        this.loading = false
        this.$router.push(AppConfig.defaultRoute)
        this.$message.success('登录成功')
      } catch (e) {
        this.loading = false
        console.log(e)
      }
    },
    async getInformation() {
      try {
        // 尝试获取当前用户信息
        const user = await User.getPermissions()
        this.setUserAndState(user)
        this.setUserPermissions(user.permissions)
      } catch (e) {
        console.log(e)
      }
    },
    ...mapActions(['setUserAndState']),
    ...mapMutations({
      setUserPermissions: 'SET_USER_PERMISSIONS',
    }),
  },
  created() {
    // 节流登录
    this.throttleLogin = Utils.throttle(this.login, this.wait)
  },
  components: {},
}
</script>

<style lang="scss">
.login {
  //width: 100%;
  //height: 100%;
  //background-size: cover;
  //background: url('../../assets/image/login/login-bg4.jpg') no-repeat;
  width: 100%;
  height: 100%;
  //margin: 0 auto;
  background-image: url('../../assets/image/login/login-bg4.jpg');
  background-repeat: no-repeat;
  background-size: cover; /* 重点二 */
  overflow: auto;

  .team-name {
    position: fixed;
    left: 40px;
    top: 50%;
    width: 50px;
    transform: translateY(-50%);
  }

  .form-box {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 445px;

    .title {
      height: 37px;
      font-size: 30px;
      line-height: 37px;
      margin-bottom: 15%;

      h1 {
        padding-left: 74px;
        box-sizing: border-box;
        text-align: left;
        color: whitesmoke;
      }
    }

    input::-webkit-input-placeholder {
      color: orangered;
      font-size: 12px;
    }

    .login-form {
      width: 100%;

      .form-item {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        padding-bottom: 13px;
        margin-bottom: 34px;

        input {
          width: 100%;
          height: 100%;
          background: transparent;
          color: whitesmoke;
          font-size: 14px;
          padding-left: 74px;
          box-sizing: border-box;
        }
      }

      .form-item.nickname {
        background: url('../../assets/image/login/nickname.png') no-repeat;
        background-size: 100% auto;
        background-position: left bottom;
      }

      .form-item.password {
        background: url('../../assets/image/login/password.png') no-repeat;
        background-size: 100% auto;
        background-position: left bottom;
      }

      .submit-btn {
        width: 100%;
        height: 70px;
        color: whitesmoke;
        font-size: 16px;
        text-align: left;
        box-sizing: border-box;
        padding: 0 10px;
        padding-left: 74px;
        background: url('../../assets/image/login/login-btn.png') no-repeat;
        background-size: 90% auto;
        background-position: center bottom;
        border: none;
        cursor: pointer;
      }
    }
  }
}
</style>
