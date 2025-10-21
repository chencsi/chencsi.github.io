import PrimaryButton from "../components/Elements/PrimaryButton";
import useUI from "../hooks/useUI";
import translations from "../utils/translations";

function NotFound() {
  const { lang } = useUI();
  const content = translations[lang]?.pages?.notfound;

  return (
    <div className="h-[70vh] flex flex-col items-center justify-center gap-3">
      <h1 className="text-4xl font-extrabold">{content?.h1}</h1>
      <p>{content?.p}</p>
      <PrimaryButton link="/">
        {content?.button}
      </PrimaryButton>
    </div>
  );
}

export default NotFound;
