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

  // left chevron
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
  icon.src = "./img/CL_Type-User.png";
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
  logoImg.src = "./img/cube.png";
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

  // Choose index positions
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

  // Add the media and card into the hero section
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

function renderFacilities() {
  const section = document.querySelector(".facilities");

  // wrapper
  const wrap = document.createElement("div");
  wrap.className = "facilities__wrap";

  // headline
  const h2 = document.createElement("h2");
  h2.className = "facilities__title";
  h2.textContent = facilities.headline;

  // grid
  const grid = document.createElement("div");
  grid.className = "facilities__grid";

  facilities.options.forEach((opt) => {
    const card = document.createElement("article");
    card.className = "facility";

    const icon = document.createElement("img");
    icon.className = "facility__icon";
    icon.src = opt.icon;
    icon.alt = ""; // decorative

    const title = document.createElement("h3");
    title.className = "facility__name";
    title.textContent = opt.headline;

    const text = document.createElement("p");
    text.className = "facility__text";
    text.textContent = opt.text;

    const link = document.createElement("a");
    link.className = "facility__link";
    link.href = "#";
    link.textContent = "Show me more";

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(text);
    card.appendChild(link);
    grid.appendChild(card);
  });

  wrap.appendChild(h2);
  wrap.appendChild(grid);
  section.appendChild(wrap);
}

function renderSites() {
  const section = document.querySelector(".sites");

  const wrap = document.createElement("div");
  wrap.className = "sites__wrap";

  // Left intro column
  const intro = document.createElement("div");
  intro.className = "sites__intro";

  const h2 = document.createElement("h2");
  h2.className = "sites__title";
  h2.textContent = sites.headline;

  const p = document.createElement("p");
  p.className = "sites__text";
  p.textContent = sites.text;

  const cta = createButton("Start", sites.btnicon);

  intro.appendChild(h2);
  intro.appendChild(p);
  intro.appendChild(cta);

  // Right cards column
  const grid = document.createElement("div");
  grid.className = "sites__grid";

  sites.places.forEach((place) => {
    const card = document.createElement("article");
    card.className = "site";

    const img = document.createElement("img");
    img.className = "site__img";
    img.src = place.img;
    img.alt = `${place.name}, ${place.city}`;

    const name = document.createElement("h3");
    name.className = "site__name";
    name.textContent = place.name;

    const city = document.createElement("p");
    city.className = "site__city";
    city.textContent = place.city;

    const link = document.createElement("a");
    link.className = "site__link";
    link.href = "#";
    link.textContent = "View the Site";

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(city);
    card.appendChild(link);
    grid.appendChild(card);
  });

  wrap.appendChild(intro);
  wrap.appendChild(grid);
  section.appendChild(wrap);
}

function renderAdvantages() {
  const section = document.querySelector(".advantages");

  const wrap = document.createElement("div");
  wrap.className = "advantages__wrap";

  // --- NEW: section heading ---
  const h2 = document.createElement("h2");
  h2.className = "advantages__title";
  h2.textContent =
    typeof advantagesTitle !== "undefined" ? advantagesTitle : "Our Advantages";
  wrap.appendChild(h2);
  // ----------------------------

  const grid = document.createElement("div");
  grid.className = "advantages__grid";

  advantages.forEach((opt) => {
    const card = document.createElement("article");
    card.className = "advantage";

    const icon = document.createElement("img");
    icon.className = "advantage__icon";
    icon.src = opt.icon;
    icon.alt = "";

    const title = document.createElement("h3");
    title.className = "advantage__name";
    title.textContent = opt.headline;

    const text = document.createElement("p");
    text.className = "advantage__text";
    text.textContent = opt.text;

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(text);
    grid.appendChild(card);
  });

  wrap.appendChild(grid);
  section.appendChild(wrap);
}

function renderFooter() {
  const root = document.querySelector(".footer");

  const wrap = document.createElement("div");
  wrap.className = "footer__wrap";

  // Top row: brand + 3 link columns
  const top = document.createElement("div");
  top.className = "footer__top";

  // Brand block
  const brand = document.createElement("div");
  brand.className = "footer__brand";

  const brandTitle = document.createElement("h3");
  brandTitle.className = "footer__brandTitle";
  brandTitle.textContent = footer.brand.title;

  const brandTag = document.createElement("p");
  brandTag.className = "footer__brandTag";
  // line breaks per Figma
  brandTag.innerHTML = footer.brand.tagline.join("<br>");

  brand.appendChild(brandTitle);
  brand.appendChild(brandTag);

  top.appendChild(brand);

  // Link columns
  footer.columns.forEach((col) => {
    const c = document.createElement("div");
    c.className = "footer__col";

    const h = document.createElement("h4");
    h.className = "footer__colTitle";
    h.textContent = col.title;

    const ul = document.createElement("ul");
    ul.className = "footer__list";

    col.links.forEach((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link.href;
      a.className = "footer__link";
      a.textContent = link.label;
      li.appendChild(a);
      ul.appendChild(li);
    });

    c.appendChild(h);
    c.appendChild(ul);
    top.appendChild(c);
  });

  // Divider
  const hr = document.createElement("div");
  hr.className = "footer__divider";

  // Bottom row
  const bottom = document.createElement("div");
  bottom.className = "footer__bottom";

  const copy = document.createElement("span");
  copy.className = "footer__copy";
  copy.textContent = footer.bottom.copyright;

  const nav = document.createElement("nav");
  nav.className = "footer__nav";

  footer.bottom.links.forEach((l, idx) => {
    const a = document.createElement("a");
    a.href = l.href;
    a.className = "footer__bottomLink";
    a.textContent = l.label;
    nav.appendChild(a);
  });

  bottom.appendChild(copy);
  bottom.appendChild(nav);

  // Assemble
  wrap.appendChild(top);
  wrap.appendChild(hr);
  wrap.appendChild(bottom);
  root.appendChild(wrap);
}

// Run the functions
renderHero();
renderMenuButton();
renderLogo();
renderServices();
renderFacilities();
renderSites();
renderAdvantages();
renderFooter();
