import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
// import GestureDescription from '../GestureDescription';


// describe why gesture 
const whyDescription = new GestureDescription('Why');

// thumb:
whyDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
whyDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
whyDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);
//whyDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
whyDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
whyDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);
whyDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);
whyDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);


// middle:
whyDescription.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
whyDescription.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.7);
whyDescription.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.3);
//whyDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight , 0.5);
//whyDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft , 0.5);

// ring:
whyDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
whyDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
whyDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.75);
//whyDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight , 1.0);

// pinky:
whyDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
whyDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
whyDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.75);
//whyDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight , 1.0);



export default whyDescription;