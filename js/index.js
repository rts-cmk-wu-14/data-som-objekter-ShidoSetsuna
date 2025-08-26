function createButton(text, iconUrl) {
  const btn = document.createElement("button");
  btn.className = "btn btn--primary";
  btn.type = "button";

  // Create the icon first
  const icon = document.createElement("img");
  icon.src = iconUrl;
  icon.alt = "";
  icon.className = "btn__icon";

  // Create the text node
  const label = document.createTextNode(text);

  // Append icon before text
  btn.appendChild(icon);
  btn.appendChild(label);

  return btn;
}

function renderMenuButton() {
  const body = document.querySelector("body");

  const menuBtn = document.createElement("button");
  menuBtn.className = "menu-btn";
  menuBtn.type = "button";

  // left chevron (inline SVG so no extra asset needed)
  const chevron = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  chevron.setAttribute("viewBox", "0 0 24 24");
  chevron.setAttribute("aria-hidden", "true");
  chevron.classList.add("menu-btn__chev");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M7 10l5 5 5-5");
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "#2f2f2f");
  path.setAttribute("stroke-width", "2");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  chevron.appendChild(path);

  // right user icon
  const icon = document.createElement("img");
  icon.src = "./img/CL_Type-User.png"; // keep your current asset
  icon.alt = "Menu";
  icon.className = "menu-btn__icon";

  menuBtn.appendChild(chevron);
  menuBtn.appendChild(icon);
  body.appendChild(menuBtn);
}

function renderLogo() {
  const heroSection = document.querySelector(".hero");

  const logoDiv = document.createElement("div");
  logoDiv.className = "hero__logo";

  const logoImg = document.createElement("img");
  logoImg.src = "./img/cube.png"; // use your asset
  logoImg.alt = "Logo";
  logoImg.className = "hero__logoImg";

  logoDiv.appendChild(logoImg);

  // Insert at the very beginning of hero section
  heroSection.prepend(logoDiv);
}

// Render the hero section using the data from data.js
function renderHero() {
  // Find the hero container from index.html
  const heroSection = document.querySelector(".hero");

  // Create the media wrapper
  const mediaDiv = document.createElement("div");
  mediaDiv.className = "hero__media";

  const heroImg = document.createElement("img");
  heroImg.className = "hero__img";
  heroImg.src = hero.image;
  heroImg.alt = "Hero image";
  mediaDiv.appendChild(heroImg);

  // Create the card that overlaps the image
  const cardDiv = document.createElement("div");
  cardDiv.className = "hero__card";

  // Headline
  const headline = document.createElement("h1");
  headline.className = "hero__headline";

  const text = hero.headline;

  // Choose index positions (you’d measure them once)
  const start = 19; // where the highlight begins
  const end = 34; // where the highlight ends

  // Slice the text into 3 parts
  const before = text.slice(0, start);
  const highlight = text.slice(start, end);
  const after = text.slice(end);

  // Build the headline with a span around the highlight
  headline.innerHTML = `${before}<span>${highlight}</span>${after}`;

  cardDiv.appendChild(headline);

  // Copy text
  const copy = document.createElement("p");
  copy.className = "hero__copy";
  copy.textContent = hero.copy;

  // Button
  const heroButton = createButton("Explore", hero.icon);

  // Put everything inside the card
  cardDiv.appendChild(headline);
  cardDiv.appendChild(copy);
  cardDiv.appendChild(heroButton);

  // Finally, add the media and card into the hero section
  heroSection.appendChild(mediaDiv);
  heroSection.appendChild(cardDiv);
}

function renderServices() {
  const section = document.querySelector(".services");

  // container
  const wrap = document.createElement("div");
  wrap.className = "services__wrap";

  // grid
  const grid = document.createElement("div");
  grid.className = "services__grid";

  // build each card from data.js -> services[]
  services.forEach((item) => {
    const card = document.createElement("article");
    card.className = "service";

    const img = document.createElement("img");
    img.className = "service__img";
    img.src = item.illustration;
    img.alt = ""; // decorative illustration

    const h3 = document.createElement("h3");
    h3.className = "service__title";
    h3.textContent = item.headline;

    const p = document.createElement("p");
    p.className = "service__text";
    p.textContent = item.text;

    const a = document.createElement("a");
    a.className = "service__link";
    a.href = "#";
    a.textContent = item.linktext;

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(a);
    grid.appendChild(card);
  });

  wrap.appendChild(grid);
  section.appendChild(wrap);
}

// Run the function
renderHero();
renderMenuButton();
renderLogo();
renderServices();
