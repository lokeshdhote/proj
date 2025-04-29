// import React, { useEffect } from "react";
// import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";

// export default function MyVideo({id}) {
//   useEffect(() => {
//     const config = {
//       name: "Demo User",
//       meetingId: ${id},
//       apiKey: "471a91aa-bae5-4c4c-9ed9-2719d74935df",

//       containerId: null,

//       micEnabled: true,
//       webcamEnabled: true,
//       participantCanToggleSelfWebcam: true,
//       participantCanToggleSelfMic: true,

//       chatEnabled: true,
//       screenShareEnabled: true,
//       MediaRecorder

//       /*

//      Other Feature Properties
      
//       */
//     };

//     const meeting = new VideoSDKMeeting();
//     meeting.init(config);
//   }, []);

//   return <div className="w-full h-screen relative"></div>;
// }
import React from 'react'
import MyVideo from './VideoCall'
import { useLocation } from 'react-router-dom';

const MyVideoCall = () => {
  const location = useLocation();
  const project = location.state?.project; // Access the passed project data
  console.log(project);
  const id = project?._id
  console.log(project);
  
  
  return (
  <MyVideo project={project} id={id} />
  )
}

export default MyVideoCall
