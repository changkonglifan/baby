import {
    createReducer
} from '../util'
import types from '../store/types'
const initialState = {
    menuData: [
        {
            key: '1',
            title:'首页',
            icon: 'home'
        },
        {
            key: '2',
            title: '表单页',
            icon:'edit',
            children:[
                {
                    key:'2-1',
                    title:'基础表单',
                    icon:''
                },
                {
                    key: '2-2',
                    title: '分步表单',
                    icon: ''
                },
                {
                    key: '2-3',
                    title: '高级表单',
                    icon: ''
                }
            ]
        },
        {
            key: '3',
            title: '列表页',
            icon: 'table',
            children: [
                {
                    key: '3-1',
                    title: '查询表格',
                    icon: ''
                },
                {
                    key: '3-2',
                    title: '标准列表',
                    icon: ''
                },
                {
                    key: '3-3',
                    title: '卡片列表',
                    icon: ''
                },
                {
                    key: '3-4',
                    title: '搜索列表',
                    icon: ''
                }
            ]
        },
        {
            key: '4',
            title: '详情页',
            icon: 'profile',
            children: [
                {
                    key: '4-1',
                    title: '基础详情页',
                    icon: ''
                },
                {
                    key: '4-2',
                    title: '高级详情页',
                    icon: ''
                }
            ]
        },
        {
            key: '5',
            title: '结果页',
            icon: 'check-circle-o',
            children: [
                {
                    key: '5-1',
                    title: '成功',
                    icon: ''
                },
                {
                    key: '5-2',
                    title: '失败',
                    icon: ''
                }
            ]
        },
        {
          key: '6',
          title: '异常页',
          icon: 'warning',
          children: [
              {
                  key: '6-1',
                  title: '403',
                  icon: ''
              },
              {
                  key: '6-2',
                  title: '404',
                  icon: ''
              },
              {
                  key: '6-3',
                  title: '500',
                  icon: ''
              }
          ]
        }
    ],
    selectKey : '1'
}
export default createReducer(initialState, {
    [`${types.SET_SIDER_SELECT_KEY}`]: (state, data, params) => {
        return Object.assign({}, state, {
            selectKey: params.key
        })
    }
});
