<template>
  <div>
    <el-row :gutter="20" style="margin-left: 55px;">
      <el-col :span="3" v-for="(item, idx) in tableData" :key="idx" class="margin-top">
        <a :href="item.url" target="_blank">
          <div class="app-container">
            <div class="app">
              <el-avatar :size="80" :src="item.icon" class="margin-top-sm"></el-avatar>
            </div>
            <el-tag type="success" class="margin-top" effect="dark">{{ item.name }}</el-tag>
          </div>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import apps from '@/model/apps'

export default {
  data() {
    return {
      tableData: [],
      rows: 0,
    }
  },
  async created() {
    await this.getApps()
    this.rows = (this.tableData.length / 9).toFixed(0) + 1
    console.log(this.rows)
  },
  methods: {
    async getApps() {
      try {
        this.tableData = await apps.getApps()
      } catch (e) {
        if (e.code === '10200') {
          this.tableData = []
        }
      }
    },
  },
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
  margin-top: 25px;
}

.margin-left {
  margin-left: 32px;
}

.margin-top-sm {
  margin-top: 10px;
}
</style>
