<template>
  <div class="container">
    <div class="title">
      <span>修改应用</span> <span class="back" @click="back"> <i class="iconfont icon-fanhui"></i> 返回 </span>
    </div>
    <el-divider></el-divider>
    <div class="wrap">
      <el-row>
        <el-col :lg="16" :md="20" :sm="24" :xs="24">
          <el-form :model="form" status-icon ref="form" label-width="100px" v-loading="loading" @submit.native.prevent>
            <el-form-item label="名称" prop="name">
              <el-input size="name" v-model="form.name" placeholder="请填写名称"></el-input>
            </el-form-item>
            <el-form-item label="url" prop="url">
              <el-input size="url" v-model="form.url" placeholder="请填写url"></el-input>
            </el-form-item>
            <el-form-item label="图标" prop="icon">
              <el-input size="icon" v-model="form.icon" placeholder="请填写图标地址"></el-input>
            </el-form-item>
            <el-form-item label="简介" prop="summary">
              <el-input
                size="medium"
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 8 }"
                placeholder="请输入简介"
                v-model="form.summary"
              >
              </el-input>
            </el-form-item>
            <el-form-item class="submit">
              <el-button type="primary" @click="submitForm('form')">保 存</el-button>
              <el-button @click="resetForm('form')">重 置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import apps from '@/model/apps'

export default {
  name: 'myapps-edit',
  props: {
    editAppID: {
      type: Number,
    },
  },
  data() {
    return {
      form: {
        name: '',
        url: '',
        icon: '',
        summary: '',
      },
      loading: false,
    }
  },
  async mounted() {
    this.loading = true
    this.form = await apps.getAppById(this.editAppID)
    this.loading = false
  },
  methods: {
    async submitForm() {
      const res = await apps.editAppById(this.editAppID, this.form)
      console.log(res)
      // eslint-disable-next-line eqeqeq
      if (res.code == '10217') {
        this.$message.success(`${res.message}`)
        this.$emit('editClose')
      }
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    back() {
      this.$emit('editClose')
    },
  },
}
</script>

<style lang="scss" scoped>
.el-divider--horizontal {
  margin: 0;
}

.container {
  .title {
    height: 59px;
    line-height: 59px;
    color: $parent-title-color;
    font-size: 16px;
    font-weight: 500;
    text-indent: 40px;

    .back {
      float: right;
      margin-right: 40px;
      cursor: pointer;
    }
  }

  .wrap {
    padding: 20px;
  }

  .submit {
    float: left;
  }
}
</style>
