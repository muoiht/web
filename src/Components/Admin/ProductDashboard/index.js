import React, { Component } from "react";
import * as mobileApi from "../../apis/mobile";
export default class index extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    //CallAPI
    mobileApi
      .mobile()
      .then((success) => {
        console.log("suc" + JSON.stringify(success.data.$values));
        this.setState({ data: success.data.$values });
      })
      .catch((error) => {
        console.log("error" + error);
      });
    //this.setState({data: });
    //setState();
  }
  renderList() {
    var result = null;

    result = this.state.data.map((value, key) => {
      return (
        <tr key={key}>
          <td>
            <div className="d-flex px-2">
              <div>
                <img
                  src="../assets/img/small-logos/github.svg"
                  className="avatar avatar-sm rounded-circle me-2"
                  alt="invision"
                />
              </div>
              <div className="my-auto">
                <h6 className="mb-0 text-sm">{value.tensanpham}</h6>
              </div>
            </div>
          </td>
          <td>
            <p className="text-sm font-weight-bold mb-0">{value.dongia}</p>
          </td>
          <td>
            <span className="text-xs font-weight-bold">còn hàng</span>
          </td>
          <td className="align-middle text-center">
            <div className="d-flex align-items-center justify-content-center">
              <span className="me-2 text-xs font-weight-bold">
                {value.soluongton}
              </span>
              <div>
                <div className="progress">
                  <div
                    className="progress-bar bg-gradient-success"
                    role="progressbar"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </td>
          <td className="align-middle">
            <button
              className="btn btn-link text-secondary mb-0"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-ellipsis-v text-xs" />
            </button>
          </td>
        </tr>
      );
    });

    return result;
  }
  render() {
    return (
      <div className="left-menu">
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
          {/* Navbar */}
          <nav
            className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
            id="navbarBlur"
            navbar-scroll="true"
          >
            <div className="container-fluid py-1 px-3">
              <nav aria-label="breadcrumb">
                <h6 className="font-weight-bolder mb-0">Tables</h6>
              </nav>
              <div
                className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
                id="navbar"
              >
                <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                  <div className="input-group input-group-outline">
                    <label className="form-label">Type here...</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <ul className="navbar-nav  justify-content-end">
                  <li className="nav-item d-flex align-items-center">
                    <a
                      href="javascript:;"
                      className="nav-link text-body font-weight-bold px-0"
                    >
                      <i className="fa fa-user me-sm-1" />
                      <span className="d-sm-inline d-none">Sign In</span>
                    </a>
                  </li>
                  <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                    <a
                      href="javascript:;"
                      className="nav-link text-body p-0"
                      id="iconNavbarSidenav"
                    >
                      <div className="sidenav-toggler-inner">
                        <i className="sidenav-toggler-line" />
                        <i className="sidenav-toggler-line" />
                        <i className="sidenav-toggler-line" />
                      </div>
                    </a>
                  </li>
                  <li className="nav-item px-3 d-flex align-items-center">
                    <a href="javascript:;" className="nav-link text-body p-0">
                      <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                    </a>
                  </li>
                  <li className="nav-item dropdown pe-2 d-flex align-items-center">
                    <a
                      href="javascript:;"
                      className="nav-link text-body p-0"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-bell cursor-pointer" />
                    </a>
                    <ul
                      className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li className="mb-2">
                        <a
                          className="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          <div className="d-flex py-1">
                            <div className="my-auto">
                              <img
                                src="../assets/img/team-2.jpg"
                                className="avatar avatar-sm  me-3 "
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">
                                  New message
                                </span>{" "}
                                from Laur
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1" />
                                13 minutes ago
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          <div className="d-flex py-1">
                            <div className="my-auto">
                              <img
                                src="../assets/img/small-logos/logo-spotify.svg"
                                className="avatar avatar-sm bg-gradient-dark  me-3 "
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">
                                  New album
                                </span>{" "}
                                by Travis Scott
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1" />1 day
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          <div className="d-flex py-1">
                            <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                              <svg
                                width="12px"
                                height="12px"
                                viewBox="0 0 43 36"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <title>credit-card</title>
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g
                                    transform="translate(-2169.000000, -745.000000)"
                                    fill="#FFFFFF"
                                    fillRule="nonzero"
                                  >
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g transform="translate(453.000000, 454.000000)">
                                        <path
                                          className="color-background"
                                          d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                          opacity="0.593633743"
                                        />
                                        <path
                                          className="color-background"
                                          d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                Payment successfully completed
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1" />2 days
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* End Navbar */}
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-12">
                <div className="card my-4">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                      <h6 className="text-white text-capitalize ps-3">
                        Authors table
                      </h6>
                    </div>
                  </div>
                  <div className="card-body px-0 pb-2">
                    <div className="table-responsive p-0">
                      <table className="table align-items-center mb-0">
                        <thead>
                          <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Author
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Function
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Status
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Employed
                            </th>
                            <th className="text-secondary opacity-7" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src="../assets/img/team-2.jpg"
                                    className="avatar avatar-sm me-3 border-radius-lg"
                                    alt="user1"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">John Michael</h6>
                                  <p className="text-xs text-secondary mb-0">
                                    john@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Manager
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Organization
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-success">
                                Online
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                23/04/18
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="javascript:;"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src="../assets/img/team-3.jpg"
                                    className="avatar avatar-sm me-3 border-radius-lg"
                                    alt="user2"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">Alexa Liras</h6>
                                  <p className="text-xs text-secondary mb-0">
                                    alexa@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Programator
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Developer
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-secondary">
                                Offline
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                11/01/19
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="javascript:;"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src="../assets/img/team-4.jpg"
                                    className="avatar avatar-sm me-3 border-radius-lg"
                                    alt="user3"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">
                                    Laurent Perrier
                                  </h6>
                                  <p className="text-xs text-secondary mb-0">
                                    laurent@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Executive
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Projects
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-success">
                                Online
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                19/09/17
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="javascript:;"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src="../assets/img/team-3.jpg"
                                    className="avatar avatar-sm me-3 border-radius-lg"
                                    alt="user4"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">Michael Levi</h6>
                                  <p className="text-xs text-secondary mb-0">
                                    michael@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Programator
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Developer
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-success">
                                Online
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                24/12/08
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="javascript:;"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src="../assets/img/team-2.jpg"
                                    className="avatar avatar-sm me-3 border-radius-lg"
                                    alt="user5"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">Richard Gran</h6>
                                  <p className="text-xs text-secondary mb-0">
                                    richard@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Manager
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Executive
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-secondary">
                                Offline
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                04/10/21
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="javascript:;"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img
                                    src="../assets/img/team-4.jpg"
                                    className="avatar avatar-sm me-3 border-radius-lg"
                                    alt="user6"
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">Miriam Eric</h6>
                                  <p className="text-xs text-secondary mb-0">
                                    miriam@creative-tim.com
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                Programator
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                Developer
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-secondary">
                                Offline
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                14/09/20
                              </span>
                            </td>
                            <td className="align-middle">
                              <a
                                href="javascript:;"
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit user"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card my-4">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                      <h6 className="text-white text-capitalize ps-3">
                        Projects table
                      </h6>
                    </div>
                  </div>
                  <div className="card-body px-0 pb-2">
                    <div className="table-responsive p-0">
                      <table className="table align-items-center justify-content-center mb-0">
                        <thead>
                          <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Project
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Budget
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Status
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
                              Completion
                            </th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          {this.renderList()}

                          <tr>
                            <td>
                              <div className="d-flex px-2">
                                <div>
                                  <img
                                    src="../assets/img/small-logos/logo-atlassian.svg"
                                    className="avatar avatar-sm rounded-circle me-2"
                                    alt="jira"
                                  />
                                </div>
                                <div className="my-auto">
                                  <h6 className="mb-0 text-sm">Atlassian</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm font-weight-bold mb-0">
                                $3,400
                              </p>
                            </td>
                            <td>
                              <span className="text-xs font-weight-bold">
                                canceled
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <div className="d-flex align-items-center justify-content-center">
                                <span className="me-2 text-xs font-weight-bold">
                                  30%
                                </span>
                                <div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-gradient-danger"
                                      role="progressbar"
                                      aria-valuenow={30}
                                      aria-valuemin={0}
                                      aria-valuemax={30}
                                      style={{ width: "30%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle">
                              <button
                                className="btn btn-link text-secondary mb-0"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v text-xs" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2">
                                <div>
                                  <img
                                    src="../assets/img/small-logos/bootstrap.svg"
                                    className="avatar avatar-sm rounded-circle me-2"
                                    alt="webdev"
                                  />
                                </div>
                                <div className="my-auto">
                                  <h6 className="mb-0 text-sm">Bootstrap</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm font-weight-bold mb-0">
                                $14,000
                              </p>
                            </td>
                            <td>
                              <span className="text-xs font-weight-bold">
                                working
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <div className="d-flex align-items-center justify-content-center">
                                <span className="me-2 text-xs font-weight-bold">
                                  80%
                                </span>
                                <div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-gradient-info"
                                      role="progressbar"
                                      aria-valuenow={80}
                                      aria-valuemin={0}
                                      aria-valuemax={80}
                                      style={{ width: "80%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle">
                              <button
                                className="btn btn-link text-secondary mb-0"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v text-xs" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2">
                                <div>
                                  <img
                                    src="../assets/img/small-logos/logo-slack.svg"
                                    className="avatar avatar-sm rounded-circle me-2"
                                    alt="slack"
                                  />
                                </div>
                                <div className="my-auto">
                                  <h6 className="mb-0 text-sm">Slack</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm font-weight-bold mb-0">
                                $1,000
                              </p>
                            </td>
                            <td>
                              <span className="text-xs font-weight-bold">
                                canceled
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <div className="d-flex align-items-center justify-content-center">
                                <span className="me-2 text-xs font-weight-bold">
                                  0%
                                </span>
                                <div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-gradient-success"
                                      role="progressbar"
                                      aria-valuenow={0}
                                      aria-valuemin={0}
                                      aria-valuemax={0}
                                      style={{ width: "0%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle">
                              <button
                                className="btn btn-link text-secondary mb-0"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v text-xs" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex px-2">
                                <div>
                                  <img
                                    src="../assets/img/small-logos/devto.svg"
                                    className="avatar avatar-sm rounded-circle me-2"
                                    alt="xd"
                                  />
                                </div>
                                <div className="my-auto">
                                  <h6 className="mb-0 text-sm">Devto</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm font-weight-bold mb-0">
                                $2,300
                              </p>
                            </td>
                            <td>
                              <span className="text-xs font-weight-bold">
                                done
                              </span>
                            </td>
                            <td className="align-middle text-center">
                              <div className="d-flex align-items-center justify-content-center">
                                <span className="me-2 text-xs font-weight-bold">
                                  100%
                                </span>
                                <div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar bg-gradient-success"
                                      role="progressbar"
                                      aria-valuenow={100}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                      style={{ width: "100%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="align-middle">
                              <button
                                className="btn btn-link text-secondary mb-0"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v text-xs" />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer py-4  ">
              <div className="container-fluid">
                <div className="row align-items-center justify-content-lg-between">
                  <div className="col-lg-6 mb-lg-0 mb-4">
                    <div className="copyright text-center text-sm text-muted text-lg-start">
                      © , made with <i className="fa fa-heart" /> by
                      <a
                        href="https://www.creative-tim.com"
                        className="font-weight-bold"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                      for a better web.
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com"
                          className="nav-link text-muted"
                          target="_blank"
                        >
                          Creative Tim
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/presentation"
                          className="nav-link text-muted"
                          target="_blank"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/blog"
                          className="nav-link text-muted"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.creative-tim.com/license"
                          className="nav-link pe-0 text-muted"
                          target="_blank"
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    );
  }
}
