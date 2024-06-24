import { useState } from "react";
import Nav from "../components/nav";
import { MainProps } from "../types/main-comp";
import User from "../components/user";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

const MainComponent = ({ page }: MainProps) => {
  if (page === "user") {
    return <User />;
  }
  return (
    <>
      <h1>Component Not Found</h1>
    </>
  );
};

const Home = () => {
  const [page, setPage] = useState<string>("user");

  const handleChangeState = (item: string) => {
    console.log(item);
    setPage(item);
  };

  return (
    <>
      <div className="h-screen">
        <Nav changeState={handleChangeState} />

        <MainComponent page={page} />
      </div>
    </>
  );
};

export default Home;
