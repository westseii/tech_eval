import { ref } from "vue";

const products = ref([
  {
    id: 0,
    title: "Lilitha's Bow",
    description: "One of Lilitha's earlier Bows, recently repaired by Eldrista the Adventurer.",
    image: null,
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
    image: null,
    price: 31,
    likes: 33,
  },
]);

export default products;
