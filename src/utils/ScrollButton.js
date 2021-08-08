import { useRef } from 'react'
import React from 'react';

export const ScrollButton = () => {

  const scrollRef = useRef();

  // условия отображения кнопки скрола
  window.onscroll = () => {
    if (window.pageYOffset > 580) {
      scrollRef.current.classList.remove("hidden");
    } else {
      scrollRef.current.classList.add("hidden");
    }
  }

  // плавный scroll наверх
  function toTop() {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <img className="scroll-button hidden" src={process.env.PUBLIC_URL + "/img/scroll.png"} onClick={() => toTop()} alt="scroll" ref={scrollRef} />
    </>
  )
}