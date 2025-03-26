import App from "@/App";
import MobileApp from "@/MobileApp/MobileApp";
import { useMediaQuery } from "react-responsive";

export default function AppLoader() {
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return isMobile ? <MobileApp /> : <App />;
}
