import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import uuid from "react-uuid";

export function Calculator() {
  const navigate = useNavigate();

  const estados = [
    { name: "Acre (AC)", value: 8.5 },
    { name: "Alagoas (AL)", value: 9.5 },
    { name: "Amapá (AP)", value: 6.5 },
    { name: "Amazonas (AM)", value: 7.5 },
    { name: "Bahia (BA)", value: 8.5 },
    { name: "Ceará (CE)", value: 8.5 },
    { name: "Distrito Federal (DF)", value: 11.5 },
    { name: "Espírito Santo (ES)", value: 9.5 },
    { name: "Goiás (GO)", value: 8.5 },
    { name: "Maranhão (MA)", value: 6.5 },
    { name: "Mato Grosso (MT)", value: 5.5 },
    { name: "Mato Grosso do Sul (MS)", value: 5.5 },
    { name: "Minas Gerais (MG)", value: 9.5 },
    { name: "Pará (PA)", value: 8.5 },
    { name: "Paraíba (PB)", value: 11.5 },
    { name: "Paraná (PR)", value: 6.5 },
    { name: "Pernambuco (PE)", value: 6.5 },
    { name: "Piauí (PI)", value: 11.5 },
    { name: "Rio de Janeiro (RJ)", value: 6.5 },
    { name: "Rio Grande do Norte (RN)", value: 10.5 },
    { name: "Rio Grande do Sul (RS)", value: 6.5 },
    { name: "Rondônia (RO)", value: 6.5 },
    { name: "Roraima (RR)", value: 11.5 },
    { name: "Santa Catarina (SC)", value: 11.5 },
    { name: "São Paulo (SP)", value: 6.5 },
    { name: "Sergipe (SE)", value: 6.5 },
    { name: "Tocantins", value: 11.5 },
  ];

  const [selectedTipoBem, setSelectedTipoBem] = useState("");
  const [selectedEstadoValue, setSelectedEstadoValue] = useState(0);
  const [selectedEstadoName, setSelectedEstadoName] = useState("");
  const [selectedCidade, setSelectedCidade] = useState("");
  const [selectedDataAquisicao, setSelectedDataAquisicao] = useState("");
  const [userInput, setUserInput] = useState(0);
  const [selectedValorMercado, setSelectedValorMercado] = useState("");

  const handleEstado = (e) => {
    const estado = estados.find((estado) => estado.name === e);

    setSelectedEstadoValue(estado.value);
    setSelectedEstadoName(estado.name);
  };

  const handleCalculate = () => {
    if (selectedTipoBem === "") {
      const notifyWarning = () =>
        toast("Selecione o tipo de bem.", { type: "warning" });
      notifyWarning();
      return;
    }

    if (selectedEstadoName === "") {
      const notifyWarning = () =>
        toast("Selecione o estado.", { type: "warning" });
      notifyWarning();
      return;
    }

    if (selectedCidade === "") {
      const notifyWarning = () =>
        toast("Selecione a cidade.", { type: "warning" });
      notifyWarning();
      return;
    }

    if (selectedDataAquisicao === "") {
      const notifyWarning = () =>
        toast("Selecione a data de aquisição.", { type: "warning" });
      notifyWarning();
      return;
    }

    if (userInput === 0) {
      const notifyWarning = () =>
        toast("Insira o valor venal.", { type: "warning" });
      notifyWarning();
      return;
    }

    if (selectedValorMercado === "") {
      const notifyWarning = () =>
        toast("Insira o valor de mercado.", { type: "warning" });
      notifyWarning();
      return;
    }

    if (localStorage.length >= 5) {
      const notifyWarning = () =>
        toast("Numero maximo de registros atingido.", { type: "warning" });
      notifyWarning();
      return;
    }

    const result = (parseFloat(userInput) / selectedEstadoValue).toFixed(2).toString().replace(".", ",");
    const notifySucess = () =>
      toast("Foi inserido sucesso!", { type: "success" });
    const notifyError = () => toast("Houve algum erro.", { type: "error" });

    if (result != 0 || result != null) {
      notifySucess();
      const obj = {
        selectedTipoBem,
        selectedEstadoName,
        selectedCidade,
        selectedDataAquisicao,
        selectedValorMercado,
        result,
      };
      localStorage.setItem(uuid(), JSON.stringify(obj));
      
      navigate('/historico');
      window.location.reload();

    } else {
      notifyError();
    }
  };

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center bg-[url('https://images.unsplash.com/photo-1582810822512-cd067820a128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center pb-32 pt-28">
        <div className="absolute top-0 h-full w-full bg-black/40 bg-cover bg-center" />
        <ToastContainer position="top-center" />

        <div className="max-w-8xl container relative mx-auto mt-28 h-96">
          <div className="ml-auto mr-auto bg-white p-6 text-center sm:rounded-3xl lg:w-9/12">
            <form className="items-center gap-4 p-12 sm:grid">
              <div className="mb-4">
                <label className="mb-4 block font-medium">Tipo de bem</label>
                <select
                  className="w-full rounded border px-3 py-2"
                  onChange={(e) => setSelectedTipoBem(e.target.value)}
                >
                  <option value="">Selecione o tipo de bem</option>
                  <option value="Apartamento">Apartamento</option>
                  <option value="Flat">Flat</option>
                  <option value="Casa">Casa</option>
                  <option value="Terreno">Terreno</option>
                  <option value="Sala">Sala</option>
                  <option value="Loja">Loja</option>
                  <option value="Fazenda/Sítio/Chácara">
                    Fazenda/Sítio/Chácara
                  </option>
                  <option value="Outros">Outros tipos de imóveis</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="estadoSelect"
                  className="mb-4 block font-medium"
                >
                  Estado
                </label>
                <select
                  id="estados"
                  onChange={(e) => handleEstado(e.target.value)}
                  name="estados"
                  className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  {estados.map((estado, index) => (
                    <option key={index} value={estado.name}>
                      {estado.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6 ">
                <label className="mb-4 block font-medium">Cidade</label>
                <input
                  type="text"
                  id="cidade"
                  className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  onChange={(e) => setSelectedCidade(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="mb-4 block font-medium">Data Aquisição</label>
                <input
                  type="month"
                  id="date"
                  className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  onChange={(e) => setSelectedDataAquisicao(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="mb-4 block font-medium">Valor Venal</label>
                <input
                  type="number"
                  id="estado"
                  className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  onChange={(e) => setUserInput(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="mb-4 block font-medium">
                  Valor de Mercado
                </label>
                <input
                  type="number"
                  step="0.01"
                  id="estado"
                  className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  onChange={(e) => setSelectedValorMercado(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="col-span-3 rounded-lg bg-yellow-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                onClick={handleCalculate}
              >
                CALCULAR PROVÁVEL ORÇAMENTO DE INVENTÁRIO
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Calculator;
