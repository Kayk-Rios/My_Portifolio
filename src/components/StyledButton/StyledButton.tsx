import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode;
    onClick: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        borderRadius: "3px",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        padding: "4px 20px",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "inline-flex",
        gap: "10px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    return (
        <>
            <StyledButton onClick={onClick}>{children}</StyledButton>
        </>
    );
};

export default StyledButton;
