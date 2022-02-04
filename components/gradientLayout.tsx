import { Box, Flex, Image, Text } from "@chakra-ui/react";

const GradientLayout = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundImage,
}) => {
  return (
    <Box
      height="100%"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0, 0, 0, 0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="40px" align="end">
        <Box p="20px">
          <Image
            boxSize="160px"
            src={image}
            borderRadius={roundImage ? "100%" : "3px"}
            boxShadow="2xl"
          />
        </Box>
        <Box p="20px" lineHeight="40px" color="white">
          <Text fontSize="x-small" fontWeight="bold" casing="uppercase">
            {subtitle}
          </Text>
          <Text fontSize="6xl">{title}</Text>
          <Text fontSize="sm" fontWeight="100" mt="10px">
            {description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default GradientLayout;
