import { Box, Typography, Stack, Badge } from "@mui/material";
import React from "react";
import { faker } from "@faker-js/faker";
import { useTheme } from "@mui/material";
import StyledBadge from "../../share/AvatarStyleBadge";
import { useDispatch, useSelector } from "react-redux";
import { onClickConversation } from "../../redux/slices/signalrSlice";

const ChatElement = ({ item }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { Id } = useSelector((state) => state.signalr.conversation);

  return (
    <Box
      onClick={() => dispatch(onClickConversation(item))}
      sx={{
        boxShadow: 1,
        width: "100%",
        borderRadius: 1,
        backgroundColor:
          Id && Id === item.Id
            ? "#D9F3DE"
            : theme.palette.mode === "light"
            ? "#FFFFFF"
            : theme.palette.background.paper,
        WebkitUserSelect: "none" /* Safari */,
        MozUserSelect: "none" /* Firefox */,
        msUserSelect: "none" /* Internet Explorer/Edge */,
        userSelect: "none",
      }}
      p={2}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          <StyledBadge
            isOnline={item.isOnline}
            image={faker.image.avatar()}></StyledBadge>
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{item.Title}</Typography>
            <Typography variant="caption">{item.Messages}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems="center">
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {item.time}
          </Typography>
          <Badge color="primary" badgeContent={3} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatElement;
