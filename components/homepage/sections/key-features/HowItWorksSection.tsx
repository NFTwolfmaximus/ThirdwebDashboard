import { KeyFeatureLayout } from "./KeyFeatureLayout";
import { Box, Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ChakraNextImage as Image } from "components/Image";
import React from "react";
import { Heading, TrackedLink } from "tw-components";

const TRACKING_CATEGORY = "how_it_works_section";

const data: { title: string; icons: Item[] }[] = [
  {
    title: "CONTRACTS",
    icons: [
      {
        icon: require("/public/assets/product-icons/extensions.png"),
        title: "Build",
        href: "/build",
      },
      {
        icon: require("/public/assets/product-icons/deploy.png"),
        title: "Deploy",
        href: "/deploy",
      },
      {
        icon: require("/public/assets/product-icons/interact.png"),
        title: "Interact",
        href: "/interact",
      },
      {
        icon: require("/public/assets/product-icons/contracts.png"),
        title: "Explore",
        href: "/explore",
      },
      {
        icon: require("/public/assets/product-icons/publish.png"),
        title: "Publish",
        href: "/publish",
      },
    ],
  },
  {
    title: "WALLET",
    icons: [
      {
        icon: require("/public/assets/product-icons/wallet-sdk.png"),
        title: "Connect",
        href: "/connect",
      },
      {
        icon: require("/public/assets/product-icons/smart-wallet.png"),
        title: "Smart Wallet",
        href: "/account-abstraction",
      },
      {
        icon: require("/public/assets/product-icons/embedded-wallet.png"),
        title: "Embedded Wallets",
        href: "/embedded-wallets",
      },
      {
        icon: require("/public/assets/product-icons/auth.png"),
        title: "Auth",
        href: "/auth",
      },
    ],
  },
  {
    title: "PAYMENTS",
    icons: [
      {
        icon: require("/public/assets/product-icons/payments.png"),
        title: "NFT Checkout",
        href: "/checkout",
      },
      {
        icon: require("/public/assets/product-icons/sponsored-transactions.png"),
        title: "Sponsored Transactions",
        href: "/sponsored-transactions",
      },
    ],
  },
  {
    title: "INFRASTRUCTURE",
    icons: [
      {
        icon: require("/public/assets/product-icons/storage.png"),
        title: "Decentralized Storage",
        href: "/storage",
      },
      {
        icon: require("/public/assets/product-icons/rpc-edge.png"),
        title: "RPC Edge",
        href: "/rpc-edge",
      },
      {
        icon: require("/public/assets/product-icons/engine.png"),
        title: "Engine",
        href: "/engine",
      },
    ],
  },
];

type Item = {
  icon: any;
  title: string;
  href?: string;
};
const Item: React.FC<{ item: Item }> = ({ item }) => {
  return item.href ? (
    <Flex
      flexDir="column"
      align="center"
      gap="2.5"
      as={TrackedLink}
      href={item.href}
      category={TRACKING_CATEGORY}
      label={item.title.replace(" ", "_").toLowerCase()}
      transition="opacity 0.2s"
      _hover={{ opacity: 0.8, textDecoration: "none" }}
    >
      <Image w="10" h="10" alt="" src={item.icon} />
      <Heading
        size="title.xs"
        color="#A0A0A0"
        fontSize="0.7rem"
        textAlign="center"
        as="h5"
      >
        {item.title}
      </Heading>
    </Flex>
  ) : (
    <Flex flexDir="column" align="center" gap="2.5">
      <Image w="10" h="10" alt="" src={item.icon} />
      <Heading
        size="title.xs"
        color="#A0A0A0"
        fontSize="0.7rem"
        textAlign="center"
        as="h5"
      >
        {item.title}
      </Heading>
    </Flex>
  );
};

