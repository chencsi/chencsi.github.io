import { Send } from "lucide-react";
import PrimaryBadgeTitle from "../components/PrimaryBadgeTitle";
import PrimaryContainer from "../components/PrimaryContainer";
import useUI from "../hooks/useUI";
import translations from "../utils/translations";

const Contact = () => {
  const { theme, lang } = useUI();
  const content = translations[lang]?.pages?.contact;

  return (
    <section className="w-full h-full flex flex-col items-center">
      <PrimaryContainer theme={theme}>
        <PrimaryBadgeTitle
          title={content?.h3}
          icon={Send}
        />
      </PrimaryContainer>
    </section>
  );
}

export default Contact;