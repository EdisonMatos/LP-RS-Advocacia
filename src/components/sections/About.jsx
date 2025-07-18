import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import "react-image-gallery/styles/css/image-gallery.css";
import SectionHeader from "../sectionElements/SectionHeader";
import AboutModal from "../sectionElements/about/AboutModal";
import content from "../../content/content";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import GalleryAbout from "../sectionElements/about/GalleryAbout";
import ParagraphSemFading from "../sectionElements/about/ParagraphSemFading";
import ParagraphWithFading from "../sectionElements/about/ParagraphWithFading";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from "../../assets/imgs/about/image1.png";
import img2 from "../../assets/imgs/about/image2.png";

export default function About({
  modal = true,
  showGallery = false,
  colorMode,
}) {
  // Definir classes de tema
  const bgClasses = {
    dark: "bg-black",
    light: "bg-fading",
    default: "bg-bgSectionDark",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;
  const subtitleColor = colorMode === "light" ? "text-black/80" : "text-white";

  const images = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
  ];

  return (
    <SectionArea
      id="about"
      className={`${bgClass} transition-colors duration-1000`}
    >
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        {/* <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[450px] flex justify-center rounded-xl">
          <img
            src={content.texts.about.imagem.img}
            alt={content.texts.about.imagem.alt}
            className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl shadow-custom-opacity shadow-primary/25 "
          />
        </MotionDivDownToUp> */}
        <MotionDivDownToUp className=" w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
          <div className="shadow-custom-opacity shadow-secondary/25 relative bg-center bg-no-repeat bg-cover h-auto w-full tablet1:w-full rounded-xl">
            <ImageGallery
              items={images}
              showNav={false} // Ativando a navegação
              showFullscreenButton={false} // Desativando botão de tela cheia
              useBrowserFullscreen={false} // Desativando o uso de tela cheia do navegador
              showBullets={true}
              showThumbnails={false}
              additionalClass="custom-gallery"
              autoPlay={true}
            />
            <style>
              {`
                .custom-gallery .image-gallery-slide img {
                  min-height: 450px !important;
                  width: 100% !important;
                  object-fit: cover !important;
                  border-radius: 10px !important;
                  margin: 0 auto;
                }

                @media (min-width: 640px) and (max-width: 1023px) {
                  .custom-gallery .image-gallery-slide img {
                    min-height: 840px !important;
                  }
                }

                @media (min-width: 1024px) {
                  .custom-gallery .image-gallery-slide img {
                    height: 600px !important;
                  }
                }

                .custom-gallery .image-gallery-thumbnails img {
                  height: 60px !important;
                  width: 100px !important;
                  object-fit: cover !important;
                }
              `}
            </style>
          </div>
        </MotionDivDownToUp>
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.about.miniTag}
            sectionHeaderTitle={content.texts.about.title}
            sectionHeaderSubtitle={content.texts.about.subtitle}
            color={colorMode}
            type="article"
            titleColorSet={titleColor}
            subtitleColorSet={subtitleColor}
          />
          <MotionDivDownToUp>
            {modal ? (
              <ParagraphWithFading colorMode={colorMode} />
            ) : (
              <ParagraphSemFading colorMode={colorMode} />
            )}
            {modal && <AboutModal colorMode={colorMode} />}
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
