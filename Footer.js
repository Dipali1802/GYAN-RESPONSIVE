// // import { Box, Flex, Image, Text } from "@chakra-ui/react";
// // import { useEffect, useState } from "react";
// // import React from "react";
// // import logo from "../images/AiM4u Registered Logo (1).png";
// // import { Link } from "react-router-dom";
// // import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

// // const Footer = () => {
// //   const [viewersCount, setViewersCount] = useState(0);

// //   // Increment viewers count when component mounts
// //   useEffect(() => {
// //     const currentCount = localStorage.getItem("viewersCount");
// //     if (currentCount) {
// //       setViewersCount(parseInt(currentCount, 10));
// //     } else {
// //       setViewersCount(0);
// //     }

// //     // Increment the count
// //     setViewersCount((prevCount) => {
// //       const newCount = prevCount + 1;
// //       localStorage.setItem("viewersCount", newCount);
// //       return newCount;
// //     });

// //     // Clean up when component unmounts
// //     return () => {
// //       // Any cleanup code if needed
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <div>
// //         <Flex
// //           direction="row"
// //           bgColor="#252641"
// //           color="white"
// //           h="md"
// //           margin={"auto"}
// //           mt={["30%", "30%", "10"]}
// //         >
// //           <Flex direction="column" mt="10" mx="7%">
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>Explore</Text>
// //             <Link to="/">
// //               <Text
// //                 mt="2"
// //                 fontSize={["sm", "md", "lg", "xl"]}
// //                 _hover={{ textDecoration: "underline" }}
// //               >
// //                 Home
// //               </Text>
// //             </Link>
// //             <Link to="/about">
// //               <Text
// //                 mt="2"
// //                 fontSize={["sm", "md", "lg", "xl"]}
// //                 _hover={{ textDecoration: "underline" }}
// //               >
// //                 About
// //               </Text>
// //             </Link>
// //             {/* <Link to="/blogs"><Text mt='2' fontSize='xl' _hover={{ textDecoration: 'underline' }}>Blogs</Text></Link> */}
// //           </Flex>
// //           <Flex direction="column" mt="10" mx="7%">
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>Contact</Text>
// //             <Text fontSize={["sm", "md", "lg", "xl"]} mt="2">
// //               Sardar Patel Technology{" "}
// //             </Text>
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>
// //               Business Incubator (SP-TBI),{" "}
// //             </Text>
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>
// //               Munshi Nagar, Andheri (W){" "}
// //             </Text>
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>
// //               Mumbai, Maharashtra 400053
// //             </Text>

// //             <Text mt="4" fontSize={["sm", "md", "lg", "xl"]}>
// //               <PhoneIcon mr="2" />
// //               +91 8657424574
// //             </Text>
// //             <Link to="support@aim4u.co.in">
// //               <Text
// //                 mt="2"
// //                 fontSize={["sm", "md", "lg", "xl"]}
// //                 _hover={{ textDecoration: "underline" }}
// //               >
// //                 <EmailIcon mr="2" _hover={{ textDecoration: "underline" }} />
// //                 support@aim4u.co.in
// //               </Text>
// //             </Link>
// //           </Flex>
// //           <Flex direction="column" mt="10" mx="7%">
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>Follow</Text>
// //             <Text
// //               mt="2"
// //               fontSize={["sm", "md", "lg", "xl"]}
// //               cursor={"pointer"}
// //               onClick={() =>
// //                 window.open(
// //                   "https://www.instagram.com/aim4u.co.in/",
// //                   "_blank",
// //                   "noopener noreferrer"
// //                 )
// //               }
// //             >
// //               Instagram
// //             </Text>
// //             <Text
// //               mt="4"
// //               fontSize={["sm", "md", "lg", "xl"]}
// //               cursor={"pointer"}
// //               onClick={() =>
// //                 window.open(
// //                   "https://www.linkedin.com/company/aim4u-software-solution/",
// //                   "_blank",
// //                   "noopener noreferrer"
// //                 )
// //               }
// //             >
// //               LinkedIn
// //             </Text>
// //             <Text
// //               mt="4"
// //               fontSize={["sm", "md", "lg", "xl"]}
// //               cursor={"pointer"}
// //               onClick={() =>
// //                 window.open(
// //                   "https://www.facebook.com/aim4usoftwaresolutions/",
// //                   "_blank",
// //                   "noopener noreferrer"
// //                 )
// //               }
// //             >
// //               Facebook
// //             </Text>
// //           </Flex>
// //           <Flex direction="column" mt="10" mx="7%">
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>Legal</Text>
// //             <Text
// //               mt="2"
// //               fontSize={["sm", "md", "lg", "xl"]}
// //               cursor={"pointer"}
// //               onClick={() =>
// //                 window.open(
// //                   "https://www.aim4u.co.in/#/terms-and-conditions",
// //                   "_blank",
// //                   "noopener noreferrer"
// //                 )
// //               }
// //             >
// //               Terms & Conditions
// //             </Text>
// //             <Text
// //               mt="4"
// //               fontSize={["sm", "md", "lg", "xl"]}
// //               cursor={"pointer"}
// //               onClick={() =>
// //                 window.open(
// //                   "https://www.aim4u.co.in/#/privacy-policy",
// //                   "_blank",
// //                   "noopener noreferrer"
// //                 )
// //               }
// //             >
// //               Privacy Policy
// //             </Text>
// //           </Flex>
// //         </Flex>
// //       </div>
// //       <div>
// //         {/* Statement of "All Copyrights Reserved 2024" */}
// //         {/* <Box bgColor="#252641" color="white" p="4" textAlign="center">
// //         <Text fontSize="xl">All Copyrights Reserved 2024</Text>
// //       </Box> */}

