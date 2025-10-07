import { useState, useEffect } from 'react'
import './produto.css'
import axios from 'axios'

const Produto = () => {
  const [produtos, setProdutos] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/products", 
      {
        mode: 'no-cors',
        headers: {
          'Accept':'*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          'Content-Type': 'application/json'
      }
      })
      .then((response) => {
        setProdutos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
          console.log(error)
      })  
  }, [])
  
  const monstarLista = produtos.map(produto =>    
            <tr key={produto.idProduct}>
                <td>{produto.name}</td>
                <td>{produto.value}</td>
            </tr>
  )

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{monstarLista}</tbody>   
      </table>
    </>
  )
}

export default Produto
