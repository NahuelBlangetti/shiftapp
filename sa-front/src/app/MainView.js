import tailwindcss from '../index.css';

export default function MainView() {
  return (
    <header x-data=" { navbarOpen: false } " className="bg-gray-500 w-full flex items-center">
      <div className="container">
          <div className="flex -mx-4 items-center justify-between relative">
              <div className="px-4 w-60 max-w-full">
                  <a href="javascript:void(0)" className="w-full block py-5">
                      <img src="https://cdn.tailgrids.com/1.0/assets/images/logo/logo.svg" alt="logo" className="w-full" />
                  </a>
              </div>
              <div className="flex px-4 justify-between items-center w-full">

                  <div>
                      <button id="navbarToggler" className="block absolute right-4 top-1/2 -translate-y-1/2 lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg">
                          <span className="relative w-[30px] h-[2px] my-[6px] block bg-body-color" ></span>
                          <span className="relative w-[30px] h-[2px] my-[6px] block bg-body-color" ></span>
                          <span className="relative w-[30px] h-[2px] my-[6px] block bg-body-color" ></span>
                      </button>

                      <nav id="navbarCollapse" className="absolute py-2 px-6 bg-white shadow rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full
                          lg:block lg:static lg:shadow-none " >
                          <ul className="blcok lg:flex">
                              <li>
                                  <a href="javascript:void(0)" className=" text-base font-medium text-dark hover:text-primary py-2 lg:inline-flex flex lg:ml-12">
                                  Home
                                  </a>
                              </li>
                              <li>
                                  <a href="javascript:void(0)" className=" text-base font-medium text-dark hover:text-primary py-2 lg:inline-flex flex lg:ml-12">
                                  Payment
                                  </a>
                              </li>
                              <li>
                                  <a href="javascript:void(0)" className=" text-base font-medium text-dark hover:text-primary py-2 lg:inline-flex flex lg:ml-12">
                                  Features
                                  </a>
                              </li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
    </header>
  )
}
