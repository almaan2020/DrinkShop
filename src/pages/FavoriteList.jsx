import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getMapProducts } from "../services/productService";
import { FavContext } from "../contexts/FavoriteContext";
import FavoriteItem from "../components/favoriteList/FavoriteItem";
import PageTitle from "../layouts/PageTitle";
import toasts from "../config/toast.json";

const FavoriteList = () => {
  const [favProducts, setFavProducts] = useState([]);
  const { favoriteIds, fillFavIds } = useContext(FavContext);
  const { favToast } = toasts;

  useEffect(() => {
    fillFavIds();
    getMapProducts(favoriteIds, favProducts, setFavProducts);
  }, []);

  return (
    <div className="row pt-4 d-block">
      <PageTitle title="Favorites" />
      <div className="row mt-4">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="row">
            {favProducts &&
              favProducts.map((p) => (
                <FavoriteItem
                  key={p[0].id}
                  name={p[0].name}
                  image_url={p[0].image_url}
                  srm={p[0].srm}
                  tagline={p[0].tagline}
                  abv={p[0].abv}
                />
              ))}
          </div>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="d-none">
        {favoriteIds.length === 0 ? toast(favToast) : null}
      </div>
      <br></br>
    </div>
  );
};

export default FavoriteList;
