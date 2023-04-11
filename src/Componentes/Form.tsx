import { useState } from "react";
import numbers from "./rege";

export function Form() {
  return (
    <div className="flex flex-col w-full">
      <Linea3 array={["Marca", "Precio", "Cantidad"]}></Linea3>
      <Linea3 array={["Tipo", "Modelo", "Capacidad"]}></Linea3>
      <Linea3 array={["Conexiones", "Generacion", "Velocidad"]}></Linea3>
      <Linea3 array={["Proveedor", "Compra", "Fecha"]}></Linea3>
    </div>
  );
}

export function Linea3(props: any) {
  // console.log(props);
  const [valor1, SetValor1] = useState("");
  const [valor2, SetValor2] = useState("");
  const [valor3, SetValor3] = useState("");

  function validarApellid(apellido: string, campo: string): boolean {
    if (campo == "Apellido" || campo == "Apellido-Proveedor") {
      const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ]+([ ][A-Za-záéíóúÁÉÍÓÚñÑ]+)*$/;
      if (regex.test(apellido) == true) {
        SetValor2(apellido);
      } else {
        // SetValor1(valor1. slice(0,-1))
      }
    }
    if (numbers(apellido, campo) == true) {
      SetValor2(apellido);
    }

    return true;
  }

  function validarNombre(nombre: string, campo: string): boolean {
    console.log(nombre, campo);
    if (
      campo == "Nombre" ||
      campo == "Nombre-Proveedor" ||
      campo == "Nombre-Combo"
    ) {
      console.log(nombre);
      const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ]+([ ][A-Za-záéíóúÁÉÍÓÚñÑ]+)*$/;
      //console.log(regex.test(nombre));

      if (regex.test(nombre) == true) {
        //console.log('Hell')
        SetValor1(nombre);
      }
    }
    console.log("Aqui");
    if (numbers(nombre, campo) == true) {
      console.log("Hola");
      SetValor1(nombre);
    }
    return true;
  }

  function validarValor3(valor: string, campo: string) {
    if (numbers(valor, campo) == true) {
      SetValor3(valor);
    }
  }

  return (
    <div className="flex flex-row w-full">
      <div className="mb-6 flex w-1/3 flex-col mx-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {props.array[0]}
        </label>
        <input
          type="text"
          id={props.array[0]}
          value={valor1}
          onChange={(event) =>
            validarNombre(event.target.value, props.array[0])
              ? true
              : () => {
                  SetValor1(valor1.slice(0, -1));
                }
          }
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        ></input>
      </div>
      <div className="mb-6 w-1/3 flex flex-col mx-2">
        <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {props.array[1]}
        </label>
        <input
          type="text"
          id={props.array[1]}
          value={valor2}
          onChange={(event) =>
            validarApellid(event.target.value, props.array[1])
              ? true
              : () => {
                  SetValor2(valor2.slice(0, -1));
                }
          }
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        ></input>
      </div>
      {props.array[2] != "" ? (
        <div className="mb-6 w-1/3 flex flex-col mx-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {props.array[2]}
          </label>
          <input
            type="text"
            id={props.array[2]}
            value={valor3}
            onChange={(event) =>
              validarValor3(event.target.value, props.array[2])
            }
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          ></input>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
