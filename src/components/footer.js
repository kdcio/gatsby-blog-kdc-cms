import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <a href="#top">
                  <span className="fa-stack fa-lg">
                    <FontAwesomeIcon icon="circle" className="fa-stack-2x" />
                    <FontAwesomeIcon
                      icon={["fab", "twitter"]}
                      className="fa-stack-1x fa-inverse"
                    />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#top">
                  <span className="fa-stack fa-lg">
                    <FontAwesomeIcon icon="circle" className="fa-stack-2x" />
                    <FontAwesomeIcon
                      icon={["fab", "facebook-f"]}
                      className="fa-stack-1x fa-inverse"
                    />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#top">
                  <span className="fa-stack fa-lg">
                    <FontAwesomeIcon icon="circle" className="fa-stack-2x" />
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className="fa-stack-1x fa-inverse"
                    />
                  </span>
                </a>
              </li>
            </ul>
            <p className="copyright text-muted">
              Copyright &copy; Your Website 2019
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
