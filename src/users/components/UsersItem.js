import React from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";
import "./UsersItem.css";

const UsersItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-tem__info">
            <h2>Name : {props.name}</h2>
            <h3>
              PlaceCount : {props.placeCount}{" "}
              {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UsersItem;