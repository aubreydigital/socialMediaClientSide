import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

const UploadTrack = ({selectedTrack, setSelectedTrack, setTrack}) => {

  const onTrack = async (e) => {
    e.preventDefault()
    let data = {file_name: selectedTrack.name, status: 1 }
    try {
    await fetch('http://localhost:8888/social_media/server/api/tracks/create.php', {
      method: 'POST',
      headers: {
'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify(data)
      });
    } catch (err) {
      console.log(e.target[0].files[0].name);
    }
        if (selectedTrack){
 
       var formData = new FormData();
       formData.append("trackUp", selectedTrack);
 
       var xhttp = new XMLHttpRequest();
 
       // Set POST method and ajax file path
       xhttp.open("POST", "http://localhost:8888/social_media/server/musicupload.php", true);
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
      <h1>Upload Track</h1>
      {selectedTrack && (
        <div>
        <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedTrack)} />
        <br />
        <button onClick={()=>setSelectedTrack(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <Form onSubmit={onTrack}>
      <input
        type="file"
        name="trackUp"
        onChange={(event) => {
          setSelectedTrack(event.target.files[0]);
          setTrack(event.target.files[0].name);
        }}
      />
      <input type="submit" name="submit" value="Upload track"/>
      </Form>
    </div>
  );
};

export default UploadTrack;
