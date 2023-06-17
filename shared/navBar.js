import renderToDOM from '../utils/renderToDOM';

const navBar = () => {
  const domString = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark style= bg-black mb-5">
  <div class="container-fluid">
      <a class="navbar-brand title" href="#">Code Words</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#" id="all-cards">
              All Vocabulary Cards <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#" id="javascript-cards">
              JavaScript<span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#" id="HTML-cards">
              HTML<span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
          <a class="nav-link" href="#" id="CSS-cards">
            CSS<span class="sr-only">(current)</span>
          </a>
        </li>
          <li>
          <input
            class="form-control mr-sm-2"
            id="search" style="background-color: black; -webkit-text-fill-color: white;"
            placeholder="Search Vocabulary Term"
            aria-label="Search"/>
          </li>
            <button class="btn btn-success" type="button" id="alphabet">
            Sort A-Z
            </button>
        </ul>
        <span class="navbar-text">
          <div id="logout-button"></div>
        </span>
      </div>
    </div>
  </nav>
`;

  renderToDOM('#navigation', domString);
};

export default navBar;