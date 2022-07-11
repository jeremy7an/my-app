import { Fragment, FunctionComponent } from "react";
import { NavBar } from "../component/NavBar";

export interface IProductPageProps{};

export const ProductPage: FunctionComponent<IProductPageProps> = (props) => {
return(
  <Fragment>
    <NavBar />
    <div style={{padding:"50px"}}>
      <h1>This is the product page</h1>
    </div>
  </Fragment>
)
}