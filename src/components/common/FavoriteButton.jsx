import React, { useContext } from "react";
import { includes } from "lodash";
import { FavContext } from "../../contexts/FavoriteContext";

const FavoriteButton = (props) => {
  const { id } = props;
  const { favoriteIds, handleFavorite } = useContext(FavContext);
  const isFavorite = includes(favoriteIds, id) ? true : false;

  const getClassFont = () => {
    if (isFavorite) return "cardButton fa fa-star";
    return "cardButton fa fa-star-o";
  };

  return (
    <i
      onClick={() => handleFavorite(id)}
      className={getClassFont()}
      aria-hidden="true"
    ></i>
  );
};

export default FavoriteButton;
