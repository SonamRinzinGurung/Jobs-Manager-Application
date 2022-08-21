import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nam
            totam dolorum deserunt maxime ipsum, voluptatibus ipsa, voluptatum
            ea in nulla corrupti exercitationem sequi laudantium ullam
            dignissimos similique nostrum enim.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job-poster" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
