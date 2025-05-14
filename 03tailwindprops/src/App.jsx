import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  let myObj ={
    name: 'Lucas',
    age:'25',
    address: {
      city:'shatin',
      state: 'hongkong',
    }
  }
  let newArr =[1,2,3]
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3'>vite with tailwind</h1>
      <Card username='lucas' myArr = {newArr}/>
      <Card username='Jason' post='staff'/>
      <Card username='alex' post='qwer' image='https://images.unsplash.com/photo-1497316730643-415fac54a2af?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFraW5nJTIwcGhvdG98ZW58MHx8MHx8fDA%3D'/>
    </>
  )
}

export default App
