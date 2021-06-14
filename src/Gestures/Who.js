import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
// import GestureDescription from '../GestureDescription';

// describe who gesture 
const whoDescription = new GestureDescription('Who');

// thumb:
whoDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
whoDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);
whoDescription.addDirection(Finger.Thumb, FingerDirection.VerticallUp, 0.5);
//hiDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
whoDescription.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
whoDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
whoDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.60);
whoDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.30);
//hiDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    whoDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
    whoDescription.addDirection(finger, FingerDirection.VerticalDown, 1.0);
    whoDescription.addDirection(finger, FingerDirection.HorizontalLeft, 0.3);
    whoDescription.addDirection(finger, FingerDirection.HorizontalRight, 0.3);
  }


export default whoDescription;