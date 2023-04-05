import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../../data";
import {
  TimeLine,
  TextMsg,
  ImgMsg,
  ReplyMsg,
  LinkMsg,
  DocMsg,
} from "./MsgTypes";

export default function Message({ menu }) {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el, idx) => {
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
                  return <TextMsg el={el} key={idx} menu={menu} />;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
}
