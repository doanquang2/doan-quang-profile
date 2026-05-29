import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Đường dẫn lấy các file ảnh từ thư mục public
  const logoUrl = './Logo.png'; 
  const logoTruongUrl = './LogoTruong.png';
  const avatarUrl = './Avatar.jpg'; // Đường dẫn ảnh chân dung admin

  // CSS chặn bôi đen, chặn copy tuyệt đối bảo vệ bản quyền hồ sơ
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
          <div className="col-md-10 col-lg-9">
            
            {/* Card chính phong cách Dashboard cao cấp */}
            <div className="card bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 shadow-lg overflow-hidden position-relative">
              
              {/* Thanh hiệu ứng LED chạy ngầm phía trên (Màu cam LHU phối Xanh IoT) */}
              <div className="position-absolute top-0 start-0 w-100" style={{ height: '4px', background: 'linear-gradient(90deg, #fd7e14, #0d6efd, #20c997)' }}></div>
              
              <div className="card-body p-4 p-md-5">
                
                {/* PHẦN 1: HEADER & LOGO ADMIN */}
                <div className="row align-items-center g-4 mb-4">
                  {/* Cột trái: Ảnh chân dung Admin */}
                  <div className="col-md-4 text-center">
                    <div className="d-inline-block p-1 rounded-circle bg-gradient border border-3 border-warning shadow-lg" style={{ width: '160px', height: '160px', overflow: 'hidden' }}>
                      <img 
                        src={avatarUrl} 
                        alt="Trần Doãn Quảng" 
                        className="w-100 h-100 object-fit-cover rounded-circle"
                        draggable="false"
                        onError={(e) => { e.target.src = logoUrl; }} // Backup nếu thiếu ảnh
                      />
                    </div>
                  </div>
                  
                  {/* Cột phải: Tên & Logo IDQT */}
                  <div className="col-md-8 text-center text-md-start">
                    <div className="mb-2 d-inline-block bg-black bg-opacity-40 p-2 rounded-3 border border-secondary border-opacity-25">
                      <img 
                        src={logoUrl} 
                        alt="IDQT Logo" 
                        style={{ maxHeight: '60px', objectFit: 'contain' }}
                        draggable="false"
                      />
                    </div>
                    <h1 className="fw-black tracking-wide text-uppercase mb-1 text-white h2" style={{ letterSpacing: '1px' }}>
                      Trần Doãn Quảng
                    </h1>
                    <p className="text-warning fw-bold mb-0 text-uppercase small style-tracking" style={{ letterSpacing: '1.5px', color: '#fd7e14 !important' }}>
                      Kỹ sư Công nghệ kỹ thuật điều khiển và tự động hóa
                    </p>
                  </div>
                </div>

                {/* PHẦN 2: PROFILE DASHBOARD (Hệ thống thông số kỹ thuật trực quan) */}
                <div className="mb-4">
                  <div className="row g-3">
                    {/* Thống kê 1: Dự án lõi */}
                    <div className="col-6 col-sm-3">
                      <div className="p-3 bg-black bg-opacity-40 rounded-3 border border-success border-opacity-25 text-center">
                        <div className="text-muted small text-uppercase" style={{ fontSize: '10px' }}>Hệ thống PLC</div>
                        <div className="h3 fw-bold text-success my-1">SIEMENS</div>
                        <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 unintended-small" style={{ fontSize: '10px' }}>MASTERED</span>
                      </div>
                    </div>
                    {/* Thống kê 2: Vi điều khiển */}
                    <div className="col-6 col-sm-3">
                      <div className="p-3 bg-black bg-opacity-40 rounded-3 border border-info border-opacity-25 text-center">
                        <div className="text-muted small text-uppercase" style={{ fontSize: '10px' }}>Chipset / MCU</div>
                        <div className="h3 fw-bold text-info my-1">ARM STM32</div>
                        <span className="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25 unintended-small" style={{ fontSize: '10px' }}>HARDCORE</span>
                      </div>
                    </div>
                    {/* Thống kê 3: Nền tảng nhúng */}
                    <div className="col-6 col-sm-3">
                      <div className="p-3 bg-black bg-opacity-40 rounded-3 border border-warning border-opacity-25 text-center">
                        <div className="text-muted small text-uppercase" style={{ fontSize: '10px' }}>Kết nối IoT</div>
                        <div className="h3 fw-bold text-warning my-1">ESP32</div>
                        <span className="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 unintended-small" style={{ fontSize: '10px' }}>ACTIVE</span>
                      </div>
                    </div>
                    {/* Thống kê 4: Trạng thái hệ thống */}
                    <div className="col-6 col-sm-3">
                      <div className="p-3 bg-black bg-opacity-40 rounded-3 border border-danger border-opacity-25 text-center">
                        <div className="text-muted small text-uppercase" style={{ fontSize: '10px' }}>Tư duy lập trình</div>
                        <div className="h3 fw-bold text-danger my-1">HIGH-END</div>
                        <span className="badge bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25 unintended-small" style={{ fontSize: '10px' }}>NON-STOP</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PHẦN 3: ĐOẠN GIỚI THIỆU BẢN THÂN (Được trau chuốt chuẩn chuyên gia) */}
                <div className="mb-4 p-4 rounded-3 bg-black bg-opacity-30 border border-secondary border-opacity-25 position-relative overflow-hidden">
                  <div className="position-absolute end-0 bottom-0 opacity-05" style={{ fontSize: '120px', pointerEvents: 'none', transform: 'translate(20px, 40px)', color: 'rgba(255,255,255,0.03)', fontWeight: 'bold' }}>IDQT</div>
                  <h3 className="h6 text-uppercase fw-bold text-info mb-2">Tuyên ngôn sứ mệnh</h3>
                  <p className="mb-0 text-light opacity-90 lh-lg" style={{ textJustify: 'inter-word', textAlign: 'justify' }}>
                    Tôi là <strong>Trần Doãn Quảng</strong> – một người con xứ Nghệ kiên cường với dòng máu mang niềm đam mê mãnh liệt dành cho thế giới điện tử, vi điều khiển và tự động hóa. Tôi bước vào hành trình công nghệ này với một sứ mệnh rõ ràng: cống hiến tri thức, biến những linh kiện vô tri thành giải pháp thông minh có ích cho cộng đồng. Không dừng lại ở đó, bản thân tôi luôn mang trong mình khát vọng vươn lên, không ngừng học tập và bứt phá giới hạn để đứng trên **đỉnh cao của ngành công nghệ**. Mục tiêu tối thượng của tôi là khi nhắc đến cái tên <strong>Trần Doãn Quảng</strong>, cộng đồng kỹ thuật và mọi người xung quanh đều phải trầm trồ, kính nể và ngưỡng mộ trước những thành tựu vĩ đại mà tôi kiến tạo.
                  </p>
                </div>

                {/* PHẦN 4: HỌC VẤN & LOGO TRƯỜNG */}
                <div className="mb-4">
                  <div className="p-3 rounded-3 bg-dark bg-opacity-50 border border-secondary border-opacity-25">
                    <div className="row align-items-center g-3">
                      <div className="col-sm-3 text-center text-sm-start">
                        <div className="p-2 rounded-2 bg-white d-inline-block">
                          <img 
                            src={logoTruongUrl} 
                            alt="Đại học Lạc Hồng Logo" 
                            className="img-fluid" 
                            style={{ maxHeight: '50px', objectFit: 'contain' }}
                            draggable="false"
                          />
                        </div>
                      </div>
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

                {/* PHẦN 5: CHI TIẾT KỸ NĂNG CỨNG */}
                <div>
                  <div className="row g-3">
                    {/* Khối PLC */}
                    <div className="col-sm-6">
                      <div className="p-3 h-100 rounded-3 bg-dark bg-opacity-50 border border-secondary border-opacity-25">
                        <h4 className="h6 fw-bold text-info mb-3 d-flex align-items-center">
                          <span className="me-2">💻</span> Hệ thống PLC Công nghiệp
                        </h4>
                        <div className="d-flex flex-wrap gap-2">
                          <span className="badge bg-secondary bg-opacity-40 text-white border border-secondary border-opacity-50 px-3 py-2 rounded-2">Siemens S7-1200/1500</span>
                          <span className="badge bg-secondary bg-opacity-40 text-white border border-secondary border-opacity-50 px-3 py-2 rounded-2">Mitsubishi FX/Q Series</span>
                        </div>
                      </div>
                    </div>

                    {/* Khối Vi điều khiển */}
                    <div className="col-sm-6">
                      <div className="p-3 h-100 rounded-3 bg-dark bg-opacity-50 border border-secondary border-opacity-25">
                        <h4 className="h6 fw-bold text-info mb-3 d-flex align-items-center">
                          <span className="me-2">⚡</span> Vi điều khiển & Hệ thống nhúng
                        </h4>
                        <div className="d-flex flex-wrap gap-2">
                          <span className="badge bg-secondary bg-opacity-40 text-white border border-secondary border-opacity-50 px-3 py-2 rounded-2">Lập trình ARM STM32</span>
                          <span className="badge bg-secondary bg-opacity-40 text-white border border-secondary border-opacity-50 px-3 py-2 rounded-2">ESP32 (WiFi/BLE IoT)</span>
                          <span className="badge bg-secondary bg-opacity-40 text-white border border-secondary border-opacity-50 px-3 py-2 rounded-2">Định mẫu nhanh Arduino</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Footer bản quyền hệ thống */}
              <div className="card-footer bg-black bg-opacity-30 border-top border-secondary border-opacity-25 text-center py-3">
                <small className="text-muted">© {new Date().getFullYear()} Trần Doãn Quảng - IDQT. All Rights Reserved.</small>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;