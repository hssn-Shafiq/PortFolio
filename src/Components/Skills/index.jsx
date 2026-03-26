import React, { useEffect, useRef, useState } from "react";

const SKILLS = [
  { name: "HTML", pct: 100 },
  { name: "CSS", pct: 85 },
  { name: "Bootstrap", pct: 90 },
  { name: "Tailwind", pct: 80 },
  { name: "Material UI", pct: 90 },
  { name: "JavaScript", pct: 80 },
  { name: "React JS", pct: 75 },
  { name: "Next JS", pct: 75 },
  { name: "Node JS", pct: 85 },
  { name: "PHP", pct: 80 },
  { name: "Firebase", pct: 90 },
  { name: "REST APIs", pct: 85 },
  { name: "WordPress", pct: 80 },
  { name: "Shopify", pct: 90 },
  { name: "WebFlow", pct: 85 },
  { name: "Wix", pct: 80 },
  { name: "Vite JS", pct: 70 },
];

const CIRCUMFERENCE = 2 * Math.PI * 26; // r=26

function SkillCard({ name, pct, animate }) {
  const offset = CIRCUMFERENCE - (pct / 100) * CIRCUMFERENCE;
  return (
    <div className="skill-card">
      <div className="skill-ring-wrapper">
        <svg className="skill-ring-svg" viewBox="0 0 60 60">
          <circle className="skill-ring-bg" cx="30" cy="30" r="26" />
          <circle
            className="skill-ring-fill"
            cx="30"
            cy="30"
            r="26"
            style={{
              strokeDasharray: CIRCUMFERENCE,
              strokeDashoffset: animate ? offset : CIRCUMFERENCE,
              transition: "stroke-dashoffset 1.2s ease",
            }}
          />
        </svg>
        <div className="skill-pct">{pct}%</div>
      </div>
      <span className="skill-card-name">{name}</span>
    </div>
  );
}

function Skills() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, [animated]);

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <div>
          <span>My</span> <span className="description-title">Technical Skills</span>
        </div>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.name} {...skill} animate={animated} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
