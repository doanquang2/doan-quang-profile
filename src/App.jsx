import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Đường dẫn hình ảnh tĩnh từ thư mục public
  const logoUrl = './Logo.png'; 
  const logoTruongUrl = './LogoTruong.png';
  const avatarUrl = './Avatar.jpg'; 

  // Hệ thống CSS chặn tương tác để bảo vệ tuyệt đối nội dung trang web
  const uneditableStyle = {
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  };

  return (
    <div className="min-vh-100 bg-dark text-light d-flex align-items-center py-5" style={uneditableStyle}>
      <div className="container-fluid px-md-5">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            
            {/* Khung chính của Hệ thống Dashboard */}
            <div className="card bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 shadow-lg overflow-hidden position-relative">
              
              {/* Thanh LED công nghệ (Cam LHU - Xanh Cyan IoT - Xanh Lá System) */}
              <div className="position-absolute top-0 start-0 w-100" style={{ height: '4px', background: 'linear-gradient(90deg, #fd7e14, #0d6efd, #20c997)' }}></div>
              
              {/* Thân Dashboard chia làm 2 cột chính */}
              <div className="card-body p-4 p-lg-5">
                <div className="row g-4">
                  
                  {/* ================= CỘT TRÁI: NHẬN DIỆN ADMIN & HỌC VẤN ================= */}
                  <div className="col-lg-4 border-end border-secondary border-opacity-25 pe-lg-4">
                    
                    {/* Ảnh chân dung lớn */}
                    <div className="text-center mb-4">
                      <div className="d-inline-block p-1 rounded-4 bg-gradient border border-2 border-warning shadow" style={{ width: '100%', maxWidth: '240px', aspectRatio: '3/4', overflow: 'hidden' }}>
                        <img 
                          src={avatarUrl} 
                          alt="Trần Doãn Quảng" 
                          className="w-100 h-100 object-fit-cover rounded-3"
                          draggable="false"
                          onError={(e) => { e.target.src = logoUrl; }}
                        />
                      </div>
                    </div>

                    {/* Tên và chức danh chính */}
                    <div className="text-center text-lg-start mb-4">
                      <h1 className="fw-black tracking-wide text-uppercase mb-2 text-white h3" style={{ letterSpacing: '0.5px' }}>
                        Trần Doãn Quảng
                      </h1>
                      <p className="text-warning fw-bold mb-0 text-uppercase small" style={{ letterSpacing: '1px', color: '#fd7e14' }}>
                        Kỹ sư Công nghệ kỹ thuật điều khiển và tự động hóa
                      </p>
                    </div>

                    {/* Khối Logo thương hiệu cá nhân IDQT */}
                    <div className="mb-4 text-center p-3 rounded-3 bg-black bg-opacity-40 border border-secondary border-opacity-25">
                      <div className="text-muted small text-uppercase mb-2" style={{ fontSize: '10px', letterSpacing: '1px' }}>Hệ sinh thái công nghệ</div>
                      <img 
                        src={logoUrl} 
                        alt="IDQT Logo" 
                        className="img-fluid"
                        style={{ maxHeight: '70px', objectFit: 'contain' }}
                        draggable="false"
                      />
                    </div>

                    {/* Khối Học vấn & Logo Trường Đại học Lạc Hồng */}
                    <div className="p-3 rounded-3 bg-black bg-opacity-20 border border-secondary border-opacity-25">
                      <div className="d-flex align-items-center gap-3 mb-2">
                        <div className="p-1.5 rounded-2 bg-white d-inline-blockflex-shrink-0">
                          <img 
                            src={logoTruongUrl} 
                            alt="LHU Logo" 
                            style={{ maxHeight: '35px', maxWidth: '80px', objectFit: 'contain' }}
                            draggable="false"
                          />
                        </div>
                        <h4 className="h6 fw-bold mb-0 text-white text-uppercase" style={{ fontSize: '13px' }}>
                          Đại học Lạc Hồng
                        </h4>
                      </div>
                      <p className="text-muted mb-1 small" style={{ fontSize: '12px' }}>Chuyên ngành: Điều khiển & Tự động hóa</p>
                      <span className="text-info bg-info bg-opacity-10 px-2 py-0.5 rounded d-inline-block" style={{ fontSize: '10px' }}>
                        Powered by Arizona State University®
                      </span>
                    </div>

                  </div>

                  {/* ================= CỘT PHẢI: TRUNG TÂM DỮ LIỆU & NĂNG LỰC ================= */}
                  <div className="col-lg-8 ps-lg-4">
                    
                    {/* 1. HỆ THỐNG KPI DASHBOARD TRỰC QUAN (SCADA METRICS) */}
                    <div className="mb-4">
                      <div className="row g-3">
                        <div className="col-6 col-sm-3">
                          <div className="p-3 bg-black bg-opacity-40 rounded-3 border border-success border-opacity-25 text-center h-100 d-flex flex-column justify-content-center">
                            <div className="text-muted small text-uppercase" style={{ fontSize: '10px' }}>Hệ thống PLC</div>
                            <div className="h4 fw-bold text-success my-1">SIEMENS</div>
                            <div><span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25" style={{ fontSize: '9px' }}>MASTERED</span></div>
                          </div>
                        </div>
                        <div className="col-6 col-sm-3">
                          <div className="p-3 bg-black bg-opacity-40 rounded-3 border border-info border-opacity-25 text-center h-100 d-flex flex-column justify-content-center">
                            <div className="text-muted small text-uppercase" style={{ fontSize: '10px' }}>Chipset / MCU</div>
                            <div className="h4 fw-bold text-info my-1">ARM STM32</div>
                            <div><span className="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25" style={{ fontSize: '9px' }}>HARDCORE</span></div>
                          </div>
                        </div>
                        <div className="col-6 col-sm-3">
                          <div className="p-3 bg-black bg-opacity-40 rounded-3 border border-warning border-opacity-25 text-center h-100 d-flex flex-column justify-content-center">
                            <div className="text-muted small text-uppercase" style={{ fontSize: '10px' }}>Kết nối IoT</div>
                            <div className="h4 fw-bold text-warning my-1">ESP32</div>
                            <div><span className="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25" style={{ fontSize: '9px' }}>ACTIVE</span></div>
                          </div>
                        </div>
                        <div className="col-6 col-sm-3">
                          <div className="p-3 bg-black bg-opacity-40 rounded-3 border border-danger border-opacity-25 text-center h-100 d-flex flex-column justify-content-center">
                            <div className="text-muted small text-uppercase" style={{ fontSize: '10px' }}>Tư duy lập trình</div>
                            <div className="h4 fw-bold text-danger my-1">HIGH-END</div>
                            <div><span className="badge bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25" style={{ fontSize: '9px' }}>NON-STOP</span></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2. ĐOẠN GIỚI THIỆU BẢN THÂN (MISSION STATEMENT) */}
                    <div className="mb-4 p-4 rounded-3 bg-black bg-opacity-30 border border-secondary border-opacity-25 position-relative overflow-hidden">
                      <div className="position-absolute end-0 bottom-0 opacity-05" style={{ fontSize: '90px', pointerEvents: 'none', transform: 'translate(15px, 30px)', color: 'rgba(255,255,255,0.02)', fontWeight: 'bold' }}>IDQT</div>
                      <h3 className="h6 text-uppercase fw-bold text-info mb-3 d-flex align-items-center">
                        <span className="me-2">🧭</span> Tuyên ngôn sứ mệnh
                      </h3>
                      <p className="mb-0 text-light opacity-90 lh-lg small text-justify" style={{ textAlign: 'justify' }}>
                        Tôi là <strong>Trần Doãn Quảng</strong> – một người con xứ Nghệ kiên cường với dòng máu mang niềm đam mê mãnh liệt dành cho thế giới điện tử, vi điều khiển và tự động hóa. Tôi bước vào hành trình công nghệ này với một sứ mệnh rõ ràng: cống hiến tri thức, biến những linh kiện vô tri thành giải pháp thông minh có ích cho cộng đồng. Không dừng lại ở đó, bản thân tôi luôn mang trong mình khát vọng vươn lên, không ngừng học tập và bứt phá giới hạn để đứng trên <strong>đỉnh cao của ngành công nghệ</strong>. Mục tiêu tối thượng của tôi là khi nhắc đến cái tên <strong>Trần Doãn Quảng</strong>, cộng đồng kỹ thuật và mọi người xung quanh đều phải trầm trồ, kính nể và ngưỡng mộ trước những thành tựu vĩ đại mà tôi kiến tạo.
                      </p>
                    </div>

                    {/* 3. CHI TIẾT HỆ THỐNG KỸ NĂNG CỨNG */}
                    <div>
                      <h3 className="h6 text-uppercase fw-bold text-info mb-3 d-flex align-items-center">
                        <span className="me-2">⚙️</span> Khai báo thông số kỹ thuật (Skills)
                      </h3>
                      <div className="row g-3">
                        {/* Khối PLC */}
                        <div className="col-md-6">
                          <div className="p-3 h-100 rounded-3 bg-black bg-opacity-20 border border-secondary border-opacity-25">
                            <h4 className="h6 fw-bold text-white mb-3 d-flex align-items-center">
                              <span className="badge bg-success p-1 me-2" style={{ width: '6px', height: '6px', borderRadius: '50%' }}></span> 
                              Hệ thống PLC Công nghiệp
                            </h4>
                            <div className="d-flex flex-wrap gap-2">
                              <span className="badge bg-secondary bg-opacity-40 text-white border border-secondary border-opacity-50 px-2.5 py-1.5 rounded-2 small">Siemens S7-1200/1500</span>
                              <span className="badge bg-secondary bg-opacity-40 text-white border border-secondary border-opacity-50 px-2.5 py-1.5 rounded-2 small">Mitsubishi FX/Q Series</span>
                            </div>
                          </div>
                        </div>

                        {/* Khối MCU */}
                        <div className="col-md-6">
                          <div className="p-3 h-100 rounded-3 bg-black bg-opacity-20 border border-secondary border-opacity-25">
                            <h4 className="h6 fw-bold text-white mb-3 d-flex align-items-center">
                              <span className="badge bg-info p-1 me-2" style={{ width: '6px', height: '6px', borderRadius: '50%' }}></span> 
                              Vi điều khiển & Hệ thống nhúng
                            </h4>
                            <div className="d-flex flex-wrap gap-2">
                              <span className="badge bg-secondary bg-opacity-40 text-white border border-secondary border-opacity-50 px-2.5 py-1.5 rounded-2 small">Lập trình ARM STM32</span>
                              <span className="badge bg-secondary bg-opacity-40 text-white border border-secondary border-opacity-50 px-2.5 py-1.5 rounded-2 small">ESP32 (WiFi/BLE IoT)</span>
                              <span className="badge bg-secondary bg-opacity-40 text-white border border-secondary border-opacity-50 px-2.5 py-1.5 rounded-2 small">Định mẫu Arduino</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              
              {/* Chân trang hệ thống bản quyền */}
              <div className="card-footer bg-black bg-opacity-40 border-top border-secondary border-opacity-25 text-center py-3">
                <small className="text-muted">SYSTEM STATUS: ONLINE // © {new Date().getFullYear()} Trần Doãn Quảng - IDQT. All Rights Reserved.</small>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;