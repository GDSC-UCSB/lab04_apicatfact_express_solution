const express = require("express");

const router = express.Router();

let cat_facts = [
  "Cats have been domesticated for over 9,000 years and are one of the most popular pets in the world.",
  "Cats have a flexible spine and strong hind legs, allowing them to jump up to six times their body length.",
  "Cats have a unique ability to always land on their feet due to their inner ear balance and flexible backbone.",
  "Cats have short, sharp claws that they use for hunting, climbing, and self-defense.",
  "Cats have a distinctive 'purr' that they use to communicate with humans and other cats.",
  "Cats have a highly developed sense of smell, which they use to identify territory, mates, and prey.",
  "Cats sleep an average of 16 hours per day and are most active at dawn and dusk.",
  "Cats have a very sensitive sense of touch, with vibrissae (whiskers) on their face, legs, and tail that help them navigate and hunt.",
  "Cats have a slow metabolism, allowing them to survive without eating for several days in case of food shortage.",
  "Cats have a tendency to knead with their paws, which is a sign of affection and contentment.",
];

// GET /catfact/static
// returns a catfact pulled from the static local source.
router.get("/static", (req, res) => {
  let r = Math.floor(Math.random() * 10);
  res.status(200);
  res.json({ fact: cat_facts[r] });
});

router.get("/static/all", (req, res) => {
  res.json({ facts: cat_facts });
});

router.get("/dynamic", async (req, res) => {
  let response = await fetch("https://catfact.ninja/fact/");
  let json = await response.json();
  console.log(json);
  res.status(200);
  res.json(json);
});

// updating local data

router.post("/static", (req, res) => {
  const { fact } = req.body;
  cat_facts.push(fact);
  res.status(200);
  res.json({ success: true });
});

module.exports = router;
