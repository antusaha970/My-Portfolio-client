import styled from "@emotion/styled";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const copyToClipboard = (textToCopy) => {
  navigator.clipboard.writeText(textToCopy);
};

const HrLine = styled("div")`
  mix-blend-mode: normal;
  opacity: 0.3;

  border: 1px solid #42446e;
`;

const Footer = () => {
  return (
    <section>
      <Stack
        direction={{ md: "row", xs: "column" }}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          py: 1,
        }}
      >
        <Box flex={2}>
          <Typography
            variant="p"
            component="p"
            sx={{
              color: "#A7A7A7",
              fontSize: "32px",
            }}
          >
            {"{404}"}
          </Typography>
        </Box>
        <Box flex={1.5}>
          <Stack
            direction={{ md: "row", xs: "column" }}
            justifyContent="space-between"
            alignItems="center"
            columnGap={2}
          >
            <Box>
              <Typography
                sx={{
                  color: "#A7A7A7",
                  cursor: "pointer",
                }}
                onClick={() => copyToClipboard("+880 1748656711")}
                title="Copy Number"
                component="p"
              >
                +880 1748656711
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#A7A7A7",
                  cursor: "pointer",
                }}
                onClick={() => copyToClipboard("antusaha970@gmail.com")}
                component="p"
                title="Copy Email"
              >
                antusaha970@gmail.com
              </Typography>
            </Box>
            <Box>
              <a href="https://github.com/antusaha970" target=" ">
                <GitHub
                  sx={{
                    color: "#A7A7A7",
                  }}
                />
              </a>
            </Box>
            <Box>
              <a href="https://www.linkedin.com/in/antusaha970" target=" ">
                <LinkedIn
                  sx={{
                    color: "#A7A7A7",
                  }}
                />
              </a>
            </Box>
          </Stack>
        </Box>
      </Stack>
      <HrLine />
      <Typography
        sx={{
          textAlign: "center",
          color: "#A7A7A7",
          py: 2,
        }}
      >
        👨‍💻 Made With ❤️ & ☕️ by Antu Saha
      </Typography>
    </section>
  );
};

export default Footer;
