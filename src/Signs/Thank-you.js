import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
// import GestureDescription from '../GestureDescription';


// describe easy gesture
const thankyouDescription = new GestureDescription('thankyou');


// thumb:
// thankyouDescription.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
// thankyouDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
thankyouDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
// thankyouDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
// thankyouDescription.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
thankyouDescription.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.5);
// thankyouDescription.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
// thankyouDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
thankyouDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);
// thankyouDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 1.0);
// thankyouDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);

// index:
// thankyouDescription.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
// thankyouDescription.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
thankyouDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
thankyouDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
// thankyouDescription.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
// thankyouDescription.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
// thankyouDescription.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
// thankyouDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
// thankyouDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
// thankyouDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 1.0);
// thankyouDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1.0);

// middle:
// thankyouDescription.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
// thankyouDescription.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
thankyouDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
thankyouDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
// thankyouDescription.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
// thankyouDescription.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
// thankyouDescription.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);
// thankyouDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
// thankyouDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
// thankyouDescription.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 1.0);
// thankyouDescription.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 1.0);

// ring:
// thankyouDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
// thankyouDescription.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
thankyouDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
thankyouDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
// thankyouDescription.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);
// thankyouDescription.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
// thankyouDescription.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);
// thankyouDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
// thankyouDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
// thankyouDescription.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 1.0);
// thankyouDescription.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 1.0);

// pinky:
// thankyouDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
// thankyouDescription.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
thankyouDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
thankyouDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
// thankyouDescription.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);
// thankyouDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
// thankyouDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);
// thankyouDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
// thankyouDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
// thankyouDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 1.0);
// thankyouDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 1.0);


export default thankyouDescription;