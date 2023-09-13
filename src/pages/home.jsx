import React from "react";
import Cookies from "js-cookie";
import {
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Typography,
  Carousel,
  Button,
} from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";
import { Footer } from "@/widgets/layout/footer";
import { UsersIcon } from "@heroicons/react/24/solid";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, escritorios, contactData, socials } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1582810822512-cd067820a128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/40 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto mt-10">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Proteja, amplie e transmita seu patrimônio.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-100">
                Maximize o potencial do seu patrimônio com nossa administradora
                especializada em gestão de ativos, oferecendo soluções
                personalizadas e confiáveis para garantir a segurança e
                crescimento dos seus investimentos.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Sobre nós
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Bem-vindo à nossa administradora de gestão de patrimônios! Somos
                uma equipe de profissionais altamente qualificados e dedicados,
                especializados em proteger, ampliar e transmitir o seu
                patrimônio de forma inteligente e eficiente. Nosso principal
                objetivo é fornecer soluções personalizadas e abrangentes.
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/reuniao.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Experiência no mercado
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Com anos de experiência no mercado financeiro, estamos
                    preparados para lidar com os desafios complexos e em
                    constante evolução do mundo dos investimentos.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-48 pt-20" id="offices">
        <div className="container mx-auto">
          <PageTitle heading="Aqui estão nossos escritórios" />
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {escritorios.map(({ img, name, position }) => (
              <TeamCard key={name} img={img} name={name} position={position} />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-gray-300 px-4 py-20" id="contact">
        <div className="container mx-auto">
          <PageTitle heading="Entre em contato!" />
          <div className="mx-auto mb-8 mt-6 flex items-center justify-center gap-11 md:mb-0">
            {socials.map(({ color, id, name, path }) => (
              <a
                key={name}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 w-16"
              >
                <Button color="white" className="flex items-center justify-center h-12 w-12 rounded-full shadow-2xl">
                  <Typography color={color}>
                    <i
                      className={`${
                        id === 3 ? "fa fa-lg fa-map-marker" : "fa-brands fa-lg fa-" + name
                      }`}
                    />
                  </Typography>
                </Button>
              </a>
            ))}
          </div>
          <div className="mx-auto mb-48 mt-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer
          title="TPCP ADMINISTRADORA"
          description="Estruturação do trabalho de forma planejada para prestar um serviço eficiente."
        />
      </div>
    </>
  );
}
export default Home;
