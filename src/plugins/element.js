import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'

import {
  Button,
  ButtonGroup,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  MenuItemGroup,
  MenuItem,
  Submenu,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn,
  Pagination,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker,
  Dialog,
  Radio,
  RadioGroup,
  MessageBox,
  Message,
  Tree,
  Divider,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Popover
} from 'element-ui'

Input.props.clearable.default = true
Tooltip.props.openDelay.default = 666

const components = {
  Button,
  ButtonGroup,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  MenuItemGroup,
  MenuItem,
  Submenu,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn,
  Pagination,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker,
  Dialog,
  Radio,
  RadioGroup,
  Tree,
  Divider,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Popover
}

Object.values(components).forEach(component => {
  Vue.use(component)
})

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
