import { File, Linkedin, Mail, Phone, Send, View, X } from "lucide-react";
import PrimaryBadgeTitle from "../components/Elements/PrimaryBadgeTitle";
import PrimaryContainer from "../components/Elements/PrimaryContainer";
import useUI from "../hooks/useUI";
import translations from "../utils/translations";
import { motion } from "framer-motion";
import ContactForm from "../components/Contact/ContactForm";
import { useEffect, useState } from "react";

const Contact = () => {
  const { theme, lang } = useUI();
  const content = translations[lang]?.pages?.contact;
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const cvPath = "pulbic/kevin_chen_en.pdf"

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
  }
  const handleOpenViewer = () => {
    setIsViewerOpen(true);
  }

  return (
    <section className="w-full h-full flex flex-col items-center">
      <div className="w-full">
        <PrimaryContainer theme={theme}>
          <div className="space-y-5">
            <PrimaryBadgeTitle
              title={content?.h3}
              icon={Send}
            />
            <p className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-700"} text-center`}>{content?.p}</p>
            <ContactForm content={content?.form} theme={theme} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 sm:px-5">
              <div className="space-y-5">
                <h4 className="font-black text-3xl">{content?.section1?.h4}</h4>
                <div className="flex flex-row gap-3">
                  <Mail />
                  <a href="mailto:chen.kevin05@icloud.com" className="hover:text-blue-500 transition-[color]">chen.kevin05@icloud.com</a>
                </div>
                <div className="flex flex-row gap-3">
                  <Phone />
                  <a href="tel:+36704310339" className="hover:text-blue-500 transition-[color]">+36 70 431 0339</a>
                </div>
                <div className="flex flex-row gap-3">
                  <Linkedin />
                  <a href="https://www.linkedin.com/in/chencsi/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-[color]">linkedin.com/chencsi</a>
                </div>
              </div>

              <div className="space-y-5">
                <h4 className="font-black text-3xl">{content?.section2?.h4}</h4>
                <div className="flex flex-row gap-5 sm:gap-5 select-none">
                  <a href={cvPath} download="kevin_chen_en.pdf">
                    <motion.button
                      type="button"
                      whileHover={{
                        scale: 1.075,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                        },
                      }}
                      whileTap={{ scale: 0.995 }}
                      className={`border-2 p-2 rounded-2xl cursor-pointer flex flex-col gap-2 items-center w-[7rem] sm:w-[8rem] transition-colors duration-300 ${theme === "dark" ? "hover:text-zinc-800 hover:bg-zinc-50" : "hover:text-zinc-50 hover:bg-zinc-800"}`}>
                      <File />
                      <p>{content?.section2?.item1}</p>
                    </motion.button>
                  </a>
                  <motion.button
                    type="button"
                    whileHover={{
                      scale: 1.075,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                      },
                    }}
                    whileTap={{ scale: 0.995 }}
                    onClick={() => {
                      handleOpenViewer();
                    }}
                    className={`border-2 p-2 rounded-2xl cursor-pointer flex flex-col gap-2 items-center w-[7rem] sm:w-[8rem] transition-colors duration-300 ${theme === "dark" ? "hover:text-zinc-800 hover:bg-zinc-50" : "hover:text-zinc-50 hover:bg-zinc-800"}`}>
                    <View />
                    <p>{content?.section2?.item2}</p>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </PrimaryContainer>
      </div>

      {isViewerOpen &&
        <div className="fixed top-0 left-0 w-full h-full backdrop-brightness-50 z-50">
          <div className="my-5 sm:my-10 h-full w-full">
            <div className="mx-5 sm:mx-10">
              <motion.div
                className={
                  `${theme === "dark" ? "text-zinc-300 bg-gradient-to-br from-zinc-800 to-zinc-900" : "bg-white text-zinc-900"} p-5 flex flex-col gap-5 min-h-[90vh] max-h-[90vh] max-w-[1000px] mx-auto rounded-4xl shadow-xl h-full`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut"
                }}
              >
                <div className="flex flex-row items-center">
                  <h5 className="flex-1 p-2">Megtekintő</h5>
                  <motion.button onClick={handleCloseViewer} type="button" className="w-fit text-end self-end rounded-full cursor-pointer focus:outline-none p-2 hover:bg-zinc-700 transition">
                    <X />
                  </motion.button>
                </div>
                <iframe
                  src="kevin_chen_en.pdf?page=hsn#toolbar=0"
                  className="w-full h-full flex-1"
                  toolbar="0"
                />
              </motion.div>
            </div>
          </div>
        </div>}
    </section>
  );
}

export default Contact;