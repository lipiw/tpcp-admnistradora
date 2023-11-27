import { Typography } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, menu, copyright }) {
  return (
    <footer className="relative flex justify-center bg-gray-400 px-4 pb-6">
      <div className="container">
        <div className="flex justify-between pt-6 text-center lg:text-left">
          <div className="flex w-full flex-col justify-center px-7 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-black">
              {description}
            </Typography>
            <Typography className="font-normal text-black">
              CNPJ: 50.753.604/0001-87
            </Typography>
          </div>
          <div className="">
            <div className="flex flex-col justify-center">
              {menu.items.map(({ name, number }) => (
                <ul key={name} className="mt-3 flex">
                  <li>
                    <Typography
                      as="a"
                      target="_blank"
                      rel="noreferrer"
                      variant="small"
                      className="mb-2 block font-normal text-black"
                    >
                      {name}
                    </Typography>

                    <Typography
                      as="a"
                      target="_blank"
                      rel="noreferrer"
                      variant="small"
                      className="mb-2 block font-normal text-black"
                    >
                      {number}
                    </Typography>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div>
          <a
                href="/historico"
                duration={500}
                exact="true"
                className="block cursor-pointer rounded py-2 pr-4 dark:border-gray-100 md:hover:text-yellow-600"
              >
                Histórico
              </a>
          <a
                href="/calculadora"
                duration={500}
                exact="true"
                className="block pt-10 cursor-pointer rounded py-2 pr-4 dark:border-gray-100 md:hover:text-yellow-600"
              >
                Calculadora
              </a>
          </div>
        </div>
        <hr className="border-text-blue-gray-800 my-6" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography variant="small" className="font-normal text-gray-900">
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Material Tailwind",
  description:
    "Easy to use React components for Tailwind CSS and Material Design.",
  menu: {
    names: ["Endereços", "Contatos"],
    items: [
      {
        name: "Dr Tarciso Santos advogado Paulínia SP",
        number: "(11) 93384-3135",
      },
      {
        name: "Dr Pedro Ferreira advogado Atibaia SP",
        number: "(11) 95911-7045",
      },
    ],
  },
  copyright: <>Copyright © {year} TPCP Administradora</>,
};

export default Footer;
