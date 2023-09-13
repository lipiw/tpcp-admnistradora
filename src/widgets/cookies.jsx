import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookiePermission = () => {
  const [showPermission, setShowPermission] = useState(false);

  useEffect(() => {
    const cookieAccepted = Cookies.get("cookieAccepted");
    setShowPermission(!cookieAccepted);
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieAccepted", "true", { expires: 365 }); // Armazenar o aceite do usuário por 365 dias
    setShowPermission(false);
  };

  const handleDecline = () => {
    Cookies.set("cookieAccepted", "false", { expires: 365 }); // Armazenar o aceite do usuário por 365 dias
    setShowPermission(false);
  };

  return (
    <div>
      {showPermission && (
        <div
          id="marketing-banner"
          tabindex="-1"
          class="fixed left-1/2 top-6 z-50 flex w-[calc(100%-2rem)] -translate-x-1/2 flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl"
        >
          <div class="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
            <p class="flex items-center text-sm font-normal text-gray-600 dark:text-gray-600">
              O site usa cookies para melhorar a experiência do usuário.
            </p>
          </div>
          <div class="flex flex-shrink-0 items-center">
            <a
              onClick={handleAccept}
              href="#"
              class="mr-2 rounded-lg bg-yellow-700 px-5 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Aceitar
            </a>
            <button
              onClick={handleDecline}
              data-dismiss-target="#marketing-banner"
              type="button"
              class="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                class="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Fechar notificação</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookiePermission;
