import React, { useMemo } from "react";
import { IonContent, IonRefresher, IonRefresherContent } from "@ionic/react";
import { withMemo } from "@gaddario98/utiles";
import { pageConfig } from "@gaddario98/react-pages";
import { QueriesArray } from "@gaddario98/react-queries";
import { FieldValues } from "react-hook-form";
import { layout, EmailNotVerifiedContainer } from "@gaddario98/react-ionic-ui";

export const IonicBodyComponent = withMemo(
  <F extends FieldValues, Q extends QueriesArray>({
    viewSettings,
    children: body = [],
    hasQueries,
    handleRefresh,
    pageId,
  }: React.ComponentProps<typeof pageConfig.BodyContainer<F, Q>>) => {
    const id = useMemo(() => `${pageId ?? "page"}-content`, [pageId]);
    return (
      <IonContent
        color={"light"}
        id={id}
        key={id}
        className={viewSettings?.withoutPadding ? "" : "ion-padding"}
      >
        <div className={layout.page.replace("ion-padding", "")}>
          <EmailNotVerifiedContainer />
          {hasQueries && !viewSettings?.disableRefreshing && (
            <IonRefresher
              slot="fixed"
              onIonRefresh={async (e) => {
                await handleRefresh?.();
                e.detail.complete();
              }}
            >
              <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
          )}
          {body}
        </div>
      </IonContent>
    );
  }
);
//    <IonicNotificationContainer pageId={pageId}/>
//bg-gradient-to-b from-[var(--ion-color-primary)]/5 dark:from-[var(--ion-color-light)]/15 from-0% to-[var(--ion-color-light)] to-50%
// bg-gradient-to-b from-[#1a81e0]/10 from-0% via-white via-50% to-[#1a81e0]/10 to-100%
