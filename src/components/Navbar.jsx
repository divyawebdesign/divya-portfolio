import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  const items = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Certifications",
    "Projects",
    "Contact",
  ];

  const idMap = {
    Home: "home",
    About: "about",
    Skills: "skills",
    Education: "education",
    Certifications: "certifications",
    Projects: "projects",
    Contact: "contact",
  };

  // ✅ responsive
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 900;
      setIsMobile(mobile);
      if (!mobile) setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ close when clicking outside
  useEffect(() => {
    const close = () => setOpen(false);
    if (open) window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [open]);

  // ✅ stop background scroll when menu open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // ✅ scroll spy (auto active highlight)
  useEffect(() => {
    const sectionEntries = items
      .map((name) => {
        const id = idMap[name];
        const el = document.getElementById(id);
        return { name, el };
      })
      .filter((x) => x.el);

    if (sectionEntries.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick section with highest visibility
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const found = sectionEntries.find((s) => s.el === visible[0].target);
          if (found) setActive(found.name);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65],
      }
    );

    sectionEntries.forEach((s) => observer.observe(s.el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (item) => {
    setActive(item);

    const target = document.getElementById(idMap[item]);
    if (target) target.scrollIntoView({ behavior: "smooth" });

    if (isMobile) setOpen(false);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        {/* Left: Logo */}
        <div
          style={styles.logo}
          onClick={() => scrollToSection("Home")}
          role="button"
        >
          Divya
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <ul style={styles.menu}>
            {items.map((item) => (
              <li
                key={item}
                style={{
                  ...styles.menuItem,
                  color: active === item ? "#C9A227" : "#ffffff",
                }}
                onClick={() => scrollToSection(item)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#C9A227";
                  e.currentTarget.querySelector("span").style.width = "100%";
                }}
                onMouseLeave={(e) => {
                  if (active !== item) e.currentTarget.style.color = "#ffffff";
                  if (active !== item)
                    e.currentTarget.querySelector("span").style.width = "0%";
                }}
              >
                {item}
                <span
                  style={{
                    ...styles.underline,
                    width: active === item ? "100%" : "0%",
                  }}
                />
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <div
            style={styles.hamburger}
            aria-label="Menu"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
          >
            <div
              style={{
                ...styles.bar,
                transform: open ? "rotate(45deg) translateY(6px)" : "none",
              }}
            />
            <div
              style={{
                ...styles.bar,
                opacity: open ? 0 : 1,
              }}
            />
            <div
              style={{
                ...styles.bar,
                transform: open ? "rotate(-45deg) translateY(-6px)" : "none",
              }}
            />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && open && (
        <div
          style={styles.mobileOverlay}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={styles.mobileMenu}>
            {items.map((item) => (
              <div
                key={item}
                style={{
                  ...styles.mobileItem,
                  color: active === item ? "#C9A227" : "#ffffff",
                }}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    background: "rgba(11, 11, 15, 0.55)",
    backdropFilter: "blur(10px)",
  },

  inner: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "16px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "18px",
  },

  logo: {
    fontSize: "20px",
    fontWeight: 700,
    letterSpacing: "0.5px",
    color: "#ffffff",
    cursor: "pointer",
    userSelect: "none",
  },

  menu: {
    display: "flex",
    listStyle: "none",
    gap: "26px",
    alignItems: "center",
    padding: 0,
    margin: 0,
  },

  menuItem: {
    position: "relative",
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "0.3px",
    cursor: "pointer",
    transition: "color 0.25s ease",
    paddingBottom: "6px",
    userSelect: "none",
  },

  underline: {
    position: "absolute",
    left: 0,
    bottom: 0,
    height: "2px",
    backgroundColor: "#C9A227",
    transition: "width 0.25s ease",
  },

  hamburger: {
    width: "40px",
    height: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "6px",
    cursor: "pointer",
  },

  bar: {
    height: "2px",
    width: "22px",
    backgroundColor: "#C9A227",
    borderRadius: "2px",
    marginLeft: "auto",
    transition: "all 0.25s ease",
  },

  mobileOverlay: {
    padding: "0 40px 16px",
  },

  mobileMenu: {
    border: "1px solid rgba(201,162,39,0.25)",
    borderRadius: "14px",
    background: "rgba(0,0,0,0.55)",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  mobileItem: {
    fontSize: "14px",
    fontWeight: 700,
    cursor: "pointer",
    userSelect: "none",
  },
};

export default Navbar;
