import React from "react"
import "antd/dist/antd.css"
import { PageHeader, Button } from "antd"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Netflux"
        subTitle="for cheap."
        extra={[
          <Button key="1" type="primary">
            <NavLink to="/favourites">Favourites</NavLink>
          </Button>,
        ]}
      ></PageHeader>
    </div>
  )
}

export default Header
