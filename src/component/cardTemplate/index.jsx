import React from "react";
import drive from "../../image/motor.png";

const CardTemplate = () => {
    return (
        <>
            <div className="card">
                <div className="card-body p-2">
                    <h3 className="card-title text-end">190000 &#8381;</h3>
                    <h6 className="card-subtitle text-end text-decoration-line-through fw-lighter">
                        225000 &#8381;
                    </h6>
                </div>
                <div className="d-flex justify-content-center">
                    <img src={drive} className="img-fluid w-30" alt="no_foto" />
                </div>
                <p className="card-text text-center m-0">Лодочный мотор</p>
                <p className="card-text text-center m-0">Suzuki DF9.9BRS</p>
                <div className="card-body p-3">
                    <h5 className="text-center m-1">Акция действует до</h5>
                    <h5 className="card-title text-center">31.08.2020</h5>
                </div>
            </div>
        </>
    );
};

export default CardTemplate;