// //         <Flex
// //           bgColor="#252641"
// //           color="white"
// //           direction="row"
// //           alignItems="center"
// //           // pl="0"
// //           width="100%"
// //         >
// //           {/* Box with two Text components */}
// //           <Box
// //             bgColor="#252641"
// //             color="white"
// //             p="4"
// //             textAlign="center"
// //             width={"90%"}
// //           >
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>
// //               All Copyrights Reserved 2024
// //             </Text>
// //             <Text fontSize={["sm", "md", "lg", "xl"]}>
// //               Number of Viewers: {viewersCount}
// //             </Text>
// //           </Box>

// //           {/* Box with the logo */}
// //           <Box bgColor="#252641" p="4" textAlign="right" width={"20%"}>
// //             {/* <Link to="https://www.aim4u.co.in/#/gyan-at-aim4u">
// //               <Image src={logo} alt="Logo" h="auto" />
// //             </Link> */}
// //           </Box>
// //         </Flex>
// //       </div>
// //     </>
// //   );
// // };

// // export default Footer;

// import { Box, Flex, Image, Text } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import React from "react";
// import logo from "../images/AiM4u Registered Logo (1).png";
// import { Link } from "react-router-dom";
// import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

// const Footer = () => {
//   const [viewersCount, setViewersCount] = useState(0);

//   // Increment viewers count when component mounts
//   useEffect(() => {
//     const currentCount = localStorage.getItem("viewersCount");
//     if (currentCount) {
//       setViewersCount(parseInt(currentCount, 10));
//     } else {
//       setViewersCount(0);
//     }

//     // Increment the count
//     setViewersCount((prevCount) => {
//       const newCount = prevCount + 1;
//       localStorage.setItem("viewersCount", newCount);
//       return newCount;
//     });

//     // Clean up when component unmounts
//     return () => {
//       // Any cleanup code if needed
//     };
//   }, []);

//   return (
//     <>
//       <div>
//         <Flex
//           direction="row"
//           bgColor="#252641"
//           color="white"
//           h="md"
//           margin={"auto"}
//           mt={["30%", "30%", "10"]}
//         >
//           <Flex direction="column" mt="10" mx="7%">
//             <Text fontSize={["sm", "md", "lg", "xl"]}>Explore</Text>
//             <Link to="/">
//               <Text
//                 mt="2"
//                 fontSize={["sm", "md", "lg", "xl"]}
//                 _hover={{ textDecoration: "underline" }}
//               >
//                 Home
//               </Text>
//             </Link>
//             <Link to="/about">
//               <Text
//                 mt="2"
//                 fontSize={["sm", "md", "lg", "xl"]}
//                 _hover={{ textDecoration: "underline" }}
//               >
//                 About
//               </Text>
//             </Link>
//             {/* <Link to="/blogs"><Text mt='2' fontSize='xl' _hover={{ textDecoration: 'underline' }}>Blogs</Text></Link> */}
//           </Flex>
//           <Flex direction="column" mt="10" mx="7%">
//             <Text fontSize={["sm", "md", "lg", "xl"]}>Contact</Text>
//             <Text fontSize={["sm", "md", "lg", "xl"]} mt="2">
//               Sardar Patel Technology{" "}
//             </Text>
//             <Text fontSize={["sm", "md", "lg", "xl"]}>
//               Business Incubator (SP-TBI),{" "}
//             </Text>
//             <Text fontSize={["sm", "md", "lg", "xl"]}>
//               Munshi Nagar, Andheri (W){" "}
//             </Text>
//             <Text fontSize={["sm", "md", "lg", "xl"]}>
//               Mumbai, Maharashtra 400053
//             </Text>

