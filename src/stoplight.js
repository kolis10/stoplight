import React from "react";
import classnames from "classnames";

export function Stoplight(props) {


  return (
    <div className="Stoplight">
      <div className="pole" />
      <div className="lights">
        <div
          onClick={() => props.onClick("red")}
          className={classnames("red", { ison: props.light === "red" })}
        />
        <div
          onClick={() => props.onClick("yellow")}
          className={classnames("yellow", { ison: props.light === "yellow" })}
        />
        <div
          onClick={() => props.onClick("green")}
          className={classnames("green", { ison: props.light === "green" })}
        />
      </div>
    </div>
  );
}
