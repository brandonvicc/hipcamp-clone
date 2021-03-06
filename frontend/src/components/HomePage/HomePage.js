import "./HomePage.css";
import HomeHeader from "./HomeHeader";
import HomeBookForm from "./HomeBookForm";
import ActionCard from "./ActionCard/ActionCard.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as spotActions from "../../store/spot";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(spotActions.getSpots());
  }, [dispatch]);
  const actionCardsInfo = [
    {
      url: "https://images.unsplash.com/photo-1627490601633-1b45a55e13b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      content: {
        heading: "Own Land?",
        content:
          "Earn money with iwannacamp. Renting out camp space is an easy way to make money!",
      },
      color: "",
      actionUrl: "/spots/new",
    },
    {
      url: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      content: {
        heading: "iwannacamp's Best Campsites!",
        content: "See America's Best Campsites to Visit in 2022",
      },
      color: "mustard",
      actionUrl: "/spots",
    },
  ];
  return (
    <>
      <HomeHeader />
      <HomeBookForm />
      <div className="action-card-container">
        {actionCardsInfo.map((card, i) => (
          <ActionCard
            key={i}
            url={card.url}
            content={card.content}
            color={card.color}
            actionUrl={card.actionUrl}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
