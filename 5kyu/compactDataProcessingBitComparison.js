// 5 kyu Compact data processing: bit comparison
//
// You run a series of remote CCTV networks, watching over industrial installations in the Arctic circle.
// Because of high data costs, every command sent to these networks is packaged up in one byte.
// Networks consist of anywhere between 1 and 16 cameras.
// Every camera in every installation is initially set at 30 degrees down (-30) and pointing straight forward.
// Cameras can be remotely controlled to move up/down and left/right, up to 45 degrees in any direction.
// 'Up' and 'right' are considered positive, 'down' and 'left' are considered negative.
//
// The first four bits of the package represent a camera ID (which are sequential, indexed from 0).
// The fifth bit indicates to move the camera up by five degrees, the sixth bit down by five degrees.
// The seventh and eighth bits indicate left and right, respectively, by five degrees.
//
// Complete the network process method to handle incoming instructions, and adjust cameras as required in the move method.
//
// Answer:
class Network {
  constructor(count) {
    this.cameras = new Array(count).fill(new Camera(0, -30));
  }
  process(byte) {
    let cam = byte & 0b00001111;
    if (byte & 0b00010000) this.cameras[cam].move(0, 5);
    if (byte & 0b00100000) this.cameras[cam].move(0, -5);
    if (byte & 0b01000000) this.cameras[cam].move(-5, 0);
    if (byte & 0b10000000) this.cameras[cam].move(5, 0);
  }
}

class Camera {
  constructor(h, v) {
    this.horizontal = h;
    this.vertical = v;
  }
  move(h, v) {
    if (this.horizontal < 45 && this.horizontal > -45) this.horizontal += h;
    if (this.vertical < 45 && this.vertical > -45) this.vertical += v;
  }
}
