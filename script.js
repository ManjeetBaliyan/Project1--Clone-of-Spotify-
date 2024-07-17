async function main() {
  let a = await fetch("http://127.0.0.1:5500/songs/Big Sky Elegy - National Sweetheart.mp3")
  let response = await a.text();
  console.log(response);
}

main()
