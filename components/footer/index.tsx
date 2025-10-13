import { withMemo } from "@gaddario98/utiles";
import { pageConfig } from "@gaddario98/react-pages";
import { IonFooter, IonToolbar } from "@ionic/react";
import React, { useMemo } from "react";
import { FieldValues } from "react-hook-form";
import { QueriesArray } from "@gaddario98/react-queries";
import { layout, useThemeValue } from "@gaddario98/react-ionic-ui";

export const PageFooter = withMemo(
  <F extends FieldValues = FieldValues, Q extends QueriesArray = QueriesArray>({
    children,
    withoutPadding,
    pageId,
  }: React.ComponentProps<typeof pageConfig.FooterContainer<F, Q>>) => {
    const { theme } = useThemeValue();
    const style = useMemo(
      () =>
        withoutPadding ? layout.page.replace("ion-padding", "") : layout.page,
      [withoutPadding]
    );
    if (!children?.length) return null;

    return (
      <IonFooter id={`${pageId ?? "page"}-footer`}>
        <IonToolbar color={theme === "dark" ? "light" : "light"}>
          <div className={style}>
            {children.map((element, index) => (
              <React.Fragment key={`footer-${index}`}>{element}</React.Fragment>
            ))}
          </div>
        </IonToolbar>
      </IonFooter>
    );
  }
);
//bg-gradient-to-b from-[#1a81e0]/10 from-0% to-white to-100%
