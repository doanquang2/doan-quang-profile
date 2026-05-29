import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Đường dẫn lấy 2 ảnh từ thư mục public
  const logoUrl = './Logo.png'; 
  const logoTruongUrl = './LogoTruong.png';

  // CSS chặn bôi đen, chặn copy để người khác không chỉnh sửa được
  const uneditableStyle = {
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  };

  return (
    <div className="min-vh-100 bg-dark text-light d-flex align-items-center py-5" style={uneditableStyle}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            
            {/* Card chính phong cách Dashboard */}
            <div className="card bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 shadow-lg overflow-hidden position-relative">
              
              {/* Thanh LED màu phía trên */}
              <div className="position-absolute top-0 start-0 w-100" style={{ height: '4px', background: 'linear-gradient(90deg, #fd7e14, #0d6efd)' }}></div>
              
              <div className="card-body p-4 p-md-5">
                
                {/* Phần Header & Logo Cá Nhân */}
                <div className="text-center mb-5">
                  <div className="mb-4 d-inline-block p-2 rounded-3 bg-black bg-opacity-50 border border-secondary border-opacity-50">
                    <img 
                      src={logoUrl} 
                      alt="Doãn Quảng Logo" 
                      className="img-fluid" 
                      style={{ maxHeight: '120px', objectFit: 'contain' }}
                      draggable="false" // Chặn kéo thả ảnh
                    />
                  </div>
                  <h1 className="fw-bold tracking-wide text-uppercase mb-2 text-white" style={{ letterSpacing: '1px' }}>
                    Doãn Quảng
                  </h1>
                  <p className="text-info fw-semibold mb-0 text-uppercase small" style={{ letterSpacing: '2px' }}>
                    Kỹ sư Công nghệ kỹ thuật điều khiển và tự động hóa
                  </p>
                </div>

                <hr className="border-secondary opacity-25 my-4" />

                {/* Phần Học Vấn & Logo Trường */}
                <div className="mb-5">
                  <h3 className="h5 text-uppercase fw-bold text-warning mb-3 d-flex align-items-center">
                    <span className="me-2">⚡</span> Học vấn
                  </h3>
                  
                  {/* Bọc khối học vấn phối hợp hiển thị logo trường */}
                  <div className="p-3 rounded-3 bg-dark bg-opacity-50 border border-secondary border-opacity-25">
                    <div className="row align-items-center g-3">
                      {/* Logo Trường nằm bên trái/trên */}
                      <div className="col-sm-3 text-center text-sm-start">
                        <div className="p-2 rounded-2 bg-white d-inline-block">
                          <img 
                            src={logoTruongUrl} 
                            alt="Đại học Lạc Hồng Logo" 
                            className="img-fluid" 
                            style={{ maxHeight: '55px', objectFit: 'contain' }}
                            draggable="false"
                          />
                        </div>
                      </div>
                      {/* Thông tin trường nằm bên phải */}
                      <div className="col-sm-9 text-center text-sm-start">
                        <h4 className="h6 fw-bold mb-1 text-white text-uppercase" style={{ letterSpacing: '0.5px' }}>
                          Trường Đại học Lạc Hồng
                        </h4>
                        <p className="text-muted mb-0 small">Chuyên ngành: Công nghệ kỹ thuật điều khiển và tự động hóa</p>
                        <small className="text-info bg-info bg-opacity-10 px-2 py-0.5 rounded mt-1 d-inline-block unintended-small" style={{ fontSize: '11px' }}>
                          Powered by Arizona State University®
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phần Kỹ Năng Kỹ Thuật */}
                <div>
                  <h3 className="h5 text-uppercase fw-bold text-warning mb-3 d-flex align-items-center">
                    <span className="me-2">🛠️</span> Kỹ năng chuyên môn
                  </h3>
                  
                  <div className="row g-3">
                    {/* Hệ thống PLC */}
                    <div className="col-sm-6">
                      <div className="p-3 h-100 rounded-3 bg-dark bg-opacity-50 border border-secondary border-opacity-25">
                        <h4 className="h6 fw-bold text-info mb-3">Hệ thống PLC</h4>
                        <div className="d-flex flex-wrap gap-2">
                          <span className="badge bg-secondary bg-opacity-50 text-white border border-secondary border-opacity-50 px-3 py-2 rounded-2">Siemens</span>
                          <span className="badge bg-secondary bg-opacity-50 text-white border border-secondary border-opacity-50 px-3 py-2 rounded-2">Mitsubishi</span>
                        </div>
                      </div>
                    </div>

                    {/* Vi điều khiển */}
                    <div className="col-sm-6">
                      <div className="p-3 h-100 rounded-3 bg-dark bg-opacity-50 border border-secondary border-opacity-25">
                        <h4 className="h6 fw-bold text-info mb-3">Vi điều khiển & Nhúng</h4>
                        <div className="d-flex flex-wrap gap-2">
                          <span className="badge bg-secondary bg-opacity-50 text-white border border-secondary border-opacity-50 px-3 py-2 rounded-2">Lập trình ARM STM32</span>
                          <span className="badge bg-secondary bg-opacity-50 text-white border border-secondary border-opacity-50 px-3 py-2 rounded-2">ESP32</span>
                          <span className="badge bg-secondary bg-opacity-50 text-white border border-secondary border-opacity-50 px-3 py-2 rounded-2">Arduino</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Footer */}
              <div className="card-footer bg-black bg-opacity-30 border-top border-secondary border-opacity-25 text-center py-3">
                <small className="text-muted">© {new Date().getFullYear()} Doãn Quảng. All Rights Reserved.</small>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;