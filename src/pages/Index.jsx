import { useState, useEffect } from "react";
import { Box, VStack, Heading, Text, Input, Button, Image, useToast } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

const Index = () => {
  const [igUsername, setIgUsername] = useState("");
  const [igPassword, setIgPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const toast = useToast();

  useEffect(() => {
    // Simulating fetching posts from the Instagram API
    const fetchPosts = () => {
      const dummyPosts = [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBwb3N0JTIwMXxlbnwwfHx8fDE3MTE1MTM4Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080",
          caption: "Check out our latest product!",
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBwb3N0JTIwMnxlbnwwfHx8fDE3MTE1MTM4Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080",
          caption: "Limited time offer! Get yours now!",
        },
        // Add more dummy posts...
      ];
      setPosts(dummyPosts);
    };

    if (isLoggedIn) {
      fetchPosts();
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    // Simulating Instagram login
    if (igUsername && igPassword) {
      setIsLoggedIn(true);
      toast({
        title: "Logged in",
        description: "Successfully logged in to Instagram.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: "Please enter your Instagram username and password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handlePost = () => {
    // Simulating posting to Instagram
    toast({
      title: "Post scheduled",
      description: "Your post has been scheduled for automatic posting.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <VStack spacing={8} align="center">
        <Heading>Instagram Marketing App</Heading>
        {!isLoggedIn ? (
          <>
            <Input placeholder="Instagram Username" value={igUsername} onChange={(e) => setIgUsername(e.target.value)} />
            <Input placeholder="Instagram Password" type="password" value={igPassword} onChange={(e) => setIgPassword(e.target.value)} />
            <Button leftIcon={<FaInstagram />} onClick={handleLogin}>
              Login to Instagram
            </Button>
          </>
        ) : (
          <>
            <Text>Logged in as: {igUsername}</Text>
            <VStack spacing={4} align="stretch">
              {posts.map((post) => (
                <Box key={post.id} borderWidth={1} borderRadius="md" p={4}>
                  <Image src={post.image} alt="Marketing Post" mb={4} />
                  <Text>{post.caption}</Text>
                  <Button onClick={handlePost} mt={4}>
                    Schedule Post
                  </Button>
                </Box>
              ))}
            </VStack>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
