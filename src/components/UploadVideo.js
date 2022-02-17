import React, { useState, useContext } from "react";
import Form from 'react-bootstrap/Form';
import UserContext from '../context/UserContext'

const UploadVideo = ({selectedVideo, setSelectedVideo, setVideo}) => {
  const {WEB_API} = useContext(UserContext);

  const onVideo = async (e) => {
    e.preventDefault()
//     let data = {file_name: selectedVideo.name, status: 1 }
//     try {
//     await fetch('http://localhost:8888/social_media/server/api/videos/create.php', {
//       method: 'POST',
//       headers: {
// 'Content-Type': 'multipart/form-data'
//       },
//       body: JSON.stringify(data)
//       });
//     } catch (err) {
//       console.log(e.target[0].files[0].name);
//     }
        if (selectedVideo){
 
       var formData = new FormData();
       formData.append("vidUp", selectedVideo);
 
       var xhttp = new XMLHttpRequest();
 
       // Set POST method and ajax file path
       xhttp.open("POST", "http://localhost:8888/social_media/server/videoupload.php", true);
      //  xhttp.open("POST", "https://aubrey.digital/vms_server/server/videoupload.php", true);
      //  xhttp.open("POST", `${WEB_API}/videoupload.php`, true);
      //  xhttp.setRequestHeader("Access-Control-Allow-Origin", "*")
       // call on request changes state
       xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
 
            var response = this.responseText;
            if(response == 1){
               alert("Upload successfully.");
            }else{
               alert("File not uploaded.");
            }
          }
       };
 
       // Send request with data
       xhttp.send(formData);
 
    }
    
  }
  //   let data
  //   if (selectedTrack !== null) {
  //   data = {file_name: selectedTrack.name, status: 1 }
  //   } 
  //   // console.log(e.target[0].files[0])
  //   console.log(selectedTrack)
  //   var formData = new FormData();
  //   formData.append("Track", selectedTrack);
  //   console.log(formData)
  //     try {
  //       await fetch('https://aubrey.digital/phpAPI/api/Tracks/create.php', {
  //       method: 'POST',
  //       mode: 'no-cors',
  //       headers: {
  // 'Content-Type': 'multipart/form-data'
  //       },
  //       body: JSON.stringify(data)
  //       });
  //     } catch (err) {
  //       console.log(e.target[0].files[0].name);
  //     }
  // }
  
  // // const uploadFile = (e) => {


    
  return (
    <div>
      <h1>Upload Video</h1>
      {selectedVideo && (
        <div>
        <video alt="not found" width={"250px"} src={URL.createObjectURL(selectedVideo)} controls/>
        <br />
        <button onClick={()=>setSelectedVideo(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <Form onSubmit={onVideo}>
      <input
        type="file"
        name="vidUp"
        onChange={(event) => {
          setSelectedVideo(event.target.files[0]);
          setVideo(event.target.files[0].name);
        }}
      />
      <input type="submit" name="submit" value="Upload video"/>
      </Form>
    </div>
  );
};

export default UploadVideo;
