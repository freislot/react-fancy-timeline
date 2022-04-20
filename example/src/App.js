import React from 'react'
import './styles.module.css';

import { Timeline } from 'react-fancy-timeline'

const data = [
  {
    title: 'React (senior)',
    startDate: '06.2010',
    endDate: '06.2017',
    color: '#61DAFB'
  },
  {
    title: 'JS',
    startDate: '06.2013',
    endDate: '10.2015',
    color: '#FFDF00'
  },
  {
    title: 'HTML',
    startDate: '04.2007',
    endDate: '01.2010',
    color: '#ff6262'
  },
  {
    title: 'CSS',
    startDate: '09.2007',
    endDate: '04.2009',
    color: '#CC649C'
  },
]

const App = () => {
  return <Timeline data={data} />
}

export default App
