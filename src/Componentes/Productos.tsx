import { useEffect, useState } from "react";
import { Linea3 } from "./Form";
import { Linea2,  } from "./Cliente";
import { requestOptions } from "./Proveedor";
function Combo(props: any) {
  let clientes: Array<any> = [];
  let columnas: Array<any> = [];
  const [client, setClient] = useState({ combos: [], columnas: [],columnasproductos: [],  });
  const [productos,setProductos ] = useState({})

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

  useEffect(() => getClient(), []);
  client.combos.forEach((element) => {
    clientes.push(Linea2(element));
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
    </div>
  );
}

export default Combo;
