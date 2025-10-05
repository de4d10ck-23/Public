import { Link } from "react-router-dom";

function BodyStart() {
  return (
    <>
      <div className="body-start">
        <Link to="/order" style={{ textDecoration: "none" }}>
          <div>
            <img
              src="./jollibee.png"
              alt="jollibee"
              className="jollibee-png"
            ></img>
            <h1 className="text-start">Tap anywhere to begin!</h1>
          </div>
        </Link>
      </div>
    </>
  );
}

export default BodyStart;
