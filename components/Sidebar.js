import { Avatar, IconButton } from "@mui/material";
import styled from "styled-components";
import { Chat } from "@mui/material";
import { MoreVert } from "@mui/material";
function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </IconsContainer>
      </Header>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;
const Header = styled.div``;
const UserAvatar = styled(Avatar)``;
const IconsContainer = styled.div``;
