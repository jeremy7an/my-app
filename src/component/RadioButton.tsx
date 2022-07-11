import { Fragment, FunctionComponent } from "react";

declare interface IRadioButtonProps {
label: string;
value: string;
name: string;
}

export const RadioButton: FunctionComponent<IRadioButtonProps> = (props: IRadioButtonProps) =>{
  return (
    <Fragment>
      <div className="flex_row">
        <label>{props.label}</label>
        <input type="radio" value ={props.value} name={props.name} />     
        </div>
    </Fragment>
  )

}