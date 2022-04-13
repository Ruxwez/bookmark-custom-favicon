import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";

export default function App(props) {
  const location = useLocation();
  const Redirect = useNavigate();

  const [URLtoQuery, setURLtoQuery] = useState(
    new URLSearchParams(location.search).get("URLto")
  );

  const [URLFaviconQuery, setURLFaviconQuery] = useState(
    new URLSearchParams(location.search).get("URLFavicon")
  );

  let URLNew = new URL(window.location);

  useEffect(() => {
    setTimeout(() => {
      if (URLtoQuery) {
        window.location.href = URLtoQuery;
      }
    }, 1000);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    try {
      document.getElementById("favicon").href = URLFaviconQuery;
    } catch (error) {}
    // eslint-disable-next-line
  }, [location]);

  const HandlerChange = (e) => {
    e.preventDefault();
    if (!e.target.value) {
      URLNew.searchParams.delete(e.target.name);
    } else {
      URLNew.searchParams.set(e.target.name, e.target.value);

      if (e.target.name === "URLto") {
        setURLtoQuery(e.target.value);
      } else {
        setURLFaviconQuery(e.target.value);
      }
    }

    Redirect(URLNew.search, { replace: true });
  };

  return (
    <main className="Site_Main">
      <div className="Container">
        <form onChange={HandlerChange}>
          <h1>Custom Icon Bookmark</h1>
          <input
            type="text"
            name="URLto"
            defaultValue={URLtoQuery}
            placeholder="Url de la web al a que quieres ser redirigido"
          />
          <input
            type="text"
            name="URLFavicon"
            defaultValue={URLFaviconQuery}
            placeholder="El url de la web de la pagina que quieras clonar el Icono"
          />
        </form>
      </div>
    </main>
  );
}
