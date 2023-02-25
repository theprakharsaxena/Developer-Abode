import React, { useEffect } from "react";

const Tagmanager: React.FC = () => {
  useEffect(() => {
    (function (w, d, s, l, i) {
      (w as any)[l] = (w as any)[l] || [];
      (w as any)[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-MHQ847M");
  }, []);

  return <div></div>;
};

export default Tagmanager;
