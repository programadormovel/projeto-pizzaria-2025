import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './Login.css'

const schema = yup.object({
  usuario: yup.string().required(),
  senha: yup.string().required(),
}).required();

const Login = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      
      const onSubmit = data => alert(JSON.stringify(data));
    
      return (
        <div>
            <h3>Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                className="usuario"
                placeholder="usuário"
                {...register("usuario")} />
            <p>{errors.usuario?.message}</p>
                
            <input 
                type={'password'}
                className="senha"
                placeholder="senha"
                {...register("senha")} />
            <p>{errors.senha?.message}</p>
            
            <input className="Botao" type="submit" />
            </form>
        </div>
      );
}

export default Login