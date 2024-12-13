import { Theme, SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { RouterLink } from "src/routes/components";
import { URL_LOGIN } from "src/config-global";

// ----------------------------------------------------------------------

type Props = {
  sx?: SxProps<Theme>;
};

export default function LoginButton({ sx }: Props) {
  return (
    <Button
      component={RouterLink}
      href={URL_LOGIN}
      variant="outlined"
      sx={{ mr: 1, ...sx }}
    >
      Login
    </Button>
  );
}
