import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import Logout from "../features/authentication/Logout";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/account");
  }

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={handleClick}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
