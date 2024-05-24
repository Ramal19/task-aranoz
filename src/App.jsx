import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Home/Home'
import Add from '../Pages/Add'
import Admin from '../Pages/Admin'
import { Edit } from '../Pages/Edit'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout/>} path='/'>
          <Route index element={<Home/>}/>
          <Route element={<Edit/>} path='/edit'/>
          <Route element={<Add/>} path='/add'/>
          <Route element={<Admin/>} path='/admin'/>
          <Route element= {<Edit/>} path='/edit'/>
        </Route>
      </Routes>
    </>
  )
}

export default App