import React, { useContext, useState } from "react";
import { Container, Modal, Stepper } from "@mantine/core";
import AddLocation from "./AddLocation";
// import { useAuth0 } from "@auth0/auth0-react";
import UploadImage from "./UploadImage";
import BasicDetails from "./BasicDetails";
import Facilities from "./Facilities";
import UserDetailsContext from "../context/UserDetailsContext";

const AddPropertyModal = ({ opened, setOpened }) => {
  const [active, setActive] = useState(0);
  // const { user } = useAuth0();
  const { userDetails } = useContext(UserDetailsContext);
  // console.log(userDetails?.token)
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    price: 0,
    country: "",
    city: "",
    address: "",
    image: null,
    facilities: {
      bedrooms: 0,
      bathrooms: 0,
      parkings: 0,
    },
    userEmail: userDetails?.email,
  });

  const nextStep = () => {
    setActive((current) => (current < 4 ? current + 1 : current));
  };
  const prevStep = () => {
    setActive((current) => (current > 0 ? current + 1 : current));
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      closeOnClickOutside
      size={"90rem"}
    >
      <Container h={"34rem"} w={"100%"}>
        <>
          <Stepper active={active} onStepClick={setActive} >
            <Stepper.Step label="Location" description="Address">
              <AddLocation
                nextStep={nextStep}
                propertyDetails={propertyDetails}
                setPropertyDetails={setPropertyDetails}
              />
            </Stepper.Step>
            <Stepper.Step label="image" description="Upload">
              <UploadImage
                prevStep={prevStep}
                nextStep={nextStep}
                propertyDetails={propertyDetails}
                setPropertyDetails={setPropertyDetails}
              />
            </Stepper.Step>
            <Stepper.Step label="Basics" description="Details">
              <BasicDetails
                prevStep={prevStep}
                nextStep={nextStep}
                propertyDetails={propertyDetails}
                setPropertyDetails={setPropertyDetails}
              />
            </Stepper.Step>
            <Stepper.Step label="facilities" description="Facilities">
              <Facilities
                prevStep={prevStep}
                propertyDetails={propertyDetails}
                setPropertyDetails={setPropertyDetails}
                setOpened={setOpened}
                setActiveStep = {setActive}
              />
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
        </>
      </Container>
    </Modal>
  );
};

export default AddPropertyModal;
