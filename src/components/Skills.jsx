import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiReact, SiPhp, SiMysql, SiMongodb, SiFigma } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {
  const categories = [
  "All",
  "Programming",
  "Database",
  "Tools",
];


  const allSkills = [
  { name: "HTML", category: "Programming", icon: <FaHtml5 color="#E44D26" /> },
  { name: "CSS", category: "Programming", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", category: "Programming", icon: <FaJsSquare color="#F7DF1E" /> },
  { name: "React", category: "Programming", icon: <SiReact color="#61DAFB" /> },
  { name: "PHP", category: "Programming", icon: <SiPhp color="#777BB4" /> },
  { name: "Node.js", category: "Programming", icon: <FaNodeJs color="#3C873A" /> },

  { name: "MySQL", category: "Database", icon: <SiMysql color="#00758F" /> },
  { name: "MongoDB", category: "Database", icon: <SiMongodb color="#47A248" /> },

  { name: "Figma", category: "Tools", icon: <SiFigma color="#F24E1E" /> },
  { name: "VS Code", category: "Tools", icon: <VscVscode color="#007ACC" /> },
];


  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === active);

  return (
    <section id="skills" style={styles.skills}>
      <div style={styles.container}>
        <h2 style={styles.heading}>My Skills</h2>
        <div style={styles.fullLine}></div>

        {/* CATEGORY TABS */}
        <div style={styles.tabs}>
  {categories.map((cat) => (
    <div
      key={cat}
      style={{
        ...styles.tabItem,
        color: active === cat ? "#C9A227" : "#ffffff",
      }}
      onClick={() => setActive(cat)}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#C9A227";
        e.currentTarget.querySelector("span").style.width = "100%";
      }}
      onMouseLeave={(e) => {
        if (active !== cat) e.currentTarget.style.color = "#ffffff";
        if (active !== cat) e.currentTarget.querySelector("span").style.width = "0%";
      }}
    >
      {cat}
      <span
        style={{
          ...styles.tabUnderline,
          width: active === cat ? "100%" : "0%",
        }}
      />
    </div>
  ))}
</div>


        {/* SKILLS GRID */}
        <div style={styles.row}>
          {filtered.map((skill) => (
            <div
              key={skill.name}
              style={styles.skillCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#C9A227";
                e.currentTarget.style.boxShadow =
                  "0 8px 22px rgba(0,0,0,0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,162,39,0.35)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span style={styles.icon}>{skill.icon}</span>
              <span style={styles.skillText}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  skills: {
    padding: "80px 0",
  },
  container: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "0 40px",
  },

  heading: {
    fontSize: "34px",
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

  tabs: {
  display: "flex",
  flexWrap: "wrap",
  gap: "26px",
  marginBottom: "26px",
  alignItems: "center",
},

tabItem: {
  position: "relative",
  fontSize: "14px",
  fontWeight: 600,
  letterSpacing: "0.3px",
  cursor: "pointer",
  paddingBottom: "8px",
  transition: "color 0.25s ease",
},

tabUnderline: {
  position: "absolute",
  left: 0,
  bottom: 0,
  height: "2px",
  backgroundColor: "#C9A227",
  transition: "width 0.25s ease",
},


  row: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
    gap: "14px",
    width: "100%",
  },


  skillCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    padding: "14px 18px",
    minWidth: "190px",
    borderRadius: "10px",
    border: "1px solid rgba(201,162,39,0.35)",
    background: "rgba(255,255,255,0.02)",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 700,
    cursor: "default",
    transition: "all 0.25s ease",
  },

  icon: {
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
  },

  skillText: {
    fontSize: "13.5px",
    letterSpacing: "0.2px",
  },
};

export default Skills;
