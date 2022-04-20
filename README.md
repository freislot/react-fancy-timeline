# react-fancy-timeline

> Simple timeline react component with dark/light theme support

[![NPM](https://img.shields.io/npm/v/react-fancy-timeline.svg)](https://www.npmjs.com/package/react-fancy-timeline) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Live demo](https://freislot.github.io/react-fancy-timeline/)

## Install

```bash
npm install --save react-fancy-timeline
```

## Usage

```jsx
import React from 'react'

import { Timeline } from 'react-fancy-timeline'

const array = [
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
  }
]

const App = () => {
  return <Timeline data={array} />
}

export default App
```
### Automatic ordering
By default, the Timeline component uses array keys to order elements on timeline

![alt text](https://freislot.github.io/react-fancy-timeline/auto-order.png)

### Custom ordering
You can add custom ordering by adding field "order" to array.
The order field is optional, if it is not specified, then the order of the elements on the timeline will use the array keys
For example:

```jsx
const array = [
  {
    title: 'React (senior)',
    startDate: '06.2010',
    endDate: '06.2017',
    color: '#61DAFB',
    order: 3
  },
  {
    title: 'JS',
    startDate: '06.2013',
    endDate: '10.2015',
    color: '#FFDF00',
    order: 2
  },
  {
    title: 'HTML',
    startDate: '04.2007',
    endDate: '01.2010',
    color: '#ff6262',
    order: 0
  },
  {
    title: 'CSS',
    startDate: '09.2007',
    endDate: '04.2009',
    color: '#CC649C',
    order: 1
  }
]
```

Then elements on timeline will look like this

![alt text](https://freislot.github.io/react-fancy-timeline/custom-order.png)

## Theming
Timeline have dark theme by default.
To change theme to light just pass prop lightTheme

```jsx
<Timeline data={array} lightTheme />
```
and you're done

![alt text](https://freislot.github.io/react-fancy-timeline/timeline-light.png)

## License

MIT © [freislot](https://github.com/freislot)
