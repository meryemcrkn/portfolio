import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>İletişim</h2>
          <p>
            Benimle iletişime geçmek için aşağıdaki formu kullanabilir veya
            iletişim bilgilerimden bana ulaşabilirsiniz.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Konum</h3>
                <p>Balıkesir, Türkiye</p>
              </div>
            </div>

            <div className="contact-info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>E-posta</h3>
                <p>meryemcirkin18@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Telefon</h3>
                <p>İletişim için e-posta kullanabilirsiniz</p>
              </div>
            </div>

            <div className="contact-info-item">
              <i className="fas fa-clock"></i>
              <div>
                <h3>Çalışma Saatleri</h3>
                <p>Pazartesi - Cuma: 09:00 - 18:00</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">İsim</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
