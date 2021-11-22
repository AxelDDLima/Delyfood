import React, { FormEvent } from "react";
import { saveClient } from "../api";
import "./styles.css";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { regex } from "../util/regex";

// import { Container } from './styles';

const Register: React.FC = () => {
  const history = useHistory();

  const [lastName, setLastName] = React.useState("");
  const [surName, setSurName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!lastName || !surName || !email || !cpf || !password)
      return toast.error("Dados inválidos!");
    try {
      await saveClient({
        lastName,
        surName,
        email,
        cpf,
        password,
      });
      toast.success("Cadastro Concluido com sucesso!");
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="geral">
        <div className="containerRegister">
          <h1 className="h1login">Cadastro</h1>
          <form onSubmit={handleSubmit}>
            <p className="pinput">Nome:</p>
            <input
              value={lastName}
              className="inputlogin placeholder-text"
              type="text"
              placeholder="Nome"
              onChange={(e) => setLastName(e.target.value)}
            />
            <p className="pinput">Sobrenome:</p>
            <input
              value={surName}
              className="inputlogin placeholder-text"
              type="text"
              placeholder="Sobrenome"
              onChange={(e) => setSurName(e.target.value)}
            />
            <p className="pinput">E-mail:</p>
            <input
              value={email}
              className="inputlogin placeholder-text"
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="pinput">CPF:</p>
            <input
              maxLength={14}
              value={regex.maskCpf(cpf)}
              className="inputlogin placeholder-text"
              type="text"
              placeholder="CPF"
              onChange={(e) => setCpf(e.target.value)}
            />
            <p className="pinput">Senha:</p>
            <input
              value={password}
              className="inputlogin placeholder-text"
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btnlogin" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
