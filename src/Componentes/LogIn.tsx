import { useState } from "react";
import Cookies from "js-cookie";
import Catalogo from "./Catalogo";
import Navbar from "./Navbar";
import {Clientes} from "./Cliente";
import {Proveedor} from "./Proveedor";
import Combo from "./Productos";

function LogIn() {
  const [count, setCount] = useState(0);
  const [Email, setEmail] = useState("");
  const [Contraseña, setPass] = useState("");
  const token = Cookies.get("token");
  const [autherization, setAuth] = useState({ usuario: "" });
  const authenticate: any = (email: string, contraseña: string) => {
    console.log(email);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "false",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Expose-Headers": " *",
      },
      body: JSON.stringify({ Email: email, Contraseña: contraseña }),
    };
    console.log(Email);

    console.log(requestOptions.body);
    fetch("http://localhost:3000/login", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.usuario[0]) {
          console.log(data);

          setAuth(data);
          console.log(autherization, "Dentro");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  if (!autherization.usuario) {
    return (
      <div className=" w-full h-full">
        <div className="flex flex-col place-items-center h-full items-center justify-start mt-36 w-full justify-items-center	">
          <div className="flex flex-col w-1/2">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                  Email
                </span>
                <input
                  type="text"
                  name="Email"
                  id="mail"
                  value={Email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                  Contreña
                </span>
                <input
                  type="text"
                  name="Contraseña"
                  id="password"
                  value={Contraseña}
                  onChange={(event) => setPass(event.target.value)}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Contraseña"
                />
              </div>

              <button
                onClick={() => authenticate(Email, Contraseña)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Mi Botón
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full ">
        <div className="flex flex-col place-items-center mt-12">
          <h1>Productos</h1>
          <Catalogo></Catalogo>
        </div>
        <div className="flex flex-col place-items-center mt-12">
          <h1>Cliente</h1>
          <Clientes></Clientes>
        </div>
        <div className="flex flex-col place-items-center mt-12">
          <h1>Proveedores</h1>
          <Proveedor></Proveedor>
        </div>

        <div className="flex flex-col place-items-center mt-12">
          <h1 className="mb-12">Combo</h1>
          <Combo></Combo>
         </div>
      </div>
      
    );
  }
}

export default LogIn;
