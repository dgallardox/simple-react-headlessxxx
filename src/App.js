import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import GetData from "./components/GetData";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://simplereacthea.wpengine.com/graphql"
})

function App() {
  return (
    <ApolloProvider children client={client}>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<GetData />} />
      </Routes>
      </div>
      </ApolloProvider>
  );
}

export default App;
