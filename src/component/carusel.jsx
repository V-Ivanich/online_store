import React from "react";

const Carusel = () => {
  const images_1 = "./image/imag_1.jpeg";
  const images_2 = "./image/imag_2.jpeg";
  const images_3 = "./image/imag_3.jpeg";

  return (
    <>
      {/* <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active" data-bs-interval="2000">
            <img src="./image/imag_1.jpeg" className="d-block w-100" alt="no"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Метка первого слайда</h5>
              <p>Некоторый репрезентативный заполнитель для первого слайда.</p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <img src="./image/imag_2.jpeg" className="d-block w-100" alt="no"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Метка второго слайда</h5>
              <p>Некоторый репрезентативный заполнитель для второго слайда.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="./image/imag_3.jpeg" className="d-block w-100" alt="no"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Метка третьего слайда</h5>
              <p>Некоторый репрезентативный заполнитель для третьего слайда.</p>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Предыдущий</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Следующий</span>
        </button>
        
      </div> */}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={images_1} className="d-block w-100" alt="no img"/>
          </div>
          <div className="carousel-item">
            <img src={images_2} className="d-block w-100" alt="no img"/>
          </div>
          <div className="carousel-item">
            <img src={images_3} className="d-block w-100" alt="no img"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
  </>
  )
};

export default Carusel;
