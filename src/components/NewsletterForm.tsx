import { useEmailValidation } from "@/hooks";

const NewsletterForm = () => {
  const { email, setEmail, error, handleSubmit } = useEmailValidation();

  return (
    <div className="flex justify-between gap-10 items-center">
      <form
        className="flex overflow-hidden px-12 py-5 text-center rounded-xl border border-black border-solid font-[231] justify-center mt-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Cadastre seu email gratuitamente"
          className="bg-transparent outline-none w-96 text-center"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <button
        className="px-7 py-5 text-white bg-gray-950 max-md:px-5 transition-transform transform hover:scale-105 w-44 h-14 flex items-center justify-center rounded-lg"
        onClick={handleSubmit}
      >
        <p className="text-gray-50">Enviar</p>
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default NewsletterForm;
