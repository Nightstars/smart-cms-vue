<template>
  <div>
    <!-- 列表页面 -->
    <div class="container" v-if="!showEdit">
      <div class="header"><div class="title">应用列表</div></div>
      <!-- 表格 -->
      <lin-table
        :tableColumn="tableColumn"
        :tableData="tableData"
        :operate="operate"
        @handleEdit="handleEdit"
        @handleDelete="handleDelete"
        @row-click="rowClick"
        v-loading="loading"
      ></lin-table>
    </div>

    <!-- 编辑页面 -->
    <!--    <books-modify v-else @editClose="editClose" :editBookID="editBookID"></books-modify>-->
  </div>
</template>

<script>
import apps from '@/model/apps'
import LinTable from '@/component/base/table/lin-table'
// import BooksModify from '@/view/books/books-modify'

export default {
  name: 'myapps-mgr',
  components: {
    LinTable,
  },
  data() {
    return {
      tableColumn: [
        {
          prop: 'name',
          label: '名称',
        },
        {
          prop: 'url',
          label: 'URL',
        },
        {
          prop: 'icon',
          label: 'Icon',
        },
        {
          prop: 'summary',
          label: '简介',
        },
      ],
      tableData: [],
      operate: [],
      showEdit: false,
      editBookID: 1,
    }
  },
  async created() {
    this.loading = true
    await this.getApps()
    this.operate = [
      {
        name: '编辑',
        func: 'handleEdit',
        type: 'primary',
        permission: '修改应用',
      },
      {
        name: '删除',
        func: 'handleDelete',
        type: 'danger',
        permission: '删除应用',
      },
    ]
    this.loading = false
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
.container {
  padding: 0 30px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      height: 59px;
      line-height: 59px;
      color: $parent-title-color;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    margin: 20px;
  }
}
</style>
