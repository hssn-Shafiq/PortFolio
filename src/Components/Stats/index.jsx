import { useEffect, useRef, useState } from "react";

const STATS = [
  { icon: "bi-emoji-smile", end: 50, label: "Happy Clients" },
  { icon: "bi-journal-richtext", end: 30, label: "Projects" },
  { icon: "bi-headset", end: 700, label: "Hours Of Support" },
  { icon: "bi-people", end: 15, label: "Hard Workers" },
];

function AnimatedNumber({ end, animate }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!animate) return;
    let start = 0;
    const duration = 1500;
    const step = end / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCurrent(end);
        clearInterval(interval);
      } else {
        setCurrent(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [animate, end]);
  return <span className="stats-card-number">{current}+</span>;
}

function Stats() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setAnimated(true); });
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <>
      <section id="stats" className="stats section" ref={ref}>
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="col-lg-3 col-md-6">
                <div className="stats-card">
                  <i className={`bi ${stat.icon} stats-card-icon`} />
                  <AnimatedNumber end={stat.end} animate={animated} />
                  <p className="stats-card-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
