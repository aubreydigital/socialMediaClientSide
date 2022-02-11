import React, { useState, useContext } from "react";
import Form from 'react-bootstrap/Form';
import UserContext from '../context/UserContext';

const UploadImage= ({selectedImage, setSelectedImage, setImage}) => {
const {WEB_API} = useContext(UserContext);
  const onImage = async (e) => {
    e.preventDefault()
//     let data = {file_name: selectedImage.name, status: 1 }
//     try {
//     await fetch('http://localhost:8888/social_media/server/api/tracks/create.php', {
//       method: 'POST',
//       headers: {
// 'Content-Type': 'multipart/form-data'
//       },
//       body: JSON.stringify(data)
//       });
//     } catch (err) {
//       console.log(e.target[0].files[0].name);
//     }
        if (selectedImage){
 
       var formData = new FormData();
       formData.append("imageUp", selectedImage);
 
       var xhttp = new XMLHttpRequest();
 
       // Set POST method and ajax file path
       xhttp.open("POST", "http://localhost:8888/social_media/server/photoUpload.php", true);
      //  xhttp.open("POST", `${WEB_API}/photoUpload.php`, true);
      //  xhttp.setRequestHeader("Access-Control-Allow-Origin", "*")
       // call on request changes state
       xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
 
            var response = this.responseText;
            if(response == 1){
               alert("Upload successful.");
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
      <h1>Upload Image</h1>
      {selectedImage && (
        <div>
        <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <Form onSubmit={onImage}>
      <input
        type="file"
        name="imageUp"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
          setImage(event.target.files[0].name);
        }}
      />
      <input type="submit" name="submit" value="Upload Image"/>
      </Form>
    </div>
  );
};

export default UploadImage;
