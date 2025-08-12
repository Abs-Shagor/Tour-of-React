import { useState } from 'react'
import './App.css'
import MyComponent from './myComponent'
import MyComponent1 from './MyComponent1'
import MyComponent2 from './MyComponent2'

/* main component from where we call others components*/
function App() {
  const names = ['Md Alam', 'Ruma Akther', 'shagor', 'joy', 'sami'];
  const codeforcesLegend = [
    {name: 'Tourist', rating: 4040},
    {name: 'ziangly', rating: 4052},
    {name: 'rainboy', rating: 3740},

  ]

  return (
    <>
      <h2>Learning React Core Concept</h2>
      <Person name='Abs Shagor' age='26' height='5.6'></Person>
      <Person name='Joy' age='24' height='5.6'></Person>
      <Person name='Sami' age='17' height='5.5'></Person>

      <Student1 name={'shagor'} isPass={true}></Student1>
      <Student1 name={'xyz'} isPass={false}></Student1>

      <Student2 name={'Joy'} isPass={true}></Student2>
      <Student2 name={'xyz'} isPass={false}></Student2>

      <Student3 name={'Sami'} isPass={true}></Student3>
      <Student3 name={'xyz'} isPass={false}></Student3>

      <Student4 name={'abc'} isPass={true}></Student4>
      <Student4 name={'xyz'} isPass={false}></Student4>

      <Student5 name={'xyz'} isPass={false}></Student5>
      <Student5 name={'abc'} isPass={true}></Student5>

      <MyComponent></MyComponent>
      
      {
        names.map(name => {
          return <MyComponent1 name={name}></MyComponent1>
        })
      }

      {
        codeforcesLegend.map(obj => {
          return <MyComponent2 name={obj.name} rating={obj.rating}></MyComponent2>
        })
      }

    </>
  )
}

/* Others new created componet */
function Person({name, age, height}) {
  return (
    <div>
      <h3 className='title-design'>About a person</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Height: {height}</p>
    </div>
  )
}

/* below component are called conditional rendering bcz they do something */
/* on the basis of some condition. we can write them in different way. ex. */
function Student1({name, isPass}) {
  if(isPass) {
    return (
        <h3  >{name} : Pass </h3>
    )
  }
  else {
    return (
        <h3>{name} : Fail</h3>
    )
  }
}
function Student2 ({name, isPass}) {
  return (
    <p>Studen name {name} is {isPass? 'Pass' : 'Fail'} </p>
  )
}
function Student3 ({name, isPass}) {
  return (
      <p>Student name {name} is {isPass && ': Pass'}</p> /* && mean if true then print */
  )
}
function Student4({name, isPass}) {
  return (
      <p>Student name {name} is {isPass || 'Fail'}</p> /* || mean if false then print */
  )
}
function Student5({name, isPass}) {
  let x = <p>Hello {name}! What's up?</p>
  let y = <p>Hello {name}! How are You?</p>
  if(isPass) {
    return x;
  }
  else {
    return y;
  }
}



export default App
