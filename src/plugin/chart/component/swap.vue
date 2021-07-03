<template>
  <div id="mySwapChart" :style="{ width: '360px', height: '360px' }"></div>
</template>

<script>
import http from '../../../http/index'

export default {
  name: 'swap',
  mounted() {
    const myChart = this.$root.echarts.init(document.getElementById('mySwapChart'))
    // 绘制图表
    const optins = {
      series: [
        {
          type: 'gauge',
          progress: {
            show: true,
            width: 18,
          },
          axisLine: {
            lineStyle: {
              width: 18,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 2,
              color: '#999',
            },
          },
          axisLabel: {
            distance: 25,
            color: '#999',
            fontSize: 15,
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
              borderWidth: 10,
            },
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            fontSize: 25,
            color: '#91cc75',
            offsetCenter: [0, '70%'],
            formatter(value) {
              return `${value}%`
            },
          },
          data: [
            {
              value: 70,
            },
          ],
        },
      ],
    }
    setInterval(() => {
      http.get('/quicklook').then(res => {
        if (res) {
          optins.series[0].data[0].value = res.swap.toFixed(2) - 0
        }
      })
      myChart.setOption(optins, true)
    }, 1000)
  },
}
</script>

<style scoped></style>
