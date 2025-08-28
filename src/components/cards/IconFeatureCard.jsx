import { useState } from "react";
import { Dialog } from "primereact/dialog";
import Button from "../interactives/Button";

export default function IconFeatureCard({ icon, title, paragraph, modalTitle, modalContent, className, colorMode }) {
  const [visible, setVisible] = useState(false);

  const bgClassesIcon = {
    dark: "bg-primary",
    light: "bg-primary",
    default: "bg-primary",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };

  const bgClass = bgClassesIcon[colorMode] || bgClassesIcon.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  const handleOpenModal = () => setVisible(true);
  const handleCloseModal = () => setVisible(false);

  return (
    <>
      <div
        onClick={handleOpenModal}
        className={`w-full tablet1:min-h-[300px] p-0 tablet1:w-[290px] mt-[36px] tablet1:mt-0 desktop1:w-[260px] desktop1:h-[320px] flex flex-col items-center desktop1:hover:scale-110 transition desktop1:p-0 cursor-pointer ${className}`}
      >
        <div
          className={`h-[64px] w-[64px] mb-[24px] rounded-md flex justify-center items-center text-labelsIcons ${bgClass}`}
        >
          {icon}
        </div>
        <h1
          className={`h-auto font-bold font-mainFont text-title3 text-center mb-[16px] ${textClass}`}
        >
          {title}
        </h1>
        <p
          className={`text-center opacity-70 font-mainFont w-[90%] pb-4 ${textClass}`}
        >
          {paragraph}
        </p>
      </div>

      <Dialog
        className="font-secondFont"
        header={modalTitle || title}
        visible={visible}
        onHide={handleCloseModal}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "60vw", "1024px": "70vw", "641px": "85vw" }}
      >
        {modalContent}
      </Dialog>
    </>
  );
}
