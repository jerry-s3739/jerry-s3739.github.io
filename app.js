import React from "react";
import ReactDOM from "react-dom/client";

// const styleCard={
//     backgroundColor: "light"
// }

const RestoCard = (props) => {
    const{resName, cuisine}=props;
    return(
        <div className="res-card">
            <img 
              className="food-img"
              alt="food"
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg"
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.5⭐</h4>
            <h4>30 minutes</h4>
        </div>
    );
};

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestoCard
                  resName="Sagar Gaire"
                  cuisine="Kulcha Chicken, North Indian"
                />
                <RestoCard
                  resName="Dominos"
                  cuisine="Pizza, Italian"
                />
                <RestoCard
                  resName="KFC"
                  cuisine="Burger, Fast Food "
                />
                <RestoCard
                  resName="Tasty Resto"
                  cuisine="Hakka Noodles, Chinese Fast Food"
                />
                
            </div>
        </div>
    );
};
