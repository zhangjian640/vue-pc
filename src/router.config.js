import IndexPage from './pages/index'
import Detail from './pages/detail'
import Count from './pages/detail/count.vue'
import Forecast from './pages/detail/forecast.vue'
import Analysis from './pages/detail/analysis.vue'
import Publish from './pages/detail/publish.vue'
import OrderList from './pages/detail/orderList.vue'

export default [{
    path: '/',
    component: IndexPage
  },
  {
    path: '/orderList',
    component: OrderList
  },
  {
    path: '/detail',
    component: Detail,
    redirect: '/detail/count',
    children: [{
        path: 'count',
        component: Count
      },
      {
        path: 'forecast',
        component: Forecast
      },
      {
        path: 'analysis',
        component: Analysis
      },
      {
        path: 'publish',
        component: Publish
      }
    ]
  }
]