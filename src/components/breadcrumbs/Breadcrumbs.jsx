import useBreadcrumbs from "use-react-router-breadcrumbs";
import React from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumbs, styled } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { BREADCRUMBS } from "../../utils/constants/breadcrumbs";
import { useMemo } from "react";

const BreadCrumbs = () => {
  const breadcrumbs = useBreadcrumbs(BREADCRUMBS);

  const adminBreadcrumbs = useMemo(() => {
    return breadcrumbs.filter((breadcrumb) =>
      breadcrumb.key.split("/").includes("admin")
    );
  }, [breadcrumbs]);

  const vipBreadcrumbs = useMemo(() => {
    return breadcrumbs.filter((breadcrumb) =>
      breadcrumb.key.split("/").includes("vip")
    );
  }, [breadcrumbs]);

  if (adminBreadcrumbs.length !== 0) {
    return (
      <Breadcrumbs separator={<KeyboardDoubleArrowRightIcon fontSize="6px" />}>
        {adminBreadcrumbs.length > 1 &&
          adminBreadcrumbs.map(({ match, breadcrumb }) => (
            <NavLink key={match.pathname} to={match.pathname}>
              {breadcrumb}
            </NavLink>
          ))}
      </Breadcrumbs>
    );
  }

  if (vipBreadcrumbs.length !== 0) {
    return (
      <Breadcrumbs separator={<KeyboardDoubleArrowRightIcon fontSize="6px" />}>
        {vipBreadcrumbs.length > 1 &&
          vipBreadcrumbs.map(({ match, breadcrumb }) => (
            <NavLink key={match.pathname} to={match.pathname}>
              {breadcrumb}
            </NavLink>
          ))}
      </Breadcrumbs>
    );
  }

  return (
    <Breadcrumbs separator={<KeyboardDoubleArrowRightIcon fontSize="6px" />}>
      {breadcrumbs.length > 1 &&
        breadcrumbs.map(({ match, breadcrumb }) => (
          <StyledLink
            key={match.pathname}
            to={match.pathname}
            className={({ isActive }) => (isActive ? "active" : "no-active")}
          >
            {breadcrumb}
          </StyledLink>
        ))}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;

const StyledLink = styled(NavLink)(({ theme }) => ({
  "&.active": {
    color: theme.palette.primary.main,
  },

  "&.no-active": {
    color: "#91969E",
  },
}));
