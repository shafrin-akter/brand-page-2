const allBrands = [
  {
    name: "Basma",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/BASMA-LOGO-1.webp?v=1741690377",
    url: "/collections/basma",
  },
  {
    name: "Cavalier",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/CAVALIER-LOGO-1-1024x640-1.webp?v=1741690377",
    url: "/collections/cavalier",
  },
  {
    name: "Food Supplement",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/rectengal-logo.png?v=1741690377",
    url: "/collections/food-supplement",
  },
  {
    name: "Zodiac",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/ZODIAC-LOGO-1.webp?v=1741690377",
    url: "/collections/zodiac",
  },
  {
    name: "Smile",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/smile_perfume_logo_360x-_1.png?v=1741690377",
    url: "/collections/smile",
  },
  {
    name: "Dyrose",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/PqJII2H23EzwdkYXOQwD20sqoGkhywDD3mRlTH9t.png?v=1741690377",
    url: "/collections/dyrose",
  },
  {
    name: "Amouage",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/xALeKzIjf6nhht4VYdVEofG1f7A25fb4r81gUBq6.png?v=1741690377",
    url: "/collections/amouage",
  },
  {
    name: "Chanel",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/Nl04SH5BBflzmnV52GjzXDvYwp0KMzJFfVNMuPWC.png?v=1741690377",
    url: "/collections/chanel",
  },
  {
    name: "Lattafa Perfumes",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/lattafa-perfumes.png?v=1741690377",
    url: "/collections/lattafa-perfumes",
  },
  {
    name: "Carolina Herrera",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/szWMjNMU88LI7TeXH77K0SWhgHpqnlab367ilKia.png?v=1741690377",
    url: "/collections/carolina-herrera",
  },
  {
    name: "Dior",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/TOVnnuP8CgbobbzoPdGmE7ehQPB2ABWc41dmyaAw.png?v=1741690377",
    url: "/collections/dior",
  },
  {
    name: "Valentino",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/L5H7aUm0ELIoX1bhRo9qg1cB45IM4DS6dr8AD9bo.webp?v=1741690377",
    url: "/collections/valentino",
  },
  {
    name: "Yves Saint Laurent",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/yves-saint-laurent.png?v=1741690377",
    url: "/collections/yves-saint-laurent",
  },
  {
    name: "Xerjoff",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/AcQplPEUOYV5K3hNrRHJV450JzdkGaMYok9dVtIs.png?v=1741690377",
    url: "/collections/xerjoff",
  },
  {
    name: "Tommy Hilfiger",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/Tommy-hilfiger.png?v=1741690377",
    url: "/collections/tommy-hilfiger",
  },
  {
    name: "Viktor Rolf",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/viktor-rolf.png?v=1741690377",
    url: "/collections/viktor-rolf",
  },
  {
    name: " Tiziana Terenzi",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/sskpFnjiFiSTKI2IqTNLsQCi7kJkbArtYvYhOiq8.png?v=1741690377",
    url: "/collections/tiziana-terenzi",
  },
  {
    name: "Trussardi",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/vMgf39BhsEyORbc7uUHjaTbC3zns0fxwoASt1TFa.webp?v=1741690377",
    url: "/collections/trussardi",
  },
  {
    name: "Tom Ford",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/T8O7VHWF3zMM8zXIogv0JmEycZhKSJ6WCLyeX9NT.png?v=1741690377",
    url: "/collections/tom-ford",
  },
  {
    name: "Thomas Kosmala",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/wPMn9dqBNxdq4pMcfOqY6ANBXIMycgIcFBfEQVqk.webp?v=1741690377",
    url: "/collections/thomas-kosmala-1",
  },
  {
    name: "Terry De Gunzburg",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/Terry-de-gunzburg.png?v=1741690377",
    url: "/collections/terry-de-gunzburg-1",
  },
  {
    name: "Ted Lapidus",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/c3Zqs6uRhG5bwCbTbhzokURMqrgKXKZIqploBx6d.webp?v=1741690377",
    url: "/collections/ted-lapidus-1",
  },
  {
    name: "Sospiro",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/uGtCOiBmMH2SkQlWDslsc6wVv5wPH3IKgAAAURZq.png?v=1741690377",
    url: "/collections/sospiro",
  },
  {
    name: "House Of Sillage",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/cu1nMvAnPVYGaPDCUrdxk7BFN8bFTYVqsm7odudT.jpg?v=1741690377",
    url: "/collections/house-of-sillage",
  },
  {
    name: "Salvatore Ferragamo",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/rko2RH0BnkR0Zi7oUkdd6mArPgpEapIVMwipinEr.png?v=1741690377",
    url: "/collections/Salvatore-ferragamo",
  },
  {
    name: "S.t Dupont",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/QPAs6ToFETWaJhhHLdQuPUSJzxZCn5m9pYbPz7CK.png?v=1741690377",
    url: "/collections/ s-t-dupont",
  },
  {
    name: "Rochas",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/rochas.png?v=1741690377",
    url: "/collections/rochas",
  },
  {
    name: "Roberto Cavalli",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/6N7hZxYKXDNf6WjKbfYynV7CDAmGiD86wTsVBXaI.jpg?v=1741690377",
    url: "/collections/roberto-cavalli",
  },
  {
    name: "Rihanna",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/rihanna.png?v=1741690377",
    url: "/collections/rihanna",
  },
  {
    name: "Ralph-Lauren",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/ralph-lauren.jpg?v=1741690377",
    url: "/collections/ralph-lauren",
  },
  {
    name: "Prada",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/g36X2cPOSpRaDatb4hP9ZAMskKuD40mjVQwkLxy1.jpg?v=1741690377",
    url: "/collections/prada",
  },
  {
    name: "Penhaligons",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/XmqwQmMYkVxdcbfp950HDdziZgutdn3ZWSZyUir0.png?v=1741690377",
    url: "/collections/penhaligons",
  },
  {
    name: "Ppaco Rabanne",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/eQY9gtYN0oeagsM6flIYZKc3rOJixR4ACwz1mvbt.webp?v=1741690377",
    url: "/collections/paco-rabanne",
  },
  {
    name: "Parfums De Marly",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/wHvvLXS0lK4dfLUAG9H1p6FsuPVeg4k8PaqFW20M.jpg?v=1741690377",
    url: "/collections/parfums-de-marly",
  },
  {
    name: "Orto Parisi",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/orto-parisi.png?v=1741690377",
    url: "/collections/orto-parisi",
  },
  {
    name: "Orlov",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/orlov.jpg?v=1741690377",
    url: "/collections/orlov",
  },
  {
    name: "Nishane",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/TZdbKRPqc6Tvv18emkvaWhs5ZJab3IfliI5Ppx54.png?v=1741690377",
    url: "/collections/nishane",
  },
  {
    name: "Nina Ricci",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/g5FxLMyTYfMOO3nvETha38wzXguE7ukiTJP6bLfx.webp?v=1741690377",
    url: "/collections/nina-ricci",
  },
  {
    name: "Nicolai",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/nfdynDPNOw3iIUmFdon0QuiKKNX3XZWYzRSLgA3W.jpg?v=1741690377",
    url: "/collections/nicolai",
  },
  {
    name: "Thierry Mugler",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/thierry-mugler_899616ff-1f2c-4432-95a9-026f72bd61bc.png?v=1741690377",
    url: "/collections/thierry-mugler",
  },
  {
    name: "Narciso Nodriguez",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/iyoN4WsaGGX0UwMmvvco52Wn2OQ1hOJ4qbGPt3Uu.png?v=1741690377",
    url: "/collections/narciso-rodriguez",
  },
  {
    name: "Odin",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/odin.png?v=1741690377",
    url: "/collections/odin",
  },
  {
    name: "Montale",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/RFcTvxgOKjcYwgUYzbWqf9GvDWhkBTIxAp2hnJpu.png?v=1741690377",
    url: "/collections/montale",
  },
  {
    name: "Mont Blanc",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/zwP0PoOFwZg4WmhBYYkZqHOUVGZ3c7odAvX0Hlau.png?v=1741690377",
    url: "/collections/mont-blanc",
  },
  {
    name: "Mizensir",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/mizensir.jpg?v=1741690377",
    url: "/collections/mizensir",
  },
  {
    name: "Memo",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/vrSUb8A2sdxHCMK2s7w9iNLhgSb13VUxi07NQ83I.png?v=1741690377",
    url: "/collections/memo",
  },
  {
    name: "Mauboussin",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/mauboussin.png?v=1741690377",
    url: "/collections/mauboussin",
  },
  {
    name: "Marc Jacobs",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/marc-jacobs.png?v=1741690377",
    url: "/collections/marc-jacobs",
  },
  {
    name: "Maitre Parfumeur",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/maitre-parfumeur-et-gantier.png?v=1741690377",
    url: "/collections/maitre-parfumeur-et-gantier",
  },
  {
    name: "Maison Francis",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/maison-francis-kurkdjian.png?v=1741690377",
    url: "/collections/maison-francis-kurkdjian",
  },
  {
    name: "Maison Margiela",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/maison-margiela.png?v=1741690377",
    url: "/collections/maison-margiela",
  },
  {
    name: "Lanvin",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/lanvin.png?v=1741690377",
    url: "/collections/lanvin",
  },
  {
    name: "Lacoste",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/lacoste.png?v=1741690377",
    url: "/collections/lacoste",
  },
  {
    name: "By Kilian",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/by-kilian.png?v=1741690377",
    url: "/collections/by-kilian",
  },
  {
    name: "Kenzo",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/hDrjjzyTwjlkvV7ODZ5BEhkVGm0sWiRCk0pwkxPP.webp?v=1741690377",
    url: "/collections/kenzo",
  },
  {
    name: "kenneth Cole",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/kenneth-cole.png?v=1741690377",
    url: "/collections/kenneth-cole",
  },
  {
    name: "Jaguar",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/jaguar.jpg?v=1741690377",
    url: "/collections/jaguar",
  },
  {
    name: "Jovan",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/jovan.png?v=1741690377",
    url: "/collections/jovan",
  },
  {
    name: "Joop",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/joop.png?v=1741690377",
    url: "/collections/joop",
  },
  {
    name: "Jacques Bogart",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/jacques-bogart.png?v=1741690377",
    url: "/collections/jacques-bogart",
  },
  {
    name: "Jean Paul",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/jean-paul-gaultter.png?v=1741690377",
    url: "/collections/jean-paul-gaultter",
  },
  {
    name: "Histoires",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/histoires-de-parfums.png?v=1741690377",
    url: "/collections/histoires-de-parfums",
  },
  {
    name: "Guess",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/guess.png?v=1741690377",
    url: "/collections/guess",
  },
  {
    name: "Gucci",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/xOCdyUZf1L24uyIZmbzAO1CwUEvHr0zpxfReNB5p.png?v=1741690377",
    url: "/collections/gucci",
  },
  {
    name: "Givenchy",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/givenchy.png?v=1741690377",
    url: "/collections/givenchy",
  },
  {
    name: "Eutopie",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/SsAz32NiMaaDcsI1cyFbIhjhy8iawWsX4ETWKBlM.jpg?v=1741690377",
    url: "/collections/eutopie",
  },
  {
    name: "Etienne Aigner",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/etienne-aigner.png?v=1741690377",
    url: "/collections/etienne-aigner",
  },
  {
    name: "Escentric Molecule",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/escentric-molecule.png?v=1741690377",
    url: "/collections/escentric-molecule",
  },
  {
    name: "Escada",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/escada.png?v=1741690377",
    url: "/collections/escada",
  },
  {
    name: "Emanuel Ungaro",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/emanuel-ungaro.png?v=1741690377",
    url: "/collections/emanuel-ungaro",
  },
  {
    name: "Elizabeth Arden",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/elizabeth-arden.png?v=1741690377",
    url: "/collections/elizabeth-arden",
  },
  {
    name: "Elie Saab",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/5BljevxRx68v81UoNOBUCaokApySaPtSS5HoZLUX.png?v=1741690377",
    url: "/collections/elie-saab",
  },
  {
    name: "Dunhill",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/pPNwwgLptppVk05BHpWhKVN5js5PvnBTrE11xbQx.png?v=1741690377",
    url: "/collections/dunhill",
  },
  {
    name: "Dolce Gabbana",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/lx5snneb5NVeYbHcuIR1BkaR7hyJ9HdwTlt1sxYr.png?v=1741690377",
    url: "/collections/dolce-gabbana",
  },
  {
    name: "Ormonde Jayne",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/QJPzM3y7uy5W5TUDxdnH6Sy8S8vYceMrG5sX3ux0.jpg?v=1741690377",
    url: "/collections/ormonde-jayne",
  },
  {
    name: "Davidoff",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/davidoff.png?v=1741690377",
    url: "/collections/davidoff",
  },
  {
    name: "Creed",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/9RnLMA7bGQdNhSJuVh609cufFFj5fdHP46rpA9UV.png?v=1741690377",
    url: "/collections/creed",
  },
  {
    name: "Alexandre J",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/VJf5DtUv6fvMoimLJz4jHZ0nN8rXaXVtPQAAK364.png?v=1741690377",
    url: "/collections/alexandre-j",
  },
  {
    name: "Byredo",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/byredo.png?v=1741690377",
    url: "/collections/byredo",
  },
  {
    name: "Boucheron",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/HlsUogiteMLE2glf0Av4Tpg50vB6z0xDz7Fm6MSp.png?v=1741690377",
    url: "/collections/boucheron",
  },
  {
    name: "Bentley",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/bentley.jpg?v=1741690377",
    url: "/collections/bentley",
  },
  {
    name: "Azzaro",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/49xED3S76BcQcEKi0IrrXJSakTxy1pEU5xMpPIUX.png?v=1741690377",
    url: "/collections/azzaro",
  },
  {
    name: "Aramis",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/5XBWtFxaHnc5ta4X3axm5NZ8ixXGwVNTu8JzXucO.jpg?v=1741690377",
    url: "/collections/aramis",
  },
  {
    name: "Six Scents",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/six-scents.png?v=1741690377",
    url: "/collections/six-scents",
  },
  {
    name: "Sezan",
    img: "https://cdn.shopify.com/s/files/1/0694/6658/7188/files/cHOU0N4eIXU4f0q2r6NXDa0ZwA9dgDFq2ZrN6czh.webp?v=1741690377",
    url: "/collections/sezan",
  },
];

