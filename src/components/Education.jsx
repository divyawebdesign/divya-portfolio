import "./education.css";

function Education() {
  return (
    <section id="education" style={styles.section}>
      <div className="eduContainer" style={styles.container}>
        <h2 style={styles.heading}>Education</h2>
        <div style={styles.fullLine}></div>

        <div className="eduGrid" style={styles.grid}>
          {/* COLLEGE */}
          <div className="eduCard" style={styles.card}>
            <img
              className="eduImage"
              src="https://images.shiksha.com/mediadata/images/1520420083phpyKP3vR.jpeg"
              alt="Kongu Engineering College"
              style={styles.image}
            />

            <div style={styles.content}>
              <div style={styles.topRow}>
                <h3 style={styles.title}>
                  Bachelor of Engineering – Computer Science and Design
                </h3>
                <span style={{ ...styles.status, ...styles.pursuing }}>
                  Pursuing
                </span>
              </div>

              <p style={styles.subTitle}>Kongu Engineering College</p>
              <p style={styles.location}>Perundurai, Erode</p>

              <div style={styles.metaLine}>
                <span style={styles.metaText}>2023 – 2027</span>
                <span style={styles.dot}>•</span>
                <span style={styles.metaText}>CGPA: 8.75 (till Sem 5)</span>
              </div>

              <p style={styles.desc}>
                Currently pursuing Computer Science and Design, focusing on web
                development and building responsive, user-friendly applications
                using modern frontend and backend technologies.
              </p>
            </div>
          </div>

          {/* SCHOOL */}
          <div className="eduCard" style={styles.card}>
            <img
              className="eduImage"
              src="https://content.jdmagicbox.com/comp/erode/dc/9999px424.x424.1234365000h5j4m4.dc/catalogue/bharatiya-vidya-bhavan-matriculation-higher-secondary-school-thindal-erode-schools-7xn9janray.jpg"
              alt="Bharati Vidya Bhavan"
              style={styles.image}
            />

            <div style={styles.content}>
              <div style={styles.topRow}>
                <h3 style={styles.title}>HSC</h3>
                <span style={{ ...styles.status, ...styles.completed }}>
                  Completed
                </span>
              </div>

              <p style={styles.subTitle}>
                Bharati Vidya Bhavan Matric Higher Secondary School
              </p>
              <p style={styles.location}>Thindal, Erode</p>

              <div style={styles.metaLine}>
                <span style={styles.metaText}>HSC: Computer / Maths</span>
              </div>

              <p style={styles.desc}>
                Completed schooling with strong fundamentals in mathematics and
                computer science, which helped build my logical thinking and
                problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 0",
  },
  container: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "0 40px",
  },
  heading: {
    fontSize: "28px",
    fontWeight: 800,
    color: "#ffffff",
    marginBottom: "12px",
  },
  fullLine: {
    width: "100%",
    height: "1px",
    backgroundColor: "rgba(201,162,39,0.35)",
    marginBottom: "26px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "26px",
    maxWidth: "100%",
  },

  card: {
    border: "1px solid rgba(201,162,39,0.35)",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.02)",
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "160px 1fr",
    minHeight: "220px",
  },

  image: {
    width: "160px",
    height: "100%",
    objectFit: "contain",
    backgroundColor: "rgba(0,0,0,0.55)",
    padding: "10px",
    borderRight: "1px solid rgba(255,255,255,0.06)",
  },

  content: {
    padding: "18px 18px",
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "14px",
    marginBottom: "8px",
  },

  title: {
    fontSize: "14.5px",
    fontWeight: 800,
    color: "#ffffff",
    lineHeight: "1.4",
    margin: 0,
  },

  status: {
    fontSize: "12px",
    fontWeight: 800,
    padding: "6px 10px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.14)",
    whiteSpace: "nowrap",
  },

  pursuing: {
    color: "#0b0b0f",
    backgroundColor: "#C9A227",
    border: "1px solid #C9A227",
  },

  completed: {
    color: "#ffffff",
    backgroundColor: "rgba(255,255,255,0.06)",
  },

  subTitle: {
    fontSize: "13.5px",
    fontWeight: 700,
    color: "#cccccc",
    marginBottom: "6px",
  },

  location: {
    fontSize: "13px",
    color: "#9a9a9a",
    marginBottom: "10px",
  },

  metaLine: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    alignItems: "center",
    marginBottom: "12px",
  },

  metaText: {
    fontSize: "13px",
    color: "#C9A227",
    fontWeight: 700,
  },

  dot: {
    color: "rgba(255,255,255,0.25)",
    fontWeight: 700,
  },

  desc: {
    fontSize: "13.5px",
    lineHeight: "1.75",
    color: "#cccccc",
  },
};

export default Education;
