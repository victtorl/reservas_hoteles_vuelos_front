import React from 'react';
import "bootswatch/dist/flatly/bootstrap.min.css"
import Link from 'next/link';

const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">RESERVAS FISI</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className=" collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link href="/hoteles">
          <a className="nav-link active" href="#">Hoteles
            <span className="visually-hidden">(current)</span>
          </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/vuelos">
          <a className="nav-link active" href="#">Vuelos
            <span className="visually-hidden">(current)</span>
          </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="reservas">
          <a className="nav-link active" href="#">Reservas
            <span className="visually-hidden">(current)</span>
          </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/registro">
          <a className="nav-link active" href="#">Registro
            <span className="visually-hidden">(current)</span>
          </a>
          </Link>
        </li>
      </ul>

       
      {/* <form class="d-flex">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Login</button>
      </form> */}
      
      
    </div>
  </div>
</nav>

        
    );
}

export default Navbar;
