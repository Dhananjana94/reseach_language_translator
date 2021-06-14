import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
// import GestureDescription from '../GestureDescription';


// describe where gesture 
const whereDescription = new GestureDescription('Where');


// thumb:
whereDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
whereDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
whereDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.2);
whereDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.2);

// index:
whereDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
whereDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
whereDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
whereDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

// middle:
whereDescription.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.5);
whereDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.2);
whereDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.4);
whereDescription.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.3);
// ring:
whereDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.5);
whereDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
whereDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.4);
whereDescription.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.3);

// pinky:
whereDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.5);
whereDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
whereDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.4);
whereDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.3);

// give additional weight to index finger
whereDescription.setWeight(Finger.Index, 2);


export default whereDescription;