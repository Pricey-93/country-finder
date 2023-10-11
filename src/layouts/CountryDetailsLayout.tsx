import { Outlet, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import BackButton from "../components/ui/backButton/BackButton";

export default function CountryDetailsLayout() {
  const { name } = useParams();

  return (
    <>
      <Header />
      {/* <BackButton callbackHandler={ backButtonHandler } value="back" /> */}
      <main>
        <Outlet />
      </main>
    </>
  )
}