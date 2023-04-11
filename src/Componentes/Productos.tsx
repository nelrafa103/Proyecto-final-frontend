import { useEffect, useState } from "react";
import { Linea3 } from "./Form";
import { Linea2, Linea4 } from "./Cliente";
import { requestOptions } from "./Proveedor";
function Combo(props: any) {
  let clientes: Array<any> = [];
  let columnas: Array<any> = [];
  const [client, setClient] = useState({
    combos: [],
    columnas: [],
    columnasproductos: [],
  });
  const [productos, setProductos] = useState({});

  const getClient: any = () => {
    fetch("http://localhost:3000/producto/combo", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClient(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const insertCombo: any = () => {
    let entorno: Array<string> = [
      "Nombre-Combo",
      "Precio-Combo",
 
    ];
    let valores: Array<string> = [];
    let valor: any;
    entorno.forEach((element) => {
      valores.push(
        (document.getElementById(element)! as HTMLInputElement).value
      );
    });
    fetch("http://localhost:3000/producto/new/combo", {
      method: "POST",
      body: JSON.stringify(
        {
          "Nombre": valores[0],
          "Precio": valores[1],
          "Cantidad": valores[2]
        }
      ),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       /// setClient(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => getClient(), []);
  client.combos.forEach((element) => {
    console.log(element)
    clientes.push(Linea4(element));
  });

  client.columnas.forEach((element) => {
    columnas.push(
      <th scope="col" className="px-6 py-3">
        {element}
      </th>
    );
  });
  return (
    <div className=" w-full h-full">
      <div className="m-4 flex flex-row">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 place-self-end	ml-12"
          onClick={() => {
            insertCombo();
          }}
        >
          Añadir
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
          <div className="mt-6">
            <Linea3
              array={["Nombre-Combo", "Precio-Combo",""]}
            ></Linea3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Combo;
