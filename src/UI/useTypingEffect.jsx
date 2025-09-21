import { useState, useEffect } from "react";

function useTypingEffect(words, typingSpeed = 100, backSpeed = 50, delay = 1500) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // current word index
  const [subIndex, setSubIndex] = useState(0); // current character index
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= words.length) setIndex(0); // reset loop

    let timeout;

    if (!deleting && subIndex <= words[index].length) {
      // typing forward
      timeout = setTimeout(() => {
        setText(words[index].substring(0, subIndex));
        setSubIndex(subIndex + 1);
      }, typingSpeed);
    } else if (deleting && subIndex >= 0) {
      // deleting backwards
      timeout = setTimeout(() => {
        setText(words[index].substring(0, subIndex));
        setSubIndex(subIndex - 1);
      }, backSpeed);
    } else if (subIndex === words[index].length + 1 && !deleting) {
      // pause before deleting
      timeout = setTimeout(() => setDeleting(true), delay);
    } else if (subIndex < 0 && deleting) {
      // move to next word
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      setSubIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, typingSpeed, backSpeed, delay]);

  return text;
}

export default useTypingEffect;
