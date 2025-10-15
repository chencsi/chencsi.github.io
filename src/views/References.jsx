import { FolderKanban, Link } from "lucide-react";
import useUI from "../hooks/useUI";
import PrimaryContainer from "../components/PrimaryContainer";
import PrimaryBadgeTitle from "../components/PrimaryBadgeTitle";
import translations from "../utils/translations";
import { useState, useRef } from "react";
import { motion, useDomEvent, AnimatePresence } from "framer-motion";

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120
};

function References() {
  const { theme, lang } = useUI();
  const content = translations[lang]?.pages?.references;
  const [selectedImage, setSelectedImage] = useState(null);

  useDomEvent(useRef(window), "scroll", () => selectedImage && setSelectedImage(null));

  return content && (
    <section className="w-full h-full flex flex-col items-center">
      <PrimaryContainer theme={theme}>
        <PrimaryBadgeTitle
          title={content?.h3}
          icon={FolderKanban}
          theme={theme}
        />
        <p className="md:mx-20 text-center">{content?.p}</p>
        <div className="flex flex-col gap-y-10 sm:gap-y-20 min-h-screen">
          {content?.references.map((reference, index) => {
            return (
              <motion.div
                key={reference.img}
                className={`flex flex-col items-center ${index % 2 == 0 ? 'md:flex-row' : "md:flex-row-reverse"} gap-10`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", }}
              >
                <img
                  src={reference.img}
                  alt={reference.h4}
                  className={`select-none border border-zinc-700/30 rounded-4xl w-full object-cover max-w-[300px] max-h-[250px] cursor-pointer`}
                  onClick={() => setSelectedImage(reference.img)}
                />
                <div className="w-full py-5">
                  <h4 className="text-center text-3xl font-bold">{reference.h4}</h4>
                  <div className="flex flex-wrap py-3 justify-center gap-2">
                    {reference.badges.map((item) => {
                      return (
                        <span key={item} className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/30">
                          {item}
                        </span>
                      )
                    })}
                  </div>
                  <p className="text-justify">{reference.description}</p>
                  <div className="flex flex-row justify-between mt-2">
                    <p className="text-zinc-500">- 2025</p>
                    <div className={`flex gap-2 ${reference.link !== undefined ? "text-blue-400 hover:text-blue-500  cursor-pointer" : "text-gray-500 cursor-not-allowed"} select-none`}>
                      <a href={reference.link} className="text-sm font-semibold">Repository</a>
                      <Link size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </PrimaryContainer>

      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center select-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black"
              onClick={() => setSelectedImage(null)}
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={transition}
              className="relative z-10 w-[80vw] max-w-4xl max-h-[80vh] flex items-center justify-center"
            >
              <motion.img
                src={selectedImage}
                alt="Zoomed preview"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                layoutId={`image-${selectedImage}`}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default References;