 "use client"; // Mark this as a client component
import { Provider } from "react-redux";
import { store } from "../lib/store/store";

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}