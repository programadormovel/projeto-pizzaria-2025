import {useState, useEffect, use} from 'react'
import { set, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './Login.css'
import axios from "axios";

const schema = yup.object({
  nome: yup.string().required(),
  senha: yup.string().required()
}).required();

const Login = () => {
    const [usuario, setUsuario] = useState({name: '', password: ''})
    const [id, setId] = useState("")

    useEffect(() => {
      if(usuario.name != null){
        axios.post("http://localhost:8080/login", 
        usuario, 
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
        if(response.data == "password wrong."){
          alert("Senha incorreta")
        } else if(response.data == "user not found."){
          alert("Usuário não encontrado")
        } else {
          alert("Login realizado com sucesso \n" + response.data.id )
          setId(response.data.id)
        }
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })  
      }
        
    }, [usuario])

    useState(() => {
        window.location.href = "/principal"
    }, [id])

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      
      const onSubmit = data => {
        setUsuario({name: data.nome, password: data.senha})
        console.log({name: data.nome, password: data.senha})
      }
    
      return (
        <div>
            <h3>Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                className="nome"
                placeholder="nome do usuário"
                {...register("nome")} />
            <p>{errors.nome?.message}</p>
                
            <input 
                type={'password'}
                className="senha"
                placeholder="senha"
                {...register("senha")} />
            <p>{errors.senha?.message}</p>
            
            <input className="Botao" type="submit" value={"Logar"} />
            </form>
        </div>
      )
}

export default Login