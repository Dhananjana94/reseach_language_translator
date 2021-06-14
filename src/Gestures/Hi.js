import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
// import GestureDescription from '../GestureDescription';


// describe hi gesture 
const hiDescription = new GestureDescription('hi');

// thumb:
hiDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
hiDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
hiDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);
//hiDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
hiDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
hiDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
hiDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.60);
//hiDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
hiDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
hiDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);
hiDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.5);
hiDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5);
//hiDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight , 0.5);
//hiDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft , 0.5);

// ring:
hiDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
hiDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.75);
hiDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.5);
//hiDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight , 1.0);

// pinky:
hiDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
hiDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.75);
hiDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
//hiDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight , 1.0);



export default hiDescription;