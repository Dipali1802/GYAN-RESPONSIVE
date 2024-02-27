// // import { Box, Card, CardBody, CardHeader, Center, Flex, Grid, GridItem, Image, Spacer, Text } from '@chakra-ui/react'
// // import React from 'react'
// // import intern from '../images/intern1.png';
// // import intern1 from '../images/InternImages/Tejas.png';

// // const PrevInterns = () => {

// //     const data = [
// //         {
// //           // name: 'Tejas Chheda',
// //           role: 'Machine Learning engineer @Linkedin',

// //           imageSrc: intern1,
// //         },
// //         {
// //           name: 'Neil Daftary',
// //           role: 'Machine Learning engineer @Linkdin',
// //           imageSrc: intern,
// //         },
// //         {
// //           name: 'Neil Daftary',
// //           role: 'Machine Learning engineer @Linkdin',
// //           imageSrc: intern,
// //         },
// //         {
// //           name: 'Neil Daftary',
// //           role: 'Machine Learning engineer @Linkdin',
// //           imageSrc: intern,
// //         },
// //         {
// //           name: 'Neil Daftary',
// //           role: 'Machine Learning engineer @Linkdin',
// //           imageSrc: intern,
// //         },
// //         {
// //           name: 'Neil Daftary',
// //           role: 'Machine Learning engineer @Linkdin',
// //           imageSrc: intern,
// //         },

// //       ];

// //     return (

// //     <div>
// //     <Flex mx="0" mt="" mb="0">
// //     </Flex>
// //     <Center>
// //     <Grid templateColumns={["repeat(1, 4fr)","repeat(2, 4fr)","repeat(3, 4fr)","repeat(4, 4fr)"]} gap={5} width="100%" overflowX="auto">
// //   {data.map((item, index) => (
// //     <GridItem key={index}>
// //       <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center">
// //   {/* Image */}
// //   <Center>
// //   <Box
// //     boxSize={{ base: '10%', md: '40%' }}
// //     overflow='visible'
// //     position="relative"
// //     mb={{ base: '4', md: '0' }}
// //   >
// //     <Image
// //       src={item.imageSrc}
// //       alt='intern'
// //       boxSize="100%"
// //       objectFit='cover'
// //       position="absolute"
// //       top="50%"
// //       left="50%"
// //       transform="translate(-50%, -50%)"
// //       zIndex='3'
// //     />
// //   </Box>
// // </Center>
// //   {/* Card */}
// //   <Card shadow='2xl' h='72' w={{ base: '100%', md: '60%' }} border='1px' zIndex='1'>
// //     <CardHeader textAlign='center' fontSize={{ base: '2xl', md: '4xl' }} mt={{ base: '4', md: '20' }}>
// //       {item.name}
// //     </CardHeader>
// //     <CardBody>
// //       <Text textAlign='center' mb='10'>
// //         {item.role}
// //       </Text>
// //     </CardBody>
// //   </Card>
// // </Flex>

// //     </GridItem>
// //   ))}
// // </Grid>
// // </Center>
// //   </div>
// //   )
// // }

// // export default PrevInterns

// // import { Box, Card, CardBody, CardHeader, Center, Flex, Grid, GridItem, Image, Spacer, Text, IconButton } from '@chakra-ui/react';
// // import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
// // import React, { useState } from 'react';
// // import intern from '../images/intern1.png';
// // import intern1 from '../images/InternImages/Tejas.png';

// // const PrevInterns = () => {
// //     const [currentIndex, setCurrentIndex] = useState(0);

// //     const data = [
// //         {
// //             name: 'Tejas Chheda',
// //             role: 'Machine Learning engineer @Linkedin',
// //             imageSrc: intern1,
// //         },
// //         {
// //             name: 'Neil Daftary',
// //             role: 'Machine Learning engineer @Linkdin',
// //             imageSrc: intern,
// //         },
// //         {
// //           name: 'Tejas Chheda',
// //           role: 'Machine Learning engineer @Linkedin',
// //           imageSrc: intern1,
// //       },
// //       {
// //         name: 'Tejas Chheda',
// //         role: 'Machine Learning engineer @Linkedin',
// //         imageSrc: intern1,
// //       },
// //       {
// //         name: 'Tejas Chheda',
// //         role: 'Machine Learning engineer @Linkedin',
// //         imageSrc: intern1,
// //     },
// //         // Add more data objects as needed
// //     ];

