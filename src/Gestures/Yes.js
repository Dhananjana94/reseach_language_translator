import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
// import GestureDescription from '../GestureDescription';


// describe victory gesture ✌️
const yesDescription = new GestureDescription('yes');


// thumb:
yesDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
yesDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.4);
yesDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.4);
yesDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.4);

// index:
yesDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 0.5);
yesDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.4);
yesDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.4);

// middle:
yesDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 0.5);
yesDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.4);
yesDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.4);

// ring:
yesDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.5);
yesDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.4);
yesDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.4);
yesDescription.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.4);

// pinky:
yesDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.5);
yesDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.4);
yesDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.4);
yesDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.4);

// give additional weight to index and ring fingers
yesDescription.setWeight(Finger.Index, 2);
yesDescription.setWeight(Finger.Middle, 2);

export default yesDescription;
