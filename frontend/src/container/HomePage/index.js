import { Header, Footer } from "../../components/Organism";
function HomePage() {

  return (
    <div>
      <Header customStyles="shadow-md !bg-white z-60" />
      <div className="min-h-[600px] onlyMobile:min-h-[400px] flex justify-center items-center flex-col px-4 py-4">
        <h1 className="text-h0 text-center font-ubuntu pt-4 font-bold onlyMobile:text-h6">
          Welcome to {' '}
          <span className="text-primaryBlue font-bold underline underline-offset-4">
            SeeWrite
          </span> {' '}
          – Where Creativity Meets Convenience.
        </h1>
        <p className="text-h8 text-center font-ubuntu pt-8">
          Feel free to customize app with your actual application name. This
          sentence aims to be inviting and convey the essence of what users can
          expect from your app.
        </p>
      </div>
      <Footer />
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
