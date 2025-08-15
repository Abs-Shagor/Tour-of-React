import { useEffect, useState } from 'react'
import './App.css'

function App() {

  /* Eevent Handler: onClick */
  function click1() {
    alert('Button-1 clicked')
  }
  const click2 = () => {
    alert('Button-2 clicked')
  }
  // const click3 = (a, b) => {
  //   alert(`Button-3 clicked and sum of ${a} and ${b} is ${a + b} `);
  // }
  const click4 = (a, b) => {
    alert(`Button-4 clicked and sum of ${a} and ${b} is ${a + b} `);
  }

  /* Hooks: useState() */
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  const [comment, setComment] = useState('Hello React!');
  function updateComment() {
    const msg = document.getElementById('commentBox');
    setComment(msg.value);
    msg.value = '';
  }

  /* Hooks: useEffect() */
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
  }, [])
  console.log(users);

  function UsersDetails({name, email, city}) {
    return (
      <div style={{width: '400px', border: '1px solid gray', padding: '5px', margin: '5px' }}>
        <p>Name: {name} </p>
        <p>Email: {email} </p>
        <p>City: {city}</p>
      </div>
    )
  }


  return (
    <>
      <h2>Learning React Core Concept</h2>


      <br /> <br />
      <h3>Core Cocept-1: Eevehandler (onClick) </h3>
      <button onClick={click1}>Button-1</button>
      <button onClick={click2}>Button-2</button>
      {/* below code is executed when we save the file */}
      {/* <button onClick={click3(2, 3)}>Button-3</button>  */}
      {/* below is the right way to write onclick if it's contain parameters */}
      <button onClick={() => click4(5, 7)}>Button-4</button>



      <br /> <br />
      <h3>Core Cocept-2: Hooks (useState(), useEffect()) </h3>

      {/* increase or decrease the current value */}
      <div style={{ border: '2px solid green', padding: '10px', margin: '10px' }}>
        <button onClick={decrease}>-</button>
        <span> {count} </span>
        <button onClick={increase}>+</button>
      </div>

      {/* Comment system */}
      <div style={{ border: '2px solid yellow', padding: '10px', margin: '10px' }}>
        <p>{comment}</p>
        <input type="text" name="" id="commentBox" />
        <button onClick={updateComment}>Submit</button>
      </div>


      {/* Let,s fetch users data from json placeholder users API and show in our webpage */}
      <div style={{ border: '2px solid orange', padding: '10px', margin: '10px' }}>
        <h3>Showing Users name, email and city they live from json placeholder users API using useEffect() and fetch. </h3>
        <hr />
        {
          users.map(user => {
            return <UsersDetails name={user.name} email={user.email} city={user.address.city}></UsersDetails>
          })
        }
      </div>


    </>
  )
}

export default App
