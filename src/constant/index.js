export const form_data = [
  [
    { name: "name" },
    {
      name: "lastname",
    },
    {name:"state", type:"select", options:["Uttar Pradesh","Rajasthan","Haryana","Punjab","Delhi"], defaultValue:"delhi"},
    { name: "username", showLeftPane: true },
    { name: "city" },
    { name: "zip", type: "number" },
    { name: "email", type: "email", showLeftPane: true }
  ],
  [
    { name: "Locality" },
    { name: "Adhaar number" },
    { name: "state of domicile" },
  ],
  [
    { name: "Highest qualification" },
    { name: "HSC percentage" },
    { name: "Xth percentage" },
  ],
  
];

export const num_of_pasges = form_data.length-1;
// export const page_names = ["first_page", "second_page", "third_page","nthpage"];
