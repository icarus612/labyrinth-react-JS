import {useState, useEffect, useRef} from 'react'
import cx from 'classnames'
import Header from 'sections/header/basic.js'

import layout from 'styles/layout.module.scss'
import global from 'styles/global.module.scss'

export default () => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const w = () => setWidth(window.innerWidth)
    w()
    window.addEventListener('resize', w)
    return () => window.removeEventListener('resize', w)
	}, [width])
	

  return (
    <>
      <Header />
      <Top />
      <Middle />
      <Bottom />
    </>
  )
}
