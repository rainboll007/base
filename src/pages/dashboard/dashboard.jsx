import React, { useState } from 'react';
import { User, BookOpen, Calendar, Award, Check } from 'lucide-react';

const progressData = [
  { label: 'INFORMACIÓN', value: 90, color: '#d72660', desc: 'Verificada' },
  { label: 'DOCUMENTACIÓN', value: 80, color: '#f46036', desc: 'Validada' },
  { label: 'PROFESIONALIZACIÓN', value: 50, color: '#2e294e', desc: 'Completada' },
  { label: 'EVALUACIÓN', value: 70, color: '#1b998b', desc: 'Acreditada' }
];

const Dashboard = () => {
  return (
    <>
      <div
        className="container-fluid py-4"
        style={{
          background: '#6a003a',
          minHeight: '100vh',
          borderRadius: '32px 0 0 0'
        }}
      >
        <div className="row gx-4">
          {/* Sidebar */}
          <div className="col-md-3 mb-4">
            <div
              className="card text-center mb-3"
              style={{
                borderRadius: '32px 0 0 0',
                overflow: 'hidden',
                border: 'none',
                background: '#fff'
              }}
            >
              <div className="card-body p-4 d-flex flex-column align-items-center" style={{ minHeight: 340 }}>
                <div className="mb-3">
                  <User size={64} className="bg-secondary rounded-circle p-2 text-white" />
                </div>
                <div className="fw-bold text-uppercase text-secondary small mb-1">MAESTRO</div>
                <h5 className="card-title mb-1">Gerardo Miranda Ortiz</h5>
                <div className="text-secondary small mb-2">EDUCACIÓN MEDIA SUPERIOR</div>
                <div className="d-flex justify-content-center gap-2 mb-2">
                  <span className="badge bg-warning"><Award size={20} /></span>
                  <span className="badge bg-danger"><Award size={20} /></span>
                  <span className="badge bg-info"><Check size={20} /></span>
                </div>
                <div className="fw-bold small text-secondary">MEDALLAS</div>
              </div>
              <div className="bg-light p-3" style={{ borderTop: '1px solid #eee' }}>
                <div className="fw-bold mb-2">Trayectoria</div>
                <ul className="list-unstyled text-start small mb-0">
                  <li>1. Información básica</li>
                  <li>2. Documentos</li>
                  <li>3. Cursos</li>
                  <li>4. Fecha de Nacimiento</li>
                  <li>5. Lugar de Nacimiento</li>
                  <li>6. Género</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="col-md-9">
            <div className="row gx-4 gy-3">
              {/* Felicidades Card */}
              <div className="col-lg-5">
                <div className="card h-100 shadow-sm" style={{ borderRadius: 24 }}>
                  <div className="card-body">
                    <div className="fw-bold text-secondary mb-2" style={{ letterSpacing: 1 }}>¡FELICIDADES! ERES CANDIDATO VIABLE PARA APLICAR</div>
                    <div className="mb-2">
                      <span className="fw-bold">Descripción:</span>
                      <div className="small text-muted">
                        Convocatoria del Proceso de Admisión en Educación Media Superior, Ciclo Escolar 2025-2026.<br />
                        Convocatoria para la selección de aspirantes a funciones docentes y técnico docentes en planteles federales como Bachillerato y otros equivalentes.
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 40, height: 40, fontWeight: 'bold', fontSize: 22 }}>A</span>
                      <div>
                        <button className="btn btn-outline-secondary btn-sm me-2">DESCARGAR</button>
                        <button className="btn btn-primary btn-sm">APLICAR</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Catálogo y Guía */}
              <div className="col-lg-4 d-flex flex-column gap-3">
                <div className="card h-100 shadow-sm" style={{ borderRadius: 24 }}>
                  <div className="card-header bg-light border-0 fw-bold">CATÁLOGO</div>
                  <div className="card-body text-center">
                    <BookOpen size={40} className="mb-3 text-primary" />
                    <ul className="list-unstyled small mb-0">
                      <li className="mb-2"><span className="badge bg-primary me-2">&nbsp;</span>La Nueva Escuela Mexicana</li>
                      <li className="mb-2"><span className="badge bg-success me-2">&nbsp;</span>Marco para la excelencia</li>
                      <li className="mb-2"><span className="badge bg-warning me-2">&nbsp;</span>Exploración de habilidades</li>
                      <li><span className="badge bg-info me-2">&nbsp;</span>Dominio de tecnologías educativas</li>
                    </ul>
                  </div>
                </div>
                <div className="card h-100 shadow-sm" style={{ borderRadius: 24 }}>
                  <div className="card-header bg-light border-0 fw-bold">GUÍA DE ESTUDIOS 2026</div>
                  <div className="card-body">
                    <ul className="list-unstyled mb-0 small">
                      <li>La Nueva Escuela Mexicana</li>
                      <li>Marco para la excelencia</li>
                      <li>Exploración de habilidades</li>
                      <li>Dominio de tecnologías educativas</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Fechas Importantes */}
              <div className="col-lg-3">
                <div className="card h-100 shadow-sm d-flex flex-column align-items-center justify-content-center" style={{ borderRadius: 24, background: '#fff' }}>
                  <div className="card-body text-center">
                    <Calendar size={48} className="mb-3 text-primary" />
                    <div className="fw-bold mb-2">FECHAS IMPORTANTES</div>
                    <div className="bg-primary text-white rounded-3 py-2 px-3 mb-2" style={{ fontWeight: 600, fontSize: 18 }}>EMS</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Progreso */}
            <div className="row mt-4">
              <div className="col-12">
                <div className="card shadow-sm" style={{ borderRadius: 24, background: '#ede7e3' }}>
                  <div className="card-body">
                    <div className="fw-bold mb-3" style={{ color: '#6a003a' }}>DATOS PERSONALES Y PROFESIONALES</div>
                    <div className="mb-3 text-secondary small">Acompañe la información de los documentos y actualice su hoja "Perfil Actualizado"</div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-4">
                      {progressData.map((item, idx) => (
                        <div key={idx} className="text-center flex-fill" style={{ minWidth: 120 }}>
                          <div className="mb-2 fw-bold" style={{ color: item.color }}>{item.label}<br /><span className="small">{item.desc}</span></div>
                          <div className="position-relative d-inline-block mb-2">
                            <svg width="80" height="80">
                              <circle
                                cx="40"
                                cy="40"
                                r="34"
                                stroke="#e9ecef"
                                strokeWidth="8"
                                fill="none"
                              />
                              <circle
                                cx="40"
                                cy="40"
                                r="34"
                                stroke={item.color}
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray={2 * Math.PI * 34}
                                strokeDashoffset={2 * Math.PI * 34 - (item.value / 100) * 2 * Math.PI * 34}
                                strokeLinecap="round"
                              />
                            </svg>
                            <span className="position-absolute top-50 start-50 translate-middle fw-bold" style={{ color: item.color }}>{item.value}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;