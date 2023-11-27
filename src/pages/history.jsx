import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "BEM",
  "ESTADO",
  "CIDADE",
  "DATA AQUISIÇÃO",
  "VALOR DE MERCADO",
  "ORÇAMENTO PROVÁVEL - INVENTÁRIO",
  "",
];
const TABLE_ROWS = [];

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  TABLE_ROWS.push({ key, ...JSON.parse(value) });
}

export function History() {
  function formatarData(data) {
    const [ano, mes] = data.split("-");
    return `${mes}/${ano}`;
  }

  function formatarParaReal(valor) {
    const numero = parseFloat(valor);
    if (isNaN(numero)) {
      return "Valor inválido";
    }

    const valorFormatado = numero.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return valorFormatado;
  }

  return (
    <div className="relative flex h-screen content-center items-center justify-center bg-[url('https://images.unsplash.com/photo-1582810822512-cd067820a128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center pb-32 pt-28">
      <div className="absolute top-0 h-full w-full bg-black/40 bg-cover bg-center" />
      <div className="max-w-8xl container relative mx-auto mt-40 h-96">
        <div className="ml-auto mr-auto bg-white p-6 text-center sm:rounded-3xl">
          <Card className="h-full w-full overflow-auto">
            {TABLE_ROWS.length === 0 ? (
              <div
                className="my-20 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800 dark:bg-gray-800 dark:text-yellow-300"
                role="alert"
              >
                <span className="font-medium">Atenção!</span> Não há histórico a
                ser exibido, faça uma simulação em Calculadora.
              </div>
            ) : (
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="text-center font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map(
                    (
                      {
                        key,
                        selectedTipoBem,
                        selectedEstadoName,
                        selectedCidade,
                        selectedDataAquisicao,
                        selectedValorMercado,
                        result,
                      },
                      index
                    ) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={index}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="text-center font-normal"
                            >
                              {selectedTipoBem}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="text-center font-normal"
                            >
                              {selectedEstadoName}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="text-center font-normal"
                            >
                              {selectedCidade}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="text-center font-normal"
                            >
                              {formatarData(selectedDataAquisicao)}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="text-center font-normal"
                            >
                              {formatarParaReal(selectedValorMercado)}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="text-center font-normal"
                            >
                              R$ {result}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              as="a"
                              href="/historico"
                              variant="small"
                              color="blue-gray"
                              className="font-medium"
                              onClick={() => localStorage.removeItem(key)}
                            >
                              Excluir
                            </Typography>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            )}
          </Card>
        <div className="mt-10 flex h-14 items-center justify-center gap-8 rounded-full border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <a
            href="https://w.app/Jv57UG"
            className="flex items-center rounded-lg bg-green-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Proteja seu patrimônio e economize com uma holding familiar. Saiba mais
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
        </div>

    </div>
  );
}
