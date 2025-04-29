import { MenuItem, Select, Stack } from "@mui/material";
import { StyleBox } from "../../common/styleBox";
import { StyledOption, StyledSelect } from "../../common/form";

function Category() {
  return (
    <div>
      <StyleBox>
        <Stack direction="row" justifyContent="space-between">
          <div></div>
          <div>
            <Stack>
              <StyledSelect label="Boi">
                <StyledOption value={1}>1</StyledOption>
                <StyledOption value={2}>1</StyledOption>
                <StyledOption value={2}>1</StyledOption>
              </StyledSelect>
            </Stack>
          </div>
        </Stack>
      </StyleBox>
    </div>
  );
}

export default Category;
