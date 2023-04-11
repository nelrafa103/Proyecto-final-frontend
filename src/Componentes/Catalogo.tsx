import { useEffect, useState } from "react";
import { LockNotSupportedOnGivenDriverError } from "typeorm";
import {Form} from "./Form";
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

function Linea(props: any) {
  // const [isEditable,setEditable] = useState(false)

  let isEditable = false;
  /*const editProducto: any = () => {
    fetch("http://localhost:3000/producto", {
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
  }; */
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.Id_Producto}
      </th>
      <td className="px-6 py-4">{props.Cantidad}</td>
      <td className="px-6 py-4">{props.Precio}</td>
      <td className="px-6 py-4">{props.Marca}</td>
      <td className="px-6 py-4"> {props.Tipo} </td>
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

function Catalogo() {
  let listaDeProductos: Array<any> = [];
  const [products, setProducts] = useState({ productos: [], columnas: [] });
  const [lista, setLista] = useState({ tipos: [{ Nombre: "" }] });

  const getTable: any = (arg: { nombre: string }) => {
    fetch(`http://localhost:3000/producto/${arg.nombre.toLowerCase()}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
       
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getListaProductos: any = () => {
    fetch("http://localhost:3000/producto/tipo", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setLista(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  lista.tipos.forEach((element) => {
    listaDeProductos.push(<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 " onClick={() => getTable({nombre: element.Nombre})} >{element.Nombre}</button>);
  });
 
  const getCategory: any = () => {
    fetch("http://localhost:3000/producto", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => getCategory(), []);
  useEffect(() => getListaProductos(), []);
  const productos: Array<any> = products.productos;
  let lineas: Array<any> = [];
  productos.forEach((element) => {
    lineas.push(Linea(element));
  });
  let columnas:  Array<any> = []
   
   products.columnas.forEach((element) => {
    columnas.push(  <th scope="col" className="px-6 py-3">
    {element}
  </th>)
  })
   const insertNewProducto: any  = ( ) => {
     let entorno: Array<string> = ["Id Marca", "Precio", "Cantidad","Tipo", "Modelo", "Capacidad","Conexiones", "Id Generacion", "Velocidad",'Proveedor','Fecha','Compra' ]
     let valores: Array<string> = []
     let valor: any 
     entorno.forEach((element) => {
       valores.push((document.getElementById(element)! as HTMLInputElement).value)
     })
     fetch("http://localhost:3000/producto", {
      method: "POST",
      body: JSON.stringify(
        {
          "Id_Producto": "", //Vacio
          "Cantidad": entorno[2] ,
          "Precio": entorno[1],
          "Id_Marca": entorno[0],
          "Id_Tipo": entorno[3],
          "Id_Modelo": entorno[4],
          "Velocidad": entorno[8],
          "Capacidad": entorno[5],
          "Id_Generacion": entorno[7],
          "Id_Proveedor": "",
          "Fecha": "",
          "Compra": "",
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
      <div className="m-4 flex flex-row">
      {listaDeProductos}  
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 place-self-end	ml-12" onClick={() => {}}>Añadir</button>
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
              <tbody>{lineas}</tbody>
            </table>
          </div>
          
        </div>
      </div>
      <div className="mt-6 flex w-full">
        
        <Form></Form>
      </div>
    </div>
  );
}
// Tengo que parsale los valores que selecciona al form en caso de seleccion
// Para de esta manera al actualizar se envie los valores
// En caso de que este vacio los valores se creara un nuevo valor
export default Catalogo;
