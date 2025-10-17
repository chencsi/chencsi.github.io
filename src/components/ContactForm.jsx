import { Check, CheckCheck, Loader, LoaderCircle, Send, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { AnimatePresence, motion } from "framer-motion";

const ContactForm = ({ content, theme }) => {
  const FORMSPREE_ID = "xvgwlaew";
  const inputClasses = `${theme === "dark" ? "bg-zinc-800 border-zinc-700  shadow-lg" : "bg-zinc-100 border-zinc-200 shadow"} px-4 py-2 border rounded-lg focus:outline-none`;
  const labelClasses = "font-semibold text-lg"
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const honeyPotRegister = register("_gotcha");

  const reset = () => {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
    return;
  }

  const testClick = async () => {
    setStatus("loading")
    setTimeout(() => {
      setStatus("success")
      setTimeout(() => {
        setStatus("error")
        setTimeout(() => {
          setStatus("idle")
        }, 1000);
      }, 1000);
    }, 1000);
    return;
  }

  const onSubmit = async (data) => {
    if (data._gotcha || status === "loading") {
      return;
    }

    setStatus("loading");
    setServerError("");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...data,
          _subject: data.subject || "Website contact",
          _replyto: data.email
        })
      });

      const json = await response.json();

      if (response.ok) {
        setStatus("success");
        reset();

        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
        setServerError(json.error || "A küldés sikertelen volt.");
      }
    } catch (error) {
      setStatus("error");
      setServerError("Hálózati hiba történt. Kérjük, próbálja újra később.");
    }
  };

  return (
    <motion.form layoutTransition={{ type: "spring", stiffness: 300, damping: 30 }} layout="size" transition={{ type: "spring" }} className="flex flex-col gap-y-5 py-5 sm:px-5 rounded-2xl" onSubmit={handleSubmit(onSubmit)}>
      <AnimatePresence mode="wait">
        {status === "success" && <p className="text-green-500 text-center my-2">{content?.sent}</p>}
        {status === "error" && <p className="text-red-500 text-center my-2">{serverError}</p>}
      </AnimatePresence>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className={labelClasses}>
            {content?.name?.label}
          </label>
          <input
            id="name"
            className={inputClasses}
            placeholder={content?.name?.placeholder}
            {...register("name")}
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
      <div className="flex justify-end w-full">
        <motion.button
          layout="size"
          layoutTransition={{ type: "spring", stiffness: 300, damping: 30 }}
          transformOrigin="right"
          transition={{ type: "spring" }}
          type="submit"
          className={`
            ${(status === "idle" || status === "loading") && "from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600"}
            ${status === "idle" && "cursor-pointer"}
            ${status === "success" && "cursor-progress"}
            ${status === "success" && "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 cursor-progress"}
            ${status === "error" && "from-red-500 to-rose-400 hover:from-red-500 hover:to-rose-600 cursor-progress"}
            text-end px-6 py-2 bg-gradient-to-br text-white font-bold text-lg rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 self-end`}
        >
          <AnimatePresence mode="wait">
            {status === "idle" &&
              <>
                <Send />
                <p>{content?.send}</p>
              </>
            }
            {status === "loading" &&
              <>
                <LoaderCircle className="animate-spin" />
                <p>{content?.loading}</p>
              </>
            }
            {status === "success" &&
              <>
                <Check />
                <p>{content?.success}</p>
              </>
            }
            {status === "error" &&
              <>
                <X />
                <p>{content?.error}</p>
              </>
            }
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.form>
  );
}

export default ContactForm;
