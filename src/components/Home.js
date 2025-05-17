import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Merhaba,<br />Ben Meryem ÇİRKİN</h1>
          <h2 className="subtitle">Bilgisayar Mühendisliği 4. Sınıf Öğrencisiyim.</h2>
          <p>Merhaba, ben Meryem Çirkin. Bilgisayar mühendisliği öğrencisiyim. Görüntü işleme, yapay zeka ve web geliştirme alanlarında projeler üreterek teknolojiyi farklı yönleriyle keşfetmeye çalışıyorum. Hem akıllı sistemler geliştirmeyi hem de kullanıcıya doğrudan dokunan arayüzler tasarlamayı seviyorum.
          </p>
          <div className="cta-buttons">
            <Link to="/portfolio" className="btn primary">Projelerimi Gör</Link>
            <Link to="/contact" className="btn secondary">İletişime Geç</Link>
          </div>
          <div className="social-links">
            <a href="https://github.com/meryemcrkn" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/meryem-%C3%A7irkin-961582297/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://x.com/meryem_cirkin" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/profile.jpeg" alt="Meryem Çirkin" className="profile-image" />
        </div>
      </div>
      
      <div className="features-section">
        <div className="feature">
          <i className="fas fa-code"></i>
          <h3>Web Geliştirme</h3>
          <p>Modern teknolojilerle responsive ve performanslı web siteleri</p>
          <p>Tüm cihazlarda mükemmel görünen tasarımlar</p>
        </div>
        <div className="feature">
          <i className="fas fa-brain"></i>
          <h3>Yapay Zeka & Görüntü İşleme</h3>
          <p>Derin öğrenme ve bilgisayarlı görü uygulamaları</p>
        </div>
        <div className="feature">
          <i className="fas fa-paint-brush"></i>
          <h3>UI/UX Tasarım</h3>
          <p>Kullanıcı odaklı ve modern arayüz tasarımları</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
