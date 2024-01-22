import React, { useEffect, useRef, useState } from 'react'
import { FaUser } from 'react-icons/fa6'
import { BsAirplane } from 'react-icons/bs'
import './App.css';

const App = () => {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const nameRef = useRef()

  const lista = useRef()
  
  const verDatos = () => {
    console.log(nameRef.current.value)
  }
  
  const asignarDato = () => {
    nameRef.current.value = "Catalina"
  }
  
  /* const imageRef = useRef()
  const cargarFoto = e => {
    imageRef.current.src = e.target.src
  } */

  let imageRef = useRef()
  const cargarFoto = e => {
    imageRef.src = e.target.src
  }


  useEffect(() => {

    lista.current.style.border='2px solid red';
    lista.current.style.borderBottom='2px solid green';

  }, [])

  return (
    <div>
      App <FaUser />
      <p>
        <BsAirplane />
      </p>

      {/* 
      <input type="text" name="name" id='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      */}




     


      <input type="text" ref={nameRef} />

      <button onClick={verDatos}>
        Ver Dato
      </button>

      <button onClick={asignarDato}>
        Asignar Dato
      </button> <br />


      <img alt="" width={300} height={300} ref={(t) => imageRef = t} /> <br />
      <img src="https://picsum.photos/id/120/100/100" alt="" width={100} height={100} onClick={cargarFoto} /> <br />
      <img src="https://picsum.photos/id/220/100/100" alt="" width={100} height={100} onClick={cargarFoto} /> <br />
      <img src="https://picsum.photos/id/320/100/100" alt="" width={100} height={100} onClick={cargarFoto} /> <br />


      <ul ref={lista}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>

    </div>
  )
}

export default App