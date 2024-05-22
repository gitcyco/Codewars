// 6 kyu Seagull Snapshot Festival Obsession
//
// The town of Landgull is celebrating its annual Seagull Snapshot Festival, and you've recently
// developed an obsession with seagulls, so it's the perfect oportunity to take some nice pictures of your favourite animal.
//
// Your camera looks like this:
//
// [[   x   ]]
//
// The view of the sea without a seagull looks like this:
//
// ..·.···...·.·.·...···.·..·
//
// The view of the sea with a seagull over it looks like this:
//
// ..·.···..seagull..···.·..·
//
// Once you've taken a picture of the seagull, it should look like this.
//
// ..·.···[[seaxull]]···.·..·
// Your goal
//
// We'll provide a nice view with (at most) one seagull in it. Your goal is to take a snapshot of the seagull, if there's any.
//
// Your camera can't step outside of the field of view, but seagulls may be partially outside of it.
// If they are, just catch as much of the seagull as possible
// (i.e. place your camera right at the edge, even if the seagull is not centred within it).
//
// If the scene is too thin or there's no seagull in it, just wait until next time
// (i.e. return the same view without placing a camera on top of it).
//
// Answer:
function snapshot(scene) {
  let arr = scene.split("");
  if (scene.length < 11) return scene;
  if (/[seagull]/.test(scene)) {
    let idx = scene.match(/[seagull]/).index;
    let end = 0;
    for (let i = idx; i < scene.length; i++) {
      if (!/[seagull]/.test(scene[i])) break;
      end = i;
    }
    let mid = idx + 3;
    if (mid + 5 > scene.length - 1) {
      mid = scene.length - 6;
    } else if (mid - 5 < 0) {
      mid = 5;
    }
    end = mid + 5;
    idx = mid - 5;
    [arr[idx], arr[idx + 1], arr[mid], arr[end], arr[end - 1]] = [
      "[",
      "[",
      "x",
      "]",
      "]",
    ];
    return arr.join("");
  }
  return scene;
}
