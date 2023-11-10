const input = document.querySelector(".input");
const list = document.querySelector(".list");

const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

const getCharacter = (val) => {
  const result = val
    ? charcters.filter((charcter) => charcter.toLocaleLowerCase().includes(val))
    : [];
  return Promise.resolve(result);
};

const handleChangeInput = async (ev) => {
  let serachParam = ev.target.value.trim();
  let items = [];
  if (serachParam.length >= 2) {
    items = await getCharacter(serachParam);
  }
  if (serachParam) {
    if (items.length >= 1) {
      render(items);
    } else {
      let item = ["No matches found!"];
      render(item);
    }
  } else {
    render([]);
  }
};

const render = (items) => {
  list.innerHTML = "";
  list.style.width = "300px";
  items.forEach((ele) => {
    let item = document.createElement("div");
    item.innerText = ele;
    list.append(item);
  });
};

input.addEventListener("keyup", debounce(handleChangeInput, 1000));

console.log("script is running");

var charcters = [
  "Akari Nitta",
  "Angel",
  "Aoi Todo",
  "Arata Nitta",
  "Atsuya Kusakabe",
  "Bayer",
  "Charles Bernard",
  "Chizuru Hari",
  "Chojuro Zenin",
  "Choso",
  "Cyrus Veil",
  "Dagon",
  "Dhruv Lakdawalla",
  "Eso",
  "Fujinuma",
  "Fumi",
  "Fumihiko Takaba",
  "Furudate",
  "Garry K. Johnson",
  "Haba",
  "Hagane Daido",
  "Hajime Kashimo",
  "Hana Kurusu",
  "Hanami",
  "Hanyu",
  "Haruta Shigemo",
  "Hiromi Higuruma",
  "Iori Hazenoki",
  "Jin Itadori",
  "Jinichi Zenin",
  "Jiro Awasaka",
  "Jogo",
  "Junpei Yoshino",
  "Juzo Kumiya",
  "Kaito Yuki",
  "Kaori Itadori",
  "Kasumi Miwa",
  "Kechizu",
  "Keita Oe",
  "Kenjaku",
  "Kensuke Nagino",
  "Kento Nanami",
  "Kinji Hakari",
  "Kirara Hoshi",
  "Kiyotaka Ijichi",
  "Ko-Guy",
  "Kokichi Muta",
  "Kokun",
  "Kurourushi",
  "Larue",
  "List of Characters",
  "Mahito",
  "Mai Zenin",
  "Maki Zenin",
  "Manami Suda",
  "Masamichi Yaga",
  "Megumi Fushiguro",
  "Mei Mei",
  "Michizane Sugawara",
  "Miguel",
  "Mimiko Hasaba",
  "Misato Kuroi",
  "Momo Nishimiya",
  "Nagi Yoshino",
  "Nanako Hasaba",
  "Naobito Zenin",
  "Naoya Zenin",
  "Niji Ebina",
  "Nobara Kugisaki",
  "Nobuaki Zenin",
  "Nobuko Takada",
  "Noritoshi Kamo",
  "Ogami",
  "Ogami's Grandson",
  "Ogi Zenin",
  "Panda",
  "Ranta Zenin",
  "Reggie Star",
  "Remi",
  "Rika",
  "Rika Orimoto",
  "Riko Amanai",
  "Rin Amai",
  "Rokujushi Miyo",
  "Ryu Ishigori",
  "Saki Rindo",
  "Saori",
  "Satoru Gojo",
  "Setsuko Sasaki",
  "Shigeru Sonoda",
  "Shiu Kong",
  "Shoko Ieiri",
  "Shota Ito",
  "Sotomura",
  "Suguru Geto",
  "Sukuna",
  "Tadashi Okazaki",
  "Taichi Kanada",
  "Takagi",
  "Takako Uro",
  "Takeda",
  "Takeru",
  "Takeshi Iguchi",
  "Takuma Ino",
  "Tengen",
  "Toge Inumaki",
  "Toji Fushiguro",
  "Toshihisa Negi",
  "Tsumiki Fushiguro",
  "Ui Ui",
  "Uraume",
  "Utahime Iori",
  "Wasuke Itadori",
  "Yorozu",
  "Yoshinobu Gakuganji",
  "Yu Haibara",
  "Yuji Itadori"
];
