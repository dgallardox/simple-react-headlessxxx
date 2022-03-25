import { Link } from "react-router-dom"


export default function Nav() {

  return (
    <>
      <nav class="navbar navbar-expand navbar-light bg-light">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand">Headless React</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
              <Link to="/" class="nav-link">Home</Link>
              <Link to="/posts" class="nav-link">Posts</Link>
              <p>Test3</p>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

