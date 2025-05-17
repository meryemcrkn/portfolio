import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>Hakkımda</h2>
          <p>
          Bilgisayar Mühendisliği öğrencisi olarak teknolojiye ve yazılıma olan ilgim, beni her zaman öğrenmeye, araştırmaya ve üretmeye teşvik ediyor. Farklı alanlardaki deneyimlerimi birleştirerek hem teknik bilgi hem de problem çözme becerisi açısından kendimi sürekli geliştirmeye çalışıyorum
          </p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h3>Eğitim</h3>
            <p>
            Balıkesir Üniversitesi – Bilgisayar Mühendisliği
            4. sınıf öğrencisiyim. Eğitim hayatım boyunca öğrendiğim teorik bilgileri gerçek dünya problemlerine uygulamaya özen gösterdim. Geliştirdiğim projelerle yapay zeka, görüntü işleme ve web geliştirme gibi farklı alanlarda deneyim kazandım.
            </p>
          </div>

          <div className="about-section">
            <h3>İlgi Alanları</h3>
            <p>
            Yapay zeka ve makine öğrenmesi konularını yakından takip ediyor, özellikle görüntü işleme ve bilgisayarla görme üzerine projeler geliştiriyorum.
            YOLOv8, OpenCV ve TensorFlow gibi araçlarla nesne tanıma, görüntü sınıflandırma ve görüntü analizi üzerine uygulamalar geliştirdim.

            Makine öğrenmesiyle çalıştığım projelerde farklı veri türlerini analiz ettim; örneğin bir çalışmamda protein verileri üzerinde sınıflandırma algoritmaları kullanarak biyoinformatik alanında deneyim kazandım.

            Ayrıca mobil geliştirme alanında da projeler ürettim. React Native kullanarak kamera görüntüsünü işleyen, canlı verilerle çalışan ve gerçek zamanlı analiz yapan uygulamalar üzerinde çalıştım.

            Bunların dışında web teknolojilerine de ilgi duyuyorum. Modern ve kullanıcı odaklı arayüzler oluşturmak için HTML, CSS, JavaScript, React ve Next.js gibi frontend araçlarını kullanıyorum.
            </p>
          </div>

          <div className="about-section">
            <h3>Hedefler</h3>
            <p>
            Yapay zeka ve görüntü işleme alanlarında derinleşerek, bu teknolojileri gerçek dünya problemlerine yenilikçi ve etkili çözümler sunmak için kullanmayı hedefliyorum. Özellikle sağlık, ulaşım ve güvenlik gibi sektörlerde yapay zekanın potansiyelini ortaya çıkaracak projelerde yer almak istiyorum.

          Aynı zamanda web geliştirme becerilerimi geliştirerek, kullanıcı deneyimini ön planda tutan, erişilebilir ve performanslı dijital platformlar yaratmayı amaçlıyorum.


            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
