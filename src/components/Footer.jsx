import "./footer.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const moreLinks = [
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer id="contact" style={styles.footer}>
      <div className="footerContainer" style={styles.container}>
        <p style={styles.thanks}>
          Thank you for visiting my personal portfolio.
        </p>

        {/* ICONS */}
        <div style={styles.iconRow}>
          <a
            href="https://linkedin.com/in/divyacs22"
            target="_blank"
            rel="noreferrer"
            style={styles.iconBtn}
            className="footerIcon"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/divyawebdesign"
            target="_blank"
            rel="noreferrer"
            style={styles.iconBtn}
            className="footerIcon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:divyasenthilkumar22@gmail.com"
            style={styles.iconBtn}
            className="footerIcon"
            aria-label="Email"
          >
            <HiOutlineMail />
          </a>
        </div>

        {/* LINKS */}
        <div className="footerLinksGrid" style={styles.linksGrid}>
          <div>
            <h4 style={styles.linkTitle}>Quick Links</h4>
            <ul style={styles.list}>
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} style={styles.link} className="footerLink">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={styles.linkTitle}>More Links</h4>
            <ul style={styles.list}>
              {moreLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} style={styles.link} className="footerLink">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div style={styles.bottom}>
          <p style={styles.bottomText}>
            Designed by <span style={styles.gold}>Divya</span> • All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "70px 0 30px",
    borderTop: "1px solid rgba(201,162,39,0.20)",
    marginTop: "60px",
  },

  container: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "0 40px",
    textAlign: "center",
  },

  thanks: {
    fontSize: "15px",
    color: "#cccccc",
    marginBottom: "20px",
  },

  iconRow: {
    display: "flex",
    justifyContent: "center",
    gap: "14px",
    marginBottom: "36px",
  },

  iconBtn: {
    width: "46px",
    height: "46px",
    borderRadius: "12px",
    border: "1px solid rgba(201,162,39,0.35)",
    background: "rgba(255,255,255,0.02)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontSize: "20px",
    transition: "all 0.25s ease",
    textDecoration: "none",
  },

  linksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 200px)",
    justifyContent: "center",
    gap: "80px",
    margin: "0 auto",
    textAlign: "center",
    marginBottom: "40px",
  },

  linkTitle: {
    fontSize: "14px",
    fontWeight: 800,
    color: "#ffffff",
    marginBottom: "12px",
    textAlign: "center",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  },

  link: {
    fontSize: "13.5px",
    color: "rgba(255,255,255,0.70)",
    textDecoration: "none",
    transition: "color 0.25s ease",
  },

  bottom: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    paddingTop: "18px",
  },

  bottomText: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.55)",
  },

  gold: {
    color: "#C9A227",
    fontWeight: 800,
  },
};

export default Footer;
