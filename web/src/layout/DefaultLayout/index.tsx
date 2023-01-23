import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import { LinkContext } from "../../context/useLinks";

import { Header } from "../../components/Header";
import Loading from "../../components/Loading";

import { ContainerContent, LayoutContainer } from "./styles";

export function DefaultLayout() {
  const { isLoading } = useContext(LinkContext)

  return (
    <LayoutContainer>
      {isLoading ? <Loading /> : ''}
      <ContainerContent>
        <Header />
        <Outlet />
      </ContainerContent>

    </LayoutContainer>
  );
}
