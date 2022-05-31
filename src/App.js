// import logo from './logo.svg';
import './App.css';
import { Box ,Button } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
    <Box  display="flex"  border="1px solid blue" w='100%' p={4} color='black'>
     <Box  fontWeight="bold">
       <p>LOGO</p>
     </Box>
     
     <Box w="30%" display="flex" justifyContent="space-between" ml={10}>
       <p>Inspiration</p>
       <p>Find Work</p>
       <p>Learn Design</p>
       <p>Hire Designers</p>
       </Box>
     <Box  w="20%" display="flex" ml={750} justifyContent="space-evenly">
       <Button backgroundColor="white" >Sign in</Button>
       <Button backgroundColor="red" color="white">Sign up</Button>
     </Box>
</Box>
    </div>
  );
}

export default App;
