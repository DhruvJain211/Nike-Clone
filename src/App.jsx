import {
  Footer,
  Hero,
  Services,
  SpecialOffer,
  Superquality,
  Popularproducts,
  Subscribe,
  CustomerReviews,
} from "./sections";
import Nav from "./Components/Nav";
const App = () => (
  <main className="relative">
    <Nav />
    <section className=" padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <Popularproducts />
    </section>
    <section className="padding">
      <Superquality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);
export default App;
