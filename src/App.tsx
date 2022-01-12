import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from 'pages/index'
import Heroes from 'pages/heroes'
import Profile from 'pages/heroes[id]'
import Layout from 'components/Layout'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="heroes" element={<Heroes />}>
          <Route path=":id" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default React.memo(App)
