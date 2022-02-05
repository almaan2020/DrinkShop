import React, { createContext, Component } from "react";
import { pull } from "lodash";

export const FavContext = createContext();

class FavContextProvider extends Component {
  state = {
    favoriteIds: [],
  };

  fillFavIds = () => {
    let favIds = localStorage.getItem("favProducts");
    //convert localStorage to array of numbers:
    favIds = favIds ? favIds.split(",").map((item) => parseInt(item)) : [];
    this.setState({ favoriteIds: favIds });
  };

  handleFavorite = (id) => {
    let favIds = this.state.favoriteIds;
    if (favIds.includes(id)) {
      pull(favIds, id);
    } else {
      favIds.push(id);
    }
    localStorage.removeItem("favProducts");
    localStorage.setItem("favProducts", favIds);
    this.setState({ favoriteIds: favIds });
  };

  render() {
    return (
      <FavContext.Provider
        value={{
          ...this.state,
          fillFavIds: this.fillFavIds,
          handleFavorite: this.handleFavorite,
        }}
      >
        {this.props.children}
      </FavContext.Provider>
    );
  }
}

export default FavContextProvider;
