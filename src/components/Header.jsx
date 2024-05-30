


import { Button,ButtonGroup,Heading,Spacer,Flex,Box} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
   

    <Flex  p={"4"} minWidth='max-content' bgColor={"blackAlpha.900"} alignItems='center' gap='2'>
  <Box p='2'>
    <Heading  color='white' fontSize='25px'>coinDigi</Heading> 
  </Box>    
  <Spacer/>
  <ButtonGroup gap='2'>
     <Button variant={"unstyled"} color={"white"}>
         <Link to="/">Home</Link>
     </Button>
       <Button variant={"unstyled"} color={"white"}>
         <Link to="/exchanges">Exchanges</Link>          
      </Button>
       <Button variant={"unstyled"} color={"white"}>
         <Link to="/coins">Coins</Link> 
       </Button>
  </ButtonGroup>
</Flex>

    
  );  
};

export default Header;





