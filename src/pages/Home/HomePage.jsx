//import { ReactDOM } from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import AppartmentList from "../../components/AppartmentList";
import Footer from "../../components/Footer";

function HomePage() {
  return (        
        <div>
            <Header />
            <Banner />
            <AppartmentList />
            <Footer />
        </div> 
  );
}

export default HomePage
