'use client';

import { Provider } from "react-redux";
import store from '../redux/store/index';

export default function AppProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
