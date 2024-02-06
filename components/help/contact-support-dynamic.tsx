import {
    Box,
    Flex,
    FormControl,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Text,
    Textarea,
    useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Button, FormLabel, Heading } from "tw-components";
import { useTxNotifications } from "hooks/useTxNotifications";
import {
    CreateTicketInput,
    useAccount,
    useCreateTicket,
} from "@3rdweb-sdk/react/hooks/useApi";
import { ConnectWallet } from "@thirdweb-dev/react";
import { MutableRefObject, SetStateAction, useRef, useState } from "react";
import { FaFileUpload } from "react-icons/fa";

const productOptions = [
    "Contracts(Onchain)",
    "Connect(Frontend)",
    "Engine(Backend)",
    "Billing",
    "Other",
];

const frontendOptions = [
    "Connect",
    "Embedded Wallet",
    "Smart Wallet",
    "Auth",
    "Dashboard"
]

const engineOptions = [
    "Engine",
    "Storage",
    "RPC Edge"
]

const connectoptions = [
    "ConnectWallet",
    "ConnectEmbed",
    "Build Custom Experience"
]

const projectTypes = [
    "React",
    "React Native",
    "Typescript",
    "Unity"
]





export const ContactSupportDynamic = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const form = useForm<CreateTicketInput>();
    const { onSuccess, onError } = useTxNotifications(
        "Successfully sent ticket. Our team will be in touch shortly.",
        "Failed to send ticket. Please try again.",
    );
    const { data: account } = useAccount();
    const { mutate: createTicket } = useCreateTicket();

    const [showticketCreate, setShowTicketCreate] = useState(false)
    const [showAIResponse, setShowAIresponse] = useState(false)
    const [productSelection, setProductSelection] = useState(productOptions[0])
    const [secondLvlSelection, setSecondLvlSelection] = useState('')


    const handleProductChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setProductSelection(e.target.value);
    };
    const handle2ndlevelChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSecondLvlSelection(e.target.value);
    };




    return (
        <>
            <Box p={6} as={Flex} gap={4} flexDir="column">
                <FormControl isRequired>
                    <FormLabel>What do you need help with?</FormLabel>
                    <Select {...form.register("product", { required: true })} onChange={handleProductChange}>
                        {productOptions?.map((product) => (
                            <option key={product} value={product}>
                                {product}
                            </option>
                        ))}
                    </Select>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Description of the issue you are experiencing</FormLabel>
                    <Textarea
                        autoComplete="off"
                        {...form.register("markdown", { required: true })}
                        rows={7}
                        maxLength={10000}
                    />
                </FormControl>
                <Button maxWidth={"-moz-fit-content"} justifyContent={"end"} onClick={() => setShowAIresponse(!showAIResponse)}>
                    Ask Thirdweb Support Bot
                </Button>
            </Box>

            {showAIResponse && (
                <Box p={6} as={Flex} gap={4} flexDir="column">
                    <Text noOfLines={7}>
                        Placeholder for text returned from AI response. Lorem Ipsum
                    </Text>
                    <p>Didnt solve the issue? Submit a ticket!</p>
                    <Button maxWidth={"-moz-fit-content"} onClick={() => setShowTicketCreate(!showticketCreate)}>
                        Create Ticket
                    </Button>
                </Box>
            )}

            {showticketCreate && (
                <Box p={6} as={Flex} gap={4} flexDir="column">
                    {/*Personal info */}
                    <FormControl isRequired>
                        <FormLabel>Personal Information:</FormLabel>
                        <Text>Email:</Text>
                        <Input type='email' />
                        <Text>Wallet Address</Text>
                        <Input></Input>
                        <Text>Company/Organization</Text>
                        <Input></Input>
                    </FormControl>

                    {/*Project Details */}
                    <FormControl isRequired>
                        <FormLabel>Project Details:</FormLabel>
                        <Text>Contract Name:</Text>
                        <Input />
                        <Text>Contract Address</Text>
                        <Input></Input>
                        <Text>Project Type</Text>
                        <Select>
                            {projectTypes?.map((projectType) => (
                                <option key={projectType} value={projectType}>
                                    {projectType}
                                </option>
                            ))}
                        </Select>
                    </FormControl>

                    {/*Development Environment */}
                    <FormControl isRequired>
                        <FormLabel>Development Environment</FormLabel>
                        <Text>SDK Version</Text>
                        <Input />
                        <Text>Framework/Language Version</Text>
                        <Input></Input>

                    </FormControl>

                    {/* Top Level Options */}
                    <FormControl isRequired>
                        <FormLabel>What do you need help with?</FormLabel>
                        <Select {...form.register("product", { required: true })} onChange={handleProductChange} defaultValue={productSelection}>
                            {productOptions?.map((product) => (
                                <option key={product} value={product}>
                                    {product}
                                </option>
                            ))}
                        </Select>
                    </FormControl>

                    {/* 2nd Level Options */}
                    {productSelection === "Connect(Frontend)" && (
                        <FormControl isRequired>
                            <FormLabel>Which product of {productSelection} do you need help with?</FormLabel>
                            <Select onChange={handle2ndlevelChange} defaultValue={"Connect"}>
                                {frontendOptions?.map((product) => (
                                    <option key={product} value={product}>
                                        {product}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                    {productSelection === "Engine(Backend)" && (
                        <FormControl isRequired>
                            <FormLabel>Which product of {productSelection} do you need help with?</FormLabel>
                            <Select onChange={handleProductChange}>
                                {engineOptions?.map((product) => (
                                    <option key={product} value={product}>
                                        {product}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    {/* 3rd Level Options */}
                    {productSelection === "Connect(Frontend)" && secondLvlSelection === "Connect" && (
                        <FormControl isRequired>
                            <FormLabel>Which product of {secondLvlSelection} do you need help with?</FormLabel>
                            <Select >
                                {connectoptions?.map((product) => (
                                    <option key={product} value={product}>
                                        {product}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    <FormControl isRequired>
                        <FormLabel>Description of the issue you are experiencing</FormLabel>
                        <Textarea
                            autoComplete="off"
                            {...form.register("markdown", { required: true })}
                            rows={7}
                            maxLength={10000}
                        />
                    </FormControl>

                    {/* Steps To Repoduce */}
                    <FormControl isRequired>
                        <FormLabel>Steps To Repoduce</FormLabel>
                        <Textarea placeholder=" List the steps to reproduce the issue, if applicable."></Textarea>
                    </FormControl>

                    {/* Additional Info */}
                    <FormControl isRequired>
                        <FormLabel>Additional Information</FormLabel>
                        <Textarea placeholder="Any additional context or information that might help in diagnosing the issue."></Textarea>
                    </FormControl>

                    {/* Attachments */}
                    <FormControl isRequired>
                        <FormLabel>Attachments</FormLabel>
                        <Textarea placeholder="Any attachment."></Textarea>
                    </FormControl>


                    <Button>
                        Submit Ticket
                    </Button>
                </Box>
            )}
        </>
    );
};
