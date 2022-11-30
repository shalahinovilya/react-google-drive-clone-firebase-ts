import {styled} from "@mui/material";
import Paper from "@mui/material/Paper";

export const FileItemStyled = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));


export const UploadingFileItemStyled = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    display: 'flex',
    position: 'relative',
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
    height: 90,
    lineHeight: '60px',
}));