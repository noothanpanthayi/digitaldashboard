import React, {useEffect, useState} from 'react'

const Home = () => {
  const [state, setState] = useState({
    todoListArr: [],
  })

  const doFetch = async () => {
    const header = await fetch('http://localhost:3500/todolist');
    const todoListArr = await header.json()

    setState((prevState) => {
      return {
        todoListArr,
      }
    })
  }

  useEffect(()=>{
    doFetch();
  },[])

  return (
    <>
    {
      state.todoListArr?.map(row=>{
        return <>
        <div>{row.todo}</div>
        </>
      })
    }
      <div>Online Shopping</div>
      <p>This application is developed using ReactJs and Redux Toolkit</p>
    </>
  )
}

export default Home
