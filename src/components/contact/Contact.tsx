import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

// Schéma de validation avec Zod
const contactSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  phone: z.string().min(1, "Le téléphone est requis"),
  email: z.string().email("E-mail invalide"),
  subject: z.string().min(1, "Le sujet est requis"),
  message: z.string().min(1, "Le message est requis"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const templateParams = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
  
      if (!import.meta.env.VITE_EMAILJS_SERVICE_ID ||
        !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
        !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      throw new Error("Les variables d’environnement EmailJS ne sont pas définies.");
    }
    
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      );
  
      if (result.status === 200) {
        toast.success("Message envoyé avec succès !");
        reset();
      } else {
        toast.error("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Erreur réseau. Veuillez réessayer.");
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contactez-moi" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Votre nom</p>
                  <input
                    {...register("name")}
                    className={`${errors.name && "outline-designColor"} contactInput`}
                    type="text"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Téléphone</p>
                  <input
                    {...register("phone")}
                    className={`${errors.phone && "outline-designColor"} contactInput`}
                    type="text"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">E-mail</p>
                <input
                  {...register("email")}
                  className={`${errors.email && "outline-designColor"} contactInput`}
                  type="email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Sujet</p>
                <input
                  {...register("subject")}
                  className={`${errors.subject && "outline-designColor"} contactInput`}
                  type="text"
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea
                  {...register("message")}
                  className={`${errors.message && "outline-designColor"} contactTextArea`}
                  cols={30}
                  rows={8}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;