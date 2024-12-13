import { useEffect, useCallback, useState } from "react";
// routes
import { paths } from "src/routes/paths";
import { useRouter } from "src/routes/hook";
//
import { useAuthContext } from "../hooks";
import { URL_LOGIN } from "src/config-global";

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();

  const { authenticated, method } = useAuthContext();
  console.log({ authenticated });

  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    if (!authenticated) {
      const searchParams = new URLSearchParams({
        returnTo: window.location.href,
      }).toString();
      const href = URL_LOGIN + `?${searchParams}`;
      router.replace(href);
    } else {
      setChecked(true);
    }
  }, [authenticated, method, router]);

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}
