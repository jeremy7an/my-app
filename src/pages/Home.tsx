import { Fragment, FunctionComponent } from "react";
import { NavBar } from "../component/NavBar";

export interface IHomePageProps{};

export const Homepage: FunctionComponent<IHomePageProps> = (props) => {
  
return(
  <Fragment>
    <div>
      <NavBar />
      <div style={{padding:"50px"}}>
        <h1>This is the homepage</h1>
      </div>
      
    </div>
  </Fragment>
)
}
