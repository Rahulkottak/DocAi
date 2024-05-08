import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import saveFile from "../utils/saveFile";

export default function ImageCard({ link }) {
  return (
    <ImageListItem key={link}>
      <img src={link} alt={link} loading="lazy" />
      <ImageListItemBar
        title={link}
        subtitle="copy the text using copy"
        actionIcon={
            <IconButton sx={{ color: "rgba(255, 255, 255)" }} onClick={()=>saveFile(link)}>
              <DownloadIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
        }
      />
    </ImageListItem>
  );
}
