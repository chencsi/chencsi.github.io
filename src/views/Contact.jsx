import { File, Linkedin, Mail, Phone, Send, View } from "lucide-react";
import PrimaryBadgeTitle from "../components/PrimaryBadgeTitle";
import PrimaryContainer from "../components/PrimaryContainer";
import useUI from "../hooks/useUI";
import translations from "../utils/translations";
import { motion } from "framer-motion"
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const { theme, lang } = useUI();
  const content = translations[lang]?.pages?.contact;

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-5 p-5">
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
                  <a href="https://www.linkedin.com/in/chencsi/" target="_blank" className="hover:text-blue-500 transition-[color]">linkedin.com/chencsi</a>
                </div>
              </div>
              <div className="space-y-5 p-5">
                <h4 className="font-black text-3xl">{content?.section2?.h4}</h4>
                <div className="flex flex-row gap-5 select-none">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                      },
                    }}
                    whileTap={{ scale: 0.995 }}
                    className={`border-2 p-2 rounded-2xl cursor-pointer flex flex-col gap-2 items-center w-[8rem] transition-colors duration-300 ${theme === "dark" ? "hover:text-zinc-800 hover:bg-zinc-50" : "hover:text-zinc-50 hover:bg-zinc-800"}`}>
                    <File />
                    <p>{content?.section2?.item1}</p>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                      },
                    }}
                    whileTap={{ scale: 0.995 }}
                    className={`border-2 p-2 rounded-2xl cursor-pointer flex flex-col gap-2 items-center w-[8rem] transition-colors duration-300 ${theme === "dark" ? "hover:text-zinc-800 hover:bg-zinc-50" : "hover:text-zinc-50 hover:bg-zinc-800"}`}>
                    <View />
                    <p>{content?.section2?.item2}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </PrimaryContainer>
      </div>
    </section>
  );
}

export default Contact;