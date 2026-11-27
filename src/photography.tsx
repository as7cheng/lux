import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PhotographyPage from "./pages/PhotographyPage";
import { exhibitions, ExhibitionRoom } from "./pages/Exhibitions";
import "./photography.css";

const slug = new URLSearchParams(location.search).get("exhibition");
const exhibition = exhibitions.find(item => item.slug === slug);
if (exhibition) document.title = exhibition.title + " — Anthony-lux";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {exhibition ? <ExhibitionRoom exhibition={exhibition} /> : <PhotographyPage />}
  </StrictMode>,
);
