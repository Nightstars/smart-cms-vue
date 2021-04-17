<template>
  <div>
    <el-row style="padding: 15px;">
      <el-col :span="2">
        <a href="http://cloudapps.life:8889" target="_blank">
          <div class="app-container">
            <div class="app">
              <el-avatar
                :size="80"
                src="https://www.leiue.com/uploads/2018/09/cloud-storage.jpg"
                class="margin-top-sm"
              ></el-avatar>
            </div>
            <el-tag type="success" class="margin-top" effect="dark">mycloud</el-tag>
          </div>
        </a>
      </el-col>

      <el-col :span="2" offset="1">
        <a href="http://cloudapps.life:9999" target="_blank">
          <div class="app-container">
            <div class="app">
              <el-avatar
                :size="80"
                src="https://th.bing.com/th/id/R543bc6bf4d5348ed1165bba008b10c9a?rik=%2fWDdmo9mqYNvHQ&riu=http%3a%2f%2fwww.huatusoft.com%2fupload%2f201810%2f31%2f201810311612419306.jpg&ehk=7%2fkgl1VH4jY3V%2fvSeQ9P4hyGqocaE0HVX3TMoqOJ4p4%3d&risl=&pid=ImgRaw"
                class="margin-top-sm"
              ></el-avatar>
            </div>
            <el-tag type="success" class="margin-top" effect="dark">mybolg</el-tag>
          </div>
        </a>
      </el-col>

      <el-col :span="2" offset="1">
        <a href="http://cloudapps.life:8088" target="_blank">
          <div class="app-container">
            <div class="app">
              <el-avatar
                :size="80"
                src="https://pic4.zhimg.com/v2-6318332ded946c504ba8d9d29ea05785_r.jpg"
                class="margin-top-sm"
              ></el-avatar>
            </div>
            <el-tag type="success" class="margin-top" effect="dark">openwrt</el-tag>
          </div>
        </a>
      </el-col>

      <el-col :span="2" offset="1">
        <a href="https://kdocs.cn/l/ci12PKtsVGM2" target="_blank">
          <div class="app-container">
            <div class="app">
              <el-avatar
                :size="80"
                src="https://img95.699pic.com/photo/40007/9238.jpg_wh300.jpg!/fh/300/quality/90"
                class="margin-top-sm"
              ></el-avatar>
            </div>
            <el-tag type="success" class="margin-top" effect="dark">晨会</el-tag>
          </div>
        </a>
      </el-col>

      <el-col :span="2" offset="1">
        <a href="http://projectissue.longnows.cn" target="_blank">
          <div class="app-container">
            <div class="app">
              <el-avatar
                :size="80"
                src="https://src.onlinedown.net/supply/sup_logo/logo-1128/306996_g.jpg"
                class="margin-top-sm"
              ></el-avatar>
            </div>
            <el-tag type="success" class="margin-top" effect="dark">Project Issue</el-tag>
          </div>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
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
  content: '';
}

.clearfix:after {
  clear: both;
}

.personal-avatar {
  width: 70%;
  height: 70%;
  margin: 5px auto 0;
  padding: 2px;
  border-radius: 75px;
  box-shadow: 0 0 30px 0 #cfd5e3;
}

.influence-font {
  font-size: 18px;
  line-height: 21px;
  color: #606266;
  font-weight: bold;
}

.app-container {
  text-align: center;
  width: 120px;
}

.app {
  background: #ffffff;
  width: 100px;
  height: 100px;
  margin-left: 10px;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.margin-top {
  margin-top: 15px;
}

.margin-top-sm {
  margin-top: 10px;
}
</style>
