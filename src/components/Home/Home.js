import React from "react";
import "./style.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/register">
        <button className="button buttonRegister" type="button">
          Register
        </button>
      </Link>
    </div>
  );
}
