import { useEffect, useState } from "react";
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

      <button className="px-6 py-4" onClick={() => {}}>
        Editar
      </button>
      <button className="px-6 py-4" onClick={() => {}}>
        Seleccionar
      </button>
      <button className="px-6 py-4" onClick={() => {}}>
        Eliminar
      </button>
    </tr>
  );
}
function Proveedor() {
  let proveedores: Array<any> = [];
  let columnas: Array<any> = [];
  const [client, setClient] = useState({ proveedor: [], columnas: [] });

  const getProveedor: any = () => {
    fetch("http://localhost:3000/proveedor", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClient(data);
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => getProveedor(), []);
  if( Array.isArray(client.proveedor) == true )
  client.proveedor.forEach((element) => {
    proveedores.push(Linea2(element));
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
      <div className="m-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 place-self-end	">Añadir</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 place-self-end	">Actualizar</button>
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
              <tbody>{proveedores}</tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-6"></div>
    </div>
  );
}

export {Proveedor,requestOptions};

/*
/*
    
   SELECT Nombre,Apellido,Pr.Precio,A.Cantidad,A.Compra,A.Id_Producto FROM Proveedor as P
   Join Adquisiones as A on A.Id_Proveedor = P.Id_Proveedor
   Join Producto as Pr on Pr.Id_Producto = A.Id_Producto
*/
//*/