import "./about.css";

function About() {
  return (
    <section id="about" style={styles.about}>
      <div className="aboutContainer" style={styles.container}>
        <h2 style={styles.heading}>About Me</h2>
        <div style={styles.fullLine}></div>

        <p style={styles.text}>
          Hi, I’m <span style={styles.highlight}>Divya</span>, a passionate{" "}
          <span style={styles.highlight}>Web Developer</span> who enjoys building
          clean, responsive, and user-friendly web applications. I work with{" "}
          <span style={styles.highlight}>HTML, CSS, JavaScript, React</span> and
          also have experience handling backend functionality using{" "}
          <span style={styles.highlight}>PHP, Node.js</span> along with databases
          like <span style={styles.highlight}>MySQL and MongoDB</span>.
        </p>

        <p style={styles.text}>
          Through academic and personal projects, I’ve gained hands-on experience
          in developing full web solutions — from UI design and component-based
          development to structured code and debugging. I focus on writing clean
          code, creating smooth user experiences, and continuously improving my
          skills by building real projects.
        </p>

        <div className="aboutPointsGrid" style={styles.points}>
          <div style={styles.pointCard}>
            <h3 style={styles.pointTitle}>What I do</h3>
            <p style={styles.pointText}>
              Build responsive websites, web apps, and UI components using modern
              frontend tools.
            </p>
          </div>

          <div style={styles.pointCard}>
            <h3 style={styles.pointTitle}>What I work with</h3>
            <p style={styles.pointText}>
              React, JavaScript, PHP, Node.js, MySQL, MongoDB, Git/GitHub, Figma.
            </p>
          </div>

          <div style={styles.pointCard}>
            <h3 style={styles.pointTitle}>My focus</h3>
            <p style={styles.pointText}>
              Clean UI, structured code, performance, and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  about: {
    padding: "80px 0",
  },

  container: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "0 40px",
  },

  heading: {
    fontSize: "32px",
    fontWeight: 800,
    color: "#ffffff",
    marginBottom: "12px",
  },

  fullLine: {
    width: "100%",
    height: "1px",
    backgroundColor: "rgba(201,162,39,0.35)",
    marginBottom: "24px",
  },

  text: {
    fontSize: "15px",
    lineHeight: "1.9",
    color: "#cccccc",
    maxWidth: "100%",
    marginBottom: "18px",
  },

  highlight: {
    color: "#C9A227",
    fontWeight: 700,
  },

  points: {
    marginTop: "34px",
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "18px",
    maxWidth: "1050px",
  },

  pointCard: {
    border: "1px solid rgba(201,162,39,0.25)",
    borderRadius: "12px",
    padding: "18px",
    background: "rgba(255,255,255,0.02)",
  },

  pointTitle: {
    fontSize: "15px",
    fontWeight: 800,
    color: "#ffffff",
    marginBottom: "10px",
  },

  pointText: {
    fontSize: "13.5px",
    lineHeight: "1.8",
    color: "#cccccc",
  },
};

export default About;
