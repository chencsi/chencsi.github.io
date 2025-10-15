import { Send } from "lucide-react";
import { useForm } from "react-hook-form"

const ContactForm = ({ content, theme }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const inputClasses = `${theme === "dark" ? "bg-zinc-800 border-zinc-700  shadow-lg" : "bg-zinc-100 border-zinc-200 shadow"} px-4 py-2 border rounded-lg focus:outline-none`;
  const labelClasses = "font-semibold text-lg"

  const onSubmit = (data) => console.log(data)

  return (
    <form className="flex flex-col gap-y-5 p-5 rounded-2xl" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className={labelClasses}>
            {content?.name?.label}
          </label>
          <input
            id="name"
            className={inputClasses}
            placeholder={content?.name?.placeholder}
            {...register("name", { required: true })}
          />
          {errors.name && <span className="text-red-500 text-sm">{content?.name?.required}</span>}
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className={labelClasses}>
            {content?.email?.label}
          </label>
          <input
            id="email"
            type="email"
            className={inputClasses}
            placeholder={content?.email?.placeholder}
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
          />
          {errors.email?.type === "required" && <span className="text-red-500 text-sm">{content?.email?.required}</span>}
          {errors.email?.type === "pattern" && <span className="text-red-500 text-sm">{content?.email?.invalid}</span>}
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="phone" className={labelClasses}>
            {content?.phone?.label}
          </label>
          <input
            id="phone"
            className={inputClasses}
            placeholder={content?.phone?.placeholder}
            {...register("phone", { 
              pattern: /^\+36[0-9]{8,9}$/
            })}
          />
          {errors.phone?.type === "pattern" && <span className="text-red-500 text-sm">{content?.phone?.invalid}</span>}
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="subject" className={labelClasses}>
            {content?.subject.label}
          </label>
          <input
            id="subject"
            className={inputClasses}
            placeholder={content?.subject?.placeholder}
            {...register("subject", { required: true })}
          />
          {errors.subject && <span className="text-red-500 text-sm">{content?.subject?.required}</span>}
        </div>
      </div>

      <div className="flex flex-col space-y-2 mb-4">
        <label htmlFor="message" className={labelClasses}>
          {content?.message.label}
        </label>
        <textarea
          id="message"
          rows="4"
          className={inputClasses + " min-h-20 max-h-96"}
          placeholder={content?.message?.placeholder}
          {...register("message", { required: true, minLength: 50, maxLength: 1000 })}
        ></textarea>
        {errors.message?.type === "required" && <span className="text-red-500 text-sm">{content?.message?.required}</span>}
        {errors.message?.type === "minLength" && <span className="text-red-500 text-sm">{content?.message?.minLength}</span>}
        {errors.message?.type === "maxLength" && <span className="text-red-500 text-sm">{content?.message?.maxLength}</span>}
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-gradient-to-br from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 self-end cursor-pointer"
      >
        <Send size={18} />
        {content?.send}
      </button>
    </form>
  );
}

export default ContactForm;
