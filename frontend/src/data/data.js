const events = [
  {
    id: 1,
    image: "https://vuejs.org/images/logo.png",
    event: "eventValue",
    date: "dateValue",
    city: "cityValue",
    details: "detailsValue",
    attended: 0,
    category: "categoryValue",
    reviews: [],
  },
  {
    id: 12,
    image: "https://vuejs.org/images/logo.png",
    event: "eventValue",
    date: "dateValue",
    city: "cityValue",
    details: "detailsValue",
    attended: 0,
    category: "categoryValue",
    reviews: [],
  },
  {
    id: 123,
    image: "https://vuejs.org/images/logo.png",
    event: "eventValue",
    date: "dateValue",
    city: "cityValue",
    details: "detailsValue",
    attended: 0,
    category: "categoryValue",
    reviews: [],
  },
  {
    id: 1234,
    image: "https://vuejs.org/images/logo.png",
    event: "eventValue",
    date: "dateValue",
    city: "cityValue",
    details: "detailsValue",
    attended: 0,
    category: "categoryValue",
    reviews: [],
  },
  {
    id: 12345,
    image: "https://vuejs.org/images/logo.png",
    event: "eventValue",
    date: "dateValue",
    city: "cityValue",
    details: "detailsValue",
    attended: 0,
    category: "categoryValue",
    reviews: [],
  },
  {
    id: 123456,
    image: "https://vuejs.org/images/logo.png",
    event: "eventValue",
    date: "dateValue",
    city: "cityValue",
    details: "detailsValue",
    attended: 0,
    category: "categoryValue",
    reviews: [],
  },
];

function fetchData() {
  const keyLS = "viewlist-events";
  let setLS = localStorage.setItem(keyLS, JSON.stringify(events));
  return setLS;
}
module.exports = { fetchData };
