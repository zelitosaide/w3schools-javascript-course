function init() {
  const links = document.links;
  const content = document.getElementById("content");
  console.log(links);

  for (const link of links) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = link.textContent;
    a.href = "#" + link.id;
    a.className = "contents";
    li.appendChild(a);
    // content.appendChild(li);
    console.log(document.links);
  }
}