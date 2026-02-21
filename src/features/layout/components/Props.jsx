import React from 'react'

function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="rounded-circle"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export const Props = () => {
  return (
    <div className="container py-5">
      {/* Encabezado */}
      <div className='text-center mb-5'>
        <h1 className="fw-bold display-5">Uso de Props</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
          Este componente demuestra cómo pasar datos (props) desde un componente padre a componentes hijos. 
          Cada tarjeta recibe un objeto diferente y se renderiza de forma independiente.
        </p>
        <hr className="w-25 mx-auto text-primary" />
      </div>

      {/* Rejilla de Avatares */}
      <div className='row row-cols-1 row-cols-md-3 g-4 justify-content-center'>
        
        <div className="col-md-4 d-flex justify-content-center">
          <Avatar
            size={120}
            person={{ 
              name: 'Katsuko Saruhashi', 
              imageId: 'YfeOqp2'
              
            }}
          />
        </div>

        <div className="col-md-4 d-flex justify-content-center">
          <Avatar
            size={120}
            person={{
              name: 'Aklilu Lemma', 
              imageId: 'OKS67lh'
            }}
          />
        </div>

        <div className="col-md-4 d-flex justify-content-center">
          <Avatar
            size={120}
            person={{ 
              name: 'Lin Lanying',
              imageId: '1bX5QH6'
            }}
          />
        </div>

      </div>
    </div>
  )
}