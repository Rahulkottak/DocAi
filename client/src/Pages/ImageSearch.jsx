import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField ";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import fetchImages from "../utils/fetchImages";
import ImageCard from "../components/ImageCard";
export default function ImageSearch() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (search) {
      setLoading(true);
      try {
        const imageData = await fetchImages(search);
        const images = imageData.map(({ thumbnailUrl }) => {
          if (thumbnailUrl) return thumbnailUrl;
        });
        setResults(images);
      } catch {
        alert("Some Error Occured");
      }
      setLoading(false);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="Center" width="100%" padding={4}>
      <Typography
        mb="50px"
        fontWeight={600}
        textAlign="center"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
      >
        Search For Images You Want
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search Exercises...."
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
        >
          Search
        </Button>
      </Box>
      <Stack>
        {loading && <CircularProgress disableShrink />}
        <Stack
          direction="row"
          sx={{ gap: { lg: "110px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {results.length ? (
            results.map((result, index) => {
              // return exercise.name
              return <ImageCard link={result} key={result}/>;
            })
          ) : (
            <Typography variant="h6">
              {!loading && "Search For Valid Images"}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
