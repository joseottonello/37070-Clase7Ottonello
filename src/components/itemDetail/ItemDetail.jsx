import { Card } from "reactstrap";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ props }) => {

  return (
    <Card>
      <img src={props.img} alt="asd" width="300"/>
      <h2> {props.name} </h2>
      <h4> {props.price} </h4>
      <p> {props.detail} </p>
      <div>
        <ItemCount initial={0} stock={10}/>
      </div>
    </Card>
  )

}

export default ItemDetail