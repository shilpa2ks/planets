"use client";

import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error boundary caught:", error);
  }, [error]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding="2rem"
    >
      <Typography variant="h2" gutterBottom>
        Something went wrong!
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={2}>
        {error.message || "An unexpected error occurred"}
      </Typography>
      {error.digest && (
        <Typography variant="caption" color="text.secondary" mb={2}>
          Error ID: {error.digest}
        </Typography>
      )}
      <Button variant="contained" onClick={() => reset()} sx={{ mt: 2 }}>
        Try again
      </Button>
    </Box>
  );
}
