import { Box, Typography, Stack, Avatar, Badge } from "@mui/material";
import React from "react";
import { faker } from "@faker-js/faker";
import { useTheme } from "@mui/material";
import { StyledBadge } from "../../share/StyleBadge";

const ChatElement = ({ item }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        boxShadow: 1,
        width: "100%",
        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#FFFFFF"
            : theme.palette.background.paper,
      }}
      p={2}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          {item.Online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot">
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}

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
