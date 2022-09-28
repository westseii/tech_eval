import { ref } from "vue";

// temporary item data from my favorite game of all time, Asheron's Call
const products = ref([
  {
    id: 0,
    title: "Lilitha's Bow",
    description: "One of Lilitha's earlier Bows, recently repaired by Eldrista the Adventurer.",
    image: "http://dummyimage.com/107x100.png/dddddd/000000",
    price: 82,
    likes: 0,
  },
  {
    id: 1,
    title: "Sword of Lost Hope",
    description:
      "The Sword of Lost Hope pulses with twisted energy. The weapon seems to coruscate with the power of Ilservian's blood. The Light has been forever dimmed, and the weapon is now empowered by the essence of the Hopeslayer. It will no longer accept infusions of light.",
    image: null,
    price: 97,
    likes: 1,
  },
  {
    id: 2,
    title: "Asteliary Orb",
    description: "An orb enchanted with powerful magic, taken from the Asteliary dungeon.",
    image: "http://dummyimage.com/183x100.png/ff4444/ffffff",
    price: 31,
    likes: 33,
  },
  {
    id: 3,
    title: "Brogord's Axe",
    description: "Crafted by my own hand in the third year of our exile. --Brogord the Forester",
    image: null,
    price: 940,
    likes: 1,
  },
  {
    id: 4,
    title: "Crystal Sword",
    description:
      "A crystalline sword, made out of what appears to be a shard of the original soul crystal. It is cold to the touch, and seems to glow with an inner radiance.",
    image: "http://dummyimage.com/167x100.png/5fa2dd/ffffff",
    price: 7000,
    likes: 999,
  },
]);

export default products;