// //     const handlePrev = () => {
// //         setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
// //     };

// //     const handleNext = () => {
// //         setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
// //     };

// //     return (
// //         <div>
// //             <Flex mx="0" mt="" mb="0" align="center" justify="space-between">
// //                 <IconButton
// //                     icon={<ChevronLeftIcon />}
// //                     aria-label="Previous"
// //                     onClick={handlePrev}
// //                     display={{ base: 'none', md: 'block' }}
// //                 />
// //                 <Center>
// //                     <Grid
// //                         templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
// //                         gap={2}
// //                         width="100%"
// //                         overflowX="auto"
// //                     >
// //                         {data.map((item, index) => (
// //                             <GridItem key={index}>
// //                                 <Flex direction="column" align="center" justify="center">
// //                                     {/* Image */}
// //                                     <Box
// //                                         boxSize={{ base: '100%', md: '80%' }}
// //                                         overflow='visible'
// //                                         position="relative"
// //                                         mb={{ base: '2', md: '0' }}
// //                                     >
// //                                         <Image
// //                                             src={item.imageSrc}
// //                                             alt='intern'
// //                                             boxSize="100%"
// //                                             objectFit='cover'
// //                                             borderRadius="md"
// //                                         />
// //                                     </Box>
// //                                     {/* Card */}
// //                                     <Card shadow='2xl' h='60' w='100%' border='1px' zIndex='1'>
// //                                         <CardHeader textAlign='center' fontSize={{ base: 'xl', md: '2xl' }} mt={{ base: '2', md: '4' }}>
// //                                             {item.name}
// //                                         </CardHeader>
// //                                         <CardBody>
// //                                             <Text textAlign='center' fontSize={{ base: 'sm', md: 'md' }} mb='2'>
// //                                                 {item.role}
// //                                             </Text>
// //                                         </CardBody>
// //                                     </Card>
// //                                 </Flex>
// //                             </GridItem>
// //                         ))}
// //                     </Grid>
// //                 </Center>
// //                 <IconButton
// //                     icon={<ChevronRightIcon />}
// //                     aria-label="Next"
// //                     onClick={handleNext}
// //                     display={{ base: 'none', md: 'block' }}
// //                 />
// //             </Flex>
// //             <Center display={{ base: 'block', md: 'none' }}>
// //                 <IconButton
// //                     icon={<ChevronLeftIcon />}
// //                     aria-label="Previous"
// //                     onClick={handlePrev}
// //                 />
// //                 <Spacer />
// //                 <IconButton
// //                     icon={<ChevronRightIcon />}
// //                     aria-label="Next"
// //                     onClick={handleNext}
// //                 />
// //             </Center>
// //         </div>
// //     );
// // };

// // export default PrevInterns;

// //   const handlePrev = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
// //   };

// //   const handleNext = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
// //   };

// //   return (
// //     <div>
// //       <Flex mx="0" mt="" mb="0" align="center" justify="space-between">
// //         <IconButton
// //           icon={<ChevronLeftIcon />}
// //           aria-label="Previous"
// //           onClick={handlePrev}
// //           display={{ base: 'none', md: 'block' }}
// //         />
// //         <Center>
// //           <Grid
// //             templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
// //             gap={2}
// //             width="100%"
// //             overflowX="auto"
// //           >
// //             {data.map((item, index) => {
// //               const displayIndex = (index + currentIndex) % data.length; // Calculate the circular index

