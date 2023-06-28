import Header from "../../components/Header";
import Banner from "../../components/Banner";
import AppartmentList from "../../components/AppartmentsList";
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
