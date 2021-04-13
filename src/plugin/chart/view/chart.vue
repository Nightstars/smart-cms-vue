<template>
  <div class="container">
    <!--    <el-row :gutter="20">-->
    <!--      <el-col :span="16">-->
    <!--        <div class="grid-content bg-purple">-->
    <!--          <group-column></group-column>-->
    <!--        </div>-->
    <!--      </el-col>-->
    <!--      <el-col :span="8" class="none">-->
    <!--        <div class="grid-content bg-purple">-->
    <!--          <radar></radar>-->
    <!--        </div>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
    <!--    <el-row :gutter="20">-->
    <!--      <el-col :span="16">-->
    <!--        <el-row :gutter="20">-->
    <!--          <el-col :span="12">-->
    <!--            <div class="grid-content bg-purple">-->
    <!--              <tiny-area-july></tiny-area-july>-->
    <!--            </div>-->
    <!--          </el-col>-->
    <!--          <el-col :span="12">-->
    <!--            <div class="grid-content bg-purple">-->
    <!--              <tiny-area-june></tiny-area-june>-->
    <!--            </div>-->
    <!--          </el-col>-->
    <!--        </el-row>-->
    <!--        <el-row :gutter="20">-->
    <!--          <el-col :span="24">-->
    <!--            <div class="grid-content bg-purple">-->
    <!--              <line-charts></line-charts>-->
    <!--            </div>-->
    <!--          </el-col>-->
    <!--        </el-row>-->
    <!--      </el-col>-->
    <!--      <el-col :span="8" class="none">-->
    <!--        <div class="grid-content bg-purple">-->
    <!--          <Rose></Rose>-->
    <!--        </div>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <cpu class="su-center"></cpu>
          <div class="label-txt">
            <el-tag type="success">CPU</el-tag>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <mem class="su-center"></mem>
          <div class="label-txt">
            <el-tag type="success">Memory</el-tag>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <swap class="su-center"></swap>
          <div class="label-txt">
            <el-tag type="success">SWAP</el-tag>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <disk0 class="su-center"></disk0>
          <div class="label-txt">
            <el-tag type="success">/</el-tag>
          </div>
        </div></el-col
      >
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <disk1 class="su-center"></disk1>
          <div class="label-txt">
            <el-tag type="success">/data</el-tag>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <disk2 class="su-center"></disk2>
          <div class="label-txt">
            <el-tag type="success">/file</el-tag>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <disk class="su-center"></disk>
          <div class="label-txt">
            <el-tag type="success">/mydata</el-tag>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import GroupColumn from '../component/grouped-column'
// import Radar from '../component/radar'
// import TinyAreaJuly from '../component/tiny-area-july'
// import TinyAreaJune from '../component/tiny-area-june'
// import LineCharts from '../component/line-chart'
// import Rose from '../component/rose'
import cpu from '../component/cpu'
import disk from '../component/disk'
import mem from '@/plugin/chart/component/mem'
import swap from '@/plugin/chart/component/swap'
import disk0 from '@/plugin/chart/component/disk0'
import disk1 from '@/plugin/chart/component/disk1'
import disk2 from '@/plugin/chart/component/disk2'

export default {
  components: {
    // Rose,
    // GroupColumn,
    // Radar,
    // TinyAreaJuly,
    // TinyAreaJune,
    // LineCharts,
    cpu,
    disk,
    mem,
    swap,
    disk0,
    disk1,
    disk2,
  },
  data() {
    return {
      list1: [
        { type: 1, value: 100 },
        { type: 2, value: 120 },
        { type: 3, value: 230 },
        { type: 4, value: 150 },
        { type: 5, value: 280 },
        { type: 6, value: 190 },
        { type: 7, value: 130 },
        { type: 8, value: 150 },
        { type: 9, value: 160 },
        { type: 10, value: 140 },
        { type: 11, value: 190 },
      ],
      list2: [
        { type: 1, value: 80 },
        { type: 2, value: 120 },
        { type: 3, value: 210 },
        { type: 4, value: 120 },
        { type: 5, value: 130 },
        { type: 6, value: 190 },
        { type: 7, value: 130 },
        { type: 8, value: 150 },
        { type: 9, value: 160 },
        { type: 10, value: 140 },
        { type: 11, value: 190 },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
  .el-row {
    .el-col {
      .grid-content {
        background: #ffffff;
        box-shadow: 0px 2px 14px 0px rgba(243, 243, 243, 1);
        border-radius: 8px;
        min-height: 36px;
        padding-top: 20px;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .none {
    display: none;
  }
}

.su-center {
  margin: 0 auto;
}

.label-txt {
  text-align: center;
  padding-bottom: 30px;
  margin-top: -50px;
}
</style>
