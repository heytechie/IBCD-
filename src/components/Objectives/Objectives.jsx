import React from 'react';
import { Lightbulb, Rocket, ShieldCheck } from 'lucide-react';
import './Objectives.css';

const Objectives = () => {
  const cards = [
    {
      icon: <Lightbulb size={32} />,
      title: "Knowledge Exchange",
      desc: "Facilitating an open discourse & dialogue between mathematicians, data scientists, and business strategists."
    },
    {
      icon: <Rocket size={32} />,
      title: "Cutting-Edge Showcase",
      desc: "Presenting peer-reviewed research that pushes the boundaries of computational intelligence and analytics."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Ethical Data Practices",
      desc: "Defining frameworks for responsible AI and data-driven decision making in global enterprises."
    }
  ];

  return (
    <section className="bg-bg">
      <div className="container">
        <h2 className="section-title">Core Objectives</h2>
        <div className="grid">
          {cards.map((card, index) => (
            <div className="objective-card text-center" key={index}>
              <div className="obj-icon d-flex justify-center align-center">
                {card.icon}
              </div>
              <h4 className="obj-title">{card.title}</h4>
              <p className="obj-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
