import React, { useContext } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Group, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import useProperties from "../hooks/useProperties";
import UserDetailsContext from "../context/UserDetailsContext";
import { createResidency } from "../utils/api";

const Facilities = ({
  prevStep,
  propertyDetails,
  setPropertyDetails,
  setOpened,
  setActiveStep,
}) => {
  const form = useForm({  
    initialValues: {
      bedrooms: propertyDetails.facilities.bedrooms,
      parkings: propertyDetails.facilities.parkings,
      bathrooms: propertyDetails.facilities.bathrooms,
    },
    validate: {
      bedrooms: (value) =>
        value < 1 ? "Must have at least one bedroom" : null,
      bathrooms: (value) =>
        value < 1 ? "Must have at least one bathroom" : null,
    },
  });

  const { bedrooms, parkings, bathrooms } = form.values;

  const storedUser = localStorage.getItem("user");
  const parsedUser = JSON.parse(storedUser);
  const email =  parsedUser?.email;
  console.log(email)

  //upload
  // const { user } = useAuth0();
  const {userDetails} = useContext(UserDetailsContext);
  const { refetch: refetchProperties } = useProperties()

// console.log(userDetails)
  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      createResidency(
        {
          ...propertyDetails,
          facilities: { bedrooms, parkings, bathrooms },
        },
        `Bearer ${userDetails?.token}`,
         email
      ),
    onError: ({ response }) =>
      toast.error(response.data.message, { position: "bottom-right" }),
    onSettled: () => {
      toast.success("Added Successfully", { position: "bottom-right" });
      setPropertyDetails({
        title: "",
        description: "",
        price: 0,
        country: "",
        city: "",
        address: "",
        image: null,
        facilities: {
          bedrooms: 0,
          parkings: 0,
          bathrooms: 0,
        },
        userEmail: userDetails?.email,
      });
      setOpened(false);
      setActiveStep(0);
      refetchProperties();
    },
  });

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({
        ...prev,
        facilities: { bedrooms, parkings, bathrooms },
      }));
      console.log(propertyDetails)
      mutate();
    }
  };

  return (
    <Box maw={"30%"} mx="auto" my={"sm"}>
      <form
      >
        <NumberInput
          withAsterisk
          label="No of Bedrooms"
          min={0}
          {...form.getInputProps("bedrooms")}
        />
        <NumberInput
          withAsterisk
          label="No of parkings"
          min={0}
          {...form.getInputProps("parkings")}
        />
        <NumberInput
          withAsterisk
          label="No of bathrooms"
          min={0}
          {...form.getInputProps("bathrooms")}
        />
        <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
                Back
            </Button>
            <Button type="button" color="green" disabled={isLoading} onClick={handleSubmit}> 
                {isLoading ? "Submitting" : "Add Property"}
            </Button>
        </Group>
      </form>
    </Box>
  );
};

export default Facilities;
