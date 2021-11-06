import { useState } from "react";
import "../assets/styles/flipcards.scss";
import cn from "classnames";
import { ReplyFill as Icon } from "react-bootstrap-icons";

function FlipCard({ card: { id, variant, front, back } }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (variant === "click") {
      setShowBack(!showBack);
    }
  }

  function handleFocus() {
    if (variant === "focus") {
      setShowBack(true);
    }
  }

  function handleBlur() {
    if (variant === "focus") {
      setShowBack(false);
    }
  }

  return (
    <div
      tabIndex={id}
      className={cn("flip-card-outer", { hover: variant === "hover" })}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div className={cn("flip-card-inner", { showBack })}>
        <div
          className="card front"
          style={{
            backgroundImage: `linear-gradient(#00000000, #00000050), url(${front.background})`,
          }}
        >
          <div className="card-body position-relative d-flex justify-content-center align-items-center">
            <div
              className="
              w3-display-bottomleft w3-container w3-black w3-padding-16
            "
            >
              <h4>{front.title}</h4>
            </div>
            <div className="icon">
              <Icon size={15} />
            </div>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex flex-column align-items-center">
            <img src={back.image} alt={back.brand} height={"30%"} />
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p className="brand">{back.heading}</p>
              <p>{back.paragraph}</p>
            </div>
            <div className="icon">
              <Icon size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
