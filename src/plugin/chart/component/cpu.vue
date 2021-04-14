<template>
  <div id="myCpuChart" :style="{ width: '360px', height: '360px' }"></div>
</template>

<script>
import http from '../../../http/index'

export default {
  name: 'cpu',
  mounted() {
    const myChart = this.$root.echarts.init(document.getElementById('myCpuChart'))
    // 绘制图表
    const optins = {
      series: [
        {
          type: 'gauge',
          fontSize: '5',
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.3, '#91cc75'],
                [0.7, '#37a2da'],
                [1, '#fd666d'],
              ],
            },
          },
          pointer: {
            itemStyle: {
              color: 'auto',
            },
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2,
            },
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 4,
            },
          },
          axisLabel: {
            color: 'auto',
            distance: 40,
            fontSize: 15,
          },
          detail: {
            valueAnimation: true,
            formatter: '{value}%',
            color: 'auto',
            fontSize: 21,
          },
          data: [
            {
              value: 0,
            },
          ],
        },
      ],
    }
    setInterval(() => {
      http.get('/quicklook').then(res => {
        optins.series[0].data[0].value = res.cpu.toFixed(2) - 0
      })
      myChart.setOption(optins, true)
    }, 1000)
  },
}
</script>

<style scoped></style>
