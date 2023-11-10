"use client";

import Image from "next/image";

const Nav = ({ Logo }) => {
  return (
    <header>
      <nav className="navbar pt-1 bg-black">
        <div className="container lg:flex-row flex-nowrap items-center">
          <div className="navbar-logo w-100">
            <a href="/">
              <Image src={Logo} alt="SuperLabs" />
            </a>
          </div>

          <div className="">
            <ul className="navbar-nav flex flex-row items-center justify-center">
              <li className="nav-item">
                <a href="#/" className="nav-link px-4 py-5">
                  Work
                </a>
              </li>

              <li className="nav-item">
                <a href="#/" className="nav-link dropdown-toggle px-4 py-5">
                  Services
                </a>
                {/* DROPDOWN SUBMENU */}
                <ul className="dropdown_menu py-4">
                  <li className="pt-3">
                    <div className="flex flex-row">
                      <div className="col-lg-4">
                        <a href="#/">
                          <h6 className="dropdown-header font-bold">
                            Resource Augmentation
                          </h6>
                        </a>

                        <ul className="lg:pb-1 cc-2 ps-0">
                          <li>
                            <a href="#/" className="dropdown-item">
                              Dot Net Developer
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                              Full Stack Developer
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                              Web Developer
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                              AngularJS Developer
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                              iOS Developer
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                              Android Developer
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                              Java Developer
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                              Flutter Developer
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                              NodeJS Developer
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                              JavaScript Developer
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                              App Developer
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                              Machine Learning Developer
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                              Back End Developer
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                              Front End Developer
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                              Quality Assurance Developer
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                              Security Engineers
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* First Column End */}

                      <div className="col-lg-8">
                        <a href="#/">
                          <h6 className="dropdown-header font-bold">
                            IT Services
                          </h6>
                        </a>

                        <ul className="lg:pb-1 cc-3 ps-0">
                          <li>
                            <a href="#/" className="dropdown-item">
                            Cloud Infrastructure
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                            Manchine Learning
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                            Enterprise Technology
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                            Payments
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                            Security
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                            Blockchain
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                            Application Development
                            </a>
                          </li>
                        </ul>
                        <br />
                        <a href="#/">
                          <h6 className="dropdown-header font-bold">
                            Engineering Services
                          </h6>
                        </a>

                        <ul className="lg:pb-1 cc-3 ps-0">
                          <li>
                            <a href="#/" className="dropdown-item">
                            Industrial Products
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                            Machine Design
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                            Special Devices
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                            Technical Documentation
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                            Consept Visualizing
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                            Mechanical Engineeing
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                            Prototyping
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                            Research & Development
                            </a>
                          </li>
                        </ul>

                        <br />
                        <a href="#/">
                          <h6 className="dropdown-header font-bold">
                          Design
                          </h6>
                        </a>

                        <ul className="lg:pb-1 cc-3 ps-0">
                          <li>
                            <a href="#/" className="dropdown-item">
                            Visual Identity
                            </a>
                          </li>
                          <li>
                            <a href="#/" className="dropdown-item">
                            UX & UI
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a href="#/" className="nav-link dropdown-toggle px-4 py-5">
                  Strategy
                </a>
                {/* DROPDOWN SUBMENU */}
                <ul className="dropdown_menu">
                  <li className="dropdown dropdown-item-subitem">
                    <a href="#/" className="dropdown-item dropdown-toggle">
                      Operations
                    </a>
                    <ul className="dropdown_menu_submenu">
                      <li>
                        <a href="#/" className="dropdown-item">
                          Data Strategy
                        </a>
                      </li>
                      <li>
                        <a href="#/" className="dropdown-item">
                          Organizational Design
                        </a>
                      </li>
                      <li>
                        <a href="#/" className="dropdown-item">
                          Price Modeling
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown dropdown-item-subitem">
                    <a href="#/" className="dropdown-item dropdown-toggle">
                      Business
                    </a>
                    <ul className="dropdown_menu_submenu">
                      <li>
                        <a href="#/" className="dropdown-item">
                          New Ventures
                        </a>
                      </li>
                      <li>
                        <a href="#/" className="dropdown-item">
                          Cost Reduction
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown dropdown-item-subitem">
                    <a href="#/" className="dropdown-item dropdown-toggle">
                      Transformation
                    </a>
                    <ul className="dropdown_menu_submenu">
                      <li>
                        <a href="#/" className="dropdown-item">
                          Change Implementation
                        </a>
                      </li>
                      <li>
                        <a href="#/" className="dropdown-item">
                          Product Innovation
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown">
                    <a href="#/" className="dropdown-item">
                      Intellectual Property
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#/" className="nav-link px-4 py-5">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
