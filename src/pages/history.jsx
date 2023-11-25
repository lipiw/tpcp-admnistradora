import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "BEM",
  "ESTADO",
  "CIDADE",
  "DATA AQUISIÇÃO",
  "VALOR DE MERCADO",
  "VALOR RESULTADO",
  "",
];
const TABLE_ROWS = [];

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  TABLE_ROWS.push({ key, ...JSON.parse(value) });
}

export function History() {
  return (
    <div className="relative flex h-screen content-center items-center justify-center bg-[url('https://images.unsplash.com/photo-1582810822512-cd067820a128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center pb-32 pt-28">
      <div className="absolute top-0 h-full w-full bg-black/40 bg-cover bg-center" />
      <div className="max-w-8xl container relative mx-auto h-96">
        <div className="ml-auto mr-auto bg-white p-6 text-center sm:rounded-3xl">
          <Card className="h-full w-full overflow-auto">
            {TABLE_ROWS.length === 0 ? (
              <div
                class="my-20 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800 dark:bg-gray-800 dark:text-yellow-300"
                role="alert"
              >
                <span className="font-medium">Atenção!</span> Não há histórico a ser exibido, faça uma simulação em Calculadora.
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
                              {selectedDataAquisicao}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="text-center font-normal"
                            >
                              {selectedValorMercado} R$
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="text-center font-normal"
                            >
                              {result}
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
        </div>
      </div>
    </div>
  );
}
