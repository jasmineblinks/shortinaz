async function shorten() {
  let el = document.getElementById("hero");
  console.log(el);
  const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${el.value}`);

  const data = await res.json();
  document.getElementById("grid").innerHTML = JSON.stringify(
    data.result.short_link
  );
  //   console.log(data);
}
