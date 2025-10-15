import { Send } from "lucide-react";
import { useForm } from "react-hook-form"

const ContactForm = ({ content }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const inputClasses = "px-4 py-2 bg-zinc-800 border border-zinc-700 shadow-lg rounded-lg focus:outline-none";
  const labelClasses = "font-semibold text-lg"

  const onSubmit = (data) => console.log(data)

  return (
    <form className="flex flex-col p-5 rounded-2xl" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className={labelClasses}>
            {content?.form?.name || 'Név'}
          </label>
          <input
            id="name"
            className={inputClasses}
            placeholder={content?.form?.namePlaceholder || 'A feladó neve'}
            {...register("name", { required: true })}
          />
          {errors.name && <span className="text-red-500 text-sm">Ennek a mezőnek a megadása kötelező</span>}
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className={labelClasses}>
            {content?.form?.email || 'E-mail'}
          </label>
          <input
            id="email"
            type="email"
            className={inputClasses}
            placeholder={content?.form?.emailPlaceholder || 'email@example.com'}
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
          />
          {errors.email?.type === "required" && <span className="text-red-500 text-sm">Ennek a mezőnek a megadása kötelező</span>}
          {errors.email?.type === "pattern" && <span className="text-red-500 text-sm">Nem megfelelő email cím formátum</span>}
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="phone" className={labelClasses}>
            {content?.form?.phone || 'Telefon'}
          </label>
          <input
            id="phone"
            className={inputClasses}
            placeholder={content?.form?.phonePlaceholder || '+36 70 123 4567'}
            {...register("phone")}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="subject" className={labelClasses}>
            {content?.form?.subject || 'Tárgy'}
          </label>
          <input
            id="subject"
            className={inputClasses}
            placeholder={content?.form?.subjectPlaceholder || 'A levél tárgya'}
            {...register("subject", { required: true })}
          />
          {errors.subject && <span className="text-red-500 text-sm">Ennek a mezőnek a megadása kötelező</span>}
        </div>
      </div>

      <div className="flex flex-col space-y-2 mb-4">
        <label htmlFor="message" className={labelClasses}>
          {content?.form?.message || 'Üzenet'}
        </label>
        <textarea
          id="message"
          rows="4"
          className={inputClasses + " min-h-20 max-h-96"}
          placeholder={content?.form?.messagePlaceholder || 'Az üzeneted...'}
          {...register("message", { required: true, minLength: 50, maxLength: 1000 })}
        ></textarea>
        {errors.message?.type === "required" && <span className="text-red-500 text-sm">Ennek a mezőnek a megadása kötelező</span>}
        {errors.message?.type === "minLength" && <span className="text-red-500 text-sm">Az üzenetnek legalább 50 karakter hosszúnak kell lennie</span>}
        {errors.message?.type === "maxLength" && <span className="text-red-500 text-sm">Az üzenet nem lehet hosszabb 1000 karakternél</span>}
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-gradient-to-br from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 self-start cursor-pointer"
      >
        <Send size={18} />
        {content?.form?.submit || 'Üzenet elküldése'}
      </button>
      {errors.exampleRequired && <span>Ennek a mezőnek a megadása kötelező</span>}
    </form>
  );
}

export default ContactForm;