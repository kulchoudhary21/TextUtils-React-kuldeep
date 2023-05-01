import "../../src/header.css";
import ReactSwitch from "react-switch";


function Header(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary check"
        style={{ display: "contents" }}
      >
        <div className="container-fluid cf" style={props.style1}>
          <a className="navbar-brand" href="/" style={props.style1}>
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={props.style1}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={props.style1}>
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="container" style={{ display: "contents" }}>
                <input
                  class="form-input"
                  type="color"
                  name="clr"
                  id="color"
                  onChange={props.getColor}
                />

                <label class="form-check-label mx-2">change theme</label>
                <h5 className="mx-3">
                  enable {`${props.checked ? "Dark" : "light"}`} mode
                </h5>
                <ReactSwitch
                  checked={props.checked}
                  onChange={props.onToggle}
                />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;

// Header.propTypes = {
//   title: propTypes.string.isRequired,
// };
// Header.defaultProps = {
//   title: "TextU",
// };
