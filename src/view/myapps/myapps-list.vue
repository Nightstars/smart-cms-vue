<template>
  <div>
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

      <el-col :span="2" offset=1>
        <a href="http://cloudapps.life:9999" target="_blank">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://th.bing.com/th/id/R543bc6bf4d5348ed1165bba008b10c9a?rik=%2fWDdmo9mqYNvHQ&riu=http%3a%2f%2fwww.huatusoft.com%2fupload%2f201810%2f31%2f201810311612419306.jpg&ehk=7%2fkgl1VH4jY3V%2fvSeQ9P4hyGqocaE0HVX3TMoqOJ4p4%3d&risl=&pid=ImgRaw" class="image">
            <div class="el-row--flex is-justify-center" style="padding: 15px;">
              <span>mybolg</span>
            </div>
          </el-card>
        </a>
      </el-col>

      <el-col :span="2" offset=1>
        <a href="http://cloudapps.life:8088" target="_blank">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://pic4.zhimg.com/v2-6318332ded946c504ba8d9d29ea05785_r.jpg" class="image">
            <div class="el-row--flex is-justify-center" style="padding: 15px;">
              <span>openwrt</span>
            </div>
          </el-card>
        </a>
      </el-col>

      <el-col :span="2" offset=1>
        <a href="https://kdocs.cn/l/ci12PKtsVGM2" target="_blank">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://img95.699pic.com/photo/40007/9238.jpg_wh300.jpg!/fh/300/quality/90" class="image">
            <div class="el-row--flex is-justify-center" style="padding: 15px;">
              <span>晨会</span>
            </div>
          </el-card>
        </a>
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
