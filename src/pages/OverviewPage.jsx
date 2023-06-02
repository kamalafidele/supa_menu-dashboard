import React from "react";
import styled from "styled-components";
import jwtDecode from "jwt-decode";

import Sidebar from "../components/Sidebar";
import authStorage from '../auth/storage';
import variables from '../constants/variables';
import COLOR_PALETTE from "../constants/colors";
import ChartElement from "../components/Chart";

function OverviewPage() {
  const token = authStorage.getToken();
  const user = jwtDecode(token);

  const graph_data = {
    series: [{
      name: 'Series 1',
      data: [30, 40, 50, 60, 70, 80, 120],
    }],
    options: {
      chart: {
        id: 'stats-graph'
      },
      xaxis: {
        categories: [1921, 1930, 1935, 1936, 1940, 1945, 1950]
      },
      title: "Today's trends"
    }
  }
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <div className="top-container">
          <h3>Overview</h3>
          <div className="profile-container">
            <div className="row"> <i className="fa-sharp fa-solid fa-magnifying-glass"></i> </div>
            <div className="row"> <i className="fa-solid fa-bell"></i> </div>
            <div className="row">|</div>
            <div className="profile-details">
                <span>{user.name}</span>
                <img src={ user.picture || variables.DEFAULT_PROFILE } alt="profile" width={50} height={50}/>
            </div>
          </div>
        </div>

        <div className="stats-container">
            <div className="stats-card" style={{ marginLeft: 0 }}>
                <span className="title">Clients</span>
                <span className="details">60</span>
            </div>
            <div className="stats-card">
                <span className="title">Revenues {`(FRW)`}</span>
                <span className="details">38234000</span>
            </div>
            <div className="stats-card">
                <span className="title">Orders</span>
                <span className="details">67569</span>
            </div>
        </div>

        <div className="graph">
          {/* <ChartElement chartData={graph_data}/> */}
        </div>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  background-color: ${COLOR_PALETTE.LIGHT};
`;

const Wrapper = styled.div`
  width: 80%;
  margin-left: 20%;
  padding: 10px;

  .top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .profile-container {
        align-items: center;
        display: flex;
        .row {
            padding: 10px;
        }

        .profile-details {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        span {
            margin: 0px 10px 0px 10px;
        }
        img {
            border-radius: 50%;
            border: 1px solid ${COLOR_PALETTE.PRIMARY}
        }
    }
  }

  .stats-container {
    display: flex;
    justify-content: flex-start;

    .stats-card {
        width: 25%;
        height: 100px;
        background-color: ${COLOR_PALETTE.WHITE};
        padding: 10px;
        border-radius: 10px;
        margin: 10px 20px 10px 20px;

        .title {
            text-align: center;
            display: block;
            color: ${COLOR_PALETTE.GRAY};
            font-size: 24px;
        }

        .details {
            text-align: center;
            display: block;
            font-size: 20px;
        }
    }
  }
`;
export default OverviewPage;
