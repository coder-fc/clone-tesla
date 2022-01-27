import React from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";
import { ModelsWrapper, ModelSection } from "../Model";

import { Container } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <ModelSection
            className="colored"
            modelName="Model One"
            overlayNode={
              <DefaultOverlayContent
                label="Model One"
                description="Order Online for Delivery"
              />
            }
          />
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
