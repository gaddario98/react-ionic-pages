import { withMemo } from "@gaddario98/utiles";
import { pageConfig } from "@gaddario98/react-pages";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { FieldValues } from "react-hook-form";
import { QueriesArray } from "@gaddario98/react-queries";
import { layout, useThemeValue } from "@gaddario98/react-ionic-ui";
import { menuController } from "@ionic/core/components";
import { menu } from "ionicons/icons";
//className="ion-no-border"
export const PageHeader = withMemo(
  <F extends FieldValues = FieldValues, Q extends QueriesArray = QueriesArray>({
    children,
    withoutPadding,
    pageId,
  }: React.ComponentProps<typeof pageConfig.HeaderContainer<F, Q>>) => {
    const { theme } = useThemeValue();
    if (!children?.length) return null;

    return (
      <IonHeader role="contentinfo" id={`${pageId ?? "page"}-header`}>
        <IonToolbar
          className={!withoutPadding ? layout.container.padding : ""}
          color={theme === "dark" ? "light" : "primary"}
        >
          {children.map((element, index) => (
            <React.Fragment key={`header-${index}`}>{element}</React.Fragment>
          ))}
          <IonButtons slot="end">
            <IonButton
              onClick={() => menuController.open(pageId)}
            >
              <IonIcon
                slot="icon-only"
                ios={menu}
              ></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    );
  }
);
/**
 * 
 * 
          <IonButtons slot="end">
            <IonMenuButton className="text-2xl" menu={pageId} autoHide={false}></IonMenuButton>
          </IonButtons>
 */