// //               return (
// //                 <GridItem key={index}>
// //                   <Flex direction="column" align="center" justify="center">
// //                     {/* Image */}
// //                     <Box
// //                       boxSize={{ base: '100%', md: '80%' }}
// //                       overflow="visible"
// //                       position="relative"
// //                       mb={{ base: '2', md: '0' }}
// //                     >
// //                       <Image
// //                         src={data[displayIndex].imageSrc}
// //                         alt="intern"
// //                         boxSize="100%"
// //                         objectFit="cover"
// //                         borderRadius="md"
// //                       />
// //                     </Box>
// //                     {/* Card */}
// //                     <Card shadow="2xl" h="60" w="100%" border="1px" zIndex="1">
// //                       <CardHeader
// //                         textAlign="center"
// //                         fontSize={{ base: 'xl', md: '2xl' }}
// //                         mt={{ base: '2', md: '4' }}
// //                       >
// //                         {data[displayIndex].name}
// //                       </CardHeader>
// //                       <CardBody>
// //                         <Text textAlign="center" fontSize={{ base: 'sm', md: 'md' }} mb="2">
// //                           {data[displayIndex].role}
// //                         </Text>
// //                       </CardBody>
// //                     </Card>
// //                   </Flex>
// //                 </GridItem>
// //               );
// //             })}
// //           </Grid>
// //         </Center>
// //         <IconButton
// //           icon={<ChevronRightIcon />}
// //           aria-label="Next"
// //           onClick={handleNext}
// //           display={{ base: 'none', md: 'block' }}
// //         />
// //       </Flex>
// //       <Center display={{ base: 'block', md: 'none' }}>
// //         <IconButton icon={<ChevronLeftIcon />} aria-label="Previous" onClick={handlePrev} />
// //         <Spacer />
// //         <IconButton icon={<ChevronRightIcon />} aria-label="Next" onClick={handleNext} />
// //       </Center>
// //     </div>
// //   );
// // };

// // export default PrevInterns;

// import React, { useState } from "react";
// import {
//   Box,
//   Card,
//   CardBody,
//   CardHeader,
//   Center,
//   Flex,
//   Grid,
//   GridItem,
//   Image,
//   Spacer,
//   Text,
//   IconButton,
// } from "@chakra-ui/react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// // import intern from '../images/intern1.png';
// // import intern1 from '../images/InternImages/Tejas.png';
// import Neil from "../images/InternImages/Neil.png";
// import Tejas from "../images/InternImages/Tejas.png";
// import tanvi from "../images/InternImages/tanvi.png";
// import Sarah from "../images/InternImages/Sarah.png";
// import Aditya from "../images/InternImages/Aditya.png";
// import Sumit from "../images/InternImages/Sumit.png";
// import Rithvika from "../images/InternImages/Rithvika.png";
// import parth from "../images/InternImages/parth.png";
// const PrevInterns = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const internsPerPage = 4;

//   // const PrevInterns = () => {
//   //   const [currentIndex, setCurrentIndex] = useState(0);

//   const data = [
//     {
//       name: "Tejas Chheda",
//       role: "Machine Learning Software Engineer @ Meta",
//       imageSrc: Tejas,
//     },
//     {
//       name: "Neil Daftary",
//       role: "Machine Learning Engineer @ Linkedin",
//       imageSrc: Neil,
//     },
//     {
//       name: "Tanvi Dhope",
//       role: "Software Engineer @ Microsoft",
//       imageSrc: tanvi,
//     },
//     {
//       name: "Sarah Gawade",
//       role: "Software Engineer @ Microsoft",
//       imageSrc: Sarah,
//     },
//     {
//       name: "Aditya Das",
//       role: "Senior Software Engineer @ SalesForce",
//       imageSrc: Aditya,
//     },
//     {
//       name: "Sumit Gouthaman",
//       role: "Senior Software Engineer @ Google",
//       imageSrc: Sumit,
//     },
//     {
//       name: "Rithvika Iyer",
//       role: "Former Machine Learning Engineer @ Reliance Jio",
//       imageSrc: Rithvika,
//     },
//     {
//       name: "Parth Dedhia",
//       role: "Senior Machine Learning Engineer @ Quantiphi",
//       imageSrc: parth,
//     },
//     // Add more data objects as needed
//   ];
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - internsPerPage < 0
//         ? data.length - internsPerPage
//         : prevIndex - internsPerPage
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + internsPerPage >= data.length ? 0 : prevIndex + internsPerPage
//     );
//   };

