import styled from "styled-components";

export const AppContainer = styled.main`
  * {
    margin: none;
    padding: none;
    box-sizing: border-box;
    font-family: "Quicksand", sans-serif;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavigationContainer = styled.nav`

width: 100%;
  ul {
    display: flex;
    justify-content: flex-end;
  }
  li {
    list-style-type: none;
  }
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  margin: 0rem 0.5rem;
  color: gray;
  :hover {
    cursor: pointer;
    color: #ff007b;
  }
`;
