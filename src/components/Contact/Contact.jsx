import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import styles from './Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message envoyé avec succès !')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
      <h2>Contact Me</h2>
      
      <div className={styles.content}>
        <div className={styles.info}>
          <h3>Contact Information</h3>
          <p>
            Feel free to contact me to discuss your project or for any questions.
          </p>
          
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.contactDetails}>
                <h4>Address</h4>
                <p>Constantine, Algeria</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaPhone />
              </div>
              <div className={styles.contactDetails}>
                <h4>Phone</h4>
                <p>+213 5 41 35 73 72</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaEnvelope />
              </div>
              <div className={styles.contactDetails}>
                <h4>Email</h4>
                <p>assala.manaa@univ-constantine2.dz.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <h3>Send a Message</h3>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <div className={styles.inputField}>
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>
              
              <div className={styles.inputField}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className={styles.inputField}>
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject of the message"
              />
            </div>

            <div className={styles.inputField}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button type="submit" className="btn">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Contact