// 4 kyu 80's Kids #10: Captain Planet
//
// Captain Planet, he's our hero. He's gonna take pollution down to zero.
//
// Well, actually Captain Planet's job can be quite tedious sometimes.
// He has to sort through tons and tons of data to find out which countries of the world need help lowering the pollution in the air.
// Having the powers of Earth, wind, water, fire and heart doesn't make you any faster at trudging through paperwork.
//
// You will be given a global variable dataFile ($data_file in ruby) which will hold output like:
//
// ##################################
// Location: DEU
// ##################################
// Ammonia: 023 particles
// Nitrogen Oxide: 019 particles
// Carbon Monoxide: 127 particles
// ##################################
// ##################################
// Location: USA
// ##################################
// Ammonia: 200 particles
// Nitrogen Oxide: 120 particles
// Carbon Monoxide: 120 particles
// ##################################
// ##################################
// Location: AUS
// ##################################
// Ammonia: 122 particles
// Nitrogen Oxide: 132 particles
// Carbon Monoxide: 099 particles
// ##################################
//
// Don't bust out your gas masks, this data isn't real. Our job now is to supply Captain Planet with some easily readable results.
// A call to parseData() (parse_data) in this case should yield the following result:
//
// parseData() ->
// "Ammonia levels in USA are too high. Nitrogen Oxide levels in AUS are too high. Carbon Monoxide levels in DEU are too high."
//
// Multiple locations will be given and they will all have results in Ammonia, Nitrogen Oxide and Carbon Monoxide but may also have other data.
// That data should be ignored. The original dataFile variable must remain unchanged.
// If two or more countries have the highest amount of particles in one area, they should both be included in your result.
// They should appear in the order that they originally appear in the report.
// If the three countries listed above had the same ammonia levels, your result should look like this:
//
// "Ammonia levels in DEU, USA, AUS are too high. <and so on>"
//
// With our powers combined, we can help Captain Planet!
//
// Answer:
function parseData() {
  const raw = dataFile
    .split("Location:")
    .filter((s) => !/^#.*/.test(s))
    .map((e) => e.trim());
  const map = new Map();
  for (let row of raw) {
    const items = row
      .split("\n")
      .filter((s) => !/^#.*/.test(s))
      .map((p) => p.replace(/ particles/i, ""));
    const loc = items.shift();
    const list = new Map();
    for (let item of items) {
      const [type, num] = item.split(":").map((e) => e.trim());
      list.set(type, num);
    }
    map.set(loc, list);
  }
  let maxAmmo = [["", -Infinity]];
  let maxNitr = [["", -Infinity]];
  let maxCarb = [["", -Infinity]];
  for (let [loc, item] of map) {
    for (let data of item) {
      maxAmmo = doMax("ammonia", maxAmmo, data, loc);
      maxNitr = doMax("nitrogen oxide", maxNitr, data, loc);
      maxCarb = doMax("carbon monoxide", maxCarb, data, loc);
    }
  }
  return (
    `Ammonia levels in ${getLocs(maxAmmo)} are too high.` +
    ` Nitrogen Oxide levels in ${getLocs(maxNitr)} are too high.` +
    ` Carbon Monoxide levels in ${getLocs(maxCarb)} are too high.`
  );
}

const getLocs = (a) => a.map((e) => e[0]).join(", ");
const doMax = (type, max, data, loc) => {
  const re = new RegExp(`${type}`, "i");
  const [search, amt] = data;
  if (re.test(search)) {
    if (+amt > max[0][1]) {
      max = [[loc, +amt]];
    } else if (+amt === max[0][1]) max.push([loc, +amt]);
  }
  return max;
};
