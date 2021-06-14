import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
// import GestureDescription from '../GestureDescription';


// describe i'm gesture 
const iamDescription = new GestureDescription('I am');

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring]) {
    iamDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
    iamDescription.addDirection(finger, FingerDirection.VerticalDown, 1.0);
    iamDescription.addDirection(finger, FingerDirection.HorizontalLeft, 0.3);
    iamDescription.addDirection(finger, FingerDirection.HorizontalRight, 0.3);
  }

// pinky:
// - not curled
// - vertical up (best) or diagonal up left / right
iamDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
iamDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
iamDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.25);
iamDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.25);



export default iamDescription;