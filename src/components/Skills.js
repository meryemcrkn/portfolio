import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Yeteneklerim</h2>
          <p>
            Farklı programlama dilleri ve teknolojilerde edindiğim deneyimler
          </p>
        </div>

        <div className="skills-content">
          {/* Programlama Dilleri */}
          <div className="skills-category">
            <h3>Programlama Dilleri</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-info">
                  <h4>Python</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <p>Yapay zeka, görüntü işleme ve veri analizi projeleri</p>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <h4>C#</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <p>Nesne yönelimli programlama ve masaüstü uygulamaları</p>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <h4>JavaScript</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <p>Web geliştirme ve modern frontend uygulamaları</p>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <h4>Java</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <p>Temel düzeyde nesne yönelimli programlama</p>
              </div>
            </div>
          </div>

          {/* Yapay Zeka & Görüntü İşleme Araçları */}
          <div className="skills-category">
            <h3>Yapay Zeka & Görüntü İşleme Araçları</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-info">
                  <h4>YOLOv8</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <p>Nesne tespiti ve görüntü işleme projeleri</p>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <h4>OpenCV</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <p>Görüntü işleme ve bilgisayarlı görü uygulamaları</p>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <h4>TensorFlow</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <p>Derin öğrenme ve yapay zeka modelleri</p>
              </div>
            </div>
          </div>

          {/* Web Teknolojileri */}
          <div className="skills-category">
            <h3>Web Teknolojileri</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-info">
                  <h4>HTML5</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <p>Semantik yapı ve modern web standartları</p>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <h4>JavaScript</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <p>Modern JavaScript ve ES6+ özellikleri</p>
              </div>

              <div className="skill-item">
                <div className="skill-info">
                  <h4>React</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <p>Modern UI geliştirme ve state yönetimi</p>
              </div>
            </div>
          </div>

          {/* Mobil Geliştirme */}
          <div className="skills-category">
            <h3>Mobil Geliştirme</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-info">
                  <h4>React Native</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <p>Cross-platform mobil uygulama geliştirme</p>
              </div>
            </div>
          </div>

          {/* Veritabanı */}
          <div className="skills-category">
            <h3>Veritabanı</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-info">
                  <h4>SQL</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <p>Veritabanı tasarımı ve sorgulama</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
