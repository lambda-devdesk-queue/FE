import styled from "styled-components";
//Styled-Components for App Component

export const MainDivApp = styled.div`
  height: 100vh;
  display: flex;
  background: #258EA6;
  flex-direction: column;
  .content {
    flex: 1 0 auto;
  }
  footer {
    flex-shrink: 0;
  }
`;

// Styled-Components for the Layout Components

export const SFooter = styled.footer`
  text-align: center;
  background: #fff;
  padding: 1.6rem 0;
  a {
    color: #08addd;
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: white;
  height: 56px;
  padding: 1.6rem 0;
  margin-bottom:50px;

  a {
    text-decoration: none;
    color: #258EA6;
    font-size: 1.7rem;
    margin: 0 1rem;
    :hover {
      color: #adff2f;
    }
  }
`;

export const NavLogo = styled.nav`
  display: flex;
  align-items: center;
`;

export const MenuH1 = styled.h1`
  font-size: 2.4rem;
  color: #fff;
  font-weight: bold;
  margin-left: 2rem;
`;

//Styles for the Submit a Ticket View

export const TicketH1 = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;
`;

//Styles for the Login Form

export const LoginForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0px 10px 50px #555;
  background-color: #ffffff;
  margin-bottom:50px;

name {
  width: 49%;
}

  
  h1 {
    text-align: center;
    paddding-bottom: 20px;
    margin-bottom: 20px;
    font-size: 36px;
    width: 100%;
    color: #111;
    font-weight: lighter;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  a {
    color: #08addd;
    text-decoration: none;
  }
  form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .form input{
    border-radius: 5px;
    border: 1px solid rgb(211, 211, 211);
    padding: 5px;
  }

  .details {
    border-radius: 5px;
    border: 1px solid rgb(211, 211, 211);
    padding: 5px;
  }
  input {
    border-radius: 5px;
    border: 1px solid rgb(211, 211, 211);
    padding: 10px;
    margin-top: 10px;
    margin-bottom:15px;
    &::placeholder {
      font-size: 1.2em;
      font-weight: lighter;
      color: #999;
    }
  }
  label {
    margin-bottom: 10px;
    color: #222;
    font-weight: lighter;
    
  }
  button {
    background-color: #258EA6;
    color: #fff;
    border: 2px solid #fff;
    width: 100%;
    margin-top: 1em;
    padding: 8px 0px;
    font-size: 1em;
    font-weight: lighter;
    letter-spacing: 1px;
    margin-bottom: 0.25em;
  }
  .extra {
    margin-top: 1rem;
    text-align: center;
    margin-left: 80px;
  }
  .error {
    background: #fff6f6;
    border-radius: 3px;
    padding: 0.5rem 0;
    color: #9f3a38;
    text-align: center;
    margin-top: 1rem;
  }
  .success {
    background: #fcfff5;
    border-radius: 3px;
    padding: 0.5rem 0;
    color: #2c662d;
    text-align: center;
    margin-top: 1rem;
  }
`;

export const LoginHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0 1rem;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  h1 {
    font-size: 1.5rem;
  }
`;

//Styled for the Ticket Form

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  background: #efeff3;
  padding: 2rem 2rem;
  border-radius: 5px;
  box-shadow: #999 1px 2px 5px;
  input,
  textarea,
  select {
    font-size: 1rem;
    margin-bottom: 1rem;
    border: 1px solid gray;
    border-radius: 3px;
    height: 30px;
    padding-left: 12px;
    outline: none;
    &::placeholder {
      color: gray;
    }
  }
  textarea {
    width: 375px;
    height: 150px;
  }
  button {
    padding: 0.5rem 0.5rem;
    background: #258EA6;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 3px;
    &:hover {
      color: #258EA6;
      background: #fff;
    }
  }
  .extra {
    margin-top: 1rem;
    text-align: center;
  }
  .field {
    display: flex;
    label {
      margin-right: 1rem;
      width: 20%;
    }
    input {
      width: 70%;
    }
  }
`;

