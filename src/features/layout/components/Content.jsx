import React from 'react';

export const Content = () => {
  return (
    <main className="container-fluid px-4 my-5">
      <div className="row">
        
        {/* SECCIÓN IZQUIERDA: Tus tarjetas manuales */}
        <div className="col-lg-8">
          <h2 className="fw-bold mb-4">Productos</h2>
          <div className="row">
            
            {/* Tarjeta 1 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-45">
                <img src="/img/iphone.webp" className="card-img-top" alt="Iphone 17 Pro Max" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                  <h5 className="fw-bold">Iphone 17 pro max</h5>
                  <span className="text-success fs-5 fw-bold">$8.000.000</span>
                  <div className="d-grid mt-3">
                    <span className="badge bg-success position-absolute top-0 end-0 m-3 shadow-sm">
        Nuevo
      </span>
                    <button className="btn btn-dark">Comprar</button>
                    <br /><button className="btn btn-dark">Añadir al carrito</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-45">
                <img src="/img/compu.jpg" className="card-img-top" alt="Computador" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                  <h5 className="fw-bold">Asus Zenbook </h5>
                  <span className="text-success fs-5 fw-bold">$9.000.000</span>
                  <div className="d-grid mt-3">
                    <span className="badge bg-success position-absolute top-0 end-0 m-3 shadow-sm">
        Agotado
      </span>
                    <button className="btn btn-dark">Comprar</button>
                    <br /><button className="btn btn-dark">Añadir al carrito</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-45">
                <img src="/img/cama.avif" className="card-img-top" alt="Camara" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                  <h5 className="fw-bold">Camara</h5>
                  <span className="text-success fs-5 fw-bold">$250.000</span>
                  <div className="d-grid mt-3">
                    <span className="badge bg-success position-absolute top-0 end-0 m-3 shadow-sm">
        Agotado
      </span>
                    <button className="btn btn-dark">Comprar</button>
                    <br /><button className="btn btn-dark">Añadir al carrito</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 4 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <img src="/img/apple.png" className="card-img-top" alt="Apple Watch" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                  <h5 className="fw-bold">Apple Watch</h5>
                  <span className="text-success fs-5 fw-bold">$2.000.000</span>
                  <div className="d-grid mt-3">
                    <span className="badge bg-success position-absolute top-0 end-0 m-3 shadow-sm">
        Stock: 15 unidades
      </span>
                    <button className="btn btn-dark">Comprar</button>
                    <br /><button className="btn btn-dark">Añadir al carrito</button>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <img src="/img/tecla.avif" className="card-img-top" alt="Teclado" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                  <h5 className="fw-bold">Teclado </h5>
                  <span className="text-success fs-5 fw-bold">$3.000.000</span>
                  <div className="d-grid mt-3">
                    <span className="badge bg-success position-absolute top-0 end-0 m-3 shadow-sm">
        Nuevo
      </span>
                    <button className="btn btn-dark">Comprar</button>
                     <br /><button className="btn btn-dark">Añadir al carrito</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <img src="/img/producto.jpg" className="card-img-top" alt="Audifonos" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                  <h5 className="fw-bold">Audifonos</h5>
                  <span className="text-success fs-5 fw-bold">$500.000</span>
                  <div className="d-grid mt-3">
                    <span className="badge bg-success position-absolute top-0 end-0 m-3 shadow-sm">
         Stock: 15 unidades
      </span>
                    <button className="btn btn-dark">Comprar</button>
                     <br /><button className="btn btn-dark">Añadir al carrito</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        

        {/* SECCIÓN DERECHA: Formulario (Se queda igual para que el diseño no cambie) */}
        <div className="col-lg-4">
          <div className="card shadow border-0 sticky-top" style={{ top: '90px' }}>
            <div className="card-header bg-primary text-white py-3">
              <h5 className="mb-0 fw-bold">
                <i className="bi bi-plus-circle-fill me-2"></i>Nuevo Producto
              </h5>
            </div>
            <div className="card-body p-4">
              <form>
                <div className="mb-3">
                  <label className="form-label small fw-bold">Nombre del plato</label>
                  <input type="text" className="form-control form-control-sm" placeholder="Ej: Salchipapa" />
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label small fw-bold">Precio ($)</label>
                    <input type="number" className="form-control form-control-sm" placeholder="10000" />
                  </div>
                  <div className="col">
                    <label className="form-label small fw-bold">Categoría</label>
                    <select className="form-select form-select-sm">
                      <option>Entradas</option>
                      <option>Fritos</option>
                      <option>Bebidas</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold">URL Imagen</label>
                  <input type="text" className="form-control form-control-sm" placeholder="img/nuevo.jpg" />
                </div>

                <div className="mb-4">
                  <label className="form-label small fw-bold">Descripción corta</label>
                  <textarea className="form-control form-control-sm" rows="2"></textarea>
                </div>

                <div className="d-grid gap-2">
                  <button type="button" className="btn btn-success fw-bold">
                    Guardar en menú
                  </button>
                  <button type="reset" className="btn btn-link btn-sm text-muted">
                    Limpiar campos
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};