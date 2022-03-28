import React, { Component } from "react";
import "./app.css";
import axios from "axios";

// function animation() {
const text = "Text effect";
let result = text.replace(/\S/g, "<span>$&</span>");
console.log(result);
//   const element = document.querySelectorAll("span");
//   for (let i = 0; i < element.length; i++) {
//     element[i].style.transform = "rotate(" + i + "deg)";
//   }
//   console.log(text);
// }

export default class App extends Component {
  render() {
    return (
      <div>
        <section>
          <h2 className="text">{text}</h2>
        </section>
      </div>
    );
  }
}
