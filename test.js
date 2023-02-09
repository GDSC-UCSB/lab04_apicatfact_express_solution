const getCatFactStaticAPI = async () => {
  const response = await fetch("http://localhost:3000/catfact/static");
  const data = await response.json();
  console.log(data.fact);
};

const getCatFactsAllStaticAPI = async () => {
  const response = await fetch("http://localhost:3000/catfact/static/all");
  const data = await response.json();
  console.log(data.facts);
};

const postCatFactStaticAPI = async () => {
  const response = await fetch("http://localhost:3000/catfact/static", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fact: "This is a new fact" }),
  });
  const data = await response.json();
  console.log(data);
};

const getCatFactDynamicAPI = async () => {
  const response = await fetch("http://localhost:3000/catfact/dynamic");
  const data = await response.json();
  console.log(data.fact);
};

const main = async () => {
  // should have no extra facts
  await getCatFactsAllStaticAPI();
  // should add fact
  await postCatFactStaticAPI();
  // should now show extra fact at the bottom.
  await getCatFactsAllStaticAPI();
};

main();
