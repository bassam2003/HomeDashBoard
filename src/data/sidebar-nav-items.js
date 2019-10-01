export default function() {
  return [
    {
      title: "Home",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Sign in",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Adminstration",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/Adminstration",
    },
    {
      title: "Contact Form",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    }
  ];
}
