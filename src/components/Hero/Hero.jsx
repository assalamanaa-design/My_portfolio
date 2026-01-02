

import { useEffect, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaCode,
  FaStar,
  FaRocket,
  FaArrowDown
} from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import styles from './Hero.module.css';
import profileImg from '../../assets/programmer-girl.jpg';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Full-Stack Developer',
    'UI/UX Designer',
    'Freelancer',
    'Passionate about coding'
  ];

  // Typing effect logic
  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setTypedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  // Social links
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/assalamanaa-design/caw-labs', color: '#333' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', color: '#0077B5' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/assala_mn_/', color: '#E4405F' },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/assala.loulou.90/friends_all?locale=fr_FR', color: '#1877F2' },
    { icon: <HiMail />, href: 'assala.manaa@univ-constantine2.dz', color: '#EA4335' }
  ]

  const stats = [
    { number: '50+', label: 'Projects', icon: <FaCode /> },
    { number: '3+', label: 'Years', icon: <FaStar /> },
    { number: '100%', label: 'Satisfaction', icon: <FaRocket /> }
  ];

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          
          {/* ===== IMAGE SECTION ===== */}
          <div className={styles.image}>
            <div className={styles.imageContainer}>
              <div className={styles.avatarWrapper}>
                <img src={profileImg} alt="Assala Manaa" className={styles.avatar} />
              </div>
            </div>
          </div>

          {/* ===== TEXT SECTION ===== */}
          <div className={styles.text}>
             <div className={styles.styledHeader}>
              <div className={styles.greetingWrapper}>
                <span className={styles.creativeHello}>Hello,</span>
                <span className={styles.creativeIam}>I am</span>
              </div>
              <div className={styles.gradientLine}></div>
            </div>
            <h1 className={styles.title}>Manaa Assala</h1>

            <h2 className={styles.typed}>
              {typedText}
              <span className={styles.cursor}>|</span>
            </h2>

            <p className={styles.description}>
              I turn ideas into digital realities with clean code and design.
            </p>

            <div className={styles.buttons}>
              <a href="#contact" className={`${styles.btn} ${styles.primary}`}>
                Contact Me <FaArrowDown />
              </a>
            </div>


        
            <div className={styles.stats}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statItem}>
                  {s.icon}
                  <div>
                    <strong>{s.number}</strong>
                    <span>{s.label}</span>
                  </div>
                </div>
              ))}
            </div>


<div className={styles.social}>
              {socialLinks.map((link, i) => (
                <a key={i} href={link.href} target="_blank" rel="noreferrer" className={styles.socialLink}>
                  {link.icon}
                </a>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
