import { useEffect } from "react";

function Stats() {
  useEffect(() => {
    // PureCounter is automatically initialized by the script from the CDN
    if (window.PureCounter) {
      new window.PureCounter();
    }
  }, []);

  return (
    <>
      {/* Stats Section */}
      <section id="stats" className="stats section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-emoji-smile" />
              <div className="stats-item">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={50}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Happy Clients</p>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-journal-richtext" />
              <div className="stats-item">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={30}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Projects</p>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-headset" />
              <div className="stats-item">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={700}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Hours Of Support</p>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-people" />
              <div className="stats-item">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={15}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Hard Workers</p>
              </div>
            </div>
            {/* End Stats Item */}
          </div>
        </div>
      </section>
      {/* /Stats Section */}
    </>
  );
}

export default Stats;
