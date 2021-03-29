<template>
  <div class="container">
<!--    <div class="title">新建书籍</div>-->
<!--    <div class="wrap">-->
<!--      <el-row>-->
<!--        <el-col :lg="16" :md="20" :sm="24" :xs="24">-->
<!--          <el-form :model="form" status-icon ref="form" label-width="100px" @submit.native.prevent>-->
<!--            <el-form-item label="书名" prop="title">-->
<!--              <el-input size="medium" v-model="form.title" placeholder="请填写书名"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="作者" prop="author">-->
<!--              <el-input size="medium" v-model="form.author" placeholder="请填写作者"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="封面" prop="image">-->
<!--              <el-input size="medium" v-model="form.image" placeholder="请填写封面地址"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="简介" prop="summary">-->
<!--              <el-input-->
<!--                size="medium"-->
<!--                type="textarea"-->
<!--                :autosize="{ minRows: 4, maxRows: 8 }"-->
<!--                placeholder="请输入简介"-->
<!--                v-model="form.summary"-->
<!--              >-->
<!--              </el-input>-->
<!--            </el-form-item>-->

<!--            <el-form-item class="submit">-->
<!--              <el-button type="primary" @click="submitForm('form')" :loading="loading">保 存</el-button>-->
<!--              <el-button @click="resetForm('form')">重 置</el-button>-->
<!--            </el-form-item>-->
<!--          </el-form>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--    </div>-->
    <el-row style="padding: 15px;">
      <el-col :span="2">
        <a href="http://cloudapps.life:8889" target="_blank">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://www.leiue.com/uploads/2018/09/cloud-storage.jpg" class="image">
            <div class="el-row--flex is-justify-center" style="padding: 15px;">
              <span>mycloud</span>
            </div>
          </el-card>
        </a>
      </el-col>

      <el-col :span="2" offset="1">
        <a href="http://cloudapps.life:9999" target="_blank">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://th.bing.com/th/id/R543bc6bf4d5348ed1165bba008b10c9a?rik=%2fWDdmo9mqYNvHQ&riu=http%3a%2f%2fwww.huatusoft.com%2fupload%2f201810%2f31%2f201810311612419306.jpg&ehk=7%2fkgl1VH4jY3V%2fvSeQ9P4hyGqocaE0HVX3TMoqOJ4p4%3d&risl=&pid=ImgRaw" class="image">
            <div class="el-row--flex is-justify-center" style="padding: 15px;">
              <span>mybolg</span>
            </div>
          </el-card>
        </a>
      </el-col>

      <el-col :span="2" offset="1">
        <a href="http://cloudapps.life:8088" target="_blank">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://pic4.zhimg.com/v2-6318332ded946c504ba8d9d29ea05785_r.jpg" class="image">
            <div class="el-row--flex is-justify-center" style="padding: 15px;">
              <span>openwrt</span>
            </div>
          </el-card>
        </a>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import books from '@/model/books'

export default {
  data() {
    return {
      form: {
        title: '',
        author: '',
        summary: '',
        image: '',
      },
      loading: false,
    }
  },
  methods: {
    async submitForm(formName) {
      try {
        this.loading = true
        const res = await books.createBook(this.form)
        this.loading = false
        if (res.code < window.MAX_SUCCESS_CODE) {
          this.$message.success(`${res.message}`)
          this.resetForm(formName)
        }
      } catch (error) {
        this.loading = false
        this.$message.error('图书添加失败，请检测填写信息')
        console.log(error)
      }
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  .title {
    height: 59px;
    line-height: 59px;
    color: $parent-title-color;
    font-size: 16px;
    font-weight: 500;
    text-indent: 40px;
    border-bottom: 1px solid #dae1ec;
  }

  .wrap {
    padding: 20px;
  }

  .submit {
    float: left;
  }
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  height: 120px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
