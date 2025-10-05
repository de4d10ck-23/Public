import { useState, useEffect } from "react";
import axios from "axios";
import * as Jollibee from "../Global";

interface Language {
  language_name: string;
  language_code: string;
}

interface HeaderProps {
  action: string;
}

function Header({ action }: HeaderProps) {
  let [languageIndex, setLanguage] = useState(0);

  const [languagesList, setlanguagesList] = useState<Language[]>([]);

  useEffect(() => {
    axios
      .get(Jollibee.serverURL + "/languages_available")
      .then((response) => {
        setlanguagesList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container-fluid background-red header">
        <div className="row align-items-center">
          <div className="col-auto header-side">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle text-white"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {languagesList[languageIndex]?.language_name}
              </button>
              <ul className="dropdown-menu">
                {languagesList.map(
                  (item, index) =>
                    languageIndex !== index && (
                      <li key={item.language_code}>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => setLanguage(index)}
                        >
                          {item.language_name}
                        </a>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>

          <div className="col text-center">
            <div id="logo">
              <a href="#">
                <img
                  src="./logo.svg"
                  className="logo-svg m-0 p-0"
                  alt="Jollibee Logo"
                ></img>
              </a>
            </div>
          </div>

          <div className="col-auto d-flex justify-content-center align-items-center header-side">
            {action == Jollibee.action[1] ? (
              <a
                href="#"
                className="d-flex justify-content-center align-items-center text-decoration-none"
              >
                <img src="./cart.png" className="cart-png" alt="Cart" />
                <p className="mb-3 cart-num text-light p-1 ">0</p>
              </a>
            ) : (
              <div className="cart-png m-1"></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
