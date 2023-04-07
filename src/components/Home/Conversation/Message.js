import { Box, Stack } from "@mui/material";
import React from "react";
import {
  TimeLine,
  TextMsg,
  ImgMsg,
  ReplyMsg,
  LinkMsg,
  DocMsg,
} from "./MsgTypes";
import { useSelector } from "react-redux";
import { selecteSignalr } from "../../../redux/slices/signalrSlice";
import { selectAuth } from "../../../redux/slices/authSlice";

export default function Message({ menu }) {
  const { messages } = useSelector(selecteSignalr);
  const { userAuth } = useSelector(selectAuth);

  return (
    <Box p={3}>
      <Stack spacing={3}>
        {messages.map((el, idx) => {
          if (!el) return <></>;
          switch (el.type) {
            case "divider":
              return <TimeLine key={idx} el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <ImgMsg el={el} key={idx} menu={menu} />;
                case "doc":
                  return <DocMsg el={el} key={idx} menu={menu} />;
                case "link":
                  return <LinkMsg el={el} key={idx} menu={menu} />;
                case "reply":
                  return <ReplyMsg el={el} key={idx} menu={menu} />;
                default:
                  return (
                    <TextMsg
                      el={el}
                      key={idx}
                      menu={menu}
                      isMySend={userAuth.Id === el.SederId}
                    />
                  );
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
}
