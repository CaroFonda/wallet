import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites, addToFavorites } from "../actions";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";


export default function CardAddress({ account, balance }) {

    const dispatch = useDispatch();

    const favorites = useSelector(state => state.favorites);

    const addFavourites = () => {
        if (favorites.includes(account)) {
          dispatch(removeFromFavorites(account));
        } else {
          dispatch(addToFavorites(account));
        }
      };


    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Account: {account}</h5>
                <p className="card-text">Balance: {balance}</p>
                <button onClick={addFavourites}>
                    {favorites.includes(account) ? (
                        <AiFillHeart />
                    ) : (
                        <AiOutlineHeart />
                    )}
                </button>
            </div>
        </div>
    );
}
