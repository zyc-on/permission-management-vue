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

Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Radio)
Vue.use(Tree)
Vue.use(Divider)

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
