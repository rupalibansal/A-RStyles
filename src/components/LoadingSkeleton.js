import { Grid } from "@mui/material";
import { Item } from "../common/Item";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function LoadingSkeleton() {
  return (
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
  );
}

export { LoadingSkeleton };
