import { useEffect, useState } from "react";
import { Linea3 } from "./Form";
import Productos from "./Productos";
const requestOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "false",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Expose-Headers": " *",
  },
  // body: JSON.stringify(),
};

function Linea2(props: any) {
  // const [isEditable,setEditable] = useState(false)

  let isEditable = false;
  const editProducto: any = () => {
    fetch("http://localhost:3000/cliente", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.Id_Cliente}
      </th>
      <td className="px-6 py-4">{props.Nombre}</td>
      <td className="px-6 py-4">{props.Apellido}</td>
      <td className="px-6 py-4">{props.Telefono}</td>
      <td className="px-6 py-4">{props.Total}</td>
      <button
        className="px-6 py-4"
        onClick={() => {
          fetch("http://localhost:3000/cliente/delete", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
              "Id_Cliente": props.Id_Cliente
            })
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              // setProducts(data);
            })
            .catch((err) => {
              console.log(err.message);
            });
        }}
      >
        Eliminar
      </button>
    </tr>
  );
}

function Linea4(props: any) {
  // const [isEditable,setEditable] = useState(false)

  let isEditable = false;
  const editProducto: any = () => {
    fetch("http://localhost:3000/cliente", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.NombreCombo}
      </th>
     
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.Precio}
      </th>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.Cantidad}
      </th>
    </tr>
  );
}
function Clientes() {
  let clientes: Array<any> = [];
  let columnas: Array<any> = [];
  const [client, setClient] = useState({
    clientes: [],
    columnas: [],
    columnasproductos: [],
    productos: [],
  });
  const [productos, setProductos] = useState({});

  const getClient: any = () => {
    fetch("http://localhost:3000/cliente", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClient(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => getClient(), []);
  client.clientes.forEach((element) => {
    clientes.push(Linea2(element));
  });

  client.columnas.forEach((element) => {
    columnas.push(
      <th scope="col" className="px-6 py-3">
        {element}
      </th>
    );
  });

  const insertNewProducto: any  = ( ) => {
    let entorno: Array<string> = ["Nombre", "Apellido", "Numero de telefono","Numero de Tarjeta" ]
    let valores: Array<string> = []
   // let valor: any 
    entorno.forEach((element) => {
      console.log(element)
      valores.push((document.getElementById(element)! as HTMLInputElement).value)
    })
    fetch("http://localhost:3000/cliente/new", {
     method: "POST",
     headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
     body: JSON.stringify(
       {
         "Id": "", //Vacio
         "Nombre": entorno[0] ,
         "Apellido": entorno[1],
         "Numero": entorno[2],
         "NuTarjeta": entorno[3],
        
       }
     )
   })
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       // setProducts(data);
     })
     .catch((err) => {
       console.log(err.message);
     });
    }
  return (
    <div className=" w-full h-full">
      <div className="m-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 place-self-end	" onClick={() => insertNewProducto()}>
          Añadir
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 place-self-end	">
          Actualizar
        </button>
      </div>

      <div className="flex flex-col w-full	">
        <div className="flex flex-col ">
          <div className="flex flex-col">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {columnas}
                  <th scope="col" className="px-6 py-3">
                    Opciones
                  </th>
                </tr>
              </thead>
              <tbody>{clientes}</tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-6 flex w-full flex-col">
        <Linea3 array={["Nombre", "Apellido", "Numero de telefono"]}></Linea3>
        <div className="mb-6 flex w-1/3 flex-col mx-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {"Numero de Tarjeta"}
          </label>
          <input
            type="text"
            id="Tarjeta"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          ></input>
        </div>
        <div className="mt-6"></div>
      </div>
    </div>
  );
}

export { Clientes, Linea2 ,Linea4 };
