<template>
  <div class="margin-bottom">
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
    <AppEdit v-else @editClose="editClose" :editAppID="editBookID"></AppEdit>
  </div>
</template>

<script>
import apps from '@/model/apps'
import LinTable from '@/component/base/table/lin-table'
import AppEdit from './myapps-edit'

export default {
  name: 'myapps-mgr',
  components: {
    LinTable,
    AppEdit,
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
        permission: '编辑应用',
      },
      {
        name: '删除',
        func: 'handleDelete',
        type: 'danger',
        permission: '移除应用',
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
    handleEdit(val) {
      console.log('val', val)
      this.showEdit = true
      this.editBookID = val.row.id
    },
    handleDelete(val) {
      this.$confirm('此操作将永久移除该应用, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        const res = await apps.deleteAPP(val.row.id)
        console.log(res)
        // eslint-disable-next-line eqeqeq
        if (res.code == '10216') {
          await this.getApps()
          this.$message({
            type: 'success',
            message: `${res.message}`,
          })
        }
      })
    },
    rowClick() {},
    editClose() {
      this.showEdit = false
      this.getApps()
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

  .margin-bottom {
    padding-bottom: 25px;
  }
}
</style>
