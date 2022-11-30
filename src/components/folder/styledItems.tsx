import {styled} from "@mui/material";
import Paper from "@mui/material/Paper";

export const FolderItemStyled = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));