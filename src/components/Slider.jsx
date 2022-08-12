import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Slider = ({ people, index, setIndex }) => {
  //   const { id, image, name, title, quote } = people[index];

  return (
    <div className="section-center">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;

        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }

        if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }
        return (
          <div className={`review d-flex flex-column justify-content-center align-items-center ${position}`} key={id}>
            <div className="imgDiv">
              <img src={image} alt={title} />
            </div>

            <div>
              <h3 className="text-center">{name}</h3>
              <p className="text-center">{title}</p>
            </div>
            <div>
              <p className="mx-auto text-center w-75 mt-5">{quote}</p>
            </div>
            <span className="fs-1 text-warning">
              <FaQuoteRight />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
