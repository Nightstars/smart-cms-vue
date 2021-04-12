<template>
  <div class="container">
    <div id="myChart" :style="{ width: '200px', height: '200px' }"></div>
  </div>
</template>

<script>
export default {
  name: 'disk',
  mounted() {
    const myChart = this.$root.echarts.init(document.getElementById('myChart'))
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'disk',
        subtext: '/mydata',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 651, name: '已使用' },
            { value: 1800, name: '空闲' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    })
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
}
</style>
