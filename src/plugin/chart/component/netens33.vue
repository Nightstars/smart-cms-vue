<template>
  <div id="myNetens33RxChart" :style="{ width: '600px', height: '360px' }"></div>
</template>

<script>
// import http from '../../../http/index'

export default {
  name: 'cpu',
  mounted() {
    // const myChart = this.$root.echarts.init(document.getElementById('myNetens33RxChart'))
    // // 绘制图表
    // const optins = {
    //   color: ['#80FFA5', '#00DDFF'],
    //   title: {
    //     text: 'kb/s',
    //   },
    //   tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //       type: 'cross',
    //       label: {
    //         backgroundColor: '#6a7985',
    //       },
    //     },
    //   },
    //   legend: {
    //     data: ['RX'],
    //   },
    //   toolbox: {
    //     feature: {
    //       saveAsImage: {},
    //     },
    //   },
    //   grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true,
    //   },
    //   xAxis: [
    //     {
    //       type: 'category',
    //       boundaryGap: false,
    //       data: [],
    //     },
    //   ],
    //   yAxis: [
    //     {
    //       type: 'value',
    //     },
    //   ],
    //   series: [
    //     {
    //       name: 'RX',
    //       type: 'line',
    //       stack: 'RX',
    //       smooth: true,
    //       lineStyle: {
    //         width: 0,
    //       },
    //       showSymbol: false,
    //       areaStyle: {
    //         opacity: 0.8,
    //         color: new this.$root.echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //           {
    //             offset: 0,
    //             color: 'rgba(128, 255, 165)',
    //           },
    //           {
    //             offset: 1,
    //             color: 'rgba(1, 191, 236)',
    //           },
    //         ]),
    //       },
    //       emphasis: {
    //         focus: 'series',
    //       },
    //       data: [],
    //     },
    //   ],
    //   stateAnimation: {
    //     duration: 0,
    //     easing: 'cubic',
    //   },
  },
  // const rx = [0, 0, 0, 0, 0, 0, 0]
  // setInterval(() => {
  //   http.get('/network').then(res => {
  //     if (rx.length > 1) {
  //       rx.splice(0, 1)
  //     }
  //     // eslint-disable-next-line for-direction
  //     for (let i = 1; i > 0; i++) {
  //       if (rx.length < 7) {
  //         rx.push(res[2].rx / 1024)
  //       } else {
  //         break
  //       }
  //     }
  //     optins.xAxis[0].data = [
  //       this.$moment()
  //         .add(1, 'seconds')
  //         .format('HH:mm:ss'),
  //       this.$moment()
  //         .add(2, 'seconds')
  //         .format('HH:mm:ss'),
  //       this.$moment()
  //         .add(3, 'seconds')
  //         .format('HH:mm:ss'),
  //       this.$moment()
  //         .add(4, 'seconds')
  //         .format('HH:mm:ss'),
  //       this.$moment()
  //         .add(5, 'seconds')
  //         .format('HH:mm:ss'),
  //       this.$moment()
  //         .add(6, 'seconds')
  //         .format('HH:mm:ss'),
  //       this.$moment()
  //         .add(7, 'seconds')
  //         .format('HH:mm:ss'),
  //     ]
  //     optins.series[0].data = rx
  //   })
  //   myChart.setOption(optins, true)
  // }, 1000)
  // },
}
</script>

<style scoped></style>
