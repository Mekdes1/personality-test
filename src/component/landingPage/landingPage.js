import Title from "../title/title";
import { Link } from "react-router-dom";
import Button from "../button/button";
import img from "./landingImg.jpg";
import "./landingPage.css";

export default function LandingScreen({ title, btnText }) {
  return (
    <div className="landing-screen">
      <div className="title-container">
        <Title title={title} />
      </div>
      <div className="img-container">
        <img src={img} alt="a picture of Introvert and Extrovert text" />
      </div>
      <div className="start-btn-container">
        <Link to="questions">
          <Button btnText={btnText} />
        </Link>
      </div>
    </div>
  );
}
