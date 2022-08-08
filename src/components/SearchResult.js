import { Navbar } from "./Navbar";
import { Categorybar } from "./Categorybar";
import { Grid } from "@mui/material";
import { Item } from "../common/Item";
import { useEffect, useState } from "react";
import { DisplayProducts } from "./DisplayProducts";
import { RapidAPIClient } from "../http/httpClient";
import { useParams } from "react-router";
import { LoadingSkeleton } from "./LoadingSkeleton";
import Typography from "@mui/material/Typography";

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

  if (!searchResults) {
    return (
      <>
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
        </Grid>
        <LoadingSkeleton />
      </>
    );
  }

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
      {searchResults.length > 0 ? (
        <Grid item xs={12}>
          <Item>
            <DisplayProducts data={searchResults} />
          </Item>
        </Grid>
      ) : (
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Item>
              <Typography variant="h6">NO MATCHING ITEMS</Typography>
              <Typography variant="body1">
                {`Your search ${urlParams.searchTerm} did not match any results`}
              </Typography>
            </Item>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export { SearchResult };
