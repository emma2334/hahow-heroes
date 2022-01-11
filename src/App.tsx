import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Heroes from 'pages/heroes'
import Profile from 'pages/heroes[id]'

const App = () => {
  return (
    <Routes>
      <Route path="/heroes" element={<Heroes />}>
        <Route path=":id" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default React.memo(App)