const brandGrid = document.getElementById("brandGrid");
const searchInput = document.getElementById("searchInput");
const alphabetFilter = document.getElementById("alphabetFilter");
const loadMoreBtn = document.getElementById("loadMoreBtn");

const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownMenu = document.getElementById("dropdownMenu");

let visibleCount = 24;
let currentFilteredList = allBrands;

function renderBrands() {
  brandGrid.innerHTML = "";
  const visibleBrands = currentFilteredList.slice(0, visibleCount);
  visibleBrands.forEach((brand) => {
    const card = document.createElement("div");
    card.className = "brand-card";
    card.innerHTML = `
          <a href="${brand.url}">
            <img src="${brand.img}" alt="${brand.name}" />
            <div>${brand.name}</div>
          </a>
        `;
    brandGrid.appendChild(card);
  });

  loadMoreBtn.style.display =
    currentFilteredList.length > visibleCount ? "block" : "none";
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  currentFilteredList = allBrands.filter((brand) =>
    brand.name.toLowerCase().includes(query)
  );
  visibleCount = 12;
  renderBrands();
});

alphabetFilter.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const letter = e.target.textContent;
    filterByLetter(letter);
  }
});

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("dropdown-hidden");
});

dropdownMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const letter = e.target.dataset.letter;
    dropdownToggle.textContent = `${letter} ▼`;
    dropdownMenu.classList.add("dropdown-hidden");
    filterByLetter(letter);
  }
});

function filterByLetter(letter) {
  if (letter === "ALL") {
    currentFilteredList = allBrands;
  } else {
    currentFilteredList = allBrands.filter((brand) =>
      brand.name.toUpperCase().startsWith(letter)
    );
  }
  visibleCount = 12;
  renderBrands();
}

loadMoreBtn.addEventListener("click", () => {
  visibleCount += 12;
  renderBrands();
});

renderBrands();
