import { FaTrophy, FaMedal, FaFileAlt } from "react-icons/fa";

function Achievements() {

  const achievements = [

    {
      title: "Research Paper Publication",
      desc: "Published research paper on Secure Travel Router focusing on enhancing privacy and security while using public WiFi networks.",
      icon: <FaFileAlt />,
      link: "https://lnkd.in/g9PnxGJw",   // ✅ paper link
      linkText: "Read Published Paper →"
    },

    {
      title: "Startup Mania Finalist",
      desc: "Selected as finalist presenting the Travel Router project — a secure public WiFi solution improving user privacy through encrypted routing.",
      icon: <FaMedal />,
      link: "/startup-mania-proof.jpg",   // ✅ place PDF inside public folder
      linkText: "View Proof (PDF) →"
    },

    {
      title: "Ruby Fest Winner",
      desc: "Won Ruby Fest technical competition showcasing the Travel Router project with innovative security implementation.",
      icon: <FaTrophy />,
      link: "/ruby-fest-proof.jpg",       // ✅ place PDF inside public folder
      linkText: "View Proof (PDF) →"
    },

  ];

  return (
    <section id="achievements" style={styles.section}>
      <div style={styles.container}>

        <h2 style={styles.heading}>Achievements</h2>
        <div style={styles.fullLine}></div>
        <div className="achGrid" style={styles.grid}>
          {achievements.map((a) => (
            <div key={a.title} style={styles.card}>

              <div style={styles.iconWrap}>{a.icon}</div>

              <h3 style={styles.title}>{a.title}</h3>
              <p style={styles.desc}>{a.desc}</p>

              {a.link && (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.proof}
                >
                  {a.linkText}
                </a>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const styles = {

  section: { padding: "80px 0" },

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
    gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
    gap: "24px",
  },

  card: {
    border: "1px solid rgba(201,162,39,0.35)",
    borderRadius: "14px",
    padding: "22px",
    background: "rgba(255,255,255,0.02)",
  },

  iconWrap: {
    width: "42px",
    height: "42px",
    borderRadius: "12px",
    background: "rgba(201,162,39,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#C9A227",
    fontSize: "18px",
    marginBottom: "14px",
  },

  title: {
    fontSize: "16px",
    fontWeight: 800,
    color: "#ffffff",
    marginBottom: "10px",
  },

  desc: {
    fontSize: "13.5px",
    lineHeight: "1.7",
    color: "#cccccc",
    marginBottom: "14px",
  },

  proof: {
    color: "#C9A227",
    fontWeight: 700,
    fontSize: "13px",
    textDecoration: "none",
  },
};

export default Achievements;
