export function Form() {
  return (
    <div className="flex flex-col w-full">
      <Linea3 array={["Id Marca", "Precio", "Cantidad"]}></Linea3>
      <Linea3 array={["Tipo", "Modelo", "Capacidad"]}></Linea3>
      <Linea3 array={["Conexiones", "Id Generacion", "Velocidad"]}></Linea3>
     
    </div>
  );
}

export function Linea3(props: any) {
  console.log(props);
  return (
    <div className="flex flex-row w-full">
      <div className="mb-6 flex w-1/3 flex-col mx-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {props.array[0]}
        </label>
        <input
          type="text"
          id={props.array[0]}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com"
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
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        ></input>
      </div>
      <div className="mb-6 w-1/3 flex flex-col mx-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {props.array[2]}
        </label>
        <input
         type="text"
         id={props.array[2]}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        ></input>
      </div>
    </div>
  );
}
