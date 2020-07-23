import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'

import {
  Button,
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
  MessageBox,
  Message,
  Tree,
  Divider
} from 'element-ui'

const components = {
  Button,
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
  Tree,
  Divider
}

Object.values(components).forEach(component => {
  Vue.use(component)
})

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
