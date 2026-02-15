import "./projects.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  const projects = [
    {
      title: "Turf Booking System",
      desc: "Responsive web application for booking turfs with availability checking and reservations.",
      tech: "HTML, CSS, JavaScript",
      live: "https://divyawebdesign.github.io/turf/",
      code: "https://github.com/divyawebdesign/turf",
    },
    {
      title: "Equipment Booking System",
      desc: "Equipment reservation platform with booking flow and user-friendly UI.",
      tech: "HTML, CSS, JavaScript, PHP, MySQL",
      live: "",
      code: "https://github.com/divyawebdesign/equipmentbooking",
    },
    {
      title: "Civic Reporting System",
      desc: "Issue reporting web app for citizens to raise complaints and track status with a structured UI.",
      tech: "TypeScript, JavaScript, CSS",
      live: "",
      code: "https://github.com/divyawebdesign/civic-reporting-system",
    },
    {
      title: "Travel Router (Secure Public Wi-Fi)",
      desc: "Travel Wi-Fi router prototype using Raspberry Pi and OpenWRT with VPN routing for secure browsing.",
      tech: "Raspberry Pi 3B, OpenWRT, VPN",
      live: "",
      paper: "https://pubs.aip.org/aip/acp/article-abstract/3345/1/020361/3376897/Enhancing-user-privacy-and-WiFi-security-of-travel?redirectedFrom=fulltext",
    },
    {
      title: "CIA Triad Suite",
      desc: "File integrity + security utilities focusing on confidentiality, integrity, and availability using Python.",
      tech: "Python",
      live: "",
      code: "https://github.com/divyawebdesign/file_integrity_suite",
    },
  ];

  return (
    <section id="projects" style={styles.projects}>
      <div className="projectsContainer" style={styles.container}>
        <h2 style={styles.heading}>Projects</h2>
        <div style={styles.fullLine}></div>

        <div className="projectsGrid" style={styles.grid}>
          {projects.map((p) => (
            <div
              key={p.title}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,162,39,0.75)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,162,39,0.35)";
              }}
            >
              {/* ✅ Content wrapper (push buttons to bottom) */}
              <div style={styles.content}>
                <h3 style={styles.cardTitle}>{p.title}</h3>
                <p style={styles.cardDesc}>{p.desc}</p>

                <p style={styles.techLabel}>
                  <span style={styles.techBold}>Tech:</span> {p.tech}
                </p>
              </div>

              <div style={styles.btnRow}>
  {p.live ? (
    <a
      style={styles.btnPrimary}
      href={p.live}
      target="_blank"
      rel="noreferrer"
    >
      <FiExternalLink style={{ fontSize: "16px" }} />
      Live Demo
    </a>
  ) : (
                  <div style={styles.emptySpace}></div>
                )}

                {p.code && (
                  <a
                    style={styles.codeLink}
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub style={{ fontSize: "18px" }} />
                    <span>Code</span>
                  </a>
                )}

                {p.paper && (
                  <a
                    style={styles.codeLink}
                    href={p.paper}
                    target="_blank"
                    rel="noreferrer"
                  >
                    📄 <span>Paper</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  projects: {
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
    alignItems: "stretch",
  },

  card: {
    border: "1px solid rgba(201,162,39,0.35)",
    borderRadius: "12px",
    padding: "22px",
    background: "rgba(255,255,255,0.02)",
    transition: "border-color 0.25s ease",
    display: "flex",
    flexDirection: "column",
    minHeight: "260px",
  },

  content: {
    flex: 1,
  },

  cardTitle: {
    fontSize: "18px",
    fontWeight: 800,
    marginBottom: "10px",
    color: "#ffffff",
  },

  cardDesc: {
    fontSize: "14px",
    lineHeight: "1.7",
    color: "#cccccc",
    marginBottom: "14px",
  },

  techLabel: {
    fontSize: "13px",
    color: "#cccccc",
    marginBottom: "18px",
  },

  techBold: {
    fontWeight: 800,
    color: "#C9A227",
  },

  btnRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
  },

  btnPrimary: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    textAlign: "center",
    padding: "10px 12px",
    borderRadius: "8px",
    backgroundColor: "#C9A227",
    color: "#0b0b0f",
    fontWeight: 800,
    textDecoration: "none",
    fontSize: "13px",
  },

  emptySpace: {
    flex: 1,
  },

  codeLink: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 800,
    fontSize: "13px",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid rgba(201,162,39,0.35)",
    background: "rgba(255,255,255,0.02)",
  },
};

export default Projects;
