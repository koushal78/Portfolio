import ContactForm from "./ContactForm";
import SelfCard from "./SelfCard";

const Contect = () => {
  return (
    <div className="h-full w-full px-4 sm:px-6 md:px-10 lg:px-32 py-10">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-center">
        <SelfCard />
        <ContactForm />
      </div>
     
    </div>
  );
};

export default Contect;
