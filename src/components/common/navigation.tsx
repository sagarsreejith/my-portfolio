import { Box } from "@mui/material";

const Navigation = () => {
  const navArray = [
    { label: "myBio()" },
    { label: "showMyExperiance()" },
    { label: "contactMe()" },
    { label: "myBio()" },
    { label: "showMyExperiance()" },
    { label: "contactMe()" },
  ];
  return (
    <Box sx={{ display: 'flex', justifyContent:'space-between', marginTop: 3, letterSpacing: 2}}>
      {navArray.map((nav, index) => {
        return <Box sx={{cursor: 'pointer'}} key={index}>{nav.label}</Box>;
      })}
    </Box>
  );
};

export default Navigation;
