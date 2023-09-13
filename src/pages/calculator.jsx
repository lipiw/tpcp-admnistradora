import React from "react";

export function Calculator() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-28">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1582810822512-cd067820a128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/40 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto h-96 mt-28">
          <div className="ml-auto mr-auto sm:rounded-3xl bg-white p-6 text-center lg:w-9/12">
            <form className="p-12 sm:grid gap-4 items-center">
              <div className="mb-4">
                <label className="mb-4 block font-medium">Tipo de bem</label>
                <select className="w-full rounded border px-3 py-2">
                  <option value="">Selecione o tipo de bem</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="casa">Flat</option>
                  <option value="casa">Casa</option>
                  <option value="casa">Terreno</option>
                  <option value="casa">Sala</option>
                  <option value="casa">Loja</option>
                  <option value="casa">Fazenda/Sítio/Chácara</option>
                  <option value="casa">Outros tipos de imóveis</option>
                </select>
              </div>
              <div className="mb-6 ">
                <label className="mb-4 block font-medium">Cidade</label>
                <input
                  type="text"
                  id="cidade"
                  class="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-4 block font-medium">Estado</label>
                <input
                  type="text"
                  id="estado"
                  class="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-4 block font-medium">Data Aquisição</label>
                <input
                  type="date"
                  id="date"
                  class="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-4 block font-medium">Valor no IRPF</label>
                <input
                  type="text"
                  id="estado"
                  class="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-4 block font-medium">Valor de Mercado</label>
                <input
                  type="text"
                  id="estado"
                  class="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                class="col-span-3 rounded-lg bg-yellow-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
              >
                Calcular
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Calculator;
