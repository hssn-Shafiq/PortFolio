import { useEffect } from "react";

function PreLoader() {
  useEffect(() => {
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }
  }, []);
  
  return (
    <>
      <div id="preloader" />
    </>
  );
}

export default PreLoader;
