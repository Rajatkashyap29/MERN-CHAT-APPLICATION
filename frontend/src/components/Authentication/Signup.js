import {
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  VStack,
  Input,
  useToast
} from "@chakra-ui/react";
import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [password, setPassword] = useState("");
    // eslint-disable-next-line 
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const postDetails = async (file) => {
    setLoading(true)

    if (!file) {
       toast({
        title: "Please select an image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
       });
      setLoading(false);
      return;
    }

    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      toast({
        title: "Please select jpeg OR png format!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
       });
      setLoading(false);
      return;
    }

    try {
      const data = new FormData()
      data.append('file', file);
      data.append('upload_preset', 'BAAT-CHIT');



      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dkuaftcrv/image/upload',
        {
          method: 'post',
          body: data
          
        }
      )

      const result = await res.json();

      setPic(result.secure_url) 
      setLoading(false)
      
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  };

  // 🔥 Signup Validation + Toast Error
  const submitHandler = async() => {

    setLoading(true);

    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please fill all the fields!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return; // stop signup
      
    }

    if (password !== confirmpassword) {
      toast({
        title: "Passwords do not match!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
      headers : {
	
	   'Content-type':'application/json'
    }
    }
      var data = {'name':name , 'email':email , 'password':password, 'pic':pic}

      var res = await axios.post('/api/user/', data, config);
      toast({
      title: "Signup Successful 🎉",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "bottom",
      });
      
      localStorage.setItem("userInfo", JSON.stringify(res));
      setLoading(false);

      navigate('/chats');
      
    } catch (err) {
      console.log(err);
      toast({
      title: "SignUp Fail",
      status: "Warning",
      duration: 4000,
      isClosable: true,
      position: "bottom",
      });
      setLoading(false);
    }
    
    
  };

  return (
    <VStack spacing={"10px"} color={"black"}>

      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic">
        <FormLabel>Upload Your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      {/* 🔵 Blue Sign Up Button */}
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading = {loading}
      >
        Sign Up
      </Button>

    </VStack>
  );


};

export default Signup;


