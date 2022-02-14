import React from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { Container, Box, Stack, Divider, Chip, Button } from "@mui/material";

function RandomUser({ userData, fetchAPI }) {
  console.log(userData[0].email);
  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 2, boxShadow: 4 }}>
        <Box sx={{ p: 4, display: "flex" }}>
          <Avatar
            alt={userData[0].name.first}
            sx={{ width: 88, height: 88 }}
            src={userData[0].picture.large}
          />
          <Stack ml={2} spacing={1.5}>
            <Typography fontWeight={700}>
              {userData[0].name.first} {userData[0].name.last}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {userData != null && userData[0].email}
              email
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {userData[0].location.city} {userData[0].location.country}
            </Typography>
          </Stack>
        </Box>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, py: 1, bgcolor: "background.default" }}
        >
          <Typography variant="body2" color="text.secondary">
            Phone
          </Typography>
          <Chip label={userData[0].phone}></Chip>
          <Typography variant="body2" color="text.secondary">
            Mobile
          </Typography>
          <Chip label={userData[0].cell}></Chip>
          <Button variant="contained" onClick={fetchAPI}>
            Refresh
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}

export default RandomUser;
