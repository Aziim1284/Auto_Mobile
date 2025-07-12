import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const faqItems = [
  {
    title: "What types of auto repair services do you provide?",
    content:
      "We offer a wide range of services including engine diagnostics, brake repair, tire services, oil changes, wheel alignment, and complete vehicle inspections.",
  },
  {
    title: "How frequently should I service my vehicle?",
    content:
      "Most vehicles should be serviced every 5,000 to 7,500 kilometers or as recommended in your owner's manual. Regular service keeps your car running smoothly and safely.",
  },
  {
    title: "What are common signs that my brakes need attention?",
    content:
      "Squeaking sounds, grinding noise, vibrations during braking, or increased stopping distance are signs your brake system needs to be inspected or repaired.",
  },
  {
    title: "What basic maintenance should I do between service visits?",
    content:
      "You should check engine oil, coolant, brake fluid, tire pressure, and battery condition regularly. Keeping your car clean and scheduling timely service is also important.",
  },
  {
    title: "Is there a warranty on repairs and parts?",
    content:
      "Yes, we offer a warranty on most repair services and parts. Duration and terms vary depending on the type of service—please contact us for full details.",
  }
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(index);
  };

  return (
    <div className="ak-accordion">
      {faqItems.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Accordion;
