// app/(main)/layout.jsx
import TopNav from "../layout/Header/TopNav";
import Header from "../layout/Header/MainHeader";
import Footer from '../layout/Footer/Footer';
import CopyFooter from '../layout/Footer/copyright';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container-fluid m-auto p-2">
        <div className="row">
          <div className="col-12">
            <TopNav />
          </div>
          <div className="col-12">
            <Header />
          </div>
        </div>
      </div>
      {children}
      <Footer />
      <CopyFooter />
    </>
  );
}