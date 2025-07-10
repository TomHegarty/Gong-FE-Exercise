import type { PropsWithChildren } from "react";
import TopMenu from "../TopMenu/TopMenu";

type PageLayoutProps = PropsWithChildren;

const PageLayout = (props: PageLayoutProps) => (
  <>
    <TopMenu />
    {props.children}
  </>
);

export default PageLayout;
