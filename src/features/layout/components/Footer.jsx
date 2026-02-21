import React from 'react'

export const Footer = () => {
  return (
    <footer className="border-top py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span className="text-muted small"> <br /><br /><br /><br /><br /><br /><br />
          © 2026 · Estefany Arango
        </span>

        <div className="d-flex align-items-center gap-3">
          <a href="#" className="link-secondary small text-decoration-none">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <i className="bi bi-info-circle"></i> Ayuda
          </a>

          <a href="#" className="link-secondary small text-decoration-none">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <i className="bi bi-shield-check"></i> Políticas
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
