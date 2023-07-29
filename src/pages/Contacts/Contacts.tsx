import React, { FC } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactsBlock from "../../components/ContactsBlock/ContactsBlock";
import Banner from "../../components/Banner/Banner";

const Contacts: FC = () => {
  return (
    <div className="contacts">
      <Header />
      <Banner title={"Contacts"} />
      <ContactsBlock />
      <Footer />
    </div>
  );
};

export default Contacts;
