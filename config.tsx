import { setPageConfig, PageConfigProps } from "@gaddario98/react-pages";
import { layout, LoadingContainer } from "@gaddario98/react-ionic-ui";
import { PageFooter, PageHeader, IonicBodyComponent } from "./components";

export const setReactIonicPageConfig = (config: Partial<PageConfigProps>) => {
  setPageConfig({
    FooterContainer: PageFooter,
    HeaderContainer: PageHeader,
    ItemsContainer: ({ children }) => (
      <div className={`${layout.contentRow}`}>{children}</div>
    ),
    BodyContainer: IonicBodyComponent,
    LoaderComponent: ({ loading, message, ns }) =>
      loading && (
        <LoadingContainer
          text={message ?? "Caricamento in corso..."}
          ns={ns}
          duration={3000}
        />
      ),
    PageContainer: ({ children, id }) => (
      <div className="flex flex-col h-full" id={id} key={id}>
        {children}
      </div>
    ),
    ...config,
  });
};
