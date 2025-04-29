import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt/rtc-js-prebuilt";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MyVideo({ id,project }) {
const navigate = useNavigate()

  const { freelancer,role,Client } = useSelector((state) => state?.Auth?.user);
  console.log(freelancer,role);
  const name = role === "freelancer" ? freelancer?.firstname : Client?.firstname;
  useEffect(() => {
    const config = {
      name: name,
      meetingId: id, // Properly pass the meetingId from props
      apiKey:  "79adee24-ed86-405d-b0bb-247d1aa72a64", // Use your valid API key

      containerId: "video-container", // Set a container ID for embedding the meeting UI

      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,

      chatEnabled: true,
      screenShareEnabled: true,

      /* Add additional configurations if required */
    };

    try {
      const meeting = new VideoSDKMeeting(); // Initialize the meeting
      meeting.init(config); // Pass the configuration
    } catch (error) {
      console.error("Error initializing Video SDK Meeting:", error);
      navigate("/workspace")
    }
  }, [id]); // Add 'id' as a dependency to ensure it updates if changed

  return (
    <div
      id="video-container" // This matches the containerId in the config
      className="w-full h-screen relative"
    ></div>
  );
}
