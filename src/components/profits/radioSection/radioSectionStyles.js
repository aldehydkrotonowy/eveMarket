import { styled } from "@material-ui/core/styles";
import { theme } from "../../../theme";

export const Wrapper = styled("div")({
  display: "flex",
});

export const Column = styled("div")({
  display: "inline-block",
  fontSize: theme.fonts.sizes.smaller,
  margin: "0px 10px",
});

export const Row = styled("div")({
  color: "black",
  lineHeight: "1.7rem",
});
