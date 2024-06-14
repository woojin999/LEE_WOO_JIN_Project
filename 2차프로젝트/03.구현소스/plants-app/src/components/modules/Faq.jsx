import React from "react";

import { faq } from "../data/faq";
// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
function Faq() {
  // const showAnswer = () => {
  //   const faq = $(".faq-box");
  //   faq.on("click", () => {
  //     console.log("asas");
  //     $(this).toggleClass("on");
  //   });
  // };

  const toggleFaq = (e) => {
    let tg = e.currentTarget;
    // console.log(tg);
    const answer = tg.lastChild;
    console.log(Event.currentTarget);
    // tg.classList.toggle("on")
    let isT = tg.classList.contains("on");
    if (isT) {
      tg.classList.remove("on");
    } else {
      $(".faq-box").removeClass("on");
      tg.classList.add("on");
    }

    // console.log(this.classList.contains("on"));
  };
  React.useEffect(() => {
    console.log("asd");
    // $(".faq-box").on("click",
    // );
  }, []);

  return (
    <>
      <div id="faq-area">
        <section className="faq-area-box">
          <div className="faq-wrap">
            <h2>FAQ</h2>
            <div className="faq-wrap-box faq-grid">
              {faq.map((v, i) => (
                <div key={i} className={"faq-box"} onClick={toggleFaq}>
                  <img src={v.isrc} alt="image" />
                  <h3>{v.question}</h3>
                  <i className="fa-solid fa-minus fa-lg"></i>
                  <i className="fa-solid fa-plus fa-lg"></i>
                  <p>{v.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Faq;
