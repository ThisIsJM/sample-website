import React from 'react'
import Nav from './Nav'

interface Props{
    children : React.ReactNode
  }

const Layout: React.FC<Props> = (props) => {
  return (
    <>
    <Nav/>
    <div>
        <main>
          {props.children}
        </main>
      </div>
    </>
  )
}

export default Layout