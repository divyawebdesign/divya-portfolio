import "./hero.css";

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div className="heroContainer heroWrap" style={styles.container}>
        
        {/* LEFT CONTENT */}
        <div style={styles.left}>
          <h1 className="heroTitle" style={styles.title}>
            Hi, I’m Divya
          </h1>

          <h2 className="heroSubtitle" style={styles.subtitle}>
            Web Developer
          </h2>

          <p style={styles.description}>
            I build clean and responsive web applications using modern web
            technologies.
          </p>

          <div className="heroBtns" style={styles.buttons}>

            {/* Download Resume */}
            <a href="/Divya-Resume.pdf" download style={{ textDecoration: "none" }}>
              <button style={styles.secondaryBtn}>
                Download Resume
              </button>
            </a>

            {/* Contact Me */}
            <a
              href="mailto:divyasenthilkumar22@gmail.com?subject=Portfolio%20Contact%20-%20Divya"
              style={{ textDecoration: "none" }}
            >
              <button style={styles.primaryBtn}>
                Contact Me
              </button>
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="heroRight" style={styles.right}>

         <div className="heroImgWrapper">
            <img
              src="/profile.png"
              alt="Divya"
              className="heroImg"
              style={styles.profileImg}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
 hero: {
  minHeight: "90vh",
  display: "flex",
  alignItems: "center",
  padding: "60px 0",
},


  container: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "0 40px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
  },

  left: {
    flex: 1,
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },

  profileImg: {
    width: "340px",
    height: "600px",
    objectFit: "cover",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 15px 60px rgba(0,0,0,0.75)",
  },

  title: {
    fontSize: "48px",
    marginBottom: "12px",
    color: "#ffffff",
  },

  subtitle: {
  fontSize: "28px",
  color: "#bbbbbb",
  marginBottom: "20px",
},


  description: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#cccccc",
    maxWidth: "520px",
    marginBottom: "32px",
  },

  buttons: {
    display: "flex",
    gap: "16px",
  },

  primaryBtn: {
    padding: "12px 28px",
    backgroundColor: "#C9A227",
    color: "#0b0b0f",
    border: "1px solid #C9A227",
    cursor: "pointer",
    fontWeight: 600,
    borderRadius: "6px",
  },

  secondaryBtn: {
    padding: "12px 28px",
    backgroundColor: "transparent",
    color: "#ffffff",
    border: "1px solid rgba(201,162,39,0.65)",
    cursor: "pointer",
    fontWeight: 600,
    borderRadius: "6px",
  },
};

export default Hero;