// Styles for Dashboard Component

export const DashboardDiv = styled.div`
  display: flex;
  .dash-panel {
    width: 250px;
    height: 81vh;
    background: #fff;
  }
  .dash-main {
    width: 90%;
    background: #55596d;
  }
  .profile-panel {
    text-align: center;
  }
`;

// Styles for Dashboard Menu

export const DashNav = styled.nav`
  color: #258EA6;
  text-align: center;
  li {
    cursor: pointer;
    padding: 1rem 0;
    border: 1px solid #002070;
    border-radius: 4px;
    margin: 0 auto;
    width: 95%;
    margin-bottom: 5px;
    background: #55596d;
    :hover {
      background: #1e50ee;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;

// Styles for TicketItem
export const ItemDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
  .ticket-item {
    /* padding: 1.2rem; */
    margin: 1rem 1rem 0 1rem;
    border: 1px solid #d4d4d4;
    border-radius: 4px;
    box-shadow: 2px 2px 19px -4px rgba(85, 89, 109, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    background: white;
    :hover {
      transform: scale(1.01);
    }
    .top-section {
      display: flex;
      padding-bottom: 6px;
      align-items: baseline;
      .status {
        display: flex;
        flex-direction: column;
        width: 20%;
        margin-right: 5px;
        .status-number {
          margin: 5px 0;
          text-align: center;
        }
        .status-resolved {
          margin: 0;
          padding: 3px 0;
          text-align: center;
          border-radius: 0 2px 2px 0;
          color: #fff;
          margin-top: 7px;
        }
      }
      .ticket-info {
        display: flex;
        margin-left: 15px;
        flex-direction: column;
        flex-wrap: wrap;
        width: 70%;
        h1 {
          font-weight: bold;
          margin-bottom: 10px;
          text-align: center;
          font-size: 1.3rem;
        }
        p {
          line-height: 18px;
          word-break: break-all;
          font-size: 14px;
        }
      }
      .delete-item {
        width: 10%;
        padding: 13px;
        text-align: center;
        i {
          cursor: pointer;
        }
      }
    }
    .bottom-section {
      display: flex;
      width: 100%;
      border-top: 1px solid gray;
      align-content: center;
      padding: 1rem 0;
      .meta-tags {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        align-items: baseline;
        button {
          padding: 0.5rem 0.5rem;
          background: #258EA6;
          color: #fff;
          font-size: 1rem;
          cursor: pointer;
          outline: none;
          border: none;
          border-radius: 3px;
          &:hover {
            color: #258EA6;
            background: #efeff3;
          }
        }
      }
    }
  }
  a {
    text-decoration: none;
    color: #000;
    :hover {
      color: #08addd;
    }
  }
`;

//
// Card div for ticket/${id}
//

export const CardDiv = styled.div`
  margin: 0 auto;
  width: 75%;
  background: white;
  display: flex;
  padding: 1.2rem;
  margin: 1rem auto;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  box-shadow: 2px 2px 19px -4px rgba(85, 89, 109, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  background: white;
  .top-content {
    display: flex;
    justify-content: space-between;
    .meta-data {
      width: 15%;
      margin-bottom: 5px;
      h2 {
        margin-bottom: 5px;
      }
    }
    .title {
      width: 75%;
      text-align: center;
      font-size: 1.4rem;
      margin-right: 115px;
    }
    .button-div {
      width: 10%;
      button {
        padding: 0.5rem 0.5rem;
        background: #258EA6;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 3px;
        &:hover {
          color: #258EA6;
          background: #efeff3;
        }
      }
    }
  }
  .ticket-content {
    p {
      margin-top: 10px;
      font-weight: bold;
      word-break: break-word;
    }
  }
`;

// Styles for the Profile Card
export const ProfileDiv = styled.div`
  color: black;
  margin: 2rem 0;
  line-height: 1.5;
`;

