const routers = [
  {
    path: "/",
    exact: true,
    redirect: "/",
  },
  {
    component: "MainLayout",
    path: "/",
    exact: false,
    childrens: [
      {
        component: "NumberToWord",
        path: "/",
        exact: true,
      },
      {
        component: "ContactUs",
        path: "contact",
        exact: true,
      },
      {
        component: "Policy",
        path: "privacy",
        exact: true,
      },
    ],
  },
];

export default routers;
