import { Navbar } from "./Navbar";
import { Categorybar } from "./Categorybar";
import { Grid } from "@mui/material";
import { Item } from "../common/Item";
import { useEffect, useState } from "react";
import { DisplayProducts } from "./DisplayProducts";
import { RapidAPIClient } from "../http/httpClient";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router";

function SearchResult() {
  const urlParams = useParams();
  const [searchResults, setSearchResults] = useState(null);

  const getSeachResults = async () => {
    const response = await RapidAPIClient.get("/products/list", {
      params: {
        country: "au",
        lang: "en",
        currentpage: "0",
        pagesize: "50",
        productTypes:
          urlParams.searchTerm.charAt(0).toUpperCase() +
          urlParams.searchTerm.slice(1),
      },
    });
    return response.data.results;
  };

  useEffect(() => {
    let results;
    const fetchData = async () => {
      results = await getSeachResults();
    };
    fetchData().then(() => {
      setSearchResults(results);
    });
  }, [urlParams.searchTerm]);

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Item>
          <Navbar />
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Categorybar />
        </Item>
      </Grid>
      {searchResults ? (
        <Grid item xs={12}>
          <Item>
            <DisplayProducts data={searchResults} />
          </Item>
        </Grid>
      ) : (
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={12}>
            <Item>
              <Stack spacing={25} direction={"row"}>
                <Skeleton variant="rectangular" width={350} height={220} />
                <Skeleton variant="rectangular" width={350} height={220} />
                <Skeleton variant="rectangular" width={350} height={220} />
              </Stack>
            </Item>
            <Item>
              <Stack spacing={25} direction={"row"}>
                <Skeleton variant="rectangular" width={350} height={220} />
                <Skeleton variant="rectangular" width={350} height={220} />
                <Skeleton variant="rectangular" width={350} height={220} />
              </Stack>
            </Item>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export { SearchResult };
