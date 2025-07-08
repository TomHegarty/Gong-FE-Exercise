import styled from "@emotion/styled";

export const HierarchyTreeOuter = styled.ul((props) => ({
  listStyle: "none",
  padding: props.theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  gap: props.theme.spacing(1),
  backgroundColor: props.theme.palette.grey[100],
  borderRadius: props.theme.spacing(1),

  ".& li": {
    marginLeft: props.theme.spacing(2),
  },
}));
