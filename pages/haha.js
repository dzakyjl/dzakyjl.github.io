import React, { useState, useEffect } from "react";

const [text, setText] = useState("");
const [fullText, setFullText] = useState(
  "Your source of leading edge water and air treatment technology since 1994."
);
const [index, setIndex] = useState(0);

useEffect(() => {
  if (index < fullText.length) {
    setTimeout(() => {
      setText(text + fullText[index]);
      setIndex(index + 1);
    }, 40);
  }
}, [index]);

<h2>{text}</h2>;
