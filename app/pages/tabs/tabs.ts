import {Page} from 'ionic-framework/ionic';
import {Page1} from '../page1/page1';
import {Page2} from '../page2/page2';
import {Page3} from '../page3/page3';


@Page({
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
    tab1Root;
    tab2Root;
    tab3Root; 

    constructor() {

        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = Page1;
        this.tab2Root = Page2;
        this.tab3Root = Page3;

    }
}