//             <Text mt="4" fontSize={["sm", "md", "lg", "xl"]}>
//               <PhoneIcon mr="2" />
//               +91 8657424574
//             </Text>
//             <Link to="support@aim4u.co.in">
//               <Text
//                 mt="2"
//                 fontSize={["sm", "md", "lg", "xl"]}
//                 _hover={{ textDecoration: "underline" }}
//               >
//                 <EmailIcon mr="2" _hover={{ textDecoration: "underline" }} />
//                 support@aim4u.co.in
//               </Text>
//             </Link>
//           </Flex>
//           <Flex direction="column" mt="10" mx="7%">
//             <Text fontSize={["sm", "md", "lg", "xl"]}>Follow</Text>
//             <Text
//               mt="2"
//               fontSize={["sm", "md", "lg", "xl"]}
//               cursor={"pointer"}
//               onClick={() =>
//                 window.open(
//                   "https://www.instagram.com/aim4u.co.in/",
//                   "_blank",
//                   "noopener noreferrer"
//                 )
//               }
//             >
//               Instagram
//             </Text>
//             <Text
//               mt="4"
//               fontSize={["sm", "md", "lg", "xl"]}
//               cursor={"pointer"}
//               onClick={() =>
//                 window.open(
//                   "https://www.linkedin.com/company/aim4u-software-solution/",
//                   "_blank",
//                   "noopener noreferrer"
//                 )
//               }
//             >
//               LinkedIn
//             </Text>
//             <Text
//               mt="4"
//               fontSize={["sm", "md", "lg", "xl"]}
//               cursor={"pointer"}
//               onClick={() =>
//                 window.open(
//                   "https://www.facebook.com/aim4usoftwaresolutions/",
//                   "_blank",
//                   "noopener noreferrer"
//                 )
//               }
//             >
//               Facebook
//             </Text>
//           </Flex>
//           <Flex direction="column" mt="10" mx="7%">
//             <Text fontSize={["sm", "md", "lg", "xl"]}>Legal</Text>
//             <Text
//               mt="2"
//               fontSize={["sm", "md", "lg", "xl"]}
//               cursor={"pointer"}
//               onClick={() =>
//                 window.open(
//                   "https://www.aim4u.co.in/#/terms-and-conditions",
//                   "_blank",
//                   "noopener noreferrer"
//                 )
//               }
//             >
//               Terms & Conditions
//             </Text>
//             <Text
//               mt="4"
//               fontSize={["sm", "md", "lg", "xl"]}
//               cursor={"pointer"}
//               onClick={() =>
//                 window.open(
//                   "https://www.aim4u.co.in/#/privacy-policy",
//                   "_blank",
//                   "noopener noreferrer"
//                 )
//               }
//             >
//               Privacy Policy
//             </Text>
//           </Flex>
//         </Flex>
//       </div>
//       <div>
//         {/* Statement of "All Copyrights Reserved 2024" */}
//         {/* <Box bgColor="#252641" color="white" p="4" textAlign="center">
//         <Text fontSize="xl">All Copyrights Reserved 2024</Text>
//       </Box> */}

//         <Flex
//           bgColor="#252641"
//           color="white"
//           direction="row"
//           alignItems="center"
//           // pl="0"
//           width="100%"
//         >
//           {/* Box with two Text components */}
//           <Box
//             bgColor="#252641"
//             color="white"
//             p="4"
//             textAlign="center"
//             width={"100%"}
//             height={"50%"}
//           >
//             <Text fontSize={["sm", "md", "lg", "xl"]}>
//               All Copyrights Reserved 2024
//             </Text>
//             <Text fontSize={["sm", "md", "lg", "xl"]}>
//               Number of Viewers: {viewersCount}
//             </Text>
//           </Box>
//         </Flex>
//       </div>
//     </>
//   );
// };

