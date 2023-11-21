import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-nav dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-2 border-white-50 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            className={
              "self-center text-2xl font-bold whitespace-nowrap dark:text-white"
            }
            to={"/"}
          >
            DMM
          </Link>
          <div className="flex md:order-2 space-x-3">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  className={
                    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 dark:text-white"
                  }
                  to={"/support"}
                >
                  Support
                  <div className="bg-amber-700" />
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="text-amber bg-white-700 hover:bg-amber-800 hover:text-white focus:ring-4 focus:outline-none border border-amber-600 focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              Login
            </button>
            <button
              type="button"
              className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              Signup
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  className={
                    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 dark:text-white"
                  }
                  to={"/car"}
                >
                  Car Rental
                  <div className="bg-amber-700" />
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 dark:text-white"
                  }
                  to={"/jet"}
                >
                  Private Jet
                  <div className="bg-amber-700 " />
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 dark:text-white"
                  }
                  to={"/boat"}
                >
                  Boat Charter
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 dark:text-white"
                  }
                  to={"/driver"}
                >
                  Driver
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 dark:text-white"
                  }
                  to={"/truck"}
                >
                  Truck
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;