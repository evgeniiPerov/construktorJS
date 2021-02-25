
//PRO zmeneni programu npm run build ---> firebase deploy
import {model} from "./model";
import { App } from "./classes/app";
// import {Site} from './classes/site'  go to classes/app.js
// import {Sidebar} from './classes/sidebar' go to classes/app.js
// import {templates} from './templates'
import './styles/app.css'



new App(model).init()



