import { Link } from "react-router-dom";

function PageTitle({title, description, current}) {
  return (
    <>
      <>
        {/* Page Title */}
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>{title ? title : 'Want to know More '}</h1>
                  <p className="mb-0">
                   {description ? description : ` Are you looking for a flexible IT specialist to help you
                    improve your web presence and manage your online business
                    operations? Look no further.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="current">{current ? current : "Page"}</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}
      </>
    </>
  );
}

export default PageTitle;
