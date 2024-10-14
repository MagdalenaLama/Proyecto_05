import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Form } from "../components/Form/Form";

export const SearchPage = () => {
  return (
    <>
      <Header title={"Haz tu consulta"} />
      <section className="container h-screen bg-cover bg-center bg-custom-gray">
        <Form />
      </section>
      <Footer />
    </>
  );
};
