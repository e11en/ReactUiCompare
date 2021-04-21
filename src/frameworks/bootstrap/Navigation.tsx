import { Breadcrumb, Dropdown, Tabs, Tab, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";
import Info from "components/InfoComponent";

const BottomNav = () => {
  return (
    <ElementCard title="Bottom navigation">
      <div>
        <Info>
          There is no specific bottom navigation component but you can use the
          Navbar with the "fixed='bottom'" property set.
        </Info>
      </div>
      <Code>
        {`
          <Navbar fixed="bottom" />
        `}
      </Code>
    </ElementCard>
  );
};

const Breadcrumbs = () => {
  return (
    <ElementCard title="Breadcrumb">
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Group</Breadcrumb.Item>
          <Breadcrumb.Item active>Page</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Code>
        {`
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Group</Breadcrumb.Item>
            <Breadcrumb.Item active>Page</Breadcrumb.Item>
          </Breadcrumb>
        `}
      </Code>
    </ElementCard>
  );
};

const OverlayMenu = () => {
  return (
    <ElementCard title="Menu">
      <div>
        <Dropdown>
          <Dropdown.Toggle>Open menu</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Header>Items</Dropdown.Header>
            <Dropdown.Item href="#">Item 1</Dropdown.Item>
            <Dropdown.Item href="#">Item 2</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Code>
        {`
          <Dropdown>
            <Dropdown.Toggle>Open menu</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Header>Items</Dropdown.Header>
              <Dropdown.Item href="#">Item 1</Dropdown.Item>
              <Dropdown.Item href="#">Item 2</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Item 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        `}
      </Code>
    </ElementCard>
  );
};

const TabBar = () => {
  return (
    <ElementCard title="Tabs">
      <div>
        <Info>
          You can also create a tab navigation with de "Nav" component and the
          property "variant='tabs'" set.
        </Info>
        <Tabs defaultActiveKey="1">
          <Tab eventKey="1" title="Selected">
            Some content
          </Tab>
          <Tab eventKey="2" title="Disabled" disabled>
            Some content
          </Tab>
          <Tab eventKey="3" title="Active">
            Some content
          </Tab>
        </Tabs>
      </div>
      <Code>
        {`
          <Tabs defaultActiveKey="1">
            <Tab eventKey="1" title="Selected">
              Some content
            </Tab>
            <Tab eventKey="2" title="Disabled" disabled>
              Some content
            </Tab>
            <Tab eventKey="3" title="Active">
              Some content
            </Tab>
          </Tabs>
        `}
      </Code>
    </ElementCard>
  );
};

const Paginations = () => {
  return (
    <ElementCard title="Pagination">
      <div>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item disabled>3</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>10</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
      <Code>
        {`
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item disabled>3</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>10</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        `}
      </Code>
    </ElementCard>
  );
};

export const Navigation = () => {
  return (
    <FlexWrapper>
      <Breadcrumbs />
      <OverlayMenu />
      <TabBar />
      <BottomNav />
      <Paginations />
    </FlexWrapper>
  );
};
