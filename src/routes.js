import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Home from "./views/Home";
import UserProfile from "./views/UserProfile";
import ComponentsOverview from "./views/ComponentsOverview";
import Adminstration from "./views/Adminstration";
import Shopping from "./views/Shopping";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: Home
  },
  {
    path: "/Shopping",
    layout: DefaultLayout,
    component: Shopping
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfile
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/Adminstration",
    layout: DefaultLayout,
    component: Adminstration
  },
  {
    path: "/Shopping",
    layout: DefaultLayout,
    component: Shopping
  }
];
