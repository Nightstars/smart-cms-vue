<template>
  <div id="myDiskChart3" :style="{ width: '300px', height: '300px' }"></div>
</template>

<script>
export default {
  name: 'disk',
  mounted() {
    const myDiskChart = this.$root.echarts.init(document.getElementById('myDiskChart3'))
    // 绘制图表
    const optins = {
      title: {
        text: '/mydata',
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
          name: '/mydata',
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
      optins.series[0].data[0].value = (Math.random() * 20000).toFixed(2) - 0
      optins.series[0].data[1].value = (Math.random() * 1000).toFixed(2) - 0
      myDiskChart.setOption(optins, true)
    }, 1000)
  },
}
</script>

<style lang="scss" scoped></style>
