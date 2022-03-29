import React, { useEffect } from "react";
import "./app.css";
function App() {
  //  Change const to modify the TEXT
  const yourText = "Circle-text-animated";

  useEffect(() => {
    let text = document.querySelector(".text");
    // Separate characters by <span>
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

    let element = document.querySelectorAll("span");
    for (let i = 0; i < element.length; i++) {
      // Change value of integer to modify the letter spacing. More characters in text, less value!
      element[i].style.transform = "rotate(" + i * 18 + "deg)";
    }
  });
  return (
    <div>
      <section>
        <h2 className="text">{yourText}</h2>
      </section>
    </div>
  );
}

export default App;
