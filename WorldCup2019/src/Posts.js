import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./action";
import './App.css';

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  
  let homeGames = 0;
  let awayGames = 0;
  let pctHomeWin = 0;
  let pctAwayWin = 0;
  let homeGoals = 0;
  let awayGoals = 0;
  let totGoals = 0;

  const renderPosts = () => {
    if (posts.loading) {
      return <h1>Loading...</h1>;
      console.log("loading");
    }
    return posts.items.map((el) => {
      {
        homeGames = posts.items.reduce((count, el) => {
          if (el.home_team_country === "USA") count++;
          return count;
        }, 0);
      }

      {
        awayGames = posts.items.reduce((count, el) => {
          if (el.away_team_country === "USA") count++;
          return count;
        }, 0);
      }
      {
        pctHomeWin = Math.round((homeGames / 7) * 100);
      }
      {
        pctAwayWin = Math.round((awayGames / 7) * 100);
      }
      {
        homeGoals = posts.items.reduce((homeCount, el) => {
          if (el.home_team_country === "USA")
            homeCount += parseInt(el.home_team.goals);
          return homeCount;
        }, 0);
      }
      {
        awayGoals = posts.items.reduce((awayCount, el) => {
          if (el.away_team_country === "USA")
            awayCount += parseInt(el.away_team.goals);
          return awayCount;
        }, 0);
      }
      {
        totGoals = homeGoals + awayGoals;
      }
    });
  }
            
      return (
        <div>
          {renderPosts()}
<h3>FIFA World Cup 2019 - Games Played by USA</h3>
          <table className="table">
            <thead>
              <tr>
                <th className="table-data">No. of Games Played At Home</th>
                <th className="table-data">Percentage Win At Home</th>
                <th className="table-data">No. of Games Played Away</th>
                <th className="table-data">Percentage Win Away</th>
                <th className="table-data">Total Number of Goals</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="table-data">{homeGames}</td>
                <td className="table-data">{pctHomeWin}</td>
                <td className="table-data">{awayGames}</td>
                <td className="table-data">{pctAwayWin}</td>
                <td className="table-data">{totGoals}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
  };


export default Posts;