
``` html
import { Avatar, ConfigProvider, FloatButton, Layout, Menu, Space, Image } from "antd";

import { Content, Header } from "antd/es/layout/layout";

import Sider from "antd/es/layout/Sider";

import "../../assets/css/styles.css";

import { GrHomeRounded } from "react-icons/gr";

import { CgProfile } from "react-icons/cg";

import { RxHamburgerMenu } from "react-icons/rx";

import Search from "antd/es/input/Search";

import type { SearchProps } from "antd/es/input/Search";

import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';

const [collapsed, setCollapsed] = useState(false);

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>

console.log(info?.source, value);


<Layout className="container">

<Header className="header">

<div className="header-logo">

<Image

src="/img/logo.svg"

/>



</div>

<div className="header-search">

<Search

placeholder="input search text"

allowClear

onSearch={onSearch}

style={{ width: 200 }}

/>

</div>

<div className="header-menu">

<ConfigProvider

theme={{

components: {

Menu: {

itemBg: "#2D2F31",

itemColor: "white",

itemHoverColor: "#a5f3fc",

},

},

}}

>

<Menu

mode="horizontal"

items={[

{

key: "Resources",

label: "Demo",

icon: <GrHomeRounded />,

},

{

key: "Documents",

label: "doc",

icon: <GrHomeRounded />,

},

]}

/>

</ConfigProvider>

</div>

<div className="header-avatar">

<Avatar icon={<RxHamburgerMenu />} />

</div>

</Header>

<Layout>

<Sider

collapsible

collapsed={collapsed}

onCollapse={(value) => setCollapsed(value)}

style={{

boxShadow: "28px -13px 27px -30px rgba(0,0,0,0.25)"}}

>

<Menu

mode="inline"

items={[

{

key: "home",

label: "Home",

icon: <GrHomeRounded />,

children: [

{

key: "test",

label: "Test",

},

],

},

{

key: "profile",

label: "Profile",

icon: <CgProfile />,

},

]}

/>

</Sider>

<Content className="content">{children}



</Content>

</Layout>

</Layout>
```