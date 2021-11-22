import "./styles.css";
import { ReactComponent as Logo } from "./logogalinha.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  // const logout = () =>{
  //    localStorage.clear()
  //   }
    const [idt, setIdt] = useState(0)
    const [is, setIs] = useState(false)

    useEffect(() =>{
      const getId = localStorage.getItem('user');
      const id = Number(getId);
      setIdt(id);
    })
    console.log(idt);
    useEffect(() =>{
      if(idt > 0) {
        console.log(idt)
        setIs(true)
      }
    })
    // console.log(is);
    console.log(idt);

    const logout = () => { 
      setIs(false);
      localStorage.setItem('user', '0')
    }

  return (
    <nav className="main-navbar">
      <Link  to="/"className="logo-text">
        <Logo />
        DelyFood
      </Link>
      
      {/* <Link to="/Login" className="entrar">
      <b>Entrar</b>
    </Link>  */}

    {is &&

    <Link to="/Login" className="entrar" onClick={logout}>
      <b>Sair</b>
    </Link> 
    }

    {/* {is === false ? (
      <Link to="/Login" className="entrar">
      <b>Entrar</b>
    </Link> 
    ) : (
      <Link to="/Login" className="entrar" onClick={logout}>
      <b>Sair</b>
    </Link> 
    )} */}
    </nav>
  );
}

export default Navbar;
