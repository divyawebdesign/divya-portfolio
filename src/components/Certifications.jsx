import "./certifications.css";
import { FaCertificate } from "react-icons/fa";

function Certifications() {
  const certs = [
    {
      title: "Web Development Bootcamp",
      platform: "Udemy",
      year: "2024",
    },
    {
      title: "UI/UX Design (Figma)",
      platform: "Udemy",
      year: "2024",
    },
  ];

  return (
    <section id="certifications" style={styles.section}>
      <div className="certContainer" style={styles.container}>
        <h2 style={styles.heading}>Certifications</h2>
        <div style={styles.fullLine}></div>

        <div className="certGrid" style={styles.grid}>
          {certs.map((c) => (
            <div
              key={c.title}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,162,39,0.75)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,162,39,0.35)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={styles.iconWrap}>
                <FaCertificate style={styles.icon} />
              </div>

              <h3 style={styles.title}>{c.title}</h3>
              <p style={styles.meta}>
                {c.platform} • {c.year}
              </p>
            </div>
          ))}
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
    maxWidth: "900px",
  },

  card: {
    border: "1px solid rgba(201,162,39,0.35)",
    borderRadius: "14px",
    padding: "22px",
    background: "rgba(255,255,255,0.02)",
    transition: "all 0.25s ease",
  },

  iconWrap: {
    width: "42px",
    height: "42px",
    borderRadius: "12px",
    background: "rgba(201,162,39,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "14px",
  },

  icon: {
    color: "#C9A227",
    fontSize: "18px",
  },

  title: {
    fontSize: "15.5px",
    fontWeight: 800,
    color: "#ffffff",
    marginBottom: "8px",
  },

  meta: {
    fontSize: "13.5px",
    color: "#cccccc",
  },
};

export default Certifications;