// export default Footer;

import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

const Footer = () => {
  const [viewersCount, setViewersCount] = useState(0);

  // Increment viewers count when component mounts
  useEffect(() => {
    const currentCount = localStorage.getItem("viewersCount");
    if (currentCount) {
      setViewersCount(parseInt(currentCount, 10));
    } else {
      setViewersCount(0);
    }

    // Increment the count
    setViewersCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem("viewersCount", newCount);
      return newCount;
    });

    // Clean up when component unmounts
    return () => {
      // Any cleanup code if needed
    };
  }, []);

  return (
    <Flex
      direction={["column", "column", "row"]}
      bgColor="#252641"
      color="white"
      py={[4, 4, 2]}
      px={[4, 4, 8]}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex direction="column" mt={[4, 4, 0]}>
        <Text fontSize={["sm", "md", "lg", "xl"]}>Explore</Text>
        <Link to="/">
          <Text
            mt="2"
            fontSize={["sm", "md", "lg", "xl"]}
            _hover={{ textDecoration: "underline" }}
          >
            Home
          </Text>
        </Link>
        <Link to="/about">
          <Text
            mt="2"
            fontSize={["sm", "md", "lg", "xl"]}
            _hover={{ textDecoration: "underline" }}
          >
            About
          </Text>
        </Link>
      </Flex>
      <Flex direction="column" mt={[4, 4, 0]}>
        <Text fontSize={["sm", "md", "lg", "xl"]}>Contact</Text>
        <Text fontSize={["sm", "md", "lg", "xl"]} mt="2">
          Sardar Patel Technology{" "}
        </Text>
        <Text fontSize={["sm", "md", "lg", "xl"]}>
          Business Incubator (SP-TBI),{" "}
        </Text>
        <Text fontSize={["sm", "md", "lg", "xl"]}>
          Munshi Nagar, Andheri (W){" "}
        </Text>
        <Text fontSize={["sm", "md", "lg", "xl"]}>
          Mumbai, Maharashtra 400053
        </Text>

        <Text mt="4" fontSize={["sm", "md", "lg", "xl"]}>
          <PhoneIcon mr="2" />
          +91 8657424574
        </Text>
        <a href="mailto:support@aim4u.co.in">
          <Text
            mt="2"
            fontSize={["sm", "md", "lg", "xl"]}
            _hover={{ textDecoration: "underline" }}
          >
            <EmailIcon mr="2" _hover={{ textDecoration: "underline" }} />
            support@aim4u.co.in
          </Text>
        </a>
      </Flex>
      <Flex direction="column" mt={[4, 4, 0]}>
        <Text fontSize={["sm", "md", "lg", "xl"]}>Follow</Text>
        <Text
          mt="2"
          fontSize={["sm", "md", "lg", "xl"]}
          cursor={"pointer"}
          onClick={() =>
            window.open(
              "https://www.instagram.com/aim4u.co.in/",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          Instagram
        </Text>
        <Text
          mt="4"
          fontSize={["sm", "md", "lg", "xl"]}
          cursor={"pointer"}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/company/aim4u-software-solution/",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          LinkedIn
        </Text>
        <Text
          mt="4"
          fontSize={["sm", "md", "lg", "xl"]}
          cursor={"pointer"}
          onClick={() =>
            window.open(
              "https://www.facebook.com/aim4usoftwaresolutions/",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          Facebook
        </Text>
      </Flex>
      <Flex direction="column" mt={[4, 4, 0]}>
        <Text fontSize={["sm", "md", "lg", "xl"]}>Legal</Text>
        <Text
          mt="2"
          fontSize={["sm", "md", "lg", "xl"]}
          cursor={"pointer"}
          onClick={() =>
            window.open(
              "https://www.aim4u.co.in/#/terms-and-conditions",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          Terms & Conditions
        </Text>
        <Text
          mt="4"
          fontSize={["sm", "md", "lg", "xl"]}
          cursor={"pointer"}
          onClick={() =>
            window.open(
              "https://www.aim4u.co.in/#/privacy-policy",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          Privacy Policy
        </Text>
      </Flex>
      <Box textAlign="center" mt={[4, 4, 0]}>
        <Text fontSize={["sm", "md", "lg", "xl"]}>
          All Copyrights Reserved 2024
        </Text>
        <Text fontSize={["sm", "md", "lg", "xl"]}>
          Number of Viewers: {viewersCount}
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
