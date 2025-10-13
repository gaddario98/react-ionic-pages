import React from "react";
import { IonPage } from "@ionic/react";
import { withMemo } from "@gaddario98/utiles";
import { pageConfig } from "@gaddario98/react-pages";

export const IonicPageContainer = withMemo(
  ({
    children,id
  }: React.ComponentProps<typeof pageConfig.PageContainer>) => {
    return (
      <IonPage id={id} key={id}>
        {children}
      </IonPage>
    );
  }
);

export default IonicPageContainer;
