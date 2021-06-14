import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// import { Finger, FingerCurl, FingerDirection,  } from '../FingerDescription';
// import GestureDescription from '../GestureDescription';


// describe good_luck gesture 
const good_luckDescription = new GestureDescription('good_luck');


// thumb:
good_luckDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
good_luckDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
good_luckDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
good_luckDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
good_luckDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
good_luckDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
good_luckDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// middle:
good_luckDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
good_luckDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.75);
good_luckDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

// ring:
good_luckDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.5);
good_luckDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 0.5);
good_luckDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
good_luckDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
good_luckDescription.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
good_luckDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.5);
good_luckDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 0.5);
good_luckDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
good_luckDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
good_luckDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
good_luckDescription.setWeight(Finger.Index, 2);
good_luckDescription.setWeight(Finger.Middle, 2);

export default good_luckDescription;