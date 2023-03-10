import { Box, Stack, Typography } from "@mui/material"
import { FC, memo } from "react"

type Props = {
  data: HomeGoodRes
}
export const Good: FC<Props> = memo(({ data }) => {
  return (
    <Box bgcolor="white" textAlign="center" width="234px" height="300px" paddingX="20px" paddingY="15px">
      <Box
        sx={{ width: 160, height: 160 }}
        component={"img"}
        src={data.img}
      />
      <Typography sx={{ color: "#333" }} textAlign="center">
        {data.name}
      </Typography>
      <Typography mt="10px" fontSize="14px" sx={{ color: "#b0b0b0" }} textAlign="center" noWrap>
        {data.dest}
      </Typography>
      <Stack mt="15px" direction="row" spacing={2} alignItems="center" justifyContent="center">
        <Typography fontSize="14px" sx={{ color: "#ff6700" }} textAlign="center">
          {data.price}元
        </Typography>
        <Typography component="del" fontSize="14px" sx={{ color: "#b0b0b0" }} textAlign="center">
          {data.originalPrice}元
        </Typography>
      </Stack>
    </Box>
  )
})