//   return (
//     <div>
//       <Flex mx="0" mt="" mb="0" align="center" justify="space-between">
//         <IconButton
//           icon={<ChevronLeftIcon />}
//           aria-label="Previous"
//           onClick={handlePrev}
//           display={{ base: "none", md: "block" }}
//         />
//         <Center>
//           <Grid
//             templateColumns={`repeat(${internsPerPage}, 1fr)`} // Adjusted to show 4 interns in a row
//             gap={2}
//             width="80%"
//             overflowX="auto"
//           >
//             {data
//               .slice(currentIndex, currentIndex + internsPerPage)
//               .map((item, index) => {
//                 const displayIndex = (currentIndex + index) % data.length; // Calculate the circular index

//                 return (
//                   <GridItem key={index}>
//                     <Flex direction="column" align="center" justify="center">
//                       {/* Image */}
//                       <Box
//                         boxSize={{ base: "100%", md: "80%" }}
//                         overflow="visible"
//                         position="relative"
//                         mb={{ base: "2", md: "0" }}
//                       >
//                         <Image
//                           src={data[displayIndex].imageSrc}
//                           alt="intern"
//                           boxSize="100%"
//                           objectFit="cover"
//                           borderRadius="md"
//                         />
//                       </Box>
//                       {/* Card */}
//                       <Card
//                         shadow="2xl"
//                         h="60"
//                         w="100%"
//                         border="10px"
//                         zIndex="1"
//                       >
//                         <CardHeader
//                           textAlign="center"
//                           fontSize={{ base: "xl", md: "2xl" }}
//                           mt={{ base: "2", md: "4" }}
//                         >
//                           {data[displayIndex].name}
//                         </CardHeader>
//                         <CardBody>
//                           <Text
//                             textAlign="center"
//                             fontSize={{ base: "sm", md: "md" }}
//                             mb="2"
//                           >
//                             {data[displayIndex].role}
//                           </Text>
//                         </CardBody>
//                       </Card>
//                     </Flex>
//                   </GridItem>
//                 );
//               })}
//           </Grid>
//         </Center>
//         <IconButton
//           icon={<ChevronRightIcon />}
//           aria-label="Next"
//           onClick={handleNext}
//           display={{ base: "none", md: "block" }}
//         />
//       </Flex>
//       <Center display={{ base: "block", md: "none" }}>
//         <IconButton
//           icon={<ChevronLeftIcon />}
//           aria-label="Previous"
//           onClick={handlePrev}
//         />
//         <Spacer />
//         <IconButton
//           icon={<ChevronRightIcon />}
//           aria-label="Next"
//           onClick={handleNext}
//         />
//       </Center>
//     </div>
//   );
// };

// export default PrevInterns;

import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Tejas from "../images/InternImages/Tejas.png";
import Neil from "../images/InternImages/Neil.png";
import tanvi from "../images/InternImages/tanvi.png";
import Sarah from "../images/InternImages/Sarah.png";
import Aditya from "../images/InternImages/Aditya.png";
import Sumit from "../images/InternImages/Sumit.png";
import Rithvika from "../images/InternImages/Rithvika.png";
import parth from "../images/InternImages/parth.png";
import Mahesh from "../images/InternImages/Mahesh.png";
import palak from "../images/InternImages/palak.png";
import SarahSonje from "../images/InternImages/SarahSonje.png";
import Smruti from "../images/InternImages/Smruti.png";
import Urvi from "../images/InternImages/Urvi.png";
import Aumkar from "../images/InternImages/Aumkar.png";
import Anjali from "../images/InternImages/Anjali.png";
import Tanisha from "../images/InternImages/Tanisha.png";
import { PlayArrow } from "@mui/icons-material";

