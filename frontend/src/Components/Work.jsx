import React, { useState } from "react";
import ProjectOne from "../assets/images/projectOne.png";
import ProjectTwo from "../assets/images/projectTwo.png";
import ProjectThree from "../assets/images/projectThree.png";
import ProjectFour from "../assets/images/projectFour.png";
import ProjectFive from "../assets/images/projectFive.png";

const Work = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Mega Construction",
      tags: [
        "React Js",
        "TailwindCSS",
        "Responsive",
        "React Routers",
        "Functionality Base",
      ],
      image: ProjectOne,
    },
    {
      id: 2,
      title: "Shop Management System",
      tags: [
        "Web Design",
        "React JS",
        "Tailwind CSS",
        "Node JS",
        "Express JS",
        "MongoDB",
        "Responsive Design",
        "UI/UX Design",
      ],
      image: ProjectTwo,
    },
    {
      id: 3,
      title: "Bitzonic",
      tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      image: ProjectThree,
    },
    {
      id: 4,
      title: "Learner - Services",
      tags: ["HTML", "CSS", "Tailwind CSS", "Responsive Design"],
      image: ProjectFour,
    },
    {
      id: 5,
      title: "HighTech – IT Solutions",
      tags: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Animated",
        "Responsive Design",
      ],
      image: ProjectFive,
    },
  ]);

  const nextSlide = () => {
    setProjects((prev) => {
      const newArr = [...prev];
      const first = newArr.shift();
      newArr.push(first);
      return newArr;
    });
  };

  const prevSlide = () => {
    setProjects((prev) => {
      const newArr = [...prev];
      const last = newArr.pop();
      newArr.unshift(last);
      return newArr;
    });
  };

  return (
    <section className="relative w-full min-h-screen bg-white py-12 flex flex-col overflow-hidden">
      {/* --- Header Section --- */}
      <div className="px-6 md:px-16 mb-12">
        <p
          className="uppercase tracking-widest text-[14px] mb-2 font-bold"
          style={{ color: "#CB8104", fontFamily: "Playfair Display, serif" }}
        >
          • OUR WORKS
        </p>

        <h2
          className="font-bold leading-tight"
          style={{
            fontSize: "42px",
            color: "#00419B",
            fontFamily: "Playfair Display, serif",
          }}
        >
          <span className="relative inline-block">
            Check Our
            <svg
              className="absolute w-full h-3 -bottom-2 left-0"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M2 7.5 C 20 2.5, 50 9.5, 98 4.5"
                stroke="#CB8104"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          Featured <span className="text-[#CB8104]">Projects</span>
        </h2>
      </div>

      {/* --- Slider Section --- */}
      <div className="grow relative">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

            .slider-container {
              position: relative;
              width: 100%;
              height: 550px;
              background: #fff;
              overflow: hidden;
            }

            .item {
              width: 200px;
              height: 300px;
              position: absolute;
              top: 50%;
              transform: translate(0, -50%);
              border-radius: 20px;
              box-shadow: 0 30px 50px rgba(0,0,0,0.2);
              background-position: 50% 50%;
              background-size: cover;
              display: inline-block;
              transition: 0.7s cubic-bezier(0.25, 1, 0.5, 1);
              cursor: pointer;
            }

            .item:nth-child(1),
            .item:nth-child(2) {
              top: 0;
              left: 0;
              transform: translate(0, 0);
              border-radius: 0;
              width: 100%;
              height: 100%;
            }

            .item:nth-child(3) { left: 70%; }
            .item:nth-child(4) { left: calc(70% + 230px); }
            .item:nth-child(5) { left: calc(70% + 460px); }
            .item:nth-child(n+6) { left: calc(70% + 690px); opacity: 0; }

            .content {
              position: absolute;
              top: 50%;
              left: 80px;
              width: 450px;
              text-align: left;
              color: #fff;
              transform: translate(0, -50%);
              display: none;
              z-index: 20;
            }

            .item:nth-child(2)::after {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(to right, rgba(0,0,0,0.6), transparent);
              pointer-events: none;
            }

            .item:nth-child(2) .content {
              display: block;
            }

            .content .name {
              font-size: 55px;
              font-weight: 700;
              text-transform: uppercase;
              font-family: 'Playfair Display', serif;
              color: white;
              opacity: 0;
              line-height: 1.1;
              animation: animateText 0.8s ease-in-out 1 forwards;
            }

            .content .tags {
              margin-top: 15px;
              margin-bottom: 30px;
              opacity: 0;
              display: flex;
              gap: 12px;
              flex-wrap: wrap;
              animation: animateText 0.8s ease-in-out 0.2s 1 forwards;
            }

            .tag-pill {
              padding: 6px 18px;
              border: 1px solid #CB8104;
              border-radius: 50px;
              font-size: 13px;
              background: rgba(203, 129, 4, 0.65);
              color: #fff;
            }

            /* --- UPDATED BUTTON WITH GOLDEN SLIDE HOVER --- */
            .view-btn {
              position: relative;
              padding: 14px 35px;
              border: 2px solid #00419B;
              cursor: pointer;
              font-weight: 600;
              border-radius: 50px;
              background: #00419B;
              color: white;
              opacity: 0;
              overflow: hidden;
              z-index: 1;
              transition: color 0.4s ease;
              animation: animateText 0.8s ease-in-out 0.4s 1 forwards;
            }

            .view-btn::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: #CB8104;
              transition: transform 0.5s ease;
              z-index: -1;
            }

            .view-btn:hover::before {
              transform: translateX(100%);
            }

            .view-btn:hover {
                border-color: #CB8104;
            }

            @keyframes animateText {
              from { opacity: 0; transform: translateY(40px); filter: blur(10px); }
              to { opacity: 1; transform: translateY(0); filter: blur(0); }
            }

            /* --- ARROW BUTTONS --- */
            .nav-btns {
              width: 100%;
              position: absolute;
              bottom: 20px;
              display: flex;
              justify-content: center;
              gap: 15px;
              z-index: 50;
            }

            .nav-btns button {
              width: 50px;
              height: 50px;
              border-radius: 12px;
              border: 1px solid rgba(0,0,0,0.1);
              cursor: pointer;
              background: rgba(255,255,255,0.9);
              transition: 0.3s;
              font-size: 30px;
              color: #00419B;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            }

            .nav-btns button:hover {
              background: #00419B;
              color: white;
              transform: translateY(-2px);
            }

            @media (max-width: 768px) {
              .content { left: 30px; width: 85%; margin-top: 50px; }
              .content .name { font-size: 35px; }
              .item:nth-child(3) { left: 40%; top: 20%; width: 140px; height: 200px; }
              .item:nth-child(4), .item:nth-child(5) { display: none; }
            }
          `}
        </style>

        <div className="slider-container">
          <div className="slide">
            {projects.map((project) => (
              <div
                key={project.id}
                className="item"
                style={{ backgroundImage: `url(${project.image})` }}
                onClick={nextSlide}
              >
                <div className="content" onClick={(e) => e.stopPropagation()}>
                  <div className="name">{project.title}</div>
                  <div className="tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="view-btn">View Project</button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="nav-btns">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
            >
              &#x2039;
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
            >
              &#x203A;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