export const HowItWorksSection: React.FC = () => {
  return (
    <KeyFeatureLayout
      title="Complete"
      titleGradient="linear-gradient(70deg, #A3469D, #B799D5)"
      headline="All-in-one solution."
      description=""
    >
      <Image
        w="14"
        h="14"
        src={require("/public/assets/landingpage/howitworks-logo.png")}
        alt=""
      />
      <Box w="5px" bg="#0A0A0A" h="7" mt="-1" />
      <Box w="55%" pt="6" pb="1" border="5px #0A0A0A solid" borderBottom="0" />
      <Flex
        align="stretch"
        justify="space-between"
        wrap={{ base: "wrap", md: "nowrap" }}
        gap={4}
        w="full"
      >
        <Flex
          display={{ base: "none", xl: "flex" }}
          flexGrow={1}
          order={{ base: 2, md: 1 }}
          rounded="8"
          border="2px #171717 solid"
          justify="between"
          flexDir="column"
          align="center"
          pb={9}
          w={{ md: "full" }}
          maxW={36}
          maxH="38rem"
        >
          <Image
            opacity={0.55}
            w="full"
            src={require("/public/assets/landingpage/howitworks-apps.png")}
            alt=""
            mb={2}
          />
          <Heading
            opacity={0.55}
            size="title.xs"
            color="#A0A0A0"
            fontSize="0.7rem"
            textAlign="center"
            mt="auto"
            as="span"
          >
            APPS & GAMES
          </Heading>
        </Flex>
        <Flex
          flexGrow={1}
          display={{ base: "none", xl: "flex" }}
          order={{ base: 3, md: 3 }}
          rounded="8"
          border="2px #171717 solid"
          justify="between"
          flexDir="column"
          align="center"
          pb={12}
          w={{ md: "full" }}
          maxW={36}
          maxH="38rem"
        >
          <Image
            opacity={0.55}
            w="full"
            src={require("/public/assets/landingpage/howitworks-networks.png")}
            alt=""
            mb={2}
          />
          <Heading
            opacity={0.55}
            mt="auto"
            size="title.xs"
            color="#A0A0A0"
            fontSize="0.7rem"
            textAlign="center"
            as="span"
          >
            DECENTRALIZED NETWORKS
          </Heading>
        </Flex>
        <Flex
          w={{ base: "full", md: "auto" }}
          order={{ base: 1, md: 2 }}
          gap={{ base: 12, md: 8 }}
          flexGrow={1}
          flexDir="column"
        >
          <HowItWorksSectionItem
            item={data.find(({ title }) => title === "CONTRACTS")}
          />
          <HowItWorksSectionItem
            item={data.find(({ title }) => title === "WALLET")}
          />
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 12, md: 8 }}>
            <HowItWorksSectionItem
              item={data.find(({ title }) => title === "PAYMENTS")}
            />
            <HowItWorksSectionItem
              item={data.find(({ title }) => title === "INFRASTRUCTURE")}
            />
          </SimpleGrid>
        </Flex>
      </Flex>
    </KeyFeatureLayout>
  );
};

interface HowItWorksSectionItemProps {
  item?: {
    title: string;
    icons: Item[];
  };
}

const HowItWorksSectionItem: React.FC<HowItWorksSectionItemProps> = ({
  item,
}) => {
  return (
    <Box>
      <Heading
        size="title.xs"
        color="#A0A0A0"
        textAlign="center"
        fontSize="0.7rem"
        letterSpacing={1.1}
        lineHeight="1"
        mt="-0.95rem"
        pb={2}
        as="h4"
      >
        {item?.title}
      </Heading>
      <Flex rounded="8" border="2px #171717 solid" w="full" h="full">
        <SimpleGrid
          my="auto"
          w="full"
          columns={{
            base: 3,
            lg: item?.icons.length,
          }}
          gap="1rem 0"
          py={6}
          px={4}
        >
          {item?.icons.map((itm, index) => (
            <GridItem
              key={itm.title}
              colSpan={{
                base: index === 6 ? 3 : 1,
                lg: 1,
              }}
            >
              <Item item={itm} />
            </GridItem>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