const PrevInterns = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [internsPerPage, setInternsPerPage] = useState(4); // Default to 4 interns per page

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        // Mobile view
        setInternsPerPage(2);
      } else if (screenWidth >= 600 && screenWidth < 1024) {
        // Tablet view
        setInternsPerPage(3);
      } else {
        // Desktop view
        setInternsPerPage(4);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    console.log(internsPerPage);
    console.log(sliceIndices);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    {
      srNo: 0,
      name: "Tejas Chheda",
      role: "Machine Learning Software Engineer @ Meta",
      imageSrc: Tejas,
    },
    {
      srNo: 1,
      name: "Neil Daftary",
      role: "Machine Learning Engineer @ Linkedin",
      imageSrc: Neil,
    },
    {
      srNo: 2,
      name: "Tanvi Dhope",
      role: "Software Engineer @ Microsoft",
      imageSrc: tanvi,
    },
    {
      srNo: 3,
      name: "Sarah Gawade",
      role: "Software Engineer @ Microsoft",
      imageSrc: Sarah,
    },
    {
      srNo: 4,
      name: "Aditya Das",
      role: "Senior Software Engineer @ SalesForce",
      imageSrc: Aditya,
    },
    {
      srNo: 5,
      name: "Sumit Gouthaman",
      role: "Senior Software Engineer @ Google",
      imageSrc: Sumit,
    },
    {
      srNo: 6,
      name: "Rithvika Iyer",
      role: "Former Machine Learning Engineer @ Reliance Jio",
      imageSrc: Rithvika,
    },
    {
      srNo: 7,
      name: "Parth Dedhia",
      role: "Senior Machine Learning Engineer @ Quantiphi",
      imageSrc: parth,
    },
    {
      srNo: 8,
      name: "Mahesh Tamse",
      role: "Software Development Engineer @ Amazon",
      imageSrc: Mahesh,
    },
    {
      srNo: 9,
      name: "Palak Davda",
      role: "Software Development Engineer @ Amazon",
      imageSrc: palak,
    },
    {
      srNo: 10,
      name: "Sarah Sonje",
      role: "Former Software Development Engineer @ Amazon",
      imageSrc: SarahSonje,
    },
    {
      srNo: 11,
      name: "Smruti Varvadekar",
      role: "Software Development Engineer @ AWS-IOT",
      imageSrc: Smruti,
    },
    {
      srNo: 12,
      name: "Urvi Bhanushali",
      role: "Former Senior Technology Associate @ Morgan Stanley",
      imageSrc: Urvi,
    },
    {
      srNo: 13,
      name: "Aumkar Gadekar",
      role: "Senior Analyst @ Deutsche Bank",
      imageSrc: Aumkar,
    },
    {
      srNo: 14,
      name: "Anjali Karvinde",
      role: "Technology Analyst @ Deutsche Bank",
      imageSrc: Anjali,
    },
    {
      srNo: 15,
      name: "Tanisha Kulkarni",
      role: "Business Analyst @ Barclays Business Banking",
      imageSrc: Tanisha,
    },
  ];

  const sliceIndices = [];
  for (let i = 0; i < internsPerPage; i++) {
    sliceIndices.push((currentIndex + i) % data.length);
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % data.length);
    console.log(internsPerPage);
    console.log(sliceIndices);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    console.log(internsPerPage);
    console.log(sliceIndices);
  };

  return (
    <div>
      <Flex mt="" mb="0" align="center" justify="space-between">
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label="Previous"
          onClick={handlePrev}
        />

        <Center>
          <Grid
            templateColumns={`repeat(${internsPerPage}, 1fr)`}
            gap={2}
            width="80%"
            overflowX="auto"
          >
            {sliceIndices.map((sliceIndex, index) => (
              <GridItem key={index}>
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  mb={"20px"}
                  mx={[4, 4]}
                >
                  <Card
                    shadow="2xl"
                    h="350px"
                    w="100%"
                    border="10px"
                    zIndex="1"
                  >
                    <Image
                      src={data[sliceIndex].imageSrc}
                      alt="intern"
                      boxSize="150px"
                      objectFit="cover"
                      borderRadius="md"
                      margin={"auto"}
                      marginTop={"5px"}
                    />
                    <CardHeader
                      textAlign="center"
                      fontWeight={"bold"}
                      fontSize={{ base: "lg", md: "xl" }}
                      mt={{ base: "2", md: "4" }}
                    >
                      {`${data[sliceIndex].name}`}{" "}
                      {/* Display Sr. No. along with name */}
                    </CardHeader>
                    <CardBody>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "sm", md: "md" }}
                        mb="2"
                      >
                        {data[sliceIndex].role}
                      </Text>
                    </CardBody>
                  </Card>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Center>
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="Next"
          onClick={handleNext}
        />
      </Flex>
    </div>
  );
};

export default PrevInterns;
