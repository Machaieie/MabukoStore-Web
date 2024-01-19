import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CancelButton = ({ navigateTo, label = "Cancel" }) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(navigateTo && navigateTo.trim() ? navigateTo : "-1");
  };

  return (
    <Button variant="outlined"  onClick={handleCancel}>
      {label}
    </Button>
  );
};

export default CancelButton;
