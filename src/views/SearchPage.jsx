import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Form } from "../components/Form/Form";

export const SearchPage = () => {
  return (
    <>
      <Header title={"Haz tu consulta"} />
      <section className="container max-w-full min-h-screen  bg-custom-gray">
        <Form />
      </section>
      <Footer />
    </>
  );
};
