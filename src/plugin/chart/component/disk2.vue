<template>
  <div id="myDiskChart2" :style="{ width: '300px', height: '300px' }"></div>
</template>

<script>
import http from '../../../http/index'

export default {
  name: 'disk2',
  mounted() {
    const myDiskChart = this.$root.echarts.init(document.getElementById('myDiskChart2'))
    // 绘制图表
    const optins = {
      title: {
        text: '/file',
        subtext: '',
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
          name: '/file',
          color: ['#91cc75', '#ee6666'],
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1800, name: '空闲' },
            { value: 651, name: '已使用' },
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
    }

    setInterval(() => {
      http.get('/fs').then(res => {
        optins.series[0].data[0].value = (res[2].free / 1024 / 1024 / 1024).toFixed(2) - 0
        optins.series[0].data[1].value = (res[2].used / 1024 / 1024 / 1024).toFixed(2) - 0
        optins.title.subtext = `${(res[2].size / 1024 / 1024 / 1024).toFixed(2) - 0}G`
      })
      myDiskChart.setOption(optins, true)
    }, 1000)
  },
}
</script>

<style lang="scss" scoped></style>
