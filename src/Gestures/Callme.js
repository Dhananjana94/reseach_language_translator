import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
// import GestureDescription from '../GestureDescription';


// describe callme gesture 👍
const callmeDescription = new GestureDescription('callme');

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
callmeDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
callmeDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
callmeDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);
callmeDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);

// index, middle, ring fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  callmeDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
  callmeDescription.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
  callmeDescription.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

// pinky:
// not curled
//- horizontal (best) or diagonal up left diagonal down left
callmeDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
callmeDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
callmeDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.5);
callmeDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 0.5);


export default callmeDescription;