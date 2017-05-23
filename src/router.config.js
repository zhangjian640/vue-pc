import IndexPage from './pages/index'
import Detail from './pages/detail'
import Count from './components/detail/count.vue'
import Forecast from './components/detail/forecast.vue'
import Analysis from './components/detail/analysis.vue'
import Publish from './components/detail/publish.vue'


export default [{
    path: '/',
    component: IndexPage
  },
  {
    path: '/detail',
    component: Detail,
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