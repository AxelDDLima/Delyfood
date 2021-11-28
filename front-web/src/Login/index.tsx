import React, { FormEvent } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { loginClient } from "../api";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { regex } from "../util/regex";

// import { Container } from './styles';

type User = {
  cpf: string,
  password: string,
  id: number
}

type UserTest = {
  userTest?: User
}

const Login = ({userTest}: UserTest) => {
  const {
    cpf = '',
    password = '',
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  } = userTest || {};

  const history = useHistory();
  // const [usert, setUserT] = React.useState<User>();
  const [newCpf, setCpf] = React.useState(cpf);
  const [newPassword, setPassword] = React.useState(password);
  // const [newId] = React.useState(id);
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const user = {cpf : newCpf, password : newPassword}

    // if (!cpf || !password)
    //   
    try {
      // const {cpf, password} = user
      const response = await loginClient(user);
      const userJson = JSON.stringify(response.data.id)
      // const { id } = userJson;
      localStorage.setItem('user', userJson);
      toast.success("Login efetuado com sucesso!");
      history.push("/orders");
    } catch (error) {
      return toast.error("Dados inválidos!");
    }
  };
  return (
    <>
      <div className="geral">
        <div className="containerLogin">
          <h1 className="h1login">Login</h1>
          <form onSubmit={handleSubmit}>
            <p className="pinput">Usuário:</p>
            <input
              maxLength={14}
              value={regex.maskCpf(newCpf)}
              className="inputlogin placeholder-text"
              type="text"
              placeholder="CPF"
              onChange={({target}) => setCpf(target.value)}
            />
            <p className="pinput">Senha:</p>
            <input
              value={newPassword}
              className="inputlogin placeholder-text"
              type="password"
              placeholder="Senha"
              onChange={({target}) => setPassword(target.value)}
            />
            <button className="btnlogin" type='submit'>Entrar</button>
          </form>
          <Link to="/register">
            <h1 className="h1register">Cadastre-se</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
