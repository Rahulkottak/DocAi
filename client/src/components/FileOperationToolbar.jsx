import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import OperationMenu from "./OperationMenu";
import Stack from "@mui/material/Stack";
import FileNameBar from "./FileNameBar";

export default function FileOperationToolbar() {
  return (
    <Stack flexDirection="row" marginX={2} alignItems="center" gap={1} paddingY={2}>
      <ArticleIcon sx={{fontSize:"3rem"}} />
      <Stack alignItems="flex-start">
        <FileNameBar />
        <OperationMenu />
      </Stack>
    </Stack>
  );
